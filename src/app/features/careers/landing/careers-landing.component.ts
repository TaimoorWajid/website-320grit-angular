import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { JobCardComponent } from '../shared/job-card/job-card.component';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { SeoService } from '../../../core/services/seo.service';

interface BenefitPreview {
  icon: string;
  title: string;
}

interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

/**
 * Careers landing — rebuilt from scratch (2026-10-20).
 * Flow follows the Howell careers structure (hero → culture → openings →
 * benefits → growth → internships → process → CTA) with 320 Grit design
 * standards and copy. Hero image: /assets/images/careers-hero.webp.
 */
@Component({
  selector: 'app-careers-landing',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, JobCardComponent, CtaBandComponent],
  templateUrl: './careers-landing.component.html',
  styleUrl: './careers-landing.component.scss',
})
export class CareersLandingComponent {
  private readonly jobsService = inject(JobsService);

  protected readonly icons = CAREERS_ICONS;
  protected readonly jobs = this.jobsService.getAll();

  /** 6 of the 12 client-provided benefits. */
  protected readonly benefitPreview: BenefitPreview[] = [
    { icon: CAREERS_ICONS.briefcase(), title: 'Competitive Salary' },
    { icon: CAREERS_ICONS.shieldCheck(), title: 'Medical, Dental & Vision Insurance' },
    { icon: CAREERS_ICONS.checkCircle(), title: 'Paid Time Off & Company Holidays' },
    { icon: CAREERS_ICONS.chart(), title: '401(k) Retirement Plan' },
    { icon: CAREERS_ICONS.users(), title: 'Professional Development & Continuing Education' },
    { icon: CAREERS_ICONS.target(), title: 'Team Events & Company Gatherings' },
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Apply',
      text: 'Send your resume and a few details about yourself. No account needed — it takes just a few minutes.',
    },
    {
      num: '02',
      title: 'Interview',
      text: 'Meet the team and walk through your experience. We want to understand how you build — and how you think.',
    },
    {
      num: '03',
      title: 'Offer & Onboard',
      text: 'If we are a fit, you will receive an offer and a clear onboarding plan that sets you up from day one.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Careers at 320 Grit | Build More Than Structures',
      description:
        'Join 320 Grit Construction — a California commercial contractor built on trust, respect, and accountability. View open positions, benefits, and career growth.',
      canonicalPath: '/careers',
      image: '/assets/images/careers-hero.webp',
    });
  }
}
