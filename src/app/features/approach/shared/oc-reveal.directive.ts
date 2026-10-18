import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { prefersReducedMotion } from '../../../core/animations/animation.util';

export type OcRevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

/**
 * [ocReveal] — feature-local reveal for the approach pages, mirroring
 * assets/js/our-approach/owner-centric.js: IO (threshold 0.12,
 * rootMargin '0px 0px -8% 0px') adds .is-in after an optional data-delay
 * (ms), then unobserves. Reduced-motion → .is-in immediately.
 */
@Directive({ selector: '[ocReveal]' })
export class OcRevealDirective implements OnInit, OnDestroy {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  /** reveal variant: up | left | right | scale | fade */
  readonly variant = input<OcRevealVariant>('up', { alias: 'ocReveal' });
  /** delay in ms (mirrors data-delay) */
  readonly ocDelay = input<number>(0);
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
          const delay = this.ocDelay();
          this.timer = setTimeout(() => target.classList.add('is-in'), delay);
          this.observer?.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
    if (this.timer) clearTimeout(this.timer);
  }
}
