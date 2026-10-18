import { Component, input } from '@angular/core';
import { CaIconCard, caIcon } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';

/**
 * "California Moves Fast" — map-bg panel (DOM order: right column first)
 * + approach steps. The map bg hotlinks the original WP upload; self-host
 * before production.
 */
@Component({
  selector: 'app-ca-moves',
  imports: [CaRevealDirective],
  templateUrl: './ca-moves.component.html',
  styleUrl: './ca-moves.component.scss',
})
export class CaMovesComponent {
  readonly steps = input.required<CaIconCard[]>();

  protected icon(paths: string): string {
    return caIcon(paths, 20, 1.6);
  }
}
