import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { SplitSectionComponent } from '../shared/split-section/split-section.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { APPROACH, CULTURE, FOCUS, HERO } from './safety.data';

/** Safety page — composition of shared hc- sections. */
@Component({
  selector: 'app-safety-page',
  imports: [
    PageHeroComponent,
    ValueCardGridComponent,
    SplitSectionComponent,
    CtaBandComponent,
  ],
  templateUrl: './safety-page.component.html',
  styleUrl: './safety-page.component.scss',
})
export class SafetyPageComponent {
  protected readonly HERO = HERO;
  protected readonly APPROACH = APPROACH;
  protected readonly CULTURE = CULTURE;
  protected readonly FOCUS = FOCUS;

  constructor() {
    inject(SeoService).update({ title: 'Safety', canonicalPath: '/safety' });
  }
}
