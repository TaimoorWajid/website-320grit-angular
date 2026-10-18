import { Component, input } from '@angular/core';
import { ImpactItem } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';

/** Shared .ab-impact numbers panel with intro header (safety, sustainability). */
@Component({
  selector: 'app-impact-numbers',
  imports: [HcRevealDirective],
  templateUrl: './impact-numbers.component.html',
  styleUrl: './impact-numbers.component.scss',
})
export class ImpactNumbersComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  readonly label = input<string>();
  readonly title = input<string>();
  readonly items = input.required<ImpactItem[]>();
}
