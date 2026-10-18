import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { prefersReducedMotion } from '../../../core/animations/animation.util';

/**
 * [hcReveal] — feature-local reveal for the about-us pages, mirroring
 * assets/js/markets-we-served/healthcare.js exactly: IntersectionObserver
 * (threshold 0.12, rootMargin '0px 0px -40px 0px') adds .hc-visible and
 * unobserves. Delay variants come from .hc-delay-1..4 classes in the
 * template. Reduced-motion → visible immediately.
 */
@Directive({ selector: '[hcReveal]' })
export class HcRevealDirective implements OnInit, OnDestroy {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('hc-reveal');
    if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) {
      node.classList.add('hc-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('hc-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
