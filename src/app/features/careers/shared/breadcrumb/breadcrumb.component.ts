import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Crumb {
  label: string;
  url?: string;
}

/**
 * Breadcrumb nav — verbatim structure from job-detail.php:
 * nav.grit-breadcrumb[aria-label=Breadcrumb] with ` / ` separators
 * and aria-current="page" on the last item.
 */
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    <nav class="grit-breadcrumb" aria-label="Breadcrumb">
      @for (crumb of crumbs(); track crumb.label; let last = $last) {
        @if (!last && crumb.url) {
          <a [routerLink]="crumb.url">{{ crumb.label }}</a>
          <span class="grit-breadcrumb__sep" aria-hidden="true">/</span>
        } @else {
          <span aria-current="page">{{ crumb.label }}</span>
        }
      }
    </nav>
  `,
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  readonly crumbs = input.required<Crumb[]>();
}
