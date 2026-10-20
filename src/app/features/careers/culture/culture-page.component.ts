import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CAREERS_ICONS } from '../shared/careers-icons';

const HEART_FILL = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.5S4 15.5 4 9.8C4 7 6.2 5 8.7 5c1.8 0 2.9 1 3.3 1.7C12.4 6 13.5 5 15.3 5 17.8 5 20 7 20 9.8c0 5.7-8 10.7-8 10.7z" fill="currentColor"/></svg>`;

interface ValueCard {
  title: string;
  text: string;
  icon: string;
}

interface LinkCard {
  title: string;
  text: string;
  href: string;
}

/**
 * Our Culture (/careers/our-culture) — the client's own culture copy,
 * well typeset on the finalized careers design system.
 */
@Component({
  selector: 'app-culture-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './culture-page.component.html',
  styleUrl: './culture-page.component.scss',
})
export class CulturePageComponent {
  protected readonly icons = CAREERS_ICONS;

  protected readonly values: ValueCard[] = [
    {
      title: 'Trust & Respect',
      text: 'An environment built on trust and respect, where every voice matters and every person is supported.',
      icon: HEART_FILL,
    },
    {
      title: 'Collaboration',
      text: 'Great projects are delivered by great teams. We support one another and win together.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Accountability',
      text: 'We hold ourselves to a high standard and deliver quality results for every client, every time.',
      icon: CAREERS_ICONS.shieldCheck(),
    },
    {
      title: 'Pride in the Work',
      text: 'A workplace where hard work is recognized, ideas are welcomed, and success is shared.',
      icon: CAREERS_ICONS.target(),
    },
  ];

  protected readonly life: ValueCard[] = [
    {
      title: 'Recognized',
      text: 'Hard work is noticed and celebrated here — from the field to the office.',
      icon: CAREERS_ICONS.checkCircle(),
    },
    {
      title: 'Heard',
      text: 'Ideas are welcomed at every level. Good thinking comes from everywhere.',
      icon: CAREERS_ICONS.check(),
    },
    {
      title: 'Connected',
      text: 'Strong relationships across crews and teams make the work — and the days — better.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Growing',
      text: 'Continuous growth is part of the job, not an afterthought.',
      icon: CAREERS_ICONS.chart(),
    },
  ];

  protected readonly links: LinkCard[] = [
    {
      title: 'Benefits',
      text: 'Health coverage, paid time off, and a package that supports your life.',
      href: '/careers/benefits',
    },
    {
      title: 'Professional Growth',
      text: 'Mentorship, training, and a career path shaped by your ambition.',
      href: '/careers/professional-growth',
    },
    {
      title: 'Open Positions',
      text: 'See where you fit on a team that builds with pride.',
      href: '/careers/jobs',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Our Culture | 320 Grit Careers',
      description:
        'The 320 Grit culture: trust, respect, collaboration, and accountability — a California construction team where hard work is recognized and success is shared.',
      canonicalPath: '/careers/our-culture',
    });
  }
}
