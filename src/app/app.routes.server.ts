import { RenderMode, ServerRoute } from '@angular/ssr';
import { JOBS } from './features/careers/shared/jobs.data';

export const serverRoutes: ServerRoute[] = [
  {
    // Job detail pages are static content — prerender one per known slug.
    path: 'careers/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return JOBS.map((j) => ({ slug: j.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
