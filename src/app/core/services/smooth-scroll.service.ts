import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../animations/animation.util';

/**
 * Single app-wide Lenis smooth-scroll instance, wired to ScrollTrigger.
 * Mirrors the theme's helper.js initSmoothScroll() (duration 1.2, custom easing).
 * Never initialized on the server or for reduced-motion users.
 */
@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private lenis: Lenis | null = null;
  private rafId = 0;

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.lenis || prefersReducedMotion()) return;

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    this.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => this.lenis?.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  scrollTo(target: string | number | HTMLElement, options?: { offset?: number }): void {
    if (this.lenis) {
      this.lenis.scrollTo(target as never, options);
      return;
    }
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  stop(): void {
    this.lenis?.stop();
  }

  start(): void {
    this.lenis?.start();
  }

  destroy(): void {
    if (this.lenis) {
      this.lenis.off('scroll', ScrollTrigger.update);
      this.lenis.destroy();
      this.lenis = null;
    }
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
