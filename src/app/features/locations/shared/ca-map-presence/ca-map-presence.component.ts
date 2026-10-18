import { Component } from '@angular/core';
import { CaRevealDirective } from '../ca-reveal.directive';

/** "From Northern California to Southern California." — radar + SVG state + HQ badge. */
@Component({
  selector: 'app-ca-map-presence',
  imports: [CaRevealDirective],
  templateUrl: './ca-map-presence.component.html',
  styleUrl: './ca-map-presence.component.scss',
})
export class CaMapPresenceComponent {
  /** [name, cx, cy, r] */
  protected readonly cities: [string, number, number, number][] = [
    ['SACRAMENTO', 130, 55, 5],
    ['SAN FRANCISCO', 85, 100, 4.5],
    ['SAN JOSE', 105, 125, 4.5],
    ['LOS ANGELES', 140, 230, 5.5],
    ['SAN DIEGO', 155, 290, 4.5],
  ];
}
