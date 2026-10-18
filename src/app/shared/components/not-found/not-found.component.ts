import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="not-found grit-container">
      <p class="grit-eyebrow">404</p>
      <h1>Page not found</h1>
      <p class="grit-text-secondary">The page you are looking for does not exist.</p>
      <a routerLink="/" class="btn-320 btn-primary">Back to home</a>
    </section>
  `,
  styles: [
    `
      .not-found {
        padding: 10rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
      }
      h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
      }
    `,
  ],
})
export class NotFoundComponent {
  constructor() {
    inject(SeoService).update({ title: 'Page Not Found', noIndex: true });
  }
}
