import type { ServicePageData } from '../shared/service-page/service-page.data';
import { SHARED_INDUSTRIES } from '../shared/service-page/service-content.data';

/**
 * Expert Witness page data — construction dispute expertise,
 * technical analysis, and courtroom testimony.
 */
export const EXPERT_WITNESS_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'EXPERT<br><span>WITNESS</span>',
    subtitleHtml: 'TRUTH. CLARITY. CREDIBILITY.',
    descHtml: 'Independent construction expertise for litigation.<br>Technical accuracy. Stronger cases.',
    buttonText: 'LET\u2019S TALK YOUR CASE',
    buttonHref: '/contact-us',
    image: '/assets/images/ChatGPT-Image-Aug-9-2026-12_23_33-AM.webp',
    imageAlt: 'Expert Witness - Construction Litigation',
    useHcContainer: false,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Technical Expertise.<br>Objective Opinion.<br><span>Real Impact.</span>',
    desc: 'Our expert witnesses deliver clear, unbiased opinions backed by deep construction experience, technical knowledge, and industry standards — helping attorneys and owners win in mediation, arbitration, and court.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 8v4l3 3"></path> </svg>`, title: 'Objective & Independent', text: 'Unbiased opinions that stand up to the toughest cross-examination.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M9 11l3 3L22 4"></path> <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path> </svg>`, title: 'Technically Sound', text: 'Rooted in building codes, standards, and proven methodology.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg>`, title: 'Courtroom Ready', text: 'Clear reports. Confident testimony. Credible results.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path> </svg>`, title: 'Experience That Matters', text: 'Over 25 years of combined construction and claims experience.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE ROLE',
    titleHtml: 'WHAT IS AN<br><span>EXPERT WITNESS?</span>',
    paragraphs: [
      'An expert witness provides specialized knowledge, technical analysis, and professional opinions to help the court understand complex construction issues beyond common knowledge.',
      'From construction defects and delay claims to standard-of-care opinions, our experts translate technical complexity into clear, persuasive testimony that judges, juries, and arbitrators trust.',
    ],
    image: '/assets/images/What-is-an-expert-witness.webp',
    imageAlt: 'Construction expert witness analysis',
    labels: [
    { title: 'CONSTRUCTION DEFECTS', text: 'Identify defects, code violations, and workmanship failures.' },
    { title: 'DELAY & DISRUPTION', text: 'Analyze schedule impacts and quantify productivity loss.' },
    { title: 'STANDARD OF CARE', text: 'Opine on code compliance and industry practice.' },
    { title: 'CONTRACT DISPUTES', text: 'Interpret scope, change orders, and entitlements.' },
    { title: 'FAILURE ANALYSIS', text: 'Determine root cause of structural and system failures.' },
    ],
  },
  expertiseGrid: {
    eyebrow: '04 \u2014 OUR EXPERTISE',
    titleHtml: 'COVERING THE FULL SPECTRUM<br><span>OF CONSTRUCTION DISPUTES</span>',
    cards: [
    { num: '01', title: 'Construction Defects', text: 'Identify defects, design errors, and installation failures.' },
    { num: '02', title: 'Delay & Disruption Analysis', text: 'Quantify delays, impacts, and responsibility allocation.' },
    { num: '03', title: 'Quantum & Damages', text: 'Calculate costs, losses, and financial impacts of claims.' },
    { num: '04', title: 'Contract Interpretation', text: 'Analyze terms, obligations, changes, and entitlements.' },
    { num: '05', title: 'Forensic Engineering', text: 'Investigate failures and determine root cause.' },
    { num: '06', title: 'Expert Testimony', text: 'Deliver clear, credible, and compelling testimony.' },
    ],
  },
  process: {
    eyebrow: '05 \u2014 HOW WE WORK',
    titleHtml: 'Our Expert Witness Process',
    steps: [
    { num: '01', title: 'Case Evaluation', text: 'Review the matter, understand objectives, and assess expert needs.' },
    { num: '02', title: 'Investigation & Analysis', text: 'Inspect sites, review documents, and perform technical analysis.' },
    { num: '03', title: 'Expert Report', text: 'Prepare clear, well-supported opinions meeting evidentiary standards.' },
    { num: '04', title: 'Deposition Prep', text: 'Rigorous preparation for deposition and cross-examination.' },
    { num: '05', title: 'Trial Testimony', text: 'Confident, credible testimony that persuades decision-makers.' },
    ],
  },
  industries: { eyebrow: '06 \u2014 INDUSTRIES WE SERVE', title: 'Industries We Serve', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-choose',
    dataSection: 'why-choose',
    eyebrow: '07 \u2014 OUR DIFFERENCE',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We are builders first — our experts have managed the work they now opine on, giving our testimony a credibility that pure academics cannot match.',
    cards: [
    { num: '01', title: 'Builder Credibility', text: 'Our experts have built what they testify about — real field experience.' },
    { num: '02', title: 'Clear Communicators', text: 'Technical complexity translated for judges, juries, and arbitrators.' },
    { num: '03', title: 'Unimpeachable Independence', text: 'Objective opinions that hold firm under cross-examination.' },
    { num: '04', title: 'Full Litigation Support', text: 'From early case assessment through trial testimony and rebuttal.' },
    ],
  },
  cta: {
    sectionId: 'cta',
    eyebrow: '08 \u2014 GET STARTED',
    titleHtml: 'Expertise You Can Trust.<br>Testimony That Wins.',
    sub: 'Let\u2019s discuss how our construction experts can strengthen your case.',
    buttonText: 'Schedule a Consultation',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: '09 \u2014 COMMON QUESTIONS',
    titleHtml: 'Expert Witness <span>FAQs</span>',
    body: 'Answers to common questions about construction expert witness engagements.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '/contact-us',
    items: [
    { q: 'What does a construction expert witness do?', a: 'A construction expert witness provides specialized technical knowledge to help courts understand complex building issues — including defects, delays, cost disputes, and standard-of-care questions — through reports and testimony.' },
    { q: 'When should I engage an expert witness?', a: 'Engage early — ideally during case assessment or discovery. Early involvement strengthens strategy, identifies key technical issues, and ensures reports meet court deadlines and admissibility standards.' },
    { q: 'Will your testimony be admissible in court?', a: 'Yes. Our experts meet Daubert and Frye standards with opinions grounded in accepted methodology, thorough documentation, and experience in direct and cross-examination.' },
    { q: 'What types of construction disputes do you handle?', a: 'Construction defects, delay and disruption claims, cost overruns, contract disputes, design errors, building failures, and insurance claims across commercial, residential, and infrastructure projects.' },
    { q: 'How do you prepare for deposition and trial?', a: 'Through detailed case review, demonstrative exhibits, mock examinations, and close coordination with counsel — focused on communicating complex technical concepts clearly to judges and juries.' },
    { q: 'Can you serve as both consultant and testifying expert?', a: 'Yes, with proper role management. Many engagements begin as consulting and evolve to testimony. We maintain independence and objectivity throughout to protect credibility.' },
    ],
  },
  sidenav: [
    { section: 'hero', num: '01', label: 'Overview' },
    { section: 'service-why', num: '02', label: 'The Advantage' },
    { section: 'service-what-is', num: '03', label: 'What is Expert Witness?' },
    { section: 'service-expertise', num: '04', label: 'Our Expertise' },
    { section: 'process', num: '05', label: 'Our Process' },
    { section: 'industries', num: '06', label: 'Industries We Serve' },
    { section: 'why-choose', num: '07', label: 'Why 320 Grit?' },
    { section: 'get-started', num: '08', label: 'Get Started' },
    { section: 'faq', num: '09', label: 'FAQs' },
  ],
};
