import { Component, afterNextRender, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { JobsService } from '../shared/jobs.service';
import { SavedJobsService } from '../shared/saved-jobs.service';
import { SaveJobButtonComponent } from '../shared/save-job-button/save-job-button.component';
import type { Job } from '../shared/jobs.data';

/**
 * Open positions listing (/careers/jobs).
 *
 * Howell-style flow: search + filters are URL query-param driven
 * (`q`, `department`, `location`, `type`) with `replaceUrl` merges,
 * so filtered views are shareable/bookmarkable. Filter options derive
 * from the job catalog via JobsService, scaling as roles are added.
 * Jobs render as full rows (not cards) with a 320-Grit-only
 * save/bookmark button (localStorage `grit_saved_jobs`).
 */
@Component({
  selector: 'app-jobs-page',
  imports: [RouterLink, RevealDirective, CtaBandComponent, SaveJobButtonComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {
  private readonly jobsService = inject(JobsService);
  private readonly savedJobs = inject(SavedJobsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  /** Filter state — mirrored to/from the URL query params. */
  protected readonly q = signal('');
  protected readonly department = signal('');
  protected readonly location = signal('');
  protected readonly type = signal('');

  protected readonly departments = this.jobsService.getDepartments();
  protected readonly locations = this.jobsService.getLocations();
  protected readonly employmentTypes = this.jobsService.getEmploymentTypes();

  protected readonly filteredJobs = computed<Job[]>(() => {
    const query = this.q().trim().toLowerCase();
    const dept = this.department();
    const loc = this.location();
    const type = this.type();
    return this.jobsService.getAll().filter((job) => {
      if (dept && job.department !== dept) return false;
      if (loc && job.location !== loc) return false;
      if (type && job.employment_type !== type) return false;
      if (query) {
        const haystack = `${job.title} ${job.department} ${job.location}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  });

  protected readonly filtersActive = computed(
    () => !!this.q().trim() || !!this.department() || !!this.location() || !!this.type(),
  );

  protected readonly countLine = computed(() => {
    const n = this.filteredJobs().length;
    if (this.filtersActive()) {
      return `${n} ${n === 1 ? 'role' : 'roles'} matching your filters`;
    }
    return `${n} open ${n === 1 ? 'position' : 'positions'}`;
  });

  constructor() {
    inject(SeoService).update({
      title: 'Open Positions | 320 Grit',
      description:
        'Explore open positions at 320 Grit Construction — field operations and project management roles across California. Find your role and apply.',
      canonicalPath: '/careers/jobs',
    });

    afterNextRender(() => this.savedJobs.ensureLoaded());

    // URL is the source of truth — hydrate filter state from params so
    // shared links and back/forward navigation restore the view.
    this.route.queryParamMap.subscribe((params) => {
      this.q.set(params.get('q') ?? '');
      this.department.set(params.get('department') ?? '');
      this.location.set(params.get('location') ?? '');
      this.type.set(params.get('type') ?? '');
    });
  }

  protected onSearch(event: Event): void {
    this.q.set((event.target as HTMLInputElement).value);
    this.syncParams();
  }

  protected onDepartment(event: Event): void {
    this.department.set((event.target as HTMLSelectElement).value);
    this.syncParams();
  }

  protected onLocation(event: Event): void {
    this.location.set((event.target as HTMLSelectElement).value);
    this.syncParams();
  }

  protected onType(event: Event): void {
    this.type.set((event.target as HTMLSelectElement).value);
    this.syncParams();
  }

  protected clearFilters(): void {
    this.q.set('');
    this.department.set('');
    this.location.set('');
    this.type.set('');
    this.syncParams();
  }

  /** Merge current filter state into the URL (replaceUrl — no history spam). */
  private syncParams(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.q().trim() || null,
        department: this.department() || null,
        location: this.location() || null,
        type: this.type() || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
