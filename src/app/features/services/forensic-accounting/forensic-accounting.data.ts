import type { ServicePageData } from '../shared/service-page/service-page.data';
import { SHARED_INDUSTRIES } from '../shared/service-page/service-content.data';

/**
 * Forensic Accounting page data — independent financial investigation
 * for litigation, disputes, and regulatory matters.
 */
export const FORENSIC_ACCOUNTING_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'FORENSIC<br><span>ACCOUNTING</span>',
    subtitleHtml: 'FOLLOW THE NUMBERS.<br>UNCOVER THE TRUTH.',
    descHtml: 'Independent financial investigation for litigation and disputes.<br>Facts you can trust. Evidence that holds up in court.',
    buttonText: 'LET\u2019S TALK YOUR CASE',
    buttonHref: '/contact-us',
    image: '/assets/images/forensic-expert-bg-hero.webp',
    imageAlt: 'Forensic accounting investigation',
    useHcContainer: false,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Financial Clarity.<br>Objective Truth.<br><span>Stronger Outcomes.</span>',
    desc: 'Our forensic accounting services deliver unbiased analysis, uncover financial irregularities, and provide the evidence you need to make informed decisions and win cases.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> </svg>`, title: 'Detailed Analysis', text: 'We examine every transaction to uncover the complete financial picture.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> <polyline points="14 2 14 8 20 8" /> <circle cx="11.5" cy="14.5" r="2.5" /> <path d="m16 19-1.5-1.5" /> </svg>`, title: 'Unbiased & Independent', text: 'Our opinions are objective, impartial, and defensible under scrutiny.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> <circle cx="12" cy="11" r="2" /> <path d="M12 13v3" /> </svg>`, title: 'Evidence That Holds', text: 'Reports built to meet legal standards and withstand cross-examination.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /> <path d="M22 2 12 12" /> <path d="M16 2h6v6" /> </svg>`, title: 'Strategic Impact', text: 'We turn complex financial findings into clear litigation advantages.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS<br><span>FORENSIC ACCOUNTING?</span>',
    paragraphs: [
      'Forensic accounting applies accounting, auditing, and investigative skills to examine financial data, uncover irregularities, and deliver expert findings for legal, regulatory, and business objectives.',
      'Whether investigating fraud, quantifying damages, or supporting litigation, our forensic accountants combine technical rigor with clear communication — producing reports and testimony that judges, juries, and opposing counsel respect.',
    ],
    image: '/assets/images/what-is-forensic-accounting.webp',
    imageAlt: 'Forensic accounting document analysis',
    labels: [
    { title: 'FRAUD DETECTION', text: 'Identify fraudulent activities, misrepresentations, and asset theft.' },
    { title: 'FINANCIAL INVESTIGATIONS', text: 'Uncover hidden irregularities and unexplained discrepancies.' },
    { title: 'DAMAGE QUANTIFICATION', text: 'Calculate the full financial impact of losses and misconduct.' },
    { title: 'EXPERT REPORTS', text: 'Authoritative analysis prepared to evidentiary standards.' },
    { title: 'LITIGATION SUPPORT', text: 'Expert testimony and strategic support through trial.' },
    ],
  },
  servicesGrid: {
    eyebrow: '04 \u2014 WHAT WE DO',
    titleHtml: 'Our Forensic Accounting Services',
    cards: [
    { image: '/assets/images/fa-fraud-investigation.webp', imageAlt: 'Fraud Investigation', title: 'Fraud Investigation', text: 'Uncover hidden fraud, embezzlement, and financial misconduct with methodical evidence gathering.' },
    { image: '/assets/images/fa-financial-statement.webp', imageAlt: 'Financial Statement Fraud', title: 'Financial Statement Fraud', text: 'Identify material misstatements, revenue manipulation, and deceptive reporting.' },
    { image: '/assets/images/fa-valuation-disputes.webp', imageAlt: 'Business Valuation Disputes', title: 'Business Valuation Disputes', text: 'Independent valuation analysis for shareholder disputes and transactions.' },
    { image: '/assets/images/fa-lost-profits.webp', imageAlt: 'Lost Profits Analysis', title: 'Lost Profits Analysis', text: 'Quantify economic damages, lost earnings, and future income impacts.' },
    { image: '/assets/images/fa-contract-claims.webp', imageAlt: 'Contract & Claim Analysis', title: 'Contract & Claim Analysis', text: 'Analyze construction claims, cost overruns, and contract disputes.' },
    { image: '/assets/images/fa-dispute-resolution.webp', imageAlt: 'Dispute Resolution Support', title: 'Dispute Resolution Support', text: 'Financial expertise for mediation, arbitration, and litigation.' },
    ],
  },
  process: {
    eyebrow: '05 \u2014 HOW WE WORK',
    titleHtml: 'Our Investigative Process',
    steps: [
    { num: '01', title: 'Engage & Scope', text: 'Define objectives, identify key issues, and establish the investigation plan.' },
    { num: '02', title: 'Collect & Preserve', text: 'Secure financial records with proper chain-of-custody protocols.' },
    { num: '03', title: 'Analyze & Trace', text: 'Follow the money through detailed transaction analysis and tracing.' },
    { num: '04', title: 'Report & Testify', text: 'Deliver defensible findings and expert testimony when needed.' },
    ],
  },
  industries: { title: 'Industries We Serve', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-choose',
    dataSection: 'why-choose',
    eyebrow: '06 \u2014 OUR DIFFERENCE',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We combine deep financial expertise with construction industry knowledge — a rare combination that gives our findings unmatched credibility in construction-related disputes.',
    cards: [
    { num: '01', title: 'Construction Insight', text: 'We understand how construction money actually moves — from bid to change order to claim.' },
    { num: '02', title: 'Court-Tested', text: 'Our experts have testified in mediation, arbitration, and trial proceedings.' },
    { num: '03', title: 'Independent Always', text: 'We work for the truth, not the highest bidder. Our opinions withstand challenge.' },
    { num: '04', title: 'Clear Communication', text: 'Complex financial findings translated into language judges and juries understand.' },
    ],
  },
  cta: {
    sectionId: 'cta',
    eyebrow: '07 \u2014 GET STARTED',
    titleHtml: 'Financial Truth.<br>Stronger Cases.',
    sub: 'Suspect fraud or need damages quantified? Let our forensic experts uncover the facts.',
    buttonText: 'Schedule a Consultation',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: '08 \u2014 COMMON QUESTIONS',
    titleHtml: 'Forensic Accounting <span>FAQs</span>',
    body: 'Answers to common questions about forensic accounting engagements.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '/contact-us',
    items: [
    { q: 'When should I hire a forensic accountant?', a: 'When you suspect fraud, need to quantify financial damages, face a partnership dispute, or require expert financial testimony for litigation.' },
    { q: 'How is forensic accounting different from a regular audit?', a: 'Audits verify financial statements for compliance. Forensic accounting investigates specific suspicions with litigation in mind — digging deeper and documenting evidence to legal standards.' },
    { q: 'Will your findings hold up in court?', a: 'Yes. Our reports follow evidentiary standards, maintain chain of custody, and our experts are experienced in deposition and trial testimony.' },
    { q: 'How long does a forensic investigation take?', a: 'Simple matters resolve in weeks; complex fraud or damage quantification can take several months. We scope timelines upfront after initial assessment.' },
    { q: 'Is our information kept confidential?', a: 'Absolutely. All engagements are protected by confidentiality agreements, and litigation-related work may fall under attorney work-product privilege.' },
    { q: 'What does a forensic accounting engagement cost?', a: 'Costs depend on scope and complexity. We provide transparent fee estimates after understanding your matter — contact us for an assessment.' },
    ],
  },
  sidenav: [
    { section: 'hero', num: '01', label: 'Overview' },
    { section: 'service-why', num: '02', label: 'The Advantage' },
    { section: 'service-what-is', num: '03', label: 'What is Forensic Accounting?' },
    { section: 'services', num: '04', label: 'Our Services' },
    { section: 'process', num: '05', label: 'Our Process' },
    { section: 'industries', num: '06', label: 'Industries We Serve' },
    { section: 'why-choose', num: '07', label: 'Why 320 Grit?' },
    { section: 'get-started', num: '08', label: 'Get Started' },
    { section: 'faq', num: '09', label: 'FAQs' },
  ],
};
