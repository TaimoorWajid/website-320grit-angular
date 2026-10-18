/* Shared content shapes for the about-us (hc-) feature. */

export interface CtaLink {
  label: string;
  /** '#contact' → /contact-us · '#fragment' → in-page · '/path/' → route */
  href: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export interface HeroImage {
  src: string;
  alt: string;
  fetchPriority?: 'high' | 'low';
}

export interface HeroData {
  id: string;
  label: string;
  /** HTML: may contain <br> and <span class="hc-orange"> */
  title: string;
  description: string;
  descriptionWidth?: string;
  image: HeroImage;
  ctas?: CtaLink[];
}

export interface ValueCard {
  /** raw <path>/<circle> markup rendered inside a feather-style svg */
  icon?: string;
  /** awards-style cards use eyebrow instead of an icon */
  eyebrow?: string;
  title: string;
  text?: string;
}

export interface SectionHeader {
  label?: string;
  /** HTML for the heading */
  title?: string;
  text?: string;
  centered?: boolean;
  maxWidth?: string;
}

export interface SplitData {
  id: string;
  background?: string;
  label?: string;
  /** HTML heading */
  title: string;
  paragraphs?: string[];
  cta?: CtaLink;
  image: HeroImage;
  imagePosition: 'left' | 'right';
  quote?: { text: string; cite: string };
  checklist?: string[];
  iconRows?: { icon: string; title: string; text: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

export interface StatItem {
  icon: string;
  num: string;
  label: string;
}

export interface ImpactItem {
  num: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export interface ProjectCard {
  img: string;
  title: string;
  loc?: string;
  text: string;
  linkLabel?: string;
}

/** Feather-style svg wrapper for raw path markup from the spec. */
export function iconSvg(paths: string, size = 24, strokeWidth = 1.75): string {
  return (
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true">${paths}</svg>`
  );
}

/** 16px button arrow from the spec (§2d). */
export const ARROW_SVG =
  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">` +
  `<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" ` +
  `stroke-linecap="round" stroke-linejoin="round"/></svg>`;
