import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CAREERS_ICONS } from '../shared/careers-icons';

interface Bullet {
  title: string;
  text: string;
  icon: string;
}

interface Step {
  title: string;
  text: string;
}

/**
 * Internships (/careers/internships).
 * Internships are filled as they arise — the page promises expression of
 * interest and a real path to full-time (client growth copy), never a
 * guaranteed open role.
 */
@Component({
  selector: 'app-internships-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './internships-page.component.html',
  styleUrl: './internships-page.component.scss',
})
export class InternshipsPageComponent {
  protected readonly heroBg = '/assets/images/careers-internships.webp';
  protected readonly checkIcon = CAREERS_ICONS.check();

  protected readonly doItems: Bullet[] = [
    {
      title: 'Rotate Across Field & Office',
      text: 'Time with field teams, project management, and preconstruction — so you see how a project really moves from bid to closeout.',
      icon: CAREERS_ICONS.layers(),
    },
    {
      title: 'Work On Real Projects',
      text: 'Submittals, RFIs, quantity takeoffs, schedule updates, and site walks — tasks that matter, with oversight from experienced builders.',
      icon: CAREERS_ICONS.briefcase(),
    },
    {
      title: 'Learn Safety First',
      text: 'Site safety training and daily construction awareness are baked into everything we do, on every project.',
      icon: CAREERS_ICONS.shieldCheck(),
    },
    {
      title: 'Shadow Experienced Mentors',
      text: 'Paired with a mentor who reviews your work, answers the questions textbooks skip, and helps you find your strengths.',
      icon: CAREERS_ICONS.users(),
    },
  ];

  protected readonly whoItems: string[] = [
    'Construction management, civil engineering, architecture, or related program students',
    'Current students or recent graduates looking for their first industry experience',
    'Based in (or willing to travel within) California',
    'Eager learners who want to be on the jobsite, not just behind a desk',
  ];

  protected readonly getItems: Bullet[] = [
    {
      title: 'Mentorship',
      text: 'Guidance from construction professionals who invest in teaching — the same mentorship culture our full-time team grows through.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Hands-On Experience',
      text: 'Real responsibility on real projects. You will leave with skills and stories, not just a line on a resume.',
      icon: CAREERS_ICONS.briefcase(),
    },
    {
      title: 'Professional Development',
      text: 'Exposure to estimating, scheduling, safety, and field operations — the full lifecycle of commercial construction.',
      icon: CAREERS_ICONS.chart(),
    },
    {
      title: 'A Path To Full-Time',
      text: 'Interns who show drive and fit are first in line when full-time roles open — your internship is a direct pipeline to a career at 320 Grit.',
      icon: CAREERS_ICONS.target(),
    },
  ];

  protected readonly steps: Step[] = [
    {
      title: 'Express Interest',
      text: 'Introduce yourself and tell us your program, year, and what you want to learn.',
    },
    {
      title: 'Have A Conversation',
      text: 'We get to know you, your goals, and your availability for an upcoming term.',
    },
    {
      title: 'Join The Team',
      text: 'When the right internship opens, interested candidates are the first ones we call.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Construction Internships | 320 Grit',
      description:
        '320 Grit construction internships in California — real project experience, mentorship, and a path to full-time for construction management and engineering students.',
      canonicalPath: '/careers/internships',
    });
  }
}
