import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ServicePageComponent } from '../shared/service-page/service-page.component';
import { EXPERT_WITNESS_DATA } from './expert-witness.data';

/** Route /services/expert-witness — fully expert-witness-specific template. */
@Component({
  selector: 'app-expert-witness-page',
  imports: [ServicePageComponent],
  template: `<app-service-page [data]="data" />`,
})
export class ExpertWitnessPageComponent {
  protected readonly data = EXPERT_WITNESS_DATA;

  constructor() {
    inject(SeoService).update({
      title: 'Construction Expert Witness Services',
      description: 'Independent analysis. Technical accuracy. Stronger cases.',
      canonicalPath: '/services/expert-witness',
    });
  }
}
