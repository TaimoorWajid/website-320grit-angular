import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { TeamGridComponent } from '../shared/team-grid/team-grid.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { ABOUT_CARDS, ABOUT_HERO, LEADERSHIP_PREVIEW, VALUES_STRIP } from './about-us.data';

/**
 * Route /about-us — the About index page.
 * Hero, explore grid, leadership preview (shared team grid), values
 * strip (shared value grid), CTA band. Footer comes from the app shell.
 */
@Component({
  selector: 'app-about-us-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe, CtaBandComponent, TeamGridComponent, ValueCardGridComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
  protected readonly hero = ABOUT_HERO;
  protected readonly cards = ABOUT_CARDS;
  protected readonly leaders = LEADERSHIP_PREVIEW;
  protected readonly values = VALUES_STRIP;

  constructor() {
    inject(SeoService).update({
      title: 'About Us | 320 Grit',
      description:
        'About 320 Grit — an owner-focused construction management company founded by two partners with 25+ years of combined experience. Explore our story, leadership, values, safety culture, and sustainability commitment.',
      canonicalPath: '/about-us',
    });
  }
}
