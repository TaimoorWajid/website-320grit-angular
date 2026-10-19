import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { ServicePageComponent } from '../shared/service-page/service-page.component';
import { BID_BUILD_DATA } from './bid-build.data';

/**
 * Route /services/bid-build — bid-build-specific hero/why/what-is plus the
 * leftover forensic-accounting sections (staging renders them; reproduced
 * as-is). Renders the scroll-spy sidenav (this page only).
 */
@Component({
  selector: 'app-bid-build-page',
  imports: [ServicePageComponent],
  template: `<app-service-page [data]="data" />`,
})
export class BidBuildPageComponent {
  protected readonly data = BID_BUILD_DATA;

  constructor() {
    inject(SeoService).update({
      title: 'Bid-Build Construction Services',
      description:
        'A proven delivery method built on competitive bidding, transparent pricing, and disciplined execution.',
      canonicalPath: '/services/bid-build',
    });
  }
}
