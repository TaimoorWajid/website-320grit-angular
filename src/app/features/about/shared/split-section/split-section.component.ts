import { Component, input } from '@angular/core';
import { SplitData, iconSvg } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { HcButtonComponent } from '../hc-button/hc-button.component';

/** Shared .ab-split two-column section (text + image, either order). */
@Component({
  selector: 'app-split-section',
  imports: [HcRevealDirective, HcButtonComponent],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.scss',
})
export class SplitSectionComponent {
  readonly split = input.required<SplitData>();

  protected icon(paths: string): string {
    return iconSvg(paths, 20, 1.75);
  }
}
