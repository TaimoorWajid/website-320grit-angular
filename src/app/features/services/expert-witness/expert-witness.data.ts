import type { ServicePageData } from '../shared/service-page/service-page.data';
import {
  SHARED_FAQ,
  SHARED_PROCESS,
  SHARED_WHY_CHOOSE,
  SHARED_INDUSTRIES,
} from '../shared/service-page/service-content.data';

/**
 * Page data — copy verbatim from the WP template (see notes/pages/services.md).
 * Fully expert-witness-specific template (template-parts/components/expert-witness/expert-witness.php). Source typo "Experties" preserved. Hero image asset is missing \u2014 gradient fallback renders until the file is added.
 */
export const EXPERT_WITNESS_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 EXPERT WITNESS',
    titleHtml: 'EXPERT<br><span>WITNESS</span>',
    subtitleHtml: 'TRUTH. CLARITY. CREDIBILITY.',
    descHtml: 'Independent analysis. Technical accuracy.<br>Stronger cases.',
    buttonText: 'LET\u2019S TALK YOUR CASE',
    buttonHref: '/contact-us',
    image: '/assets/images/ChatGPT-Image-Aug-9-2026-12_23_33-AM.webp',
    imageAlt: 'Expert Witness - Construction Litigation',
    useHcContainer: false,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Technical Experties.<br>Objective Opinion.<br><span>Real Impact.</span>',
    desc: 'Our expert witnesses deliver clear, unbiased opinions backed by deep construction experience, technical knowledge, and industry standards. We help attorneys, owners, and organizations understand the facts\u2014and win in court.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 8v4l3 3"></path> </svg>`, title: 'Objective & Independent', text: 'Unbiased opinions that stand up to challenge.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M9 11l3 3L22 4"></path> <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path> </svg>`, title: 'Technology Sound', text: 'Rooted in codes, standards, and proven methodology.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg>`, title: 'Courtroom Ready', text: 'Clear reports. Confident testimony. Credible results.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path> </svg>`, title: 'Experience That Matters', text: 'Decades of real-world construction and claims experience.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS AN<br><span>EXPERT WITNESS?</span>',
    paragraphs: [
      'An expert witness provides specialized knowledge, technical analysis, and professional opinions to help the court understand complex construction issues beyond common knowledge.',
    ],
    image: '/assets/images/What-is-an-expert-witness.webp',
    imageAlt: 'Exploded cutaway view of commercial building',
    labels: [
    { title: 'CONSTRUCTION DEFECTS', text: 'Identify construction defects and violations.' },
    { title: 'CLAIMS & DAMAGES', text: 'Uncover delay, disruption and productivity loss.' },
    { title: 'STANDARD OF CARE', text: 'Code compliance and industry standards.' },
    { title: 'Contract Disputes', text: 'Scope, change orders, interpretations.' },
    { title: 'FORENSIC INVESTIGATION', text: 'Failure analysis and root cause identification.' },
    ],
  },
  expertiseGrid: {
    eyebrow: 'OUR EXPERTISE',
    titleHtml: 'COVERING THE FULL SPECTRUM<br><span>OF CONSTRUCTION DISPUTES</span>',
    cards: [
    { num: '01', title: 'Construction Defects', text: 'Identify defects, design & installation issues.' },
    { num: '02', title: 'Delay & Disruption Analysis', text: 'Quantify delays, impacts, and responsibilities.' },
    { num: '03', title: 'Quantum & Damages', text: 'Calculate costs, losses, and financial impacts.' },
    { num: '04', title: 'Contract Interpretation', text: 'Analyze terms, obligations, and entitlements.' },
    { num: '05', title: 'Forensic Engineering', text: 'Investigate failures and determine root cause.' },
    { num: '06', title: 'Expert Testimony', text: 'Deliver clear, credible, and compelling testimony.' },
    ],
  },
  process: {
    eyebrow: 'How We Work',
    titleHtml: 'Our Expert Witness Process',
    steps: [
    { num: '01', title: 'Case Evaluation', text: 'Understand the matter, objectives, and scope of engagement.' },
    { num: '02', title: 'Investigation & Analysis', text: 'Collect and review relevant financial records and supporting data.' },
    { num: '03', title: 'Expert Report', text: 'Analyse transactions, identify issues, and quantify findings.' },
    { num: '04', title: 'Support & Preparation', text: 'Deliver a clear, well-supported report with conclusions and evidence.' },
    { num: '05', title: 'Trial Testimony', text: 'Provide testimony and defend findings in legal proceedings.' },
    ],
  },
  industries: { title: 'Industries We Support', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-choose',
    dataSection: 'why-choose',
    eyebrow: 'Our Difference',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We combine deep technical expertise with an unwavering commitment to objectivity, delivering findings that withstand the highest scrutiny.',
    cards: SHARED_WHY_CHOOSE,
  },
  cta: {
    sectionId: 'cta',
    titleHtml: 'Expertise You Can Trust. <br>Answers That Win Cases.',
    sub: 'Let\u2019s discuss how we can support your case with clarity, credibility, and confidence.',
    buttonText: 'Schedule a Consultation',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: 'Common Questions',
    titleHtml: 'Everything You Need to Know',
    body: 'Answers to the most frequently asked questions about our forensic accounting services and engagement process.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '#contact',
    items: [
  {
    q: 'What is an expert witness in forensic accounting?',
    a: 'An expert witness is a qualified professional who provides independent, specialized knowledge to the court. In forensic accounting, this includes interpreting complex financial data, explaining methodologies, quantifying damages, and offering objective opinions that help judges and juries understand the evidence.',
  },
  {
    q: 'When should I engage an expert witness?',
    a: 'Engage an expert early \u2014 ideally during case assessment or discovery. Early involvement strengthens strategy, identifies key financial issues, supports settlement discussions, and ensures reports and testimony meet court deadlines and admissibility standards.',
  },
  {
    q: 'Will your expert testimony be admissible in court?',
    a: 'Yes. Our experts meet the standards required under Daubert, Frye, and equivalent state rules. We prepare clear, well-supported opinions grounded in accepted methodologies, maintain thorough documentation, and are experienced in both direct and cross-examination.',
  },
  {
    q: 'What types of cases do your expert witnesses handle?',
    a: 'We provide expert witness services in commercial litigation, fraud and embezzlement cases, shareholder disputes, divorce and matrimonial proceedings, construction claims, insurance disputes, bankruptcy matters, and regulatory investigations.',
  },
  {
    q: 'How do you prepare for deposition and trial testimony?',
    a: 'Preparation includes detailed case review, development of demonstrative exhibits, mock examinations, and close coordination with counsel. Our experts focus on clear communication so complex financial concepts are understandable to judges and juries.',
  },
  {
    q: 'Can the same professional serve as both forensic accountant and expert witness?',
    a: 'Yes, when independence and objectivity are maintained. Many of our senior professionals investigate the financial issues and later testify as experts. We carefully manage roles to avoid conflicts and ensure opinions remain impartial and defensible.',
  },
    ],
  },
};
