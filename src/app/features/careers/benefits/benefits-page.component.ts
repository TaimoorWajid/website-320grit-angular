import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CAREERS_ICONS } from '../shared/careers-icons';

/** Local stroke icons in the same style as the careers registry. */
function stroke(inner: string, size = 24): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${inner}</svg>`;
}

const S = 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';

const TROPHY = `<path d="M8 21h8M12 17.5V21M7 4h10v6a5 5 0 0 1-10 0V4zM7 6H4.5A1.5 1.5 0 0 0 3 7.5C3 9.4 4.6 11 7 11M17 6h2.5A1.5 1.5 0 0 1 21 7.5C21 9.4 19.4 11 17 11" ${S}/>`;
const CALENDAR = `<rect x="3" y="5" width="18" height="16" rx="2" ${S}/><path d="M8 3v4M16 3v4M3 10.5h18" ${S}/>`;
const BANK = `<path d="M3 10l9-6 9 6M5.5 10v7.5M9.5 10v7.5M14.5 10v7.5M18.5 10v7.5M3 20.5h18M3 17.5h18" ${S}/>`;
const GRAD_CAP = `<path d="M12 4L22 9 12 14 2 9l10-5zM6 11.3V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.7M22 9v5" ${S}/>`;
const CAR = `<path d="M5.5 16.5 7 10.7A2 2 0 0 1 8.9 9.2h6.2a2 2 0 0 1 1.9 1.5l1.5 5.8M5.5 16.5h13M5.5 16.5V20M18.5 16.5V20M7.8 13.2h.01M16.2 13.2h.01" ${S}/>`;
const LAPTOP = `<rect x="4" y="4.5" width="16" height="11.5" rx="1.5" ${S}/><path d="M2.5 20h19" ${S}/>`;
const CLOCK = `<circle cx="12" cy="12" r="8.5" ${S}/><path d="M12 7.5V12l3 2" ${S}/>`;

interface Benefit {
  title: string;
  text: string;
  icon: string;
}

/**
 * Benefits (/careers/benefits) — the client's 12 benefits as icon cards,
 * with the client's closing text, on the finalized careers design system.
 */
@Component({
  selector: 'app-benefits-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './benefits-page.component.html',
  styleUrl: './benefits-page.component.scss',
})
export class BenefitsPageComponent {
  protected readonly icons = CAREERS_ICONS;

  protected readonly benefitsList: Benefit[] = [
    {
      title: 'Competitive Salary',
      text: 'Pay that reflects your skills, your experience, and the value you bring to every project.',
      icon: CAREERS_ICONS.chart(),
    },
    {
      title: 'Performance-Based Bonuses',
      text: 'Extra recognition when your work moves the project — and the business — forward.',
      icon: stroke(TROPHY),
    },
    {
      title: 'Medical, Dental & Vision Insurance',
      text: 'Health coverage that supports you and your family, on and off the jobsite.',
      icon: CAREERS_ICONS.shieldCheck(),
    },
    {
      title: 'Paid Time Off & Company Holidays',
      text: 'Time away to recharge, plus paid company holidays throughout the year.',
      icon: stroke(CALENDAR),
    },
    {
      title: '401(k) Retirement Plan',
      text: 'A retirement plan that helps you build long-term financial security.',
      icon: stroke(BANK),
    },
    {
      title: 'Professional Development & Continuing Education',
      text: 'Ongoing learning and education that keep your skills sharp and current.',
      icon: stroke(GRAD_CAP),
    },
    {
      title: 'Career Advancement Opportunities',
      text: 'Room to take on new challenges, expand your responsibilities, and step into larger roles.',
      icon: CAREERS_ICONS.target(),
    },
    {
      title: 'Company-Sponsored Training & Certifications',
      text: 'Training and certification support to build your craft and your credentials.',
      icon: CAREERS_ICONS.doc(),
    },
    {
      title: 'Mileage & Travel Reimbursement',
      text: 'Job-related mileage and travel covered, when applicable to your role.',
      icon: stroke(CAR),
    },
    {
      title: 'Technology & Equipment Provided',
      text: 'The tools, technology, and equipment you need to do your best work.',
      icon: stroke(LAPTOP),
    },
    {
      title: 'Team Events & Company Gatherings',
      text: 'Regular moments to connect, celebrate wins, and enjoy the people you work with.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Flexible Work Environment',
      text: 'Flexibility that supports work-life balance, depending on your position.',
      icon: stroke(CLOCK),
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Benefits | 320 Grit Careers',
      description:
        '320 Grit benefits: competitive salary, performance bonuses, health insurance, paid time off, 401(k), training, and more — investing in our team.',
      canonicalPath: '/careers/benefits',
    });
  }
}
