import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { SplitSectionComponent } from '../shared/split-section/split-section.component';
import { CTA_SPLIT, HERO, PILLARS } from './community.data';

/** Community page — composition of shared hc- sections. */
@Component({
  selector: 'app-community-page',
  imports: [PageHeroComponent, ValueCardGridComponent, SplitSectionComponent],
  templateUrl: './community-page.component.html',
  styleUrl: './community-page.component.scss',
})
export class CommunityPageComponent {
  protected readonly HERO = HERO;
  protected readonly PILLARS = PILLARS;
  protected readonly CTA_SPLIT = CTA_SPLIT;

  constructor() {
    inject(SeoService).update({ title: 'Community', canonicalPath: '/community' });
  }
}
