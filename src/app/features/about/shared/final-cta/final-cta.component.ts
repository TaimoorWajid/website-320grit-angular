import { Component, input } from '@angular/core';
import { CtaLink } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { HcButtonComponent } from '../hc-button/hc-button.component';

/** Shared final CTA: section.rr-final-cta (awards, safety, sustainability). */
@Component({
  selector: 'app-final-cta',
  imports: [HcRevealDirective, HcButtonComponent],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
})
export class FinalCtaComponent {
  readonly sectionId = input.required<string>();
  /** HTML heading */
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly cta = input.required<CtaLink>();
}
