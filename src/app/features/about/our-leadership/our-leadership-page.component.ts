import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { TeamGridComponent } from '../shared/team-grid/team-grid.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { HcRevealDirective } from '../shared/hc-reveal.directive';
import { APPROACH, HERO, TEAM, VALUES_LIST, VALUES_SPLIT } from './our-leadership.data';

/** Our Leadership page — composition of shared hc- sections. */
@Component({
  selector: 'app-our-leadership-page',
  imports: [PageHeroComponent, ValueCardGridComponent, TeamGridComponent, HcRevealDirective, CtaBandComponent],
  templateUrl: './our-leadership-page.component.html',
  styleUrl: './our-leadership-page.component.scss',
})
export class OurLeadershipPageComponent {
  protected readonly HERO = HERO;
  protected readonly APPROACH = APPROACH;
  protected readonly TEAM = TEAM;
  protected readonly VALUES_SPLIT = VALUES_SPLIT;
  protected readonly VALUES_LIST = VALUES_LIST;

  constructor() {
    inject(SeoService).update({ title: 'Our Leadership', canonicalPath: '/our-leadership' });
  }
}
