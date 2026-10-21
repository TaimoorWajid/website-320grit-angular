import { RenderMode, ServerRoute } from '@angular/ssr';

/** MAIN-BRANCH ONLY: prerender the single under-construction page. */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
