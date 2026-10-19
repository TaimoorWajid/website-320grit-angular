import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OcRevealDirective } from '../oc-reveal.directive';
import { OcParallaxDirective } from '../oc-parallax.directive';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';

/** Owner-centric hero: parallax bg + glow + scroll hint. */
@Component({
  selector: 'app-oc-hero',
  imports: [OcRevealDirective, OcParallaxDirective, RouterLink],
  templateUrl: './oc-hero.component.html',
  styleUrl: './oc-hero.component.scss',
})
export class OcHeroComponent {
  private readonly smoothScroll = inject(SmoothScrollService);

  protected scrollTo(selector: string, event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(selector, { offset: -60 });
  }
}
