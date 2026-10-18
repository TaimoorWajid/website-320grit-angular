import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ForensicServicePageComponent } from '../shared/forensic-service-page/forensic-service-page.component';
import { COMMERCIAL_DATA } from './commercial.data';

/**
 * Route /commercial-construction.
 * Staging renders this page byte-identical to design-build except the
 * hero section id ("ew-hero") — reproduced as-is via the shared template.
 */
@Component({
  selector: 'app-commercial-page',
  imports: [ForensicServicePageComponent],
  template: `<app-forensic-service-page [data]="data" />`,
})
export class CommercialPageComponent {
  protected readonly data = COMMERCIAL_DATA;

  constructor() {
    inject(SeoService).update({
      title: 'Commercial Construction Services',
      description:
        'Independent financial investigation. Facts you can trust. Evidence that holds up in court.',
      canonicalPath: '/commercial-construction',
    });
  }
}
