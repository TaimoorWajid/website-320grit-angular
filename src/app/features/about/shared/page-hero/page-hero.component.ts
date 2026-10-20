import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroData } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';

/** Shared hc- page hero: bg image + overlay + labeled content. Content sits at 10% left padding (6% mobile), matching the service-page hero standard. */
@Component({
  selector: 'app-about-hero',
  imports: [HcRevealDirective, RouterLink],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly hero = input.required<HeroData>();

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
