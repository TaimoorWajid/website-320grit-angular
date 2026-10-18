import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MARKET_ICONS } from '../market-icons.data';

/**
 * Renders one registry icon: 24x24 viewBox, fill none,
 * stroke currentColor - matching the theme's icon markup.
 *
 * NOTE: the SVG markup is set via the host's innerHTML (not [innerHTML]
 * on the <svg> itself) because Domino (Angular SSR) does not implement
 * innerHTML on SVG elements. The markup bypasses Angular's sanitizer
 * because the server-side sanitizer strips SVG elements from [innerHTML],
 * leaving icons empty in prerendered HTML.
 */
@Component({
  selector: 'app-market-icon',
  template: '',
  host: { '[innerHTML]': 'svgHtml()' },
  styles: [
    `
      :host {
        display: inline-flex;
        flex-shrink: 0;
      }
      :host svg {
        display: block;
      }
    `,
  ],
})
export class MarketIconComponent {
  readonly name = input.required<string>();
  readonly size = input<number>(24);
  readonly stroke = input<string>('1.75');

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly svgHtml = computed((): SafeHtml => {
    const paths = MARKET_ICONS[this.name()] ?? '';
    const s = this.size();
    const sw = this.stroke();
    const svg =
      '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="' + sw + '" aria-hidden="true">' + paths + '</svg>';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });
}
