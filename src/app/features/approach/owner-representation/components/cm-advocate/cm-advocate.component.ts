import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';
import { OR_SHOULD, OR_SHOULDNT } from '../../owner-representation.data';

/**
 * cm-advocate — "The Difference" split section.
 * Sticky site photo on the left; scrolling content on the right contrasts
 * going it alone (muted red list) with having 320 Grit in your corner
 * (purple-accent list), ending in a conversion CTA.
 */
@Component({
  selector: 'app-cm-advocate',
  imports: [RouterLink, RevealDirective],
  templateUrl: './cm-advocate.component.html',
  styleUrl: './cm-advocate.component.scss',
})
export class CmAdvocateComponent {
  protected readonly shouldnt = OR_SHOULDNT;
  protected readonly should = OR_SHOULD;
}
