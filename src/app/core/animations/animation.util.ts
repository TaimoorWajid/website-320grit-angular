/** Shared animation helpers. All browser access is guarded. */

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isCoarsePointer(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

/**
 * Default scroll-reveal config mirroring the theme's helper.js scrollReveal():
 * y: 50, opacity 0, expo.out, stagger 0.1, start 'top 85%'.
 */
export const SCROLL_REVEAL_DEFAULTS = {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'expo.out',
  stagger: 0.1,
  start: 'top 85%',
} as const;
