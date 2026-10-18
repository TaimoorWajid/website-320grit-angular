import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const SAVED_KEY = 'grit_saved_jobs';
const DATES_KEY = 'grit_saved_dates';

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Saved-positions persistence. Mirrors the WP JS behavior:
 * `grit_saved_jobs` = JSON array of job IDs,
 * `grit_saved_dates` = { jobId: "YYYY-MM-DD" } stamped lazily
 * on first view of /careers/saved/.
 * All localStorage access is browser-guarded (SSR-safe).
 */
@Injectable({ providedIn: 'root' })
export class SavedJobsService {
  private readonly platformId = inject(PLATFORM_ID);

  /** Reactive set of saved job IDs (empty on the server). */
  readonly savedIds = signal<string[]>([]);

  private loaded = false;

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /** Load from storage — call once in the browser (afterNextRender). */
  load(): void {
    if (!this.isBrowser()) return;
    this.loaded = true;
    const ids = readJson<string[]>(SAVED_KEY, []);
    this.savedIds.set(Array.isArray(ids) ? ids : []);
  }

  /** Idempotent browser load — safe to call from any component. */
  ensureLoaded(): void {
    if (this.loaded) return;
    this.load();
  }

  isSaved(jobId: string): boolean {
    return this.savedIds().includes(jobId);
  }

  toggle(jobId: string): boolean {
    const next = this.isSaved(jobId)
      ? this.savedIds().filter((id) => id !== jobId)
      : [...this.savedIds(), jobId];
    this.savedIds.set(next);
    if (this.isBrowser()) {
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — in-memory state still works */
      }
    }
    return this.isSaved(jobId);
  }

  remove(jobId: string): void {
    this.savedIds.set(this.savedIds().filter((id) => id !== jobId));
    if (this.isBrowser()) {
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(this.savedIds()));
      } catch {
        /* ignore */
      }
    }
  }

  /** Date stamp for a saved job; lazily stamps today when missing (WP behavior). */
  savedDate(jobId: string): string {
    const today = new Date().toISOString().slice(0, 10);
    if (!this.isBrowser()) return today;
    const dates = readJson<Record<string, string>>(DATES_KEY, {});
    if (!dates[jobId]) {
      dates[jobId] = today;
      try {
        localStorage.setItem(DATES_KEY, JSON.stringify(dates));
      } catch {
        /* ignore */
      }
    }
    return dates[jobId];
  }
}
