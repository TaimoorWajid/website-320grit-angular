import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { OcHeroComponent } from '../shared/oc-hero/oc-hero.component';
import { OcPillarGridComponent } from '../shared/oc-pillar-grid/oc-pillar-grid.component';
import { OcOrbitComponent } from '../shared/oc-orbit/oc-orbit.component';
import { OcProcessStepsComponent } from '../shared/oc-process-steps/oc-process-steps.component';
import { OcCompareComponent } from '../shared/oc-compare/oc-compare.component';
import { OcInfoTabletComponent } from '../shared/oc-info-tablet/oc-info-tablet.component';
import { OcFinalCtaComponent } from '../shared/oc-final-cta/oc-final-cta.component';
import { CHIPS, ORBIT_NODES, PILLARS, PROCESS_STEPS } from './owner-centric.data';

/** Owner-Centric Experience page — composition of oc- sections in template order. */
@Component({
  selector: 'app-owner-centric-page',
  imports: [
    OcHeroComponent,
    OcPillarGridComponent,
    OcOrbitComponent,
    OcProcessStepsComponent,
    OcCompareComponent,
    OcInfoTabletComponent,
    OcFinalCtaComponent,
  ],
  templateUrl: './owner-centric-page.component.html',
  styleUrl: './owner-centric-page.component.scss',
})
export class OwnerCentricPageComponent {
  protected readonly PILLARS = PILLARS;
  protected readonly ORBIT_NODES = ORBIT_NODES;
  protected readonly PROCESS_STEPS = PROCESS_STEPS;
  protected readonly CHIPS = CHIPS;

  constructor() {
    inject(SeoService).update({ title: 'Owner-Centric Approach', canonicalPath: '/approach/owner-centric' });
  }
}
