import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SmoothScrollService } from '../../core/services/smooth-scroll.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { JobsService } from './shared/jobs.service';
import { DEPARTMENTS, type Job } from './shared/jobs.data';
import { CAREERS_ICONS } from './shared/careers-icons';
import { JobCardComponent } from './shared/job-card/job-card.component';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

interface ValueCard {
  title: string;
  text: string;
  icon: string;
}

/**
 * Careers landing (/careers) — ported from careers.php.
 * Deviations from the template (documented):
 * - "LEARN MORE ABOUT US" links to /our-story (the template's /about/
 *   has no route in this app).
 * - Gallery image 3 uses career-feature-image.webp and the introduce
 *   visual uses ChatGPT-Image-Aug-3-2026-04_54_56-PM.webp; the template's
 *   contact-us-bg.webp and 320-grit-hat.webp were never provided.
 */
@Component({
  selector: 'app-careers-page',
  imports: [RouterLink, RevealDirective, JobCardComponent, SafeHtmlPipe],
  templateUrl: './careers-page.component.html',
  styleUrl: './careers-page.component.scss',
})
export class CareersPageComponent {
  private readonly jobsService = inject(JobsService);
  private readonly smoothScroll = inject(SmoothScrollService);
  protected readonly icons = CAREERS_ICONS;

  protected readonly values: ValueCard[] = [
    {
      title: 'Purpose Driven',
      text: 'We take pride in building meaningful projects that strengthen communities.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Collaborative',
      text: 'We believe the best results come from open communication and trust.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Growth Mindset',
      text: 'We support your development and provide paths to grow your career.',
      icon: CAREERS_ICONS.chart(),
    },
    {
      title: 'Integrity',
      text: 'We do the right thing, on every project, every time.',
      icon: CAREERS_ICONS.shield(),
    },
    {
      title: 'Safety First',
      text: 'We protect our people and promote a culture of safety always.',
      icon: CAREERS_ICONS.shieldCheck(),
    },
  ];

  protected readonly pills = ['All Departments', ...DEPARTMENTS];
  protected readonly activeDept = signal('All Departments');

  private readonly allJobs = this.jobsService.getAll();
  protected readonly previewJobs = computed<Job[]>(() =>
    this.allJobs.slice(0, 5).filter((j) => this.activeDept() === 'All Departments' || j.department === this.activeDept()),
  );
  protected readonly featured: Job | undefined = this.allJobs[0];

  constructor() {
    inject(SeoService).update({ title: 'Careers', canonicalPath: '/careers' });
  }

  selectDept(dept: string): void {
    this.activeDept.set(dept);
  }

  scrollToCulture(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo('#our-culture');
  }
}
