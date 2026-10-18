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
    desc: 'From early learning centers to universities, we build high-performance learning environments that support students, empower educators, and strengthen communities.',
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
      'We understand that every educational facility is more than a building—it’s a place where curiosity is sparked, potential is discovered, and futures are shaped.',
      'Our team partners with school districts, private institutions, and community leaders to deliver safe, sustainable, and flexible facilities that support today’s needs and tomorrow’s growth.',
    ],
    image: MARKET_IMG.industries,
    imageAlt: 'Modern school interior',
    points: [
      { icon: 'shield', title: 'Safety First', text: 'Safe, secure environments for students, faculty, and visitors.' },
      { icon: 'user', title: 'Student-Centered', text: 'Spaces designed to support engagement, collaboration, and well-being.' },
      { icon: 'droplet', title: 'Sustainable Solutions', text: 'Energy-efficient, responsible buildings that reduce long-term costs and environmental impact.' },
      { icon: 'bar-chart', title: 'Built to Adapt', text: 'Flexible facilities that evolve with education and technology.' },
    ],
  },
  capabilities: {
    id: 'edu-capabilities',
    heading: 'Our Education Construction Capabilities',
    cards: [
      { icon: 'building', title: 'Pre-K – 12 Schools', text: 'Classrooms, STEM labs, gymnasiums, cafeterias, and secure entries.' },
      { icon: 'graduation-cap', title: 'Higher Education', text: 'Academic buildings, student centers, housing, and research facilities.' },
      { icon: 'book', title: 'Early Learning', text: 'Safe, engaging spaces designed for early development and growth.' },
      { icon: 'clock', title: 'Athletic Facilities', text: 'Gymnasiums, fields, arenas, and support spaces that build pride.' },
      { icon: 'wrench', title: 'Renovations & Additions', text: 'Modernize and expand existing facilities with minimal disruption.' },
      { icon: 'file-text', title: 'Planning & Advisory', text: 'Programming, feasibility, and cost planning aligned with your goals.' },
    ],
  },
  projects: {
    id: 'edu-projects',
    heading: 'Types of Education Projects',
    image: MARKET_IMG.industries,
    imageAlt: 'School campus',
    items: [
      { icon: 'user', title: 'Early Learning Centers', text: 'Nurturing environments for our youngest learners.' },
      { icon: 'building', title: 'K-12 Schools', text: 'Future-ready schools that support every stage of learning.' },
      { icon: 'microscope', title: 'Academic & Research Facilities', text: 'Spaces that foster innovation, discovery, and collaboration.' },
      { icon: 'home-door', title: 'Student Life Spaces', text: 'Dining, housing, and gathering places that build community.' },
      { icon: 'shield', title: 'Safety & Security Upgrades', text: 'Protecting students and staff with modern, integrated systems.' },
    ],
  },
  approach: {
    id: 'edu-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We listen to your goals, challenges, and the needs of your community.' },
      { num: '2', title: 'Plan', text: 'We develop smart, practical solutions aligned with your vision and budget.' },
      { num: '3', title: 'Collaborate', text: 'We work together with your team every step of the way for clear communication.' },
      { num: '4', title: 'Build', text: 'Our experienced teams deliver quality with safety, precision, and care.' },
      { num: '5', title: 'Deliver', text: 'We deliver spaces that empower learning and strengthen communities.' },
    ],
  },
  partner: {
    id: 'edu-result',
    variant: 'result',
    label: 'The Result',
    heading: [{ text: 'Spaces That Educate.' }, { text: 'Communities That Thrive.', accent: true }],
    body: 'We build more than buildings—we build environments where students learn, teachers inspire, and communities come together.',
    ctaButton: { label: 'Start Your Project', variant: 'primary', anchor: '#edu-cta' },
    diffCards: [
      { icon: '', title: 'Learning Spaces Built', text: 'K-12 to Higher Ed across a wide range of campuses' },
      { icon: '', title: 'Communities Impacted', text: 'Stronger together — creating opportunities for growth' },
      { icon: '', title: 'Focused on Sustainability', text: 'Built responsibly for today and generations to come' },
      { icon: '', title: 'Safety Always', text: 'Zero compromise — protecting what matters most' },
    ],
  },
  cta: {
    id: 'edu-cta',
    heading: [{ text: 'Building Today’s Schools.' }, { text: 'Inspiring Tomorrow’s Leaders.', accent: true }],
    body: 'Partner with 320 Grit to build learning environments that last.',
    button: { label: 'Let’s Talk', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
