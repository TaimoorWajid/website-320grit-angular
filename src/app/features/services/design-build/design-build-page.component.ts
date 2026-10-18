import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ForensicServicePageComponent } from '../shared/forensic-service-page/forensic-service-page.component';
import { DESIGN_BUILD_DATA } from './design-build.data';

/**
 * Route /services/design-build.
 * Staging renders this page byte-identical to forensic-accounting
 * (same body copy, different hero image) — reproduced as-is via the
 * shared template; no design-build-specific copy is invented.
 */
@Component({
  selector: 'app-design-build-page',
  imports: [ForensicServicePageComponent],
  template: `<app-forensic-service-page [data]="data" />`,
})
export class DesignBuildPageComponent {
  protected readonly data = DESIGN_BUILD_DATA;

  constructor() {
    inject(SeoService).update({
      title: 'Design-Build Construction Services',
      description:
        'Independent financial investigation. Facts you can trust. Evidence that holds up in court.',
      canonicalPath: '/services/design-build',
    });
  }
}
