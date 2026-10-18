import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { ADVANCED_TECHNOLOGY_DATA } from './advanced-technology.data';

/** Advanced Technology market page — content via shared rr-* layout. */
@Component({
  selector: 'app-advanced-technology-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class AdvancedTechnologyPageComponent {
  protected readonly data = ADVANCED_TECHNOLOGY_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
