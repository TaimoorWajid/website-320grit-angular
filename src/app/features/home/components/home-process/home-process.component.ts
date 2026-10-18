import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { AnimationManagerService } from '../../../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { gsap } from 'gsap';

interface PhaseCard {
  eyebrow: string;
  number: string;
  title: string;
  paragraph: string;
  cta: string;
  /** Colored media panel treatment, verbatim from source. */
  mediaColor: string;
  /** Phase 4 ships a dark CTA variant (border_color_000000) in source. */
  light?: boolean;
}

/**
 * Sections 6 + 7 — "How we can help you" band and the process-phase cards.
 * Ports Salient's .nectar-sticky-media-sections (type--horizontal-scrolling):
 * the section pins to the viewport (position: sticky, 100vh) inside a tall
 * scroll container while GSAP ScrollTrigger translates the card track
 * horizontally with vertical scroll progress (scrubbed 1:1).
 * Under prefers-reduced-motion (or SSR) the host gets .process--static and
 * the cards render as a plain horizontal scroll-snap strip instead.
 * Copy is verbatim from refs/grit-staging/sections.md §6–§7.
 */
@Component({
  selector: 'app-home-process',
  imports: [RevealDirective],
  templateUrl: './home-process.component.html',
  styleUrl: './home-process.component.scss',
})
export class HomeProcessComponent {
  protected readonly phases: PhaseCard[] = [
    {
      eyebrow: 'Phase',
      number: '01',
      title: 'Understanding The Owner’s Vision',
      paragraph:
        'Every project starts with listening. We take time to understand your goals, priorities, budget, schedule, and long-term vision before any decisions are made.',
      cta: 'Explore More',
      mediaColor: '#792CD5',
    },
    {
      eyebrow: 'Phase',
      number: '02',
      title: 'Strategic Planning',
      paragraph:
        'We transform vision into a clear execution strategy through budgeting, procurement planning, scheduling, and risk analysis that protects your investment.',
      cta: 'Explore More',
      // Source: background:var(--nectar-extra-color-1) — ported to the violet token.
      mediaColor: 'var(--grit-accent-violet-light)',
    },
    {
      eyebrow: 'Phase',
      number: '03',
      title: 'Project Management',
      paragraph:
        'We coordinate teams, consultants, contractors, budgets, schedules, and project risks while representing the owner’s best interests throughout the entire project lifecycle.',
      cta: 'Explore More',
      mediaColor: '#000000',
    },
    {
      eyebrow: 'Phase',
      number: '04',
      title: 'Successful Delivery',
      paragraph:
        'From quality assurance to project closeout, we ensure every milestone is achieved and every expectation is exceeded, delivering confidence not just completed projects.',
      cta: 'Explore More',
      mediaColor: '#FFFFFF',
      light: true,
    },
  ];

  private readonly animations = inject(AnimationManagerService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject(ElementRef<HTMLElement>);

  private readonly pinWrap =
    viewChild<ElementRef<HTMLElement>>('pinWrap');
  private readonly pin = viewChild<ElementRef<HTMLElement>>('pin');
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  constructor() {
    afterNextRender(() => this.initHorizontalScroll());
  }

  private initHorizontalScroll(): void {
    const hostEl = this.host.nativeElement;
    const wrap = this.pinWrap()?.nativeElement;
    const pin = this.pin()?.nativeElement;
    const track = this.track()?.nativeElement;

    // SSR / reduced-motion: static scroll-snap strip, no pinning.
    if (!this.animations.browser || prefersReducedMotion() || !wrap || !pin || !track) {
      hostEl.classList.add('process--static');
      return;
    }

    const ctx = this.animations.createContext(() => {
      const maxX = (): number =>
        Math.max(0, track.scrollWidth - pin.clientWidth);

      gsap.to(track, {
        x: () => -maxX(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, hostEl);

    if (ctx) this.destroyRef.onDestroy(() => ctx.revert());
    else hostEl.classList.add('process--static');
  }
}
