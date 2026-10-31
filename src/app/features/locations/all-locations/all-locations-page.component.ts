import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';

interface Region {
  name: string;
  detail: string;
}

/** Locations index page — where 320 Grit works across California. */
@Component({
  selector: 'app-all-locations-page',
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  templateUrl: './all-locations-page.component.html',
  styleUrl: './all-locations-page.component.scss',
})
export class AllLocationsPageComponent {
  protected readonly heroBg = '/assets/images/commercial-construction.webp';
  protected readonly mapImg = '/assets/images/Nationwide-Map.webp';
  protected readonly californiaBg = '/assets/images/healthcare-bg.webp';

  protected readonly regions: Region[] = [
    {
      name: 'Los Angeles & Orange County',
      detail: 'Home base in Irvine — ground zero for our California operations.',
    },
    {
      name: 'San Diego',
      detail: 'Healthcare, education, and commercial builds across the county.',
    },
    {
      name: 'Bay Area',
      detail: 'Advanced technology, labs, and mission-critical facilities.',
    },
    {
      name: 'Central Valley & Sacramento',
      detail: 'Industrial, education, and public-sector project support.',
    },
  ];

  constructor() {
    inject(SeoService).update({
      title: 'Where We Work',
      description:
        '320 Grit provides construction consulting, project management, and owner representation services across the entire state of California — from San Diego to Sacramento.',
      canonicalPath: '/locations',
      image: '/assets/images/Nationwide-Map.webp',
    });
  }
}
