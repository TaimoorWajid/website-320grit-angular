import { Component, input } from '@angular/core';
import { HeroData } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { HcButtonComponent } from '../hc-button/hc-button.component';

/** Shared hc- page hero (section.hc-hero.rr-hero): bg image + overlay + labeled content. */
@Component({
  selector: 'app-about-hero',
  imports: [HcRevealDirective, HcButtonComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly hero = input.required<HeroData>();
}
