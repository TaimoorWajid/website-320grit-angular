import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { MarketPageComponent } from '../shared/market-page/market-page.component';
import { EDUCATION_DATA } from './education.data';

/** Education market page — content via shared rr-* layout. */
@Component({
  selector: 'app-education-page',
  imports: [MarketPageComponent],
  template: `<app-market-page [data]="data" />`,
})
export class EducationPageComponent {
  protected readonly data = EDUCATION_DATA;

  constructor() {
    inject(SeoService).update({ title: this.data.seoTitle, canonicalPath: this.data.canonicalPath });
  }
}
