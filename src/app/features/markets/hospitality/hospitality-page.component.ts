import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { HOSPITALITY_DATA } from './hospitality.data';

/** Hospitality market page — content via shared rr-* layout. */
@Component({
  selector: 'app-hospitality-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class HospitalityPageComponent {
  protected readonly data = HOSPITALITY_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
