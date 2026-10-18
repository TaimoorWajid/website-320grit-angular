import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * Homepage locations section (Section 9).
 * Copy is verbatim from the staging homepage analysis.
 * The "Explore More" CTA carries an empty href on the live site;
 * it is preserved as href="" with preventDefault.
 */
@Component({
  selector: 'app-home-locations',
  templateUrl: './home-locations.component.html',
  styleUrl: './home-locations.component.scss',
  imports: [RevealDirective],
})
export class HomeLocationsComponent {
  exploreMore(event: Event): void {
    event.preventDefault();
  }
}
