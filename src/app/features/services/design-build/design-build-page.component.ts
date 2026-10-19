import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ForensicServicePageComponent } from '../shared/forensic-service-page/forensic-service-page.component';
import { DESIGN_BUILD_DATA } from './design-build.data';

/**
 * Route /services/design-build.
 * Single-point design + construction delivery — one contract, one team,
 * one point of accountability from concept to keys.
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
        'Single-point design-build delivery. One team, one contract — faster builds with total cost clarity.',
      canonicalPath: '/services/design-build',
    });
  }
}
