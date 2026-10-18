import type { ChooseCard, FaqItem, IndustryItem, ProcessStep } from './forensic-service-page.data';

/**
 * Shared forensic-accounting content chunks.
 * The WP theme pasted these verbatim into the bid-build, design-build and
 * commercial templates (staging renders the leftovers); here they live once
 * and are imported by each page's data file. Icons are the original inline
 * SVGs extracted from forensic-accounting.php.
 */

export const SHARED_INDUSTRIES: IndustryItem[] = [
  { label: 'Construction', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M2 22h20M2 6h20M2 10h20M2 14h20M2 18h20M6 2v20M18 2v20" /> </svg>` },
  { label: 'Real Estate', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" /> </svg>` },
  { label: 'Manufacturing', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M2 20h20M5 20v-8h3v8M10 20V8h3v12M15 20v-5h3v5M4 12l4-4 4 4 4-4 4 4" /> </svg>` },
  { label: 'Healthcare', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M22 12h-4l-3 9L9 3l-3 9H2" /> </svg>` },
  { label: 'Financial Services', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <rect x="2" y="3" width="20" height="14" rx="2" /> <line x1="8" y1="21" x2="16" y2="21" /> <line x1="12" y1="17" x2="12" y2="21" /> </svg>` },
  { label: 'Government', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> </svg>` },
  { label: 'Retail', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" /> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /> </svg>` },
  { label: 'Energy', iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> </svg>` },
];

export const FORENSIC_PROCESS: ProcessStep[] = [
  { num: '01', title: 'Case Intake', text: 'Understand the matter, objectives, and scope of engagement.' },
  { num: '02', title: 'Document Review', text: 'Collect and review relevant financial records and supporting data.' },
  { num: '03', title: 'Investigation & Analysis', text: 'Analyse transactions, identify issues, and quantify findings.' },
  { num: '04', title: 'Report Preparation', text: 'Deliver a clear, well-supported report with conclusions and evidence.' },
  { num: '05', title: 'Expert Testimony', text: 'Provide testimony and defend findings in legal proceedings.' },
];

export const FORENSIC_WHY_CHOOSE: ChooseCard[] = [
  { num: '01', title: 'Expertise That Counts', text: 'Experienced forensic accountants with deep technical and industry knowledge.' },
  { num: '02', title: 'Objective & Independent', text: 'We provide unbiased opinions you can rely on with full credibility.' },
  { num: '03', title: 'Court-Ready Results', text: 'Our reports and testimony meet the highest legal and professional standards.' },
  { num: '04', title: 'Focused on Your Outcome', text: 'We deliver insights that strengthen your case and drive results.' },
];

export const FORENSIC_FAQ: FaqItem[] = [
  {
    q: 'What is the difference between forensic accounting and auditing?',
    a: 'Auditing verifies that financial statements are fairly presented. Forensic accounting goes deeper — investigating fraud, quantifying damages, tracing assets, and providing expert testimony for legal proceedings.',
  },
  {
    q: 'How long does a forensic investigation typically take?',
    a: 'Duration varies by complexity. A straightforward fraud investigation may take 3-6 months, while complex litigation support or asset tracing can extend 12-18 months. We provide detailed timelines during intake.',
  },
  {
    q: 'Will your findings hold up in court?',
    a: 'Yes. Our reports adhere to the highest professional and legal standards. Our experts have testified in federal and state courts, arbitrations, and regulatory hearings with strong credibility.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We serve construction, real estate, manufacturing, healthcare, financial services, government, retail, and energy sectors. Our team includes industry-specialized forensic accountants.',
  },
  {
    q: 'How do you maintain independence and objectivity?',
    a: 'We operate under strict ethical guidelines. Our opinions are impartial, evidence-based, and defensible. We disclose any potential conflicts of interest upfront and maintain documentation for peer review.',
  },
  {
    q: 'Can you help with contract disputes and lost profits?',
    a: 'Absolutely. We quantify economic damages, analyse contract terms, assess cost overruns, and calculate lost profits using accepted financial methodologies suitable for litigation.',
  },
];
