import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

/** Scroll distance (px) past which the button fades in. */
const REVEAL_THRESHOLD = 600;

/**
 * Floating scroll-to-top button (fixed, bottom-right corner). Hidden until
 * the user scrolls ~600px down; clicking smooth-scrolls back to the top
 * (instant jump under prefers-reduced-motion).
 */
@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
})
export class ScrollTopComponent {
  private readonly destroyRef = inject(DestroyRef);

  /** True while the page is scrolled past the reveal threshold. */
  protected readonly visible = signal(false);

  constructor() {
    // Browser only — afterNextRender never runs on the server.
    afterNextRender(() => {
      const onScroll = () => {
        this.visible.set(window.scrollY > REVEAL_THRESHOLD);
      };
      onScroll();
      // Scroll events from the document's scrolling element are captured at
      // document (they do not bubble to window in every browser/runtime).
      document.addEventListener('scroll', onScroll, { passive: true, capture: true });
      this.destroyRef.onDestroy(() => document.removeEventListener('scroll', onScroll, true));
    });
  }

  protected scrollToTop(): void {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }
}
