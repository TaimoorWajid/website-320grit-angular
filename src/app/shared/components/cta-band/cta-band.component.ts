import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';

/**
 * Shared violet CTA band (mirrors the /locations, /industries index pages):
 * centered eyebrow + title + text + white-outline .btn-explore button.
 * Replaces the one-off ca-final-cta so CTA bands stay consistent.
 */
@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, RevealDirective],
  templateUrl: './cta-band.component.html',
  styleUrl: './cta-band.component.scss',
})
export class CtaBandComponent {
  private readonly smoothScroll = inject(SmoothScrollService);

  readonly sectionId = input('cta');
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly text = input('');
  readonly ctaLabel = input.required<string>();
  /** '/contact-us' → routerLink · '#id' → smooth scroll. */
  readonly ctaHref = input('/contact-us');

  protected isRoute(): boolean {
    return this.ctaHref().startsWith('/');
  }

  protected onAnchorClick(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(this.ctaHref());
  }
}
