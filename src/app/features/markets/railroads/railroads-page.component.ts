import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { RAILROADS_DATA } from './railroads.data';

/** Railroads market page — content via shared rr-* layout. */
@Component({
  selector: 'app-railroads-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class RailroadsPageComponent {
  protected readonly data = RAILROADS_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
