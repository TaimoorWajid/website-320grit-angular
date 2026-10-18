import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARROW_SVG, CtaLink } from '../about.types';

/**
 * Shared hc- CTA button. Routing convention across the about pages:
 * '#contact' → /contact-us (no #contact anchor exists on these pages),
 * '#fragment' → native in-page anchor (router anchorScrolling is on),
 * '/path/' → routerLink.
 */
@Component({
  selector: 'app-hc-button',
  imports: [RouterLink],
  templateUrl: './hc-button.component.html',
  styleUrl: './hc-button.component.scss',
})
export class HcButtonComponent {
  readonly link = input.required<CtaLink>();
  protected readonly arrow = ARROW_SVG;
}
