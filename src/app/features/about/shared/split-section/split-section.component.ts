import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SplitData, iconSvg } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/** Shared .ab-split two-column section (text + image, either order). */
@Component({
  selector: 'app-split-section',
  imports: [HcRevealDirective, RouterLink, SafeHtmlPipe],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.scss',
})
export class SplitSectionComponent {
  readonly split = input.required<SplitData>();

  protected icon(paths: string): string {
    return iconSvg(paths, 20, 1.75);
  }
}
