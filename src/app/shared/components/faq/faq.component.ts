import { Component, inject, input, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Shared FAQ section. Styling is the homepage FAQ (Section 8) verbatim so
 * every page's accordion is 100% visually identical.
 *
 * Used by the homepage (defaults) and the California location page
 * (California-specific eyebrow/headline/body/CTA).
 */
@Component({
  selector: 'app-faq',
  imports: [RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  private readonly smoothScroll = inject(SmoothScrollService);

  readonly faqs = input.required<FaqItem[]>();
  readonly sectionId = input('faq');
  readonly eyebrow = input('Common Questions');
  readonly headline = input('Everything You Need to Know');
  readonly body = input(
    'Answers to the most frequently asked questions about our services and engagement process.',
  );
  readonly ctaLabel = input('Still have questions? Contact us.');
  /** '#contact-form' → homepage form · '#ca-cta' → page CTA band · any '#id' smooth-scrolls. */
  readonly ctaHref = input('#contact-form');

  /** Single-open accordion; all closed by default (matches staging). -1 = all closed. */
  readonly openIndex = signal(-1);

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? -1 : index);
  }

  goToCta(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(this.ctaHref());
  }
}
