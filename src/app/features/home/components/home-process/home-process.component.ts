import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

interface PhaseCard {
  eyebrow: string;
  number: string;
  title: string;
  paragraph: string;
  cta: string;
  /** Card background color, verbatim from source. */
  mediaColor: string;
  /** Right-side photo panel (~35-40% of the card), per staging. */
  photo: string;
  /** Phase 4 is the white card: black text + black CTA outline. */
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
      photo: '/assets/images/ChatGPT-Image-Aug-3-2026-04_54_56-PM.webp',
    },
    {
      eyebrow: 'Phase',
      number: '02',
      title: 'Strategic Planning',
      paragraph:
        'We transform vision into a clear execution strategy through budgeting, procurement planning, scheduling, and risk analysis that protects your investment.',
      cta: 'Explore More',
      // Staging card 02 is bright orange.
      mediaColor: '#FF5D0E',
      photo: '/assets/images/ChatGPT-Image-Aug-4-2026-01_52_54-AM-1.webp',
    },
    {
      eyebrow: 'Phase',
      number: '03',
      title: 'Project Management',
      paragraph:
        'We coordinate teams, consultants, contractors, budgets, schedules, and project risks while representing the owner’s best interests throughout the entire project lifecycle.',
      cta: 'Explore More',
      mediaColor: '#000000',
      photo: '/assets/images/labour-320-grit.webp',
    },
    {
      eyebrow: 'Phase',
      number: '04',
      title: 'Successful Delivery',
      paragraph:
        'From quality assurance to project closeout, we ensure every milestone is achieved and every expectation is exceeded, delivering confidence not just completed projects.',
      cta: 'Explore More',
      mediaColor: '#FFFFFF',
      photo: '/assets/images/ChatGPT-Image-Aug-3-2026-05_11_51-PM.webp',
      light: true,
    },
  ];

  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject(ElementRef<HTMLElement>);

  private readonly pinWrap =
    viewChild<ElementRef<HTMLElement>>('pinWrap');
  private readonly trackViewport =
    viewChild<ElementRef<HTMLElement>>('trackViewport');
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');

  constructor() {
    afterNextRender(() => this.initHorizontalScroll());
  }

  private initHorizontalScroll(): void {
    const hostEl = this.host.nativeElement;
    const wrap = this.pinWrap()?.nativeElement;
    const viewport = this.trackViewport()?.nativeElement;
    const track = this.track()?.nativeElement;

    // SSR / reduced-motion: static scroll-snap strip, no pinning.
    if (prefersReducedMotion() || !wrap || !viewport || !track) {
      hostEl.classList.add('process--static');
      return;
    }

    // Native scrolling drives the horizontal track. Keep the calculation
    // frame-coalesced so scroll and resize events share one layout pass.
    const maxX = (): number => Math.max(0, track.scrollWidth - viewport.clientWidth);
    // Update synchronously from the real document scroll event. This avoids
    // an animation-frame dependency and keeps the native-scroll path primary.
    const updateHorizontal = () => {
      const scrollable = wrap.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -wrap.getBoundingClientRect().top / scrollable));
      track.style.transform = `translate3d(${-progress * maxX()}px, 0, 0)`;
    };
    document.addEventListener('scroll', updateHorizontal, { passive: true, capture: true });
    window.addEventListener('resize', updateHorizontal);
    updateHorizontal();

    this.destroyRef.onDestroy(() => {
      document.removeEventListener('scroll', updateHorizontal, true);
      window.removeEventListener('resize', updateHorizontal);
    });
    window.addEventListener('load', updateHorizontal, { once: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('load', updateHorizontal));
  }
}
