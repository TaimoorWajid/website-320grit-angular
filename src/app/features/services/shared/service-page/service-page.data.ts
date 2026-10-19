/**
 * Data model for the shared forensic-style service page.
 * One template component renders all five service routes; each route
 * supplies its own data object (the WP theme copy-pasted the whole
 * template per page — this removes that redundancy).
 *
 * `*Html` fields accept the original inline markup (<br>, <span>)
 * verbatim from the theme templates and are rendered via [innerHTML].
 * `iconSvg` fields carry the original inline SVGs from the templates.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface WhyCard {
  iconSvg: string;
  title: string;
  text: string;
}

export interface WhatIsLabel {
  title: string;
  text: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

export interface IndustryItem {
  iconSvg: string;
  label: string;
}

export interface ChooseCard {
  num: string;
  title: string;
  text: string;
}

export interface ServiceCard {
  /** Optional — falls back to a gradient thumb when the asset is missing. */
  image?: string;
  imageAlt: string;
  title: string;
  text: string;
}

export interface ExpertiseCard {
  num: string;
  title: string;
  text: string;
}

export interface HeroData {
  /** e.g. "hero" — commercial uses "service-hero". */
  id: string;
  eyebrow: string;
  titleHtml: string;
  subtitleHtml: string;
  descHtml: string;
  buttonText: string;
  buttonHref: string;
  /** Optional — hero renders a gradient backdrop when absent. */
  image?: string;
  imageAlt: string;
  /** Bid-Build wraps hero content in .hc-container instead of .service-hero__content. */
  useHcContainer: boolean;
}

export interface SidenavItem {
  section: string;
  num: string;
  label: string;
}

export interface ServicePageData {
  hero: HeroData;
  why: {
    eyebrow: string;
    titleHtml: string;
    desc: string;
    cards: WhyCard[];
  };
  whatIs: {
    eyebrow: string;
    titleHtml: string;
    paragraphs: string[];
    /** Optional — labels render over a gradient panel when absent. */
    image?: string;
    imageAlt: string;
    labels: WhatIsLabel[];
  };
  /** Forensic / design-build / commercial only. */
  servicesGrid?: { eyebrow: string; titleHtml: string; cards: ServiceCard[] };
  /** Expert-witness only. */
  expertiseGrid?: { eyebrow: string; titleHtml: string; cards: ExpertiseCard[] };
  process: { eyebrow: string; titleHtml: string; steps: ProcessStep[] };
  industries: {
    title: string;
    /** Optional — section renders a dark gradient when absent. */
    bgImage?: string;
    items: IndustryItem[];
  };
  whyChoose: {
    /** Bid-Build uses id/data-section "why-320"; the forensic template uses "why-choose". */
    sectionId: string;
    dataSection: string;
    eyebrow: string;
    titleHtml: string;
    body: string;
    cards: ChooseCard[];
  };
  cta: {
    /** Bid-Build uses id "get-started"; the forensic template uses "cta". */
    sectionId: string;
    /** Optional — numbered eyebrow like "07 — GET STARTED". */
    eyebrow?: string;
    titleHtml: string;
    sub: string;
    buttonText: string;
    buttonHref: string;
  };
  faq: {
    eyebrow: string;
    titleHtml: string;
    body: string;
    linkText: string;
    linkHref: string;
    items: FaqItem[];
  };
  /** Bid-Build only — renders the scroll-spy rail. */
  sidenav?: SidenavItem[];
}
