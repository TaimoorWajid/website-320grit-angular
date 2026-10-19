import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { APPROACH_CARDS, SERVICES_CTA, SERVICES_HERO, SERVICE_CARDS } from './all-services.data';

/**
 * Route /services — the main services index page.
 * Hero, services grid, approach band, CTA band. Footer comes from the app shell.
 */
@Component({
  selector: 'app-all-services-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe],
  templateUrl: './all-services-page.component.html',
  styleUrl: './all-services-page.component.scss',
})
export class AllServicesPageComponent {
  protected readonly hero = SERVICES_HERO;
  protected readonly cards = SERVICE_CARDS;
  protected readonly approach = APPROACH_CARDS;
  protected readonly cta = SERVICES_CTA;

  protected readonly heroImage = '/assets/images/320-Grit-Banner-Image.webp';

  constructor() {
    inject(SeoService).update({
      title: 'Our Services — Construction Consulting, Project Management & Owner Representation',
      description:
        'Explore 320 GRIT’s full range of services: design-build, bid-build, expert witness, forensic accounting, commercial construction, and tenant improvements.',
      canonicalPath: '/services',
    });
  }
}
