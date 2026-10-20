import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: ({ transition, to, from }) => {
          // Guarded: Domino (SSR) implements matchMedia as a throwing stub.
          try {
            if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              transition.skipTransition();
              return;
            }
          } catch {
            /* SSR — no transitions to skip. */
          }
          // Same-page anchor (fragment-only) navigations must not play the wipe.
          try {
            const samePath =
              to.routeConfig === from.routeConfig &&
              to.url.map((s) => s.path).join('/') === from.url.map((s) => s.path).join('/');
            if (samePath && to.fragment !== from.fragment) {
              transition.skipTransition();
            }
          } catch {
            /* Never break navigation on a guard failure. */
          }
        },
      }),
    ),
    provideClientHydration(withEventReplay()),
  ],
};
