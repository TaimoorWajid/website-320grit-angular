import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';
import { MarketIconComponent } from '../market-icon/market-icon.component';
import { MarketButton, MarketPageData } from './market-page.data';

/**
 * Shared layout for the 6 rr-* market pages (railroads, advanced-technology,
 * behavioral-health, education, hospitality, tenant-improvement).
 * Renders the identical 7-section skeleton from per-page MarketPageData.
 * Healthcare uses its own bespoke page component.
 */
@Component({
  selector: 'app-market-page',
  imports: [RouterLink, RevealDirective, MarketIconComponent],
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.scss',
})
export class MarketPageComponent {
  readonly data = input.required<MarketPageData>();

  private readonly smoothScroll = inject(SmoothScrollService);

  /** Stagger delays mirror the PHP `hc-delay-min($i+1,4)` loop. */
  protected capDelay(i: number): number {
    return Math.min(i + 1, 4) * 0.1;
  }

  /** In-page anchors smooth-scroll with the 80px header offset. */
  protected onAnchor(event: Event, anchor: string | undefined): void {
    if (!anchor) return;
    event.preventDefault();
    this.smoothScroll.scrollTo(anchor, { offset: 80 });
  }

  /** Primary + ghost buttons carry the arrow SVG; outline buttons do not. */
  protected hasArrow(btn: MarketButton): boolean {
    return btn.variant !== 'outline';
  }

  protected arrowSvg(btn: MarketButton): string {
    const cls = btn.variant === 'ghost' ? ' class="hc-arrow"' : '';
    return `<svg${cls} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
}
