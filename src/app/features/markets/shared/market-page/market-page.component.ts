import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';
import { CtaBandComponent } from '../../../../shared/components/cta-band/cta-band.component';
import { MarketIconComponent } from '../market-icon/market-icon.component';
import { MarketPageData, RichLine } from './market-page.data';

/**
 * Shared layout for the 6 rr-* market pages (railroads, advanced-technology,
 * behavioral-health, education, hospitality, tenant-improvement).
 * Renders the identical 7-section skeleton from per-page MarketPageData.
 * Healthcare uses its own bespoke page component.
 */
@Component({
  selector: 'app-market-page',
  imports: [RouterLink, RevealDirective, MarketIconComponent, CtaBandComponent],
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

  /** CTA band title: RichLine[] → HTML with <br> breaks and accent spans. */
  protected ctaTitle(): string {
    return richLinesToHtml(this.data().cta.heading);
  }
}

/** Shared RichLine[] → HTML renderer (accent spans + line breaks). */
export function richLinesToHtml(lines: RichLine[]): string {
  return lines
    .map((line, i) => {
      const text = line.accent ? `<span class="hc-orange">${line.text}</span>` : line.text;
      const br = i < lines.length - 1 && !line.inline ? '<br />' : '';
      return text + br;
    })
    .join('');
}
