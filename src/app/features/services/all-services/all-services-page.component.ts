import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { APPROACH_CARDS, SERVICES_HERO, SERVICE_CARDS } from './all-services.data';

/**
 * Route /services — the main services index page.
 * Hero, services grid, approach band, CTA band. Footer comes from the app shell.
 */
@Component({
  selector: 'app-all-services-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent],
  templateUrl: './all-services-page.component.html',
  styleUrl: './all-services-page.component.scss',
})
export class AllServicesPageComponent {
  protected readonly hero = SERVICES_HERO;
  protected readonly cards = SERVICE_CARDS;
  protected readonly approach = APPROACH_CARDS;

  protected readonly heroImage = '/assets/images/What-we-do-faeture-image.webp';

  constructor() {
    inject(SeoService).update({
      title: 'Our Services — Construction Consulting & Project Management',
      description:
        'Explore 320 GRIT’s full range of services: design-build, bid-build, expert witness, forensic accounting, commercial construction, and tenant improvements.',
      canonicalPath: '/services',
    });
  }
}
