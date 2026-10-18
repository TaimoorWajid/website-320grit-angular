import { Component, input } from '@angular/core';
import { StatItem, iconSvg } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';

/** Shared .ab-stats bar; `overlap` pulls it over the hero bottom edge (leadership). */
@Component({
  selector: 'app-stats-bar',
  imports: [HcRevealDirective],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.scss',
})
export class StatsBarComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  readonly overlap = input(false);
  readonly items = input.required<StatItem[]>();

  protected icon(paths: string): string {
    return iconSvg(paths, 28, 1.75);
  }
}
