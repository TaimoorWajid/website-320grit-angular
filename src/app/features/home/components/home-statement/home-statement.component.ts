import { Component, DestroyRef, ElementRef, ViewChild, afterNextRender, inject } from '@angular/core';
import { AnimationManagerService } from '../../../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { gsap } from 'gsap';
import type { AnimationItem } from 'lottie-web';

/**
 * Statement band: three giant lines with a line-by-line mask reveal
 * (Salient "line-reveal-by-space"), plus the origami bird Lottie from
 * staging beside "SOLUTIONS BUILT" — self-hosted JSON
 * (`/assets/animations/solutions-bird.json`), looped at 0.7x speed
 * exactly as staging's nectar-lottie settings specify.
 */
@Component({
  selector: 'app-home-statement',
  templateUrl: './home-statement.component.html',
  styleUrl: './home-statement.component.scss',
})
export class HomeStatementComponent {
  private readonly animations = inject(AnimationManagerService);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('bird', { static: true }) private readonly birdEl!: ElementRef<HTMLElement>;

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      const ctx = this.animations.createContext(() => {
        gsap.utils.toArray<HTMLElement>('.home-statement__line').forEach((line, i) => {
          const inner = line.querySelector('.home-statement__line-inner');
          if (!inner) return;
          gsap.fromTo(
            inner,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.1,
              ease: 'expo.out',
              delay: i * 0.12,
              scrollTrigger: { trigger: line, start: 'top 88%', once: true },
            },
          );
        });
      });
      if (ctx) this.destroyRef.onDestroy(() => ctx.revert());
    });

    // Bird Lottie — client-only (afterNextRender never runs on the
    // server) and dynamically imported so lottie-web stays out of the
    // initial bundle. Reduced motion: render the first frame paused.
    afterNextRender(() => {
      let anim: AnimationItem | undefined;
      let destroyed = false;
      this.destroyRef.onDestroy(() => {
        destroyed = true;
        anim?.destroy();
      });
      void import('lottie-web').then(({ default: lottie }) => {
        if (destroyed) return;
        anim = lottie.loadAnimation({
          container: this.birdEl.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: !prefersReducedMotion(),
          path: '/assets/animations/solutions-bird.json',
        });
        anim.setSpeed(0.7);
      });
    });
  }
}
