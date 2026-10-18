import type { ForensicServicePageData } from '../shared/forensic-service-page/forensic-service-page.data';
import {
  FORENSIC_FAQ,
  FORENSIC_PROCESS,
  FORENSIC_WHY_CHOOSE,
  SHARED_INDUSTRIES,
} from '../shared/forensic-service-page/service-content.data';

/**
 * Page data — copy verbatim from the WP template (see notes/pages/services.md).
 * Canonical forensic-accounting template (template-parts/components/forensic-accounting/forensic-accounting.php). Hero image asset is missing from public/assets/images — the hero renders its gradient fallback until the file is added.
 */
export const FORENSIC_ACCOUNTING_DATA: ForensicServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'FORENSIC<br><span>ACCOUNTING</span>',
    subtitleHtml: 'FOLLOW THE NUMBERS. <br>UNCOVER THE TRUTH. ',
    descHtml: 'Independent financial investigation.<br>Facts you can trust. Evidence that holds up in court.',
    buttonText: 'LET\u2019S TALK YOUR CASE',
    buttonHref: '/contact-us',
    image: '/assets/images/forensic-expert-bg-hero.webp',
    imageAlt: 'Forensic Accounting',
    useHcContainer: false,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Financial Clarity.<br>Objective Truth.<br><span>Stronger <br>Outcomes.</span>',
    desc: 'Our forensic accounting services deliver unbiased analysis, uncover financial irregularities, and provide the evidence you need to make informed decisions and win cases.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> </svg>`, title: 'Detailed Analysis', text: 'We examine every detail to uncover the facts.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> <polyline points="14 2 14 8 20 8" /> <circle cx="11.5" cy="14.5" r="2.5" /> <path d="m16 19-1.5-1.5" /> </svg>`, title: 'Unbiased & Independent', text: 'Our opinions are objective, impartial, and defensible.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> <circle cx="12" cy="11" r="2" /> <path d="M12 13v3" /> </svg>`, title: 'Evidence That Holds', text: 'Reports built to meet legal standards and stand in court.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /> <path d="M22 2 12 12" /> <path d="M16 2h6v6" /> </svg>`, title: 'Strategic Impact', text: 'We turn financial insights into stronger case outcomes.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS<br><span>FORENSIC ACCOUNTING?</span>',
    paragraphs: [
      'Forensic accounting applies accounting, auditing, and investigative skills to examine financial data, uncover irregularities, and deliver expert findings for legal, regulatory, and business objectives.',
    ],
    image: '/assets/images/what-is-forensic-accounting.webp',
    imageAlt: 'Exploded cutaway view of commercial building',
    labels: [
    { title: 'FRAUD DETECTION', text: 'Identify fraudulent activites, misrepresentations, and assert theft' },
    { title: 'FINANCIAL INVESTIGATIONS', text: 'Uncover financial irregularities and discrepancies.' },
    { title: 'QUANTIFY DAMAGES', text: 'Calculate financial impact of losses.' },
    { title: 'EXPERT REPORTS', text: 'Provide authoritative analysis and testimony.' },
    { title: 'LITIGATION SUPPORT', text: 'Provide expert testimony and support for legal proceedings.' },
    ],
  },
  servicesGrid: {
    eyebrow: 'What We Do',
    titleHtml: 'Our Forensic Accounting Services',
    cards: [
    { imageAlt: 'Fraud Investigation', title: 'Fraud Investigation', text: 'Uncover hidden fraud, embezzlement, and financial misconduct.' },
    { imageAlt: 'Financial Statement Fraud', title: 'Financial Statement Fraud', text: 'Identify material misstatements and deceptive reporting.' },
    { imageAlt: 'Business Valuation Disputes', title: 'Business Valuation Disputes', text: 'Independent valuation analysis for disputes and transactions.' },
    { imageAlt: 'Lost Profits Analysis', title: 'Lost Profits Analysis', text: 'Quantify economic loss and future income impacts.' },
    { imageAlt: 'Contract & Claim Analysis', title: 'Contract & Claim Analysis', text: 'Analyse contract terms, costs, and entitlement disputes.' },
    { imageAlt: 'Dispute Resolution Support', title: 'Dispute Resolution Support', text: 'Support mediation, arbitration, and litigation processes.' },
    ],
  },
  process: { eyebrow: 'How We Work', titleHtml: 'Our Investigative Process', steps: FORENSIC_PROCESS },
  industries: { title: 'Industries We Support', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-choose',
    dataSection: 'why-choose',
    eyebrow: 'Our Difference',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We combine deep technical expertise with an unwavering commitment to objectivity, delivering findings that withstand the highest scrutiny.',
    cards: FORENSIC_WHY_CHOOSE,
  },
  cta: {
    sectionId: 'cta',
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
    items: FORENSIC_FAQ,
  },
};
