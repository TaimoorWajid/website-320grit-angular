import { Component, input, signal } from '@angular/core';
import { CaFaq } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';

/** "California FAQ" — 2-col single-open accordion. */
@Component({
  selector: 'app-ca-faq-accordion',
  imports: [CaRevealDirective],
  templateUrl: './ca-faq-accordion.component.html',
  styleUrl: './ca-faq-accordion.component.scss',
})
export class CaFaqAccordionComponent {
  readonly faqs = input.required<CaFaq[]>();
  /** Single-open; null = all closed (source starts closed). */
  protected readonly openIndex = signal<number | null>(null);

  protected toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }
}
