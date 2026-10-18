import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { BEHAVIORAL_HEALTH_DATA } from './behavioral-health.data';

/** Behavioral Health market page — content via shared rr-* layout. */
@Component({
  selector: 'app-behavioral-health-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class BehavioralHealthPageComponent {
  protected readonly data = BEHAVIORAL_HEALTH_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
