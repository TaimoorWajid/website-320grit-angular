import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { AnimationManagerService } from '../../../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';
import { gsap } from 'gsap';

/**
 * Homepage hero: full-height banner with clip-path bg reveal,
 * staggered text entrance, dual CTAs and the desktop-only
 * "25+ years of experience" badge card.
 */
@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {
  private readonly animations = inject(AnimationManagerService);
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      const ctx = this.animations.createContext(() => {
        // Background clip-path reveal (Salient data-bg-animation="clip-path").
        gsap.fromTo(
          '.home-hero__bg',
          { clipPath: 'inset(0 0 0 0)' },
          { clipPath: 'inset(80px 30px 0 30px round 20px)', duration: 1.4, ease: 'expo.out', delay: 0.1 },
        );
        // Text column entrance.
        gsap.from('.home-hero__content > *', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.12,
          delay: 0.4,
        });
        gsap.from('.hero-exp-card', { scale: 0.8, opacity: 0, duration: 1, ease: 'expo.out', delay: 0.9 });
      });
      if (ctx) this.destroyRef.onDestroy(() => ctx.revert());
    });
  }

  goTo(href: string, event: Event): void {
    const el = document.querySelector(href);
    if (!el) return;
    event.preventDefault();
    this.smoothScroll.scrollTo(el as HTMLElement);
  }
}
