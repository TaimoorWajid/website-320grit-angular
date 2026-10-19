import type { ServicePageData } from '../shared/service-page/service-page.data';
import {
  SHARED_FAQ,
  SHARED_PROCESS,
  SHARED_WHY_CHOOSE,
  SHARED_INDUSTRIES,
} from '../shared/service-page/service-content.data';

/**
 * Page data — copy verbatim from the WP template (see notes/pages/services.md).
 * Bid-build-specific hero/why/what-is plus leftover forensic-accounting sections (process, industries, why-choose, CTA, FAQ) \u2014 staging renders them; reproduced as-is. Renders the scroll-spy sidenav.
 */
export const BID_BUILD_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'BID-<br><span>BUILD</span>',
    subtitleHtml: 'ONE BID. <span>ONE BUILDER.</span><br>TOTAL ACCOUNTABILITY.',
    descHtml: 'A proven delivery method built on competitive bidding, transparent pricing, and disciplined execution \u2014 giving owners clarity and control from the first bid to final handover.',
    buttonText: 'LET\u2019S TALK YOUR CASE',
    buttonHref: '/contact-us',
    image: '/assets/images/labour-320-grit.webp',
    imageAlt: 'Bid-Build Service',
    useHcContainer: true,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Why<br><span>Bid-Build?</span>',
    desc: 'Owners choose Bid-Build for its simplicity, transparency, and ability to deliver high-quality projects with minimized risk and clear accountability.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path> </svg>`, title: 'Cost Transparency', text: 'Know exactly what you’re paying for before construction begins.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 2L2 7l10 5 10-5-10-5z"></path> <path d="M2 17l10 5 10-5"></path> <path d="M2 12l10 5 10-5"></path> </svg>`, title: 'Unbiased & Independent', text: 'Our opinions are objective, impartial, and defensible.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg>`, title: 'Evidence That Holds', text: 'Reports built to meet legal standards and stand in court.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path> <path d="M9 12l2 2 4-4"></path> </svg>`, title: 'Strategic Impact', text: 'We turn financial insights into stronger case outcomes.' },
    ],
  },
  whatIs: {
    eyebrow: '02 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS<br><span>BID-BUILD?</span>',
    paragraphs: [
      'The Bid-Build method is a linear, sequential approach where the owner first completes the design with their architect and engineers, then solicits competitive bids from qualified contractors, awards the contract, and construction begins.',
      'It is simple, structured, and designed to deliver projects with clarity and control \u2014 giving owners a clear scope, competitive pricing, and a single point of construction accountability.',
    ],
    imageAlt: 'Exploded cutaway view of commercial building',
    labels: [
    { title: 'STRUCTURE', text: 'Built to perform.' },
    { title: 'BUILDING ENVELOPE', text: 'Protects what\u2019s inside.' },
    { title: 'MECHANICAL / ELECTRICAL', text: 'Powering performance.' },
    { title: 'INTERIOR SYSTEMS', text: 'Designed for function.' },
    { title: 'FOUNDATION', text: 'Built on strength.' },
    ],
  },
  process: { eyebrow: 'How We Work', titleHtml: 'Our Investigative Process', steps: SHARED_PROCESS },
  industries: { title: 'Industries We Support', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-320',
    dataSection: 'why-320',
    eyebrow: 'Our Difference',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We combine deep technical expertise with an unwavering commitment to objectivity, delivering findings that withstand the highest scrutiny.',
    cards: SHARED_WHY_CHOOSE,
  },
  cta: {
    sectionId: 'get-started',
    titleHtml: 'Financial Truth.<br>Stronger Cases.',
    sub: 'Let our forensic accounting experts uncover the facts and deliver the clarity you need to move forward.',
    buttonText: 'Schedule a Consultation',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: 'Common Questions',
    titleHtml: 'Everything You Need to Know',
    body: 'Answers to the most frequently asked questions about our forensic accounting services and engagement process.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '#contact',
    items: SHARED_FAQ,
  },
  sidenav: [
    { section: 'hero', num: '01', label: 'Overview' },
    { section: 'service-why', num: '02', label: 'Why Bid-Build?' },
    { section: 'service-what-is', num: '03', label: 'What is Bid-Build?' },
    { section: 'process', num: '04', label: 'Our Process' },
    { section: 'industries', num: '05', label: 'Industries we serve' },
    { section: 'why-320', num: '06', label: 'Why 320 Grit?' },
    { section: 'get-started', num: '07', label: 'Get Started' },
    { section: 'faq', num: '08', label: 'Frequently Asked Questions' },
  ],
};
