import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Job } from '../jobs.data';
import { CAREERS_ICONS } from '../careers-icons';
import { SaveJobButtonComponent } from '../save-job-button/save-job-button.component';

export type JobCardVariant = 'preview' | 'directory' | 'related';

/**
 * Job card — one component for the three card variants in the
 * careers templates (landing preview, open-positions directory,
 * job-detail related). Verbatim markup/classes per variant.
 */
@Component({
  selector: 'app-job-card',
  imports: [RouterLink, SaveJobButtonComponent],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  readonly job = input.required<Job>();
  readonly variant = input<JobCardVariant>('preview');

  protected readonly icons = CAREERS_ICONS;

  jobUrl(): string {
    return `/careers/${this.job().slug}/`;
  }

  postedLabel(): string {
    const d = new Date(`${this.job().posted_date}T00:00:00`);
    return `Posted ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
  }
}
