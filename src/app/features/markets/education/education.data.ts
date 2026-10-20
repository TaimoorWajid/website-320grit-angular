import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Education (spec §6c). Partner variant V4: result stat cards + CTA button. */
export const EDUCATION_DATA: MarketPageData = {
  seoTitle: 'Education Construction',
  canonicalPath: '/industries/education',
  hero: {
    id: 'edu-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Education' }],
    sub: [
      { text: 'Building Spaces That Inspire', accent: true },
      { text: 'Learning for Generations.' },
    ],
    subMaxWidth: '540px',
    desc: '320 Grit builds educational facilities—K-12 schools, higher education buildings, and athletic facilities—with safe occupied-campus construction, summer-break scheduling, and durable, low-maintenance design.',
    buttons: [
      { label: 'Let’s Build What’s Next', variant: 'primary', anchor: '#edu-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.banner,
  },
  overview: {
    id: 'edu-overview',
    label: 'Overview',
    title: [{ text: 'Learning Environments' }, { text: 'Built for Impact.', accent: true }],
    paragraphs: [
      'We understand that every educational facility is more than a building—it is a place where curiosity is sparked, potential is discovered, and futures are shaped.',
      'Our team partners with school districts, private institutions, and community leaders to deliver safe, sustainable, and flexible facilities—phased around the academic calendar and built for today’s needs and tomorrow’s growth.',
    ],
    image: MARKET_IMG.industries,
    imageAlt: 'Modern school interior',
    points: [
      { icon: 'shield', title: 'Safe Campuses', text: 'Secure entries, controlled access, and student-safe construction practices on occupied campuses.' },
      { icon: 'user', title: 'Designed for Learning', text: 'Daylighting, acoustics, and flexible layouts that support teaching and student well-being.' },
      { icon: 'droplet', title: 'Efficient by Design', text: 'Energy-efficient systems that cut operating costs for districts and institutions.' },
      { icon: 'bar-chart', title: 'Future-Ready', text: 'Flexible classrooms and infrastructure that evolve with curriculum and technology.' },
    ],
  },
  capabilities: {
    id: 'edu-capabilities',
    heading: 'Our Education Construction Capabilities',
    cards: [
      { icon: 'building', title: 'Pre-K – 12 Schools', text: 'Classrooms, STEM labs, gymnasiums, and secure campus entries for K-12 districts.' },
      { icon: 'graduation-cap', title: 'Higher Education', text: 'Academic buildings, student housing, dining, and campus life facilities.' },
      { icon: 'book', title: 'Early Learning', text: 'Safe, nurturing early childhood centers designed for young learners.' },
      { icon: 'clock', title: 'Athletic Facilities', text: 'Gymnasiums, stadiums, fields, and fieldhouses that build school pride.' },
      { icon: 'wrench', title: 'Renovations & Additions', text: 'Modernizations and expansions phased around the academic calendar.' },
      { icon: 'file-text', title: 'Planning & Advisory', text: 'Bond program support, master planning, and feasibility studies.' },
    ],
  },
  projects: {
    id: 'edu-projects',
    heading: 'Types of Education Projects',
    image: MARKET_IMG.industries,
    imageAlt: 'School campus',
    items: [
      { icon: 'user', title: 'Early Learning Centers', text: 'Secure, engaging early childhood facilities.' },
      { icon: 'building', title: 'K-12 Schools', text: 'New schools and modernizations that serve communities for generations.' },
      { icon: 'microscope', title: 'Academic & Research Facilities', text: 'Higher-ed academic buildings, labs, and research centers.' },
      { icon: 'home-door', title: 'Student Life Spaces', text: 'Dining halls, housing, and student centers that build campus community.' },
      { icon: 'shield', title: 'Safety & Security Upgrades', text: 'Secure vestibules, access control, and campus-wide safety modernizations.' },
    ],
  },
  approach: {
    id: 'edu-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We learn your educational vision, enrollment needs, and community priorities.' },
      { num: '2', title: 'Plan', text: 'Smart planning around bond funding, approvals, and the academic calendar.' },
      { num: '3', title: 'Collaborate', text: 'Partnering with districts, architects, and communities every step.' },
      { num: '4', title: 'Build', text: 'Safe, clean construction on occupied campuses—often on summer schedules.' },
      { num: '5', title: 'Deliver', text: 'On time for the first day of school. Every time.' },
    ],
  },
  partner: {
    id: 'edu-result',
    variant: 'result',
    label: 'The Result',
    heading: [{ text: 'Spaces That Educate.' }, { text: 'Communities That Thrive.', accent: true }],
    body: '320 Grit builds educational facilities that serve students, educators, and communities—delivered safely, on schedule, and ready for the first day of school.',
    ctaButton: { label: 'Start Your Project', variant: 'primary', anchor: '#edu-cta' },
    diffCards: [
      { icon: '', title: 'K-12 & Higher Ed Expertise', text: 'Schools, campuses, and athletic facilities across grade levels' },
      { icon: '', title: 'Occupied-Campus Delivery', text: 'Phased construction that keeps students safe and schools open' },
      { icon: '', title: 'Built Responsibly', text: 'Durable, energy-efficient facilities with lower lifetime costs' },
      { icon: '', title: 'Safety Without Compromise', text: 'Secure design and rigorous jobsite safety on every project' },
    ],
  },
  cta: {
    id: 'edu-cta',
    heading: [{ text: 'Building Today’s Schools.' }, { text: 'Inspiring Tomorrow’s Leaders.', accent: true }],
    body: 'Partner with 320 Grit for K-12 and higher education construction—new builds, modernizations, and campus improvements.',
    button: { label: 'Let’s Talk', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
