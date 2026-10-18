import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { AnimationManagerService } from '../../../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';
import { gsap } from 'gsap';

/**
 * Statement band: three giant lines with a line-by-line mask reveal
 * (Salient "line-reveal-by-space"). The decorative Lottie on staging
 * is omitted (external CDN asset); the type treatment is preserved.
 */
@Component({
  selector: 'app-home-statement',
  templateUrl: './home-statement.component.html',
  styleUrl: './home-statement.component.scss',
})
export class HomeStatementComponent {
  private readonly animations = inject(AnimationManagerService);
  private readonly destroyRef = inject(DestroyRef);

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
  }
}
