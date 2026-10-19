import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { OcRevealDirective } from '../shared/oc-reveal.directive';
import { OcParallaxDirective } from '../shared/oc-parallax.directive';
import { OcPillarGridComponent } from '../shared/oc-pillar-grid/oc-pillar-grid.component';
import { OcFinalCtaComponent } from '../shared/oc-final-cta/oc-final-cta.component';
import { PILLARS } from '../owner-centric/owner-centric.data';

/**
 * Owner Representation page.
 *
 * NOTE: the WordPress mega-menu links to /approach/owner-representation but
 * NO template exists in the theme repo, so there is no source copy for this
 * page. This is a tasteful placeholder assembled from verbatim lines that do
 * exist in the spec (the California "Owner Representation" service card and
 * the owner-centric pillars, which describe how 320 Grit works with owners).
 * The site owner should supply real copy.
 */
@Component({
  selector: 'app-owner-representation-page',
  imports: [
    OcRevealDirective,
    OcParallaxDirective,
    RouterLink,
    OcPillarGridComponent,
    OcFinalCtaComponent,
  ],
  templateUrl: './owner-representation-page.component.html',
  styleUrl: './owner-representation-page.component.scss',
})
export class OwnerRepresentationPageComponent {
  protected readonly PILLARS = PILLARS;

  private readonly smoothScroll = inject(SmoothScrollService);

  constructor() {
    inject(SeoService).update({ title: 'Owner Representation', canonicalPath: '/approach/owner-representation' });
  }

  protected scrollTo(selector: string, event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(selector, { offset: -60 });
  }
}
