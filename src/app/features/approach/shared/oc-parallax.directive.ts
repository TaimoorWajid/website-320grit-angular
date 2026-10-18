import { Directive, ElementRef, OnDestroy, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { prefersReducedMotion } from '../../../core/animations/animation.util';

/**
 * [ocParallax] — feature-local parallax for [data-parallax] sections,
 * mirroring owner-centric.js: rAF-throttled scroll listener moves each
 * [data-speed] layer by translate3d(0, progress*speed*120px, 0) where
 * progress = (scrollY - sectionTop) / (sectionHeight + viewportHeight).
 * Skipped under reduced motion / SSR.
 */
@Directive({ selector: '[ocParallax]' })
export class OcParallaxDirective implements OnDestroy {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private rafId = 0;
  private ticking = false;
  private readonly onScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      this.rafId = requestAnimationFrame(() => this.update());
    }
  };

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.update();
    });
  }

  private update(): void {
    this.ticking = false;
    const section = this.el.nativeElement;
    const scrollY = window.pageYOffset;
    const rect = section.getBoundingClientRect();
    const sectionTop = scrollY + rect.top;
    const progress = (scrollY - sectionTop) / (rect.height + window.innerHeight);
    const layers = section.querySelectorAll<HTMLElement>('[data-speed]');
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset['speed'] || '0') || 0.3;
      layer.style.transform = `translate3d(0, ${progress * speed * 120}px, 0)`;
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
