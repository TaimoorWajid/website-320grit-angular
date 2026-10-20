import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { SplitSectionComponent } from '../shared/split-section/split-section.component';
import { ProjectCardGridComponent } from '../shared/project-card-grid/project-card-grid.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CORE_VALUES, DRIVE, HERO, IN_ACTION } from './our-values.data';

/** Our Values page — composition of shared hc- sections. */
@Component({
  selector: 'app-our-values-page',
  imports: [PageHeroComponent, ValueCardGridComponent, SplitSectionComponent, ProjectCardGridComponent, CtaBandComponent],
  templateUrl: './our-values-page.component.html',
  styleUrl: './our-values-page.component.scss',
})
export class OurValuesPageComponent {
  protected readonly HERO = HERO;
  protected readonly CORE_VALUES = CORE_VALUES;
  protected readonly DRIVE = DRIVE;
  protected readonly IN_ACTION = IN_ACTION;

  constructor() {
    inject(SeoService).update({ title: 'Our Values', canonicalPath: '/our-values' });
  }
}
