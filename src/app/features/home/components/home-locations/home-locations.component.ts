import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

/**
 * Homepage locations section (Section 9).
 * Copy is verbatim from the staging homepage analysis.
 * The "Explore More" CTA links to the California location page.
 */
@Component({
  selector: 'app-home-locations',
  templateUrl: './home-locations.component.html',
  styleUrl: './home-locations.component.scss',
  imports: [RevealDirective, RouterLink],
})
export class HomeLocationsComponent {}
