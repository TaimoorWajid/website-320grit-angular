import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { TENANT_IMPROVEMENT_DATA } from './tenant-improvement.data';

/** Tenant Improvement market page — content via shared rr-* layout. */
@Component({
  selector: 'app-tenant-improvement-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class TenantImprovementPageComponent {
  protected readonly data = TENANT_IMPROVEMENT_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
