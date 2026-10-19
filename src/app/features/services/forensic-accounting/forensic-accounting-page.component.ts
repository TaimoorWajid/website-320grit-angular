import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ServicePageComponent } from '../shared/service-page/service-page.component';
import { FORENSIC_ACCOUNTING_DATA } from './forensic-accounting.data';

/** Route /services/forensic-accounting — canonical forensic template. */
@Component({
  selector: 'app-forensic-accounting-page',
  imports: [ServicePageComponent],
  template: `<app-service-page [data]="data" />`,
})
export class ForensicAccountingPageComponent {
  protected readonly data = FORENSIC_ACCOUNTING_DATA;

  constructor() {
    inject(SeoService).update({
      title: 'Construction Forensic Accounting Services',
      description:
        'Independent financial investigation. Facts you can trust. Evidence that holds up in court.',
      canonicalPath: '/services/forensic-accounting',
    });
  }
}
