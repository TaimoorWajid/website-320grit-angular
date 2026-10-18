import { CaFaq, CaIconCard, CaMarket } from '../shared/ca.types';

/* Copy verbatim from template-parts/components/our-locations/california.php */

export const MARKETS: CaMarket[] = [
  {
    title: 'Healthcare',
    text: 'Environments designed around patients, providers and operational performance.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    title: 'Behavioral Health',
    text: 'Purpose-driven environments supporting safety, dignity and effective care.',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  },
  {
    title: 'Advanced Technology',
    text: 'Complex technical environments including laboratories, research and high-performance facilities.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'Education',
    text: 'Learning environments designed for today’s students and tomorrow’s needs.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  },
  {
    title: 'Hospitality',
    text: 'Guest-focused environments where design, operations and experience intersect.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    title: 'Railroads & Transportation',
    text: 'Infrastructure environments where coordination, safety and reliability are essential.',
    img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80',
  },
];

export const APPROACH_STEPS: CaIconCard[] = [
  {
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Understand Your Objectives',
    text: 'We start with what the project needs to accomplish.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Align Your Team',
    text: 'Owners, designers, consultants, contractors and stakeholders move with a shared understanding.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Anticipate Your Risks',
    text: 'We identify potential issues before they become expensive surprises.',
  },
  {
    icon: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    title: 'Deliver Your Outcome',
    text: 'Every decision stays connected to the bigger picture.',
  },
];

export const SERVICES: CaIconCard[] = [
  {
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    title: 'Construction Management',
    text: 'Project leadership from planning through delivery.',
  },
  {
    icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Owner Representation',
    text: 'Independent representation focused on the owner’s objectives.',
  },
  {
    icon: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
    title: 'Bid-Build',
    text: 'Structured procurement and construction delivery.',
  },
  {
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>',
    title: 'Design-Build',
    text: 'Integrated design and construction under one coordinated approach.',
  },
  {
    icon: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    title: 'Expert Witness',
    text: 'Construction expertise, technical analysis and professional opinion.',
  },
  {
    icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    title: 'Forensic Accounting',
    text: 'Financial analysis and investigation supporting construction-related matters.',
  },
];

export const WORKS: { num: string; title: string; text: string }[] = [
  {
    num: '01',
    title: 'Complexity',
    text: 'California projects can involve multiple stakeholders, regulatory requirements, technical systems and competing priorities.',
  },
  {
    num: '02',
    title: 'Pace',
    text: 'Decisions often need to happen quickly without losing sight of long-term objectives.',
  },
  {
    num: '03',
    title: 'Coordination',
    text: 'Successful delivery depends on information moving between the right people at the right time.',
  },
  {
    num: '04',
    title: 'Accountability',
    text: 'Clear ownership keeps decisions from getting lost between organizations.',
  },
];

export const WHY: CaIconCard[] = [
  {
    icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Owner Focus',
    text: 'We keep the owner’s goals at the center of project decisions.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    title: 'Technical Thinking',
    text: 'We approach complex construction challenges with structured analysis and practical execution.',
  },
  {
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    title: 'Clear Communication',
    text: 'We make project information easier to understand and act upon.',
  },
  {
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    title: 'Early Risk Awareness',
    text: 'We look for issues before they become disruptions.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Collaborative Delivery',
    text: 'We work alongside the project team rather than operating in isolation.',
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
    a: 'We provide construction management, owner representation, bid-build, design-build, expert witness, and forensic accounting services across California.',
  },
  {
    q: 'What markets does 320 Grit serve in California?',
    a: 'Healthcare, behavioral health, advanced technology, education, hospitality, and railroads & transportation.',
  },
  {
    q: 'Where in California does 320 Grit work?',
    a: 'From Northern California (Sacramento, San Francisco, San Jose) to Southern California (Los Angeles, San Diego), with headquarters in Irvine.',
  },
  {
    q: 'Does 320 Grit provide construction management in California?',
    a: 'Yes. Construction management is a core service we deliver throughout the state.',
  },
  {
    q: 'Does 320 Grit provide owner representation?',
    a: 'Yes. We offer independent owner representation focused on protecting the owner’s objectives.',
  },
  {
    q: 'What types of commercial construction projects does 320 Grit support?',
    a: 'Complex commercial environments, specialized facilities, and multi-stakeholder projects across our core markets.',
  },
  {
    q: 'Does 320 Grit work with owners, developers and project teams?',
    a: 'Yes. We work alongside owners, developers, designers, consultants, and trade partners as one aligned team.',
  },
  {
    q: 'Where is 320 Grit headquartered?',
    a: 'Our California headquarters is in Irvine, California.',
  },
];
