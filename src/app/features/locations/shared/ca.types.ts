/* Shared content shapes for the locations (ca-) feature. */

export interface CaCta {
  label: string;
  /** '#ca-*' → smooth scroll w/ -50px offset · '#contact' → /contact-us · '/path/' → route · 'https://…' → new tab */
  href: string;
  variant?: 'primary' | 'ghost' | 'ghost-purple' | 'hc-primary' | 'hc-outline';
  large?: boolean;
}

export interface CaMarket {
  title: string;
  text: string;
  img: string;
  /** Industry page route for the card's "Explore Market" link. */
  route: string;
}

export interface CaIconCard {
  icon: string;
  title: string;
  text: string;
}

export interface CaFaq {
  q: string;
  a: string;
}

/** Feather-style svg wrapper for raw path markup from the spec. */
export function caIcon(paths: string, size = 24, strokeWidth = 1.6): string {
  return (
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true">${paths}</svg>`
  );
}

/** 16px button arrow (spec §2d). */
export const CA_ARROW =
  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">` +
  `<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" ` +
  `stroke-linecap="round" stroke-linejoin="round"/></svg>`;
