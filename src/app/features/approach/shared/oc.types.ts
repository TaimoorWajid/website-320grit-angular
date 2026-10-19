/* Shared content shapes for the approach (oc-) feature. */

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

