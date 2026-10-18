import { Component, PLATFORM_ID, inject, input, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CAREERS_ICONS } from '../careers-icons';
import type { Job } from '../jobs.data';

/**
 * Share buttons (job detail hero): LinkedIn / Email / Copy link.
 * Verbatim behavior from job-detail.js — LinkedIn opens a 600×500
 * share popup, email builds a mailto:, copy uses the clipboard
 * with a prompt() fallback; the copy button shows "Link copied!"
 * + purple color for 2s.
 */
@Component({
  selector: 'app-share-buttons',
  template: `
    <div class="grit-share">
      <span class="grit-share__label">Share this position</span>
      <button type="button" class="grit-share__btn" aria-label="Share on LinkedIn" (click)="share('linkedin')">
        <span aria-hidden="true" [innerHTML]="icons.linkedin()"></span>
      </button>
      <button type="button" class="grit-share__btn" aria-label="Share via email" (click)="share('email')">
        <span aria-hidden="true" [innerHTML]="icons.email()"></span>
      </button>
      <button
        type="button"
        class="grit-share__btn"
        [class.is-copied]="copied()"
        [attr.aria-label]="copied() ? 'Link copied!' : 'Copy link'"
        (click)="share('copy')"
      >
        <span aria-hidden="true" [innerHTML]="icons.copyLink()"></span>
      </button>
    </div>
  `,
  styleUrl: './share-buttons.component.scss',
})
export class ShareButtonsComponent {
  readonly job = input.required<Job>();

  private readonly platformId = inject(PLATFORM_ID);
  protected readonly icons = CAREERS_ICONS;
  protected readonly copied = signal(false);

  private pageUrl(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    return window.location.href;
  }

  share(kind: 'linkedin' | 'email' | 'copy'): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = this.pageUrl();
    const title = this.job().title;
    if (kind === 'linkedin') {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        '_blank',
        'noopener,width=600,height=500',
      );
    } else if (kind === 'email') {
      const subject = encodeURIComponent(`Job Opportunity: ${title}`);
      const body = encodeURIComponent(`I thought you might be interested in this position at 320 Grit:\n\n${title}\n${url}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    } else {
      const done = () => {
        this.copied.set(true);
        window.setTimeout(() => this.copied.set(false), 2000);
      };
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(url).then(done, () => window.prompt('Copy this link:', url));
      } else {
        window.prompt('Copy this link:', url);
      }
    }
  }
}
