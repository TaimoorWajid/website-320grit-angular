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
}
