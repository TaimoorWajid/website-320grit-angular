import { Component, afterNextRender, computed, inject, input } from '@angular/core';
import { CAREERS_ICONS } from '../careers-icons';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';
import { SavedJobsService } from '../saved-jobs.service';
import type { Job } from '../jobs.data';

/**
 * Bookmark save button (icon variant). Verbatim classes/ARIA from
 * the templates: `.grit-save-job.grit-save-job--icon`,
 * `aria-label="Save {title}"`, `aria-pressed`; saved state via
 * `.is-saved` (CSS toggles outline/filled paths + purple color).
 */
@Component({
  selector: 'app-save-job-button',
  imports: [SafeHtmlPipe],
  template: `
    <button
      type="button"
      class="grit-save-job grit-save-job--icon"
      [class.is-saved]="saved()"
      [attr.aria-label]="(saved() ? 'Saved: ' : 'Save ') + job().title"
      [attr.aria-pressed]="saved()"
      (click)="toggle($event)"
      [innerHTML]="icons.bookmark() | safeHtml"
    ></button>
  `,
  styleUrl: './save-job-button.component.scss',
})
export class SaveJobButtonComponent {
  readonly job = input.required<Job>();

  private readonly savedJobs = inject(SavedJobsService);
  protected readonly icons = CAREERS_ICONS;
  protected readonly saved = computed(() => this.savedJobs.isSaved(this.job().id));

  constructor() {
    // Ensure stored state is loaded wherever a save button renders.
    afterNextRender(() => this.savedJobs.ensureLoaded());
  }

  toggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.savedJobs.toggle(this.job().id);
  }
}
