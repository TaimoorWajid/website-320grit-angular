import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { AnimationManagerService } from '../../../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ForensicServicePageData } from './forensic-service-page.data';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

interface Particle {
  left: number;
  size: number;
  duration: number;
  delay: number;
}

/**
 * Shared forensic-style service page template.
 * Renders /services/forensic-accounting, /services/design-build,
 * /commercial-construction (identical body copy, parameterized hero),
 * /services/expert-witness and /services/bid-build from data objects —
 * replacing five copy-pasted WP templates with one component.
 *
 * Live behaviors ported from forensic-accounting.js / expert-witness.js /
 * why-bid-build.js / what-is-bid-build.js / sidenav.js (see spec §6).
 * All DOM/GSAP work runs in afterNextRender (SSR-safe) and is skipped
 * under prefers-reduced-motion where the original skips it.
 */
@Component({
  selector: 'app-forensic-service-page',
  templateUrl: './forensic-service-page.component.html',
  styleUrl: './forensic-service-page.component.scss',
  imports: [RevealDirective, SafeHtmlPipe],
})
export class ForensicServicePageComponent {
  private readonly animations = inject(AnimationManagerService);
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);

  readonly data = input.required<ForensicServicePageData>();

  /** Hero entrance: .is-loaded added 80ms after render (mirrors expert-witness.js). */
  readonly heroLoaded = signal(false);
  /** FAQ accordion: single-open. -1 = all closed. */
  readonly openFaq = signal(-1);
  /** Process timeline scrub: index of the currently active step. */
  readonly activeStep = signal(0);
  /** CTA particles — generated client-side only (SSR would hydrate-mismatch on random). */
  readonly particles = signal<Particle[]>([]);
  /** Sidenav scroll-spy highlight. */
  readonly activeSection = signal('hero');

  toggleFaq(index: number): void {
    this.openFaq.set(this.openFaq() === index ? -1 : index);
  }

  scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    const el = this.host.nativeElement.querySelector(`[data-section="${section}"]`);
    if (el) this.smoothScroll.scrollTo(el as HTMLElement);
  }

  constructor() {
    afterNextRender(() => {
      const root = this.host.nativeElement;
      const reduced = prefersReducedMotion();

      window.setTimeout(() => this.heroLoaded.set(true), 80);

      // CTA particles (30 dots, floatUp 10–20s).
      if (!reduced) {
        const parts: Particle[] = [];
        for (let i = 0; i < 30; i++) {
          parts.push({
            left: Math.random() * 100,
            size: 1 + Math.random() * 3,
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 10,
          });
        }
        this.particles.set(parts);
      }

      // Generic .is-inview observers (#service-why, #service-what-is).
      const inview = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-inview');
              inview.unobserve(e.target);
            }
          }
        },
        { threshold: 0.2 },
      );
      root.querySelectorAll('#service-why, #service-what-is').forEach((el) => inview.observe(el));
      this.destroyRef.onDestroy(() => inview.disconnect());

      // Sidenav scroll-spy (bid-build only): middle-of-viewport highlight.
      const sidenavItems = this.data().sidenav;
      if (sidenavItems && sidenavItems.length) {
        const spy = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                this.activeSection.set(e.target.getAttribute('data-section') ?? 'hero');
              }
            }
          },
          { rootMargin: '-45% 0px -45% 0px' },
        );
        root.querySelectorAll('[data-section]').forEach((el) => spy.observe(el));
        this.destroyRef.onDestroy(() => spy.disconnect());
      }

      if (reduced) return;

      const ctx = this.animations.createContext(() => {
        // Hero parallax: bg drifts at 0.22× scroll while above the fold.
        const bgImg = root.querySelector('.ew-hero__bg-img');
        if (bgImg) {
          gsap.to(bgImg, {
            y: () => window.scrollY * 0.22,
            ease: 'none',
            scrollTrigger: { trigger: root.querySelector('.ew-hero'), start: 'top top', end: 'bottom top', scrub: true },
          });
        }

        // Process timeline scrub: progress fill + active step.
        const timeline = root.querySelector('.fa-process__timeline');
        const progress = root.querySelector('.timeline-progress');
        const steps = Array.from(root.querySelectorAll('.fa-process__step'));
        if (timeline && progress && steps.length) {
          ScrollTrigger.create({
            trigger: timeline,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
            onUpdate: (self) => {
              (progress as HTMLElement).style.height = `${self.progress * 100}%`;
              this.activeStep.set(Math.min(steps.length - 1, Math.floor(self.progress * steps.length)));
            },
          });
        }

        // Building 3D rotation ([data-rotate]): scroll progress mapped to
        // rotateY −22°→22°, rotateX 8°→−8°, translateZ 0→50px.
        const building = root.querySelector('[data-rotate]');
        const whatIs = root.querySelector('.service-what-is');
        if (building && whatIs) {
          gsap.to(building, {
            rotateY: 22,
            rotateX: -8,
            z: 50,
            ease: 'none',
            scrollTrigger: { trigger: whatIs, start: 'top bottom', end: 'bottom top', scrub: true },
          });
          gsap.set(building, { rotateY: -22, rotateX: 8, z: 0, transformPerspective: 1200 });
        }
      }, root);
      if (ctx) this.destroyRef.onDestroy(() => ctx.revert());

      // Tilt cards + magnetic buttons (pointer-only, mirrors forensic-accounting.js).
      if (window.matchMedia('(pointer: fine)').matches) {
        const tiltCards = Array.from(root.querySelectorAll<HTMLElement>('.tilt-card'));
        const tiltMove = (e: MouseEvent) => {
          const card = (e.currentTarget as HTMLElement);
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${(-y * 12).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        };
        const tiltLeave = (e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.transform = '';
        };
        tiltCards.forEach((c) => {
          c.addEventListener('mousemove', tiltMove);
          c.addEventListener('mouseleave', tiltLeave);
        });

        const magnetics = Array.from(root.querySelectorAll<HTMLElement>('.magnetic, .btn-cta, .ew-hero__btn'));
        const magMove = (e: MouseEvent) => {
          const el = e.currentTarget as HTMLElement;
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${(x * 0.22).toFixed(1)}px, ${(y * 0.22).toFixed(1)}px)`;
        };
        const magLeave = (e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.transform = '';
        };
        magnetics.forEach((m) => {
          m.addEventListener('mousemove', magMove);
          m.addEventListener('mouseleave', magLeave);
        });

        this.destroyRef.onDestroy(() => {
          tiltCards.forEach((c) => {
            c.removeEventListener('mousemove', tiltMove);
            c.removeEventListener('mouseleave', tiltLeave);
          });
          magnetics.forEach((m) => {
            m.removeEventListener('mousemove', magMove);
            m.removeEventListener('mouseleave', magLeave);
          });
        });
      }
    });
  }
}
