import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { SplitSectionComponent } from '../shared/split-section/split-section.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { COMMITMENT, HERO, HOW } from './sustainability.data';

/** Sustainability page — composition of shared hc- sections. */
@Component({
  selector: 'app-sustainability-page',
  imports: [
    PageHeroComponent,
    ValueCardGridComponent,
    SplitSectionComponent,
    CtaBandComponent,
  ],
  templateUrl: './sustainability-page.component.html',
  styleUrl: './sustainability-page.component.scss',
})
export class SustainabilityPageComponent {
  protected readonly HERO = HERO;
  protected readonly COMMITMENT = COMMITMENT;
  protected readonly HOW = HOW;

  constructor() {
    inject(SeoService).update({ title: 'Sustainability', canonicalPath: '/sustainability' });
  }
}
