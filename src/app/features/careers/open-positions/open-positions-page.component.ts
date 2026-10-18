import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { JobsService } from '../shared/jobs.service';
import type { Job } from '../shared/jobs.data';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { JobCardComponent } from '../shared/job-card/job-card.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

interface Filters {
  query: string;
  dept: string;
  location: string;
  type: string;
}

const EMPTY_FILTERS: Filters = { query: '', dept: '', location: '', type: '' };

/**
 * Open positions (/open-positions) — ported from open-positions.php.
 * One reactive filter model drives both the desktop filter bar and
 * the mobile bottom-sheet drawer (replacing the WP `data-sync`
 * workaround). Filtering is client-side and live.
 */
@Component({
  selector: 'app-open-positions-page',
  imports: [RouterLink, FormsModule, RevealDirective, JobCardComponent, SafeHtmlPipe],
  templateUrl: './open-positions-page.component.html',
  styleUrl: './open-positions-page.component.scss',
})
export class OpenPositionsPageComponent {
  private readonly jobsService = inject(JobsService);
  protected readonly icons = CAREERS_ICONS;

  protected readonly filters = signal<Filters>({ ...EMPTY_FILTERS });
  protected readonly drawerOpen = signal(false);

  protected readonly departments = this.jobsService.getDepartments();
  protected readonly locations = this.jobsService.getLocations();
  protected readonly types = this.jobsService.getEmploymentTypes();

  protected readonly filteredJobs = computed<Job[]>(() => {
    const f = this.filters();
    const q = f.query.trim().toLowerCase();
    return this.jobsService.getAll().filter((job) => {
      if (q && !job.title.toLowerCase().includes(q) && !job.short_desc.toLowerCase().includes(q)) return false;
      if (f.dept && job.department !== f.dept) return false;
      if (f.location && job.location !== f.location) return false;
      if (f.type && job.employment_type !== f.type) return false;
      return true;
    });
  });

  protected readonly resultsNoun = computed(() => (this.filteredJobs().length === 1 ? 'Open Position' : 'Open Positions'));

  constructor() {
    inject(SeoService).update({ title: 'Open Positions', canonicalPath: '/open-positions' });
  }

  setFilter<K extends keyof Filters>(key: K, value: Filters[K]): void {
    this.filters.update((f) => ({ ...f, [key]: value }));
  }

  clearFilters(): void {
    this.filters.set({ ...EMPTY_FILTERS });
  }

  openDrawer(): void {
    this.drawerOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
    document.body.style.overflow = '';
  }

  onDrawerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') this.closeDrawer();
  }
}
