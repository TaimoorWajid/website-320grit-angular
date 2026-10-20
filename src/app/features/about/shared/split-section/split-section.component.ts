import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SplitData, iconSvg } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/** Shared .ab-split two-column section (text + image, either order). */
@Component({
  selector: 'app-split-section',
  imports: [HcRevealDirective, RouterLink, SafeHtmlPipe],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.scss',
})
export class SplitSectionComponent {
  readonly split = input.required<SplitData>();

  protected icon(paths: string): string {
    return iconSvg(paths, 20, 1.75);
  }

  /**
   * In-page anchor CTAs (href="#section-id"): with <base href="/"> a raw
   * hash href resolves to the home page, so intercept the click and
   * scroll to the element instead (same pattern as the homepage hero).
   */
  protected scrollToHash(event: Event, href: string): void {
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', href);
  }
}
