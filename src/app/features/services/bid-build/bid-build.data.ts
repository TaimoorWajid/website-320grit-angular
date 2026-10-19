import type { ServicePageData } from '../shared/service-page/service-page.data';
import { SHARED_INDUSTRIES } from '../shared/service-page/service-content.data';

/**
 * Bid-Build page data — traditional design-bid-build delivery.
 * Competitive bidding, transparent pricing, disciplined execution.
 */
export const BID_BUILD_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'BID-<br><span>BUILD</span>',
    subtitleHtml: 'ONE BID. <span>ONE BUILDER.</span><br>TOTAL ACCOUNTABILITY.',
    descHtml: 'A proven delivery method built on competitive bidding, transparent pricing, and disciplined execution \u2014 giving owners clarity and control from the first bid to final handover.',
    buttonText: 'LET\u2019S TALK YOUR PROJECT',
    buttonHref: '/contact-us',
    image: '/assets/images/labour-320-grit.webp',
    imageAlt: 'Bid-Build construction site',
    useHcContainer: true,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Why<br><span>Bid-Build?</span>',
    desc: 'The traditional delivery method owners trust for maximum price competition, complete design control, and clear contractual accountability.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path> </svg>`, title: 'Competitive Pricing', text: 'Multiple qualified bids drive true market pricing for your project.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2L2 7l10 5 10-5-10-5z"></path> <path d="M2 17l10 5 10-5"></path> <path d="M2 12l10 5 10-5"></path> </svg>`, title: 'Design Control', text: 'You own the design completely before construction is ever priced.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path> <polyline points="14 2 14 8 20 8"></polyline> <line x1="16" y1="13" x2="8" y2="13"></line> <line x1="16" y1="17" x2="8" y2="17"></line> </svg>`, title: 'Clear Contracts', text: 'Lump-sum agreements with defined scope leave no ambiguity.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> </svg>`, title: 'Risk Clarity', text: 'Well-defined roles mean everyone knows exactly what they own.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS<br><span>BID-BUILD?</span>',
    paragraphs: [
      'Bid-build is the traditional project delivery method: the owner first completes design with their architect and engineers, then solicits competitive bids from qualified contractors, awards the contract to the best value proposal, and construction begins.',
      'This sequential approach gives owners complete control over design, transparent price competition, and straightforward contractual relationships. It remains the most widely used delivery method for public works and private commercial construction alike.',
    ],
    image: '/assets/images/commercial-construction.webp',
    imageAlt: 'Exploded cutaway view of commercial building',
    labels: [
    { title: 'COMPLETE DESIGN FIRST', text: 'Full plans and specs finished before any contractor prices the work.' },
    { title: 'COMPETITIVE BIDDING', text: 'Multiple contractors bid on identical documents — true apples-to-apples.' },
    { title: 'LUMP-SUM CONTRACT', text: 'Fixed price for defined scope protects the owner\u2019s budget.' },
    { title: 'CLEAR ACCOUNTABILITY', text: 'Designer owns design quality; builder owns construction execution.' },
    { title: 'OWNER CONTROL', text: 'You direct the design vision without builder influence on aesthetics.' },
    ],
  },
  process: {
    eyebrow: '04 \u2014 HOW WE WORK',
    titleHtml: 'Our Bid-Build Process',
    steps: [
    { num: '01', title: 'Design Development', text: 'Work with your architect to complete construction documents.' },
    { num: '02', title: 'Competitive Bidding', text: 'We prepare detailed, transparent bids on your finished plans.' },
    { num: '03', title: 'Award & Mobilize', text: 'Contract awarded, permits pulled, site mobilized efficiently.' },
    { num: '04', title: 'Build & Deliver', text: 'Disciplined construction management through final handover.' },
    ],
  },
  industries: { title: 'Industries We Build For', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-320',
    dataSection: 'why-320',
    eyebrow: '06 \u2014 OUR DIFFERENCE',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We bring contractor discipline to the bid-build process — accurate bidding, transparent communication, and relentless execution from groundbreaking to closeout.',
    cards: [
    { num: '01', title: 'Accurate Bidding', text: 'Detailed quantity takeoffs and honest pricing — no low-ball bids with hidden change orders.' },
    { num: '02', title: 'Schedule Discipline', text: 'Critical-path management keeps your project on track through every phase.' },
    { num: '03', title: 'Quality Craftsmanship', text: 'Skilled supervision and rigorous QA at every milestone and inspection.' },
    { num: '04', title: 'Transparent Communication', text: 'Weekly reporting, open-book cost tracking, and direct access to your project team.' },
    ],
  },
  cta: {
    sectionId: 'get-started',
    eyebrow: '07 \u2014 GET STARTED',
    titleHtml: 'Competitive Bids.<br>Quality Builds.',
    sub: 'Have completed plans? Let\u2019s provide a detailed, transparent bid for your project.',
    buttonText: 'Request a Bid',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: '08 \u2014 COMMON QUESTIONS',
    titleHtml: 'Bid-Build <span>FAQs</span>',
    body: 'Everything owners ask us about the bid-build delivery method.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '/contact-us',
    items: [
    { q: 'How is bid-build different from design-build?', a: 'In bid-build, design is completed before contractors bid — giving you full design control and price competition. In design-build, one team handles both design and construction for faster, integrated delivery.' },
    { q: 'When is bid-build the right choice?', a: 'Bid-build excels when you want maximum design control, transparent price competition, or when project requirements demand a traditional public-bid process.' },
    { q: 'Do I need completed plans before contacting you?', a: 'For accurate bidding, yes — we need construction documents. But contact us early; we can review preliminary plans and advise on bid readiness.' },
    { q: 'How do you ensure bid accuracy?', a: 'Detailed quantity takeoffs, current material pricing, qualified subcontractor quotes, and contingency planning based on plan completeness.' },
    { q: 'What happens if the design changes during construction?', a: 'Changes are documented through formal change orders with transparent pricing before work proceeds — no surprises.' },
    { q: 'How long does the bid process take?', a: 'Typically 3–6 weeks from receiving complete documents, depending on project size and complexity.' },
    ],
  },
  sidenav: [
    { section: 'hero', num: '01', label: 'Overview' },
    { section: 'service-why', num: '02', label: 'Why Bid-Build?' },
    { section: 'service-what-is', num: '03', label: 'What is Bid-Build?' },
    { section: 'process', num: '04', label: 'Our Process' },
    { section: 'industries', num: '05', label: 'Industries We Serve' },
    { section: 'why-320', num: '06', label: 'Why 320 Grit?' },
    { section: 'get-started', num: '07', label: 'Get Started' },
    { section: 'faq', num: '08', label: 'FAQs' },
  ],
};
