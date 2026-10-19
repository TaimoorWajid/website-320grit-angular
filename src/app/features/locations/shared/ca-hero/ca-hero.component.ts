import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaRevealDirective } from '../ca-reveal.directive';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';

/**
 * California hero — premium full-viewport hero matching the site's index
 * pages: orange eyebrow, big headline with purple accent, intro paragraph,
 * .btn-explore CTAs, local banner image with a dark gradient overlay.
 */
@Component({
  selector: 'app-ca-hero',
  imports: [CaRevealDirective, RouterLink],
  templateUrl: './ca-hero.component.html',
  styleUrl: './ca-hero.component.scss',
})
export class CaHeroComponent {
  private readonly smoothScroll = inject(SmoothScrollService);

  protected scrollToCta(event: Event): void {
    event.preventDefault();
    this.smoothScroll.scrollTo('#ca-cta');
  }
}
