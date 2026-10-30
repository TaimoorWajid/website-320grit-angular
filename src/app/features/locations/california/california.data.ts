import { CaFaq, CaIconCard, CaMarket } from '../shared/ca.types';

/* California location content — owner-centric, SEO-friendly copy written
   for 320 Grit's California construction consulting practice. */

export const MARKETS: CaMarket[] = [
  {
    title: 'Healthcare',
    text: 'Hospitals, medical office buildings, and imaging centers designed around patients, providers, and operational performance.',
    img: '/assets/images/healthcare-bg.webp',
    route: '/industries/healthcare',
  },
  {
    title: 'Behavioral Health',
    text: 'Purpose-built environments that balance safety, dignity, and effective care for California communities.',
    img: '/assets/images/ChatGPT-Image-Jul-30-2026-07_53_38-AM.webp',
    route: '/industries/behavioral-health',
  },
  {
    title: 'Advanced Technology',
    text: 'Laboratories, research facilities, and high-performance environments where precision is non-negotiable.',
    img: '/assets/images/ChatGPT-Image-Jul-30-2026-08_25_58-AM.webp',
    route: '/industries/advanced-technology',
  },
  {
    title: 'Education',
    text: 'K-12 campuses and higher-education facilities built for the way California students learn today — and tomorrow.',
    img: '/assets/images/hero-industries.webp',
    route: '/industries/education',
  },
  {
    title: 'Hospitality',
    text: 'Hotels, restaurants, and guest destinations where design, operations, and experience intersect.',
    img: '/assets/images/ChatGPT-Image-Jul-30-2026-08_30_56-AM.webp',
    route: '/industries/hospitality',
  },
  {
    title: 'Railroads & Transportation',
    text: 'Rail and transit infrastructure where coordination, safety, and reliability keep California moving.',
    img: '/assets/images/railroad-infrastructure-bg.webp',
    route: '/industries/railroads',
  },
];

export const APPROACH_STEPS: CaIconCard[] = [
  {
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Understand Your Objectives',
    text: 'We start with what the project must accomplish — your goals define every decision that follows.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Align Your Team',
    text: 'Owners, designers, consultants, and contractors move forward with one shared understanding of success.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Anticipate Your Risks',
    text: 'We surface budget, schedule, and compliance risks early — before they become expensive surprises.',
  },
  {
    icon: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    title: 'Deliver Your Outcome',
    text: 'Every milestone stays connected to the bigger picture: a project delivered on time and on budget.',
  },
];

export const SERVICES: CaIconCard[] = [
  {
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    title: 'Construction Management',
    text: 'Hands-on project leadership from preconstruction planning through final delivery.',
  },
  {
    icon: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
    title: 'Bid-Build',
    text: 'Structured procurement and disciplined construction delivery for California owners.',
  },
  {
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
    title: 'Design-Build',
    text: 'Integrated design and construction under one coordinated, accountable approach.',
  },
  {
    icon: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    title: 'Expert Witness',
    text: 'Construction expertise, technical analysis, and credible professional opinion.',
  },
  {
    icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    title: 'Forensic Accounting',
    text: 'Financial analysis and investigation for construction disputes and claims.',
  },
];

export const WORKS: { num: string; title: string; text: string }[] = [
  {
    num: '01',
    title: 'Complexity, Managed',
    text: 'California projects bring layers of stakeholders, regulations, and technical systems. We bring order — clear roles, clear decisions, clear accountability.',
  },
  {
    num: '02',
    title: 'Pace, Without Panic',
    text: 'Decisions move fast here. We keep momentum high without losing sight of budget, schedule, or long-term objectives.',
  },
  {
    num: '03',
    title: 'Coordination, by Design',
    text: 'The right information reaches the right people at the right time. That is not luck — it is how we run every project.',
  },
  {
    num: '04',
    title: 'Accountability, Always',
    text: 'When ownership is clear, nothing falls through the cracks. We make sure every commitment has a name and a date.',
  },
];

export const WHY: CaIconCard[] = [
  {
    icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Owner-First, Always',
    text: 'Your goals sit at the center of every recommendation, negotiation, and decision we make.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    title: 'Technical Depth',
    text: 'We pair field-tested construction knowledge with structured analysis — no guesswork, no jargon.',
  },
  {
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    title: 'Radical Clarity',
    text: 'Budgets, schedules, and risks explained in plain language you can act on with confidence.',
  },
  {
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    title: 'Early Risk Radar',
    text: 'We hunt for issues in preconstruction — when they are cheapest to solve, not during closeout.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'One Aligned Team',
    text: 'We work alongside your architects, engineers, and contractors — never in a silo, never against them.',
  },
];

export const BEYOND: CaIconCard[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Supporting Local Communities',
    text: '',
  },
  {
    icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
    title: 'Investing in the Future',
    text: '',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Building Lasting Relationships',
    text: '',
  },
];

export const FAQS: CaFaq[] = [
  {
    q: 'What construction services does 320 Grit provide in California?',
    a: 'We provide construction management, bid-build, design-build, expert witness, and forensic accounting services for owners and project teams across California — from preconstruction planning through final delivery.',
  },
  {
    q: 'What markets does 320 Grit serve in California?',
    a: 'Our California practice focuses on healthcare, behavioral health, advanced technology, education, hospitality, and railroads & transportation — markets where complexity rewards experienced, owner-side leadership.',
  },
  {
    q: 'Where in California does 320 Grit work?',
    a: 'We serve clients statewide — from San Diego and Los Angeles to the Bay Area and Sacramento — with our California headquarters in Irvine at 100 Spectrum Center Drive, Suite 900.',
  },
  {
    q: 'Does 320 Grit provide construction management in California?',
    a: 'Yes. Construction management is a core service: we lead planning, procurement, and field execution so owners get predictable budgets, schedules, and quality across the state.',
  },
  {
    q: 'What types of commercial construction projects does 320 Grit support?',
    a: 'Complex commercial environments and specialized facilities: ground-up builds, major renovations, tenant improvements, and multi-stakeholder developments across our core California markets.',
  },
  {
    q: 'Does 320 Grit work with owners, developers, and project teams?',
    a: 'Yes. We partner with owners, developers, architects, engineers, and trade contractors as one aligned team — coordinating decisions so the project moves forward without friction.',
  },
  {
    q: 'How do I start a project with 320 Grit in California?',
    a: 'Call us at (323) 555-0199 or send a message through our contact page. We’ll discuss your project, goals, and timeline — then map the fastest path to a well-delivered build.',
  },
];
