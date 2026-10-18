import { Component, computed, input } from '@angular/core';
import { MARKET_ICONS } from '../market-icons.data';

/**
 * Renders one registry icon: 24x24 viewBox, fill none,
 * stroke currentColor - matching the theme's icon markup.
 *
 * NOTE: the SVG markup is set via the host's innerHTML (not [innerHTML]
 * on the <svg> itself) because Domino (Angular SSR) does not implement
 * innerHTML on SVG elements.
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

  protected readonly svgHtml = computed(() => {
    const paths = MARKET_ICONS[this.name()] ?? '';
    const s = this.size();
    const sw = this.stroke();
    return (
      '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="' + sw + '" aria-hidden="true">' + paths + '</svg>'
    );
  });
}
