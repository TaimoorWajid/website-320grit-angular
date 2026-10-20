import { Component, afterNextRender, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { JobsService } from '../shared/jobs.service';
import { SavedJobsService } from '../shared/saved-jobs.service';
import type { Job } from '../shared/jobs.data';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

/**
 * Saved positions (/careers/saved) — rebuilt in the Howell-flow /
 * 320 Grit dark design. Lists jobs saved via SavedJobsService
 * (localStorage `grit_saved_jobs`), with `grit_saved_dates` stamped
 * lazily on first view. Same rows as /careers/jobs plus a remove
 * action and saved-on date.
 */
@Component({
  selector: 'app-saved-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './saved-page.component.html',
  styleUrl: './saved-page.component.scss',
})
export class SavedPageComponent {
  private readonly jobsService = inject(JobsService);
  protected readonly savedJobs = inject(SavedJobsService);
  protected readonly icons = CAREERS_ICONS;

  protected readonly jobs = computed<Job[]>(() => {
    const ids = this.savedJobs.savedIds();
    return this.jobsService.getAll().filter((j) => ids.includes(j.id));
  });

  protected readonly countLine = computed(() => {
    const n = this.jobs().length;
    return `${n} saved ${n === 1 ? 'job' : 'jobs'}`;
  });

  constructor() {
    inject(SeoService).update({ title: 'Saved Positions', canonicalPath: '/careers/saved', noIndex: true });
    afterNextRender(() => this.savedJobs.load());
  }

  savedOn(jobId: string): string {
    const raw = this.savedJobs.savedDate(jobId);
    const d = new Date(`${raw}T00:00:00`);
    return `Saved on ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  }

  remove(jobId: string): void {
    this.savedJobs.remove(jobId);
  }
}
