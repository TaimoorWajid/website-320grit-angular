import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { FinalCtaComponent } from '../shared/final-cta/final-cta.component';
import { AWARDS, CTA, HERO } from './awards.data';

/** Awards page — composition of shared hc- sections. */
@Component({
  selector: 'app-awards-page',
  imports: [PageHeroComponent, ValueCardGridComponent, FinalCtaComponent],
  templateUrl: './awards-page.component.html',
  styleUrl: './awards-page.component.scss',
})
export class AwardsPageComponent {
  protected readonly HERO = HERO;
  protected readonly AWARDS = AWARDS;
  protected readonly CTA = CTA;

  constructor() {
    inject(SeoService).update({ title: 'Awards', canonicalPath: '/awards' });
  }
}
