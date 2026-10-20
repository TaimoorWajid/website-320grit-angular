import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { SaveJobButtonComponent } from '../shared/save-job-button/save-job-button.component';
import { ShareButtonsComponent } from '../shared/share-buttons/share-buttons.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

/**
 * Job detail (/careers/:slug) — rebuilt following Howell's detail
 * flow: back link, department eyebrow, meta row, long-form body
 * (opportunity / responsibilities / qualifications / benefits /
 * why-grit) and a sticky aside apply card. Unknown slugs render a
 * proper 404 — never a silent fallback to another job.
 */
@Component({
  selector: 'app-job-detail-page',
  imports: [
    RouterLink,
    RevealDirective,
    NotFoundComponent,
    CtaBandComponent,
    SaveJobButtonComponent,
    ShareButtonsComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './job-detail-page.component.html',
  styleUrl: './job-detail-page.component.scss',
})
export class JobDetailPageComponent {
  protected readonly icons = CAREERS_ICONS;

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  /** Reactive job lookup — survives client-side navigation between jobs. */
  protected readonly job = computed(() => this.jobsService.getBySlug(this.slug()));

  /** The other open role (only two jobs exist). */
  protected readonly related = computed(() => {
    const j = this.job();
    return j ? (this.jobsService.getRelated(j.slug, 1)[0] ?? null) : null;
  });

  /** "May 8, 2026" — parsed as a plain calendar date (no TZ shift). */
  protected readonly postedLabel = computed(() => {
    const j = this.job();
    if (!j) return '';
    const d = new Date(`${j.posted_date}T00:00:00`);
    return Number.isNaN(d.getTime())
      ? j.posted_date
      : new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(d);
  });

  protected readonly metaRows = computed(() => {
    const j = this.job();
    if (!j) return [];
    return [
      { label: 'Department', value: j.department },
      { label: 'Location', value: j.location },
      { label: 'Employment type', value: j.employment_type },
      { label: 'Reports to', value: j.reports_to },
      { label: 'Travel', value: j.travel },
      ...(this.postedLabel() ? [{ label: 'Posted', value: this.postedLabel() }] : []),
    ];
  });

  constructor() {
    effect(() => {
      const j = this.job();
      if (j) {
        this.seo.update({
          title: `${j.title} — Careers`,
          description: j.excerpt,
          canonicalPath: `/careers/${j.slug}`,
        });
      }
    });
  }
}
