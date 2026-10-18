import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

bootstrapApplication(App, appConfig)
  .then((app) => {
    const router = app.injector.get(Router);
    // Signal the startup loader that the initial route is ready to paint.
    // Animation frames pause in background tabs; readiness must not wait for visibility.
    const ready = () => window.dispatchEvent(new Event('grit:app-ready'));
    if (router.navigated) ready();
    else
      router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1),
        )
        .subscribe(ready);
  })
  .catch((err) => {
    window.dispatchEvent(new Event('grit:app-error'));
    console.error(err);
  });
