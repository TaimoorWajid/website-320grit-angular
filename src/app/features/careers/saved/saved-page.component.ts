import { Component, afterNextRender, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { JobsService } from '../shared/jobs.service';
import { SavedJobsService } from '../shared/saved-jobs.service';
import type { Job } from '../shared/jobs.data';
import { CAREERS_ICONS } from '../shared/careers-icons';

/**
 * Saved positions (/careers/saved) — ported from saved-positions.php.
 * The WP template embeds job JSON + renders from localStorage; here the
 * static job array is filtered by the SavedJobsService (localStorage
 * `grit_saved_jobs`), with `grit_saved_dates` stamped lazily on view.
 */
@Component({
  selector: 'app-saved-page',
  imports: [RouterLink, RevealDirective],
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

  protected readonly resultsNoun = computed(() => (this.jobs().length === 1 ? 'Saved Job' : 'Saved Jobs'));

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
