import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Central gate for GSAP usage.
 * - Registers ScrollTrigger exactly once, browser-only (SSR-safe).
 * - Hands out gsap.context() scopes so components can revert all their
 *   animations/tweens/ScrollTriggers on destroy.
 */
@Injectable({ providedIn: 'root' })
export class AnimationManagerService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private registered = false;

  /** Register GSAP plugins once. Safe to call repeatedly; no-op on server. */
  setup(): void {
    if (!this.isBrowser || this.registered) return;
    gsap.registerPlugin(ScrollTrigger);
    this.registered = true;
  }

  /**
   * Create a scoped GSAP context for a component's animations.
   * Call `ctx.revert()` in ngOnDestroy (or DestroyRef.onDestroy).
   */
  createContext(setup: (context: gsap.Context) => void, scope?: Element | string): gsap.Context | null {
    if (!this.isBrowser) return null;
    this.setup();
    return gsap.context(setup, scope);
  }

  /** Refresh ScrollTrigger after layout changes (images/fonts loading). */
  refresh(): void {
    if (!this.isBrowser || !this.registered) return;
    ScrollTrigger.refresh();
  }

  get browser(): boolean {
    return this.isBrowser;
  }
}
