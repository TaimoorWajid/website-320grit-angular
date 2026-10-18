/**
 * Data model for the shared rr-* market page layout
 * (railroads + advanced-technology + behavioral-health + education +
 * hospitality + tenant-improvement). Mirrors the PHP template variables
 * ($overview_points, $capabilities, $project_types, $approach_steps …).
 */

/**
 * A heading line; `accent` renders it in the orange span.
 * Lines are joined with <br> unless `inline` is set, in which case
 * the segment flows inline (for headings like
 * `Let’s Build What <span>Moves</span> Tomorrow.`).
 */
export interface RichLine {
  text: string;
  accent?: boolean;
  inline?: boolean;
}

export interface MarketButton {
  label: string;
  variant: 'primary' | 'outline' | 'ghost';
  /** In-page anchor (e.g. '#rr-cta') — smooth-scrolled with header offset. */
  anchor?: string;
  /** Router path (e.g. '/contact-us'). Takes precedence over anchor. */
  route?: string;
}

export interface IconText {
  icon: string;
  title: string;
  text: string;
}

export interface MarketHeroData {
  id: string;
  label: string;
  title: RichLine[];
  sub: RichLine[];
  subMaxWidth?: string;
  desc: string;
  buttons: MarketButton[];
  image: string;
}

export interface MarketOverviewData {
  id: string;
  label: string;
  /** Advanced Technology renders its overview label orange (inline style). */
  labelAccent?: boolean;
  title: RichLine[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
  points: IconText[];
}

export interface MarketCapabilitiesData {
  id: string;
  heading: string;
  cards: IconText[];
}

export interface MarketProjectsData {
  id: string;
  heading: string;
  items: IconText[];
  image: string;
  imageAlt: string;
  /** Railroads renders the image left, list right; others the reverse. */
  imageFirst?: boolean;
}

export interface MarketStep {
  icon?: string;
  num: string;
  title: string;
  text: string;
}

export interface MarketApproachData {
  id: string;
  label: string;
  /** Railroads-only H2 ('How We Deliver'). */
  heading?: string;
  steps: MarketStep[];
  /** Railroads: icon circles + arrows between steps. */
  showIcons?: boolean;
  showArrows?: boolean;
  /** Tenant improvement uses a 4-column grid. */
  columns?: 4 | 5;
  /** Tenant improvement: big orange number + title in separate divs. */
  splitNumTitle?: boolean;
}

export type PartnerVariant =
  | 'text-image'
  | 'checklist'
  | 'commitment'
  | 'result'
  | 'checklist-difference';

export interface MarketPartnerData {
  id: string;
  variant: PartnerVariant;
  label: string;
  /** Absent on tenant-improvement (label + checklist only). */
  heading?: RichLine[];
  body: string;
  image?: string;
  imageAlt?: string;
  checks?: string[];
  /** Education: in-page CTA button under the body. */
  ctaButton?: MarketButton;
  /** Tenant improvement: heading above the diff grid. */
  diffHeading?: string;
  diffCards?: IconText[];
  diffColumns?: 1 | 2 | 4;
  /** Behavioral health: horizontal icon-left cards. */
  diffCardLeft?: boolean;
}

export interface MarketCtaData {
  id: string;
  heading: RichLine[];
  body: string;
  button: MarketButton;
  bgImage: string;
}

export interface MarketPageData {
  seoTitle: string;
  canonicalPath: string;
  hero: MarketHeroData;
  overview: MarketOverviewData;
  capabilities: MarketCapabilitiesData;
  projects: MarketProjectsData;
  approach: MarketApproachData;
  partner: MarketPartnerData;
  cta: MarketCtaData;
}
