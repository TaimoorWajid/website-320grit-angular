import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { FaqComponent } from '../../../shared/components/faq/faq.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CaHeroComponent } from '../shared/ca-hero/ca-hero.component';
import { CaMovesComponent } from '../shared/ca-moves/ca-moves.component';
import { CaRingCarouselComponent } from '../shared/ca-ring-carousel/ca-ring-carousel.component';
import { CaMapPresenceComponent } from '../shared/ca-map-presence/ca-map-presence.component';
import { CaServiceGridComponent } from '../shared/ca-service-grid/ca-service-grid.component';
import { CaHomeWorksComponent } from '../shared/ca-home-works/ca-home-works.component';
import { CaWhyGridComponent } from '../shared/ca-why-grid/ca-why-grid.component';
import { CaBeyondStripComponent } from '../shared/ca-beyond-strip/ca-beyond-strip.component';
import { APPROACH_STEPS, BEYOND, FAQS, MARKETS, SERVICES, WHY, WORKS } from './california.data';

/** California location landing — composition of ca- sections in template order. */
@Component({
  selector: 'app-california-page',
  imports: [
    CaHeroComponent,
    CaMovesComponent,
    CaRingCarouselComponent,
    CaMapPresenceComponent,
    CaServiceGridComponent,
    CaHomeWorksComponent,
    CaWhyGridComponent,
    CaBeyondStripComponent,
    FaqComponent,
    CtaBandComponent,
  ],
  templateUrl: './california-page.component.html',
  styleUrl: './california-page.component.scss',
})
export class CaliforniaPageComponent {
  protected readonly MARKETS = MARKETS;
  protected readonly APPROACH_STEPS = APPROACH_STEPS;
  protected readonly SERVICES = SERVICES;
  protected readonly WORKS = WORKS;
  protected readonly WHY = WHY;
  protected readonly BEYOND = BEYOND;
  protected readonly FAQS = FAQS;

  constructor() {
    inject(SeoService).update({
      title: 'California',
      description:
        '320 Grit provides construction management and development expertise across California — from San Diego to Sacramento.',
      canonicalPath: '/locations/california',
    });
  }
}
