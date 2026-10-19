import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { OcParallaxDirective } from '../../../shared/oc-parallax.directive';
import { SmoothScrollService } from '../../../../../core/services/smooth-scroll.service';

/** Owner Representation hero — same oc-hero visual pattern, OR copy. */
@Component({
  selector: 'app-or-hero',
  imports: [OcRevealDirective, OcParallaxDirective, RouterLink],
  templateUrl: './or-hero.component.html',
  styleUrl: './or-hero.component.scss',
})
export class OrHeroComponent {
  private readonly smoothScroll = inject(SmoothScrollService);

  protected scrollTo(selector: string, event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(selector, { offset: -60 });
  }
}
