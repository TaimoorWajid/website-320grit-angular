/**
 * Careers SVG icon registry — path data copied VERBATIM from the
 * careers PHP templates. All are stroke icons (stroke="currentColor",
 * round caps) except where noted (bookmark fill variant, pin/briefcase
 * fill glyphs, LinkedIn brand glyph).
 */

const ARROW_PATH = '<path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';

function svg(size: number, inner: string, extra = ''): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"${extra}>${inner}</svg>`;
}

export const CAREERS_ICONS = {
  /** .grit-btn__arrow (16px; 14px variant in some spots — same path) */
  arrow: (size = 16) => svg(size, ARROW_PATH, ' class="grit-btn__arrow"'),
  /** Search magnifier (filter bar) */
  search: (size = 20) =>
    svg(
      size,
      '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      ' class="grit-op-filters__search-icon"',
    ),
  /** Magnifier-minus (empty state) */
  searchEmpty: () =>
    svg(
      48,
      '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M20 20l-3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    ),
  /** Filters toggle (mobile drawer) */
  filters: () =>
    svg(
      18,
      '<path d="M4 6h16M4 12h10M4 18h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    ),
  /** Close X (mobile drawer) */
  close: () =>
    svg(24, '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
  /** Document (job cards) */
  doc: () =>
    svg(
      24,
      '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    ),
  /** Location pin (fill glyph) */
  pin: () =>
    svg(
      14,
      '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="currentColor"/>',
    ),
  /** Briefcase (fill glyph) */
  briefcase: () =>
    svg(
      14,
      '<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>',
    ),
  /** Plain link arrow (grit-link-arrow, 14px) */
  linkArrow: () => svg(14, ARROW_PATH),
  /** Circle-check 20px (check lists) */
  checkCircle: () =>
    svg(
      20,
      '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      ' class="grit-check-icon"',
    ),
  /** Circle-check 16px (featured position bullets) */
  checkCircleSm: () =>
    svg(
      16,
      '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /** Plain check 16px (job-detail "Why 320 Grit" list) */
  check: () =>
    svg(
      16,
      '<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      ' class="grit-check-icon grit-check-icon--sm"',
    ),
  /** Circle-check 64px (success states) */
  checkCircleLg: () =>
    svg(
      64,
      '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M8 12l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /** Bookmark save button (outline + filled paths; visibility via .is-saved CSS) */
  bookmark: () =>
    `<svg class="grit-icon grit-save-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path class="grit-save-outline" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="grit-save-filled" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" fill="currentColor" style="display:none"/></svg>`,
  /** Trash (saved-positions remove) */
  trash: () =>
    svg(
      20,
      '<path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /** Upload (file dropzone) */
  upload: (size = 32) =>
    svg(
      size,
      '<path d="M12 16V8M12 8l-3 3M12 8l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    ),
  /** LinkedIn brand glyph (share) */
  linkedin: () =>
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  /** Email (share) */
  email: () =>
    svg(
      18,
      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/><path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2"/>',
    ),
  /** Copy link (share) */
  copyLink: () =>
    svg(
      18,
      '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    ),
  /* ---- Value-card icons (careers landing, 32px) ---- */
  /** Purpose Driven + Collaborative (same icon, verbatim) */
  users: () =>
    svg(
      32,
      '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    ),
  /** Growth Mindset */
  chart: () =>
    svg(
      32,
      '<path d="M3 3v18h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 14l4-4 4 4 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /** Integrity */
  shield: () =>
    svg(
      32,
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /** Safety First */
  shieldCheck: () =>
    svg(
      32,
      '<path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
  /* ---- Introduce-yourself reason icons (28px) ---- */
  /** Future Opportunities */
  target: () =>
    svg(
      28,
      '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>',
    ),
  /** Make an Impact */
  layers: () =>
    svg(
      28,
      '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
};

export type CareersIconName = keyof typeof CAREERS_ICONS;
