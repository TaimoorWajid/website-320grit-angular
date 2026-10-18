import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OC_ARROW, OcCta } from '../oc.types';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';

/**
 * Shared oc- CTA button. '#oc-*' anchors smooth-scroll with the source's
 * -60px offset; '#contact' → /contact-us; '/path/' → routerLink.
 */
@Component({
  selector: 'app-oc-button',
  imports: [RouterLink],
  templateUrl: './oc-button.component.html',
  styleUrl: './oc-button.component.scss',
})
export class OcButtonComponent {
  private readonly smoothScroll = inject(SmoothScrollService);
  readonly link = input.required<OcCta>();
  protected readonly arrow = OC_ARROW;

  protected get classes(): string {
    const l = this.link();
    return `oc-btn oc-btn-${l.variant ?? 'primary'}${l.large ? ' oc-btn-lg' : ''}`;
  }

  protected get isContact(): boolean {
    return this.link().href === '#contact';
  }

  protected get isPageAnchor(): boolean {
    const h = this.link().href;
    return h.startsWith('#oc-');
  }

  protected scrollTo(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(this.link().href, { offset: -60 });
  }
}
