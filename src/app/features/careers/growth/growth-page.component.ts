import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CAREERS_ICONS } from '../shared/careers-icons';

interface GrowthArea {
  title: string;
  text: string;
  icon: string;
}

interface PathStep {
  title: string;
  text: string;
}

/**
 * Professional growth (/careers/professional-growth).
 * Core narrative is the client's own Professional Growth copy (verbatim wording
 * for the intro/outro paragraphs); the 7 growth areas carry the client's titles
 * with expert expansion. No fabricated stats or pre-2026 claims.
 */
@Component({
  selector: 'app-growth-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './growth-page.component.html',
  styleUrl: './growth-page.component.scss',
})
export class GrowthPageComponent {
  protected readonly heroBg = '/assets/images/labour-320-grit.webp';

  protected readonly growthAreas: GrowthArea[] = [
    {
      title: 'Clear Career Advancement Opportunities',
      text: 'Defined paths forward with regular reviews, so you always know what your next step looks like — and what it takes to earn it.',
      icon: CAREERS_ICONS.chart(),
    },
    {
      title: 'Hands-On Project Experience',
      text: 'Real responsibility on live projects — estimating, scheduling, field coordination — from day one, not someday.',
      icon: CAREERS_ICONS.briefcase(),
    },
    {
      title: 'Mentorship from Experienced Industry Professionals',
      text: 'Learn shoulder-to-shoulder with construction leaders who have delivered complex work and invest in teaching what they know.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Leadership Development',
      text: 'Supervisory training and coaching that prepare you to lead crews, manage subcontractors, and run projects with confidence.',
      icon: CAREERS_ICONS.target(),
    },
    {
      title: 'Continuing Education & Industry Training',
      text: 'Ongoing training in construction management, safety, technology, and leadership — sharpening skills that compound over a career.',
      icon: CAREERS_ICONS.doc(),
    },
    {
      title: 'Support for Professional Certifications and Licenses',
      text: 'Guidance and support as you pursue OSHA, LEED, PMP, CCM, and trade licenses that strengthen your professional standing.',
      icon: CAREERS_ICONS.shieldCheck(),
    },
    {
      title: 'Exposure to Diverse and Challenging Projects',
      text: 'Rail, healthcare, advanced technology, hospitality — breadth of experience across demanding sectors accelerates growth.',
      icon: CAREERS_ICONS.layers(),
    },
  ];

  protected readonly officePath: PathStep[] = [
    { title: 'Project Engineer', text: 'Estimating, submittals, RFIs, and schedule coordination.' },
    { title: 'Project Manager', text: 'Own budgets, buyouts, and client relationships.' },
    { title: 'Senior Project Manager', text: 'Lead complex programs and mentor project teams.' },
  ];

  protected readonly fieldPath: PathStep[] = [
    { title: 'Field Engineer', text: 'Layout, quality control, and daily field reporting.' },
    { title: 'Superintendent', text: 'Run the field — crews, sequencing, and site safety.' },
    { title: 'General Superintendent', text: 'Oversee field operations across multiple projects.' },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Professional Growth at 320 Grit',
      description:
        'Build your construction career at 320 Grit — mentorship, hands-on project experience, leadership development, certifications, and clear advancement paths in California construction.',
      canonicalPath: '/careers/professional-growth',
    });
  }
}
