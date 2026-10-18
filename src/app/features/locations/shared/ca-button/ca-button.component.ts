import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CA_ARROW, CaCta } from '../ca.types';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';

/**
 * Shared ca- CTA button. '#ca-*' anchors smooth-scroll with the source's
 * -50px offset; '#contact' → /contact-us; '/path/' → routerLink.
 * Hero buttons use the hc- variants (hc-primary purple / hc-outline).
 */
@Component({
  selector: 'app-ca-button',
  imports: [RouterLink],
  templateUrl: './ca-button.component.html',
  styleUrl: './ca-button.component.scss',
})
export class CaButtonComponent {
  private readonly smoothScroll = inject(SmoothScrollService);
  readonly link = input.required<CaCta>();
  protected readonly arrow = CA_ARROW;

  protected get classes(): string {
    const l = this.link();
    const base = l.variant === 'hc-primary' || l.variant === 'hc-outline' ? 'hc-btn' : 'ca-btn';
    const variant = l.variant === 'hc-primary' ? 'hc-btn-primary'
      : l.variant === 'hc-outline' ? 'hc-btn-outline'
      : `ca-btn-${l.variant ?? 'primary'}`;
    return `${base} ${variant}${l.large ? (base === 'ca-btn' ? ' ca-btn-lg' : '') : ''}`;
  }

  protected get isContact(): boolean {
    return this.link().href === '#contact';
  }

  protected get isPageAnchor(): boolean {
    return this.link().href.startsWith('#ca-');
  }

  protected scrollTo(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(this.link().href, { offset: -50 });
  }
}
