import { Injectable } from '@angular/core';
import { JOBS, type Job } from './jobs.data';

/**
 * Static job-data access layer. Mirrors job-data.php helpers
 * (grit_get_demo_jobs / grit_get_job_by_slug / grit_get_related_jobs)
 * so a future HTTP-backed source can be swapped in without
 * touching the components.
 */
@Injectable({ providedIn: 'root' })
export class JobsService {
  getAll(): Job[] {
    return JOBS;
  }

  getBySlug(slug: string | null | undefined): Job | undefined {
    if (!slug) return undefined;
    return JOBS.find((j) => j.slug === slug);
  }

  /** First 3 jobs excluding the current one (NOT department-matched, per PHP). */
  getRelated(currentSlug: string, limit = 3): Job[] {
    return JOBS.filter((j) => j.slug !== currentSlug).slice(0, limit);
  }

  getDepartments(): string[] {
    return [...new Set(JOBS.map((j) => j.department))].sort();
  }

  getLocations(): string[] {
    return [...new Set(JOBS.map((j) => j.location))].sort();
  }

  getEmploymentTypes(): string[] {
    return [...new Set(JOBS.map((j) => j.employment_type))].sort();
  }
}
