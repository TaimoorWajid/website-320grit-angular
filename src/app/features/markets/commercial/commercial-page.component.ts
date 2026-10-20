import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { COMMERCIAL_DATA } from './commercial.data';

/** Commercial construction market page — content via shared rr-* layout. */
@Component({
  selector: 'app-commercial-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class CommercialPageComponent {
  protected readonly data = COMMERCIAL_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
