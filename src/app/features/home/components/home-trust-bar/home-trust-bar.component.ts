import { Component } from '@angular/core';
import { TRUST_ITEMS } from '../../../../core/data/trust-bar.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/** Trust badge bar: 5 items with inline stroke SVGs (home.css .trust-bar). */
@Component({
  selector: 'app-home-trust-bar',
  imports: [RevealDirective],
  templateUrl: './home-trust-bar.component.html',
  styleUrl: './home-trust-bar.component.scss',
})
export class HomeTrustBarComponent {
  protected readonly items = TRUST_ITEMS;
}
