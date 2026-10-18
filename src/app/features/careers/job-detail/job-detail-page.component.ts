import { Component, ElementRef, computed, effect, inject, signal, viewChildren } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { ShareButtonsComponent } from '../shared/share-buttons/share-buttons.component';
import { JobCardComponent } from '../shared/job-card/job-card.component';

interface JobTab {
  id: string;
  label: string;
  panelId: string;
}

/**
 * Job detail (/careers/{slug}) — ported from job-detail.php.
 * Unknown slugs render a proper 404 (the WP template silently fell
 * back to project-manager; the spec recommends 404 instead).
 */
@Component({
  selector: 'app-job-detail-page',
  imports: [RouterLink, RevealDirective, NotFoundComponent, BreadcrumbComponent, ShareButtonsComponent, JobCardComponent],
  templateUrl: './job-detail-page.component.html',
  styleUrl: './job-detail-page.component.scss',
})
export class JobDetailPageComponent {
  protected readonly icons = CAREERS_ICONS;

  protected readonly tabs: JobTab[] = [
    { id: 'overview', label: 'Overview', panelId: 'panel-overview' },
    { id: 'responsibilities', label: 'Responsibilities', panelId: 'panel-responsibilities' },
    { id: 'qualifications', label: 'Qualifications', panelId: 'panel-qualifications' },
    { id: 'benefits', label: 'Benefits', panelId: 'panel-benefits' },
  ];
  protected readonly activeTab = signal('overview');
  private readonly tabButtons = viewChildren<ElementRef<HTMLButtonElement>>('tabButton');

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  /** Reactive job lookup — survives client-side navigation between jobs. */
  protected readonly job = computed(() => this.jobsService.getBySlug(this.slug()));
  protected readonly related = computed(() => {
    const j = this.job();
    return j ? this.jobsService.getRelated(j.slug, 3) : [];
  });

  constructor() {
    effect(() => {
      const j = this.job();
      if (j) this.seo.update({ title: `${j.title} — Careers`, canonicalPath: `/careers/${j.slug}` });
    });
  }

  protected readonly detailRows = computed(() => {
    const j = this.job();
    if (!j) return [];
    return [
      { label: 'Department', value: j.department },
      { label: 'Reports To', value: j.reports_to },
      { label: 'Employment Type', value: j.employment_type },
      { label: 'Location', value: j.location },
      { label: 'Travel', value: j.travel },
    ];
  });

  selectTab(id: string): void {
    this.activeTab.set(id);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    const buttons = this.tabButtons().map((b) => b.nativeElement);
    if (buttons.length === 0) return;
    let next = -1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = buttons.length - 1;
    if (next >= 0) {
      event.preventDefault();
      buttons[next].focus();
      this.activeTab.set(this.tabs[next].id);
    }
  }
}
