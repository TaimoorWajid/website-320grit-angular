/**
 * Shared SVG icon registry for the markets pages.
 * Feather-style stroke icons; path data is verbatim from the theme's
 * markets-we-served templates (see notes/pages/markets.md §3).
 * Rendered via MarketIconComponent inside a 24×24 viewBox svg with
 * fill="none" stroke="currentColor".
 */
export const MARKET_ICONS: Record<string, string> = {
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  wrench:
    '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
  'building-windows': '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M12 7v6"/>',
  'home-door': '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/>',
  droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
  building: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/>',
  users:
    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  user: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'file-text':
    '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'bar-chart': '<path d="M18 20V10M12 20V4M6 20v-6"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
  'users-alt':
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 1 0 7.75"/>',
  train:
    '<path d="M4 15.5V8.5C4 7.67 4.67 7 5.5 7H18.5C19.33 7 20 7.67 20 8.5V15.5M4 15.5H20M4 15.5L2 19H22L20 15.5M8 7V4M16 7V4M9 11H15"/>',
  sun: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/>',
  'box-grid': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/>',
  'layout-grid': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  'user-alt': '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  utensils: '<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  flask: '<path d="M9 3h6v6l-3 9-3-9V3zM9 3H5v2h4M15 3h4v2h-4"/>',
  'flask-simple': '<path d="M9 3h6v6l-3 9-3-9V3z"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/>',
  'graduation-cap': '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
  microscope:
    '<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
  school: '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>',
  'user-alt2': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
  plus: '<path d="M12 2v20M2 12h20"/>',
  'plus-circle': '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
  'building-medical': '<path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  'shield-plus': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v6M9 11h6"/>',
  bed: '<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>',
  'info-circle': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  'sun-alt': '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  warehouse: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
  bridge: '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
  'train-alt': '<path d="M4 15.5V8.5C4 7.67 4.67 7 5.5 7H18.5C19.33 7 20 7.67 20 8.5V15.5M4 15.5H20M4 15.5L2 19H22L20 15.5M8 11h8"/>',
  package:
    '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  'check-square': '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
  partition: '<path d="M3 3h18v18H3zM3 9h18M9 3v18"/>',
  // Icons for markets cards 03-08 (staging + SEO content)
  pencil: '<path d="M15 4l5 5"/><path d="M13 6l5 5"/><path d="M4 20l7-7"/><path d="M8 4l4 4"/><path d="M6 2L2 6l4 4"/>',
  'shield-dot': '<path d="M12 2L5 5v6c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V5z"/><circle cx="12" cy="11" r="2"/>',
  bell: '<path d="M4 17h16"/><path d="M6 17a6 6 0 0112 0"/><path d="M12 5v1"/><circle cx="12" cy="4" r="1"/>',
};

/** The 16×16 arrow used inside primary/ghost buttons (verbatim from templates). */
export const BTN_ARROW_SVG =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
