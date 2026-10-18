import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { prefersReducedMotion } from '../../../core/animations/animation.util';

export type CaRevealVariant = 'up' | 'left' | 'right' | 'fade';

/**
 * [caReveal] — feature-local reveal for the locations pages, mirroring
 * assets/js/our-locations/california.js: IO (threshold 0.12, rootMargin
 * '0px 0px -6% 0px') adds .is-in after an optional data-delay (ms), then
 * unobserves. Reduced-motion → .is-in immediately.
 */
@Directive({ selector: '[caReveal]' })
export class CaRevealDirective implements OnInit, OnDestroy {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  readonly variant = input<CaRevealVariant>('up', { alias: 'caReveal' });
  readonly caDelay = input<number>(0);
  private observer: IntersectionObserver | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.setAttribute('data-reveal', this.variant());
    if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) {
      node.classList.add('is-in');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          this.timer = setTimeout(() => target.classList.add('is-in'), this.caDelay());
          this.observer?.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    if (this.timer) clearTimeout(this.timer);
  }
}
