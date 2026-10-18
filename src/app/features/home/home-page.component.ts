import { Component, inject, afterNextRender } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { HomeStatementComponent } from './components/home-statement/home-statement.component';
import { HomeTrustBarComponent } from './components/home-trust-bar/home-trust-bar.component';
import { HomeWhatWeDoComponent } from './components/home-what-we-do/home-what-we-do.component';
import { HomeMarketsComponent } from './components/home-markets/home-markets.component';
import { HomeProcessComponent } from './components/home-process/home-process.component';
import { HomeFaqComponent } from './components/home-faq/home-faq.component';
import { HomeLocationsComponent } from './components/home-locations/home-locations.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';

/** Homepage: composition of section components in staging order. */
@Component({
  selector: 'app-home-page',
  imports: [
    HomeHeroComponent,
    HomeStatementComponent,
    HomeTrustBarComponent,
    HomeWhatWeDoComponent,
    HomeMarketsComponent,
    HomeProcessComponent,
    HomeFaqComponent,
    HomeLocationsComponent,
    HomeContactComponent,
  ],
  template: `
    <app-home-hero />
    <app-home-statement />
    <app-home-trust-bar />
    <app-home-what-we-do />
    <app-home-markets />
    <app-home-process />
    <app-home-faq />
    <app-home-locations />
    <app-home-contact />
  `,
})
export class HomePageComponent {
  constructor() {
    inject(SeoService).update({
      title: 'Construction Consulting, Project Management & Owner Representation',
      canonicalPath: '/',
    });
    afterNextRender(() => {
      if (window.location.hash) {
        document.querySelector(window.location.hash)?.scrollIntoView();
      }
    });
  }
}
