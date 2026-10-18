/* Shared content shapes for the approach (oc-) feature. */

export interface OcCta {
  label: string;
  /** '#oc-*' → smooth scroll w/ -60px offset · '#contact' → /contact-us · '/path/' → route */
  href: string;
  variant?: 'primary' | 'ghost';
  large?: boolean;
}

export interface OcPillar {
  num: string;
  icon: string;
  title: string;
  text: string;
}

export interface OcOrbitNode {
  label: string;
  icon: string;
  name: string;
  role: string;
}

export interface OcProcessStep {
  num: string;
  icon: string;
  title: string;
  text: string;
  points: string[];
}

export interface OcChip {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

/** Feather-style svg wrapper for raw path markup from the spec. */
export function ocIcon(paths: string, size = 24, strokeWidth = 1.6): string {
  return (
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true">${paths}</svg>`
  );
}

/** 16px button arrow (spec §2d). */
export const OC_ARROW =
  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">` +
  `<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" ` +
  `stroke-linecap="round" stroke-linejoin="round"/></svg>`;
