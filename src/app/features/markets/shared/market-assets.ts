/**
 * Local image fallbacks for the markets pages.
 *
 * The original theme hotlinks Unsplash URLs for every market image
 * (see notes/pages/markets.md §10). This Angular build references only
 * self-hosted originals from public/assets/images (project constraint),
 * mapped to the closest thematic match. To restore the exact originals,
 * swap these values for the Unsplash URLs recorded in the spec.
 */
export const MARKET_IMG = {
  /** Site banner — generic construction imagery (heroes, CTA backgrounds). */
  banner: '/assets/images/320-Grit-Banner-Image.webp',
  /** Cleanroom / laboratory interior — healthcare + advanced technology. */
  lab: '/assets/images/ChatGPT-Image-Jul-30-2026-08_25_58-AM.webp',
  /** Hotel lobby interior — hospitality. */
  lobby: '/assets/images/ChatGPT-Image-Jul-30-2026-08_30_56-AM.webp',
  /** Luxury residence at dusk — calm interiors (behavioral health). */
  residence: '/assets/images/ChatGPT-Image-Jul-27-2026-08_14_05-PM.webp',
  /** Business planning documents — planning/approach contexts. */
  planning: '/assets/images/ChatGPT-Image-Aug-3-2026-04_54_56-PM.webp',
  /** Construction crew on site — railroads, approach imagery. */
  labour: '/assets/images/labour-320-grit.webp',
  /** Railway track at dusk — Rail Roads market card bg (staging). */
  railroad: '/assets/images/railroad-infrastructure-bg.webp',
  /** Hospital main entrance at dusk — Healthcare market card bg (staging). */
  healthcare: '/assets/images/healthcare-bg.webp',
  /** Behavioral health facility — Behavioral Health market card bg (staging). */
  behavioralHealth: '/assets/images/ChatGPT-Image-Jul-30-2026-07_53_38-AM.webp',
  /** Commercial building — Commercial market card bg (staging). */
  commercial: '/assets/images/commercial-construction.webp',
  /** Industrial feature image — education contexts. */
  industries: '/assets/images/Industries-we-serve-feature-image.webp',
} as const;
