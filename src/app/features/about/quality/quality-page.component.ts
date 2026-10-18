import { Component, inject } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { ValueCardGridComponent } from '../shared/value-card-grid/value-card-grid.component';
import { ProjectCardGridComponent } from '../shared/project-card-grid/project-card-grid.component';
import { HcRevealDirective } from '../shared/hc-reveal.directive';
import { iconSvg } from '../shared/about.types';
import { COMMITMENT, DETAILS, FOUNDATIONS, HERO } from './quality.data';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

/** Quality page — composition of shared hc- sections. */
@Component({
  selector: 'app-quality-page',
  imports: [PageHeroComponent, ValueCardGridComponent, ProjectCardGridComponent, HcRevealDirective, SafeHtmlPipe],
  templateUrl: './quality-page.component.html',
  styleUrl: './quality-page.component.scss',
})
export class QualityPageComponent {
  protected readonly HERO = HERO;
  protected readonly COMMITMENT = COMMITMENT;
  protected readonly DETAILS = DETAILS;
  protected readonly FOUNDATIONS = FOUNDATIONS;

  protected foundationIcon(paths = ''): string {
    return iconSvg(paths, 22, 1.75);
  }

  constructor() {
    inject(SeoService).update({ title: 'Quality', canonicalPath: '/quality' });
  }
}
