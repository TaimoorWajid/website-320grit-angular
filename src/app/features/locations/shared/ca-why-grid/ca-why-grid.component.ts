import { Component, input } from '@angular/core';
import { CaIconCard, caIcon } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';

/** "Why 320 Grit in California?" — 5 purple-icon cards. */
@Component({
  selector: 'app-ca-why-grid',
  imports: [CaRevealDirective],
  templateUrl: './ca-why-grid.component.html',
  styleUrl: './ca-why-grid.component.scss',
})
export class CaWhyGridComponent {
  readonly items = input.required<CaIconCard[]>();

  protected icon(paths: string): string {
    return caIcon(paths, 24, 1.6);
  }
}
