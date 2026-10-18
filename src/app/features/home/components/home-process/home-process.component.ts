import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

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
 * Ports Salient's horizontal-scrolling sticky-media sections as a native
 * overflow-x scroll-snap strip (no JS, SSR-safe). Desktop shows ~2.5 cards
 * peeking. All "Explore More" CTAs carry an empty href in source: the
 * anchors are kept and navigation is suppressed.
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
}
