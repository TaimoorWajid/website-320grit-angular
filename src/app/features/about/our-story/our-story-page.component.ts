import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { SplitSectionComponent } from '../shared/split-section/split-section.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { TimelineComponent } from '../shared/timeline/timeline.component';
import { BEGAN, HERO, MILESTONES, PURPOSE, VALUES } from './our-story.data';

/** Our Story page — composition of shared hc- sections. */
@Component({
  selector: 'app-our-story-page',
  imports: [PageHeroComponent, SplitSectionComponent, ValueCardGridComponent, TimelineComponent],
  templateUrl: './our-story-page.component.html',
  styleUrl: './our-story-page.component.scss',
})
export class OurStoryPageComponent {
  protected readonly HERO = HERO;
  protected readonly BEGAN = BEGAN;
  protected readonly VALUES = VALUES;
  protected readonly MILESTONES = MILESTONES;
  protected readonly PURPOSE = PURPOSE;
  protected readonly milestonesCta = { label: 'View Projects', href: '#contact', variant: 'outline' as const };

  constructor() {
    inject(SeoService).update({ title: 'Our Story', canonicalPath: '/our-story' });
  }
}
