import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Advanced Technology (spec §6a). */
export const ADVANCED_TECHNOLOGY_DATA: MarketPageData = {
  seoTitle: 'Advanced Technology Construction',
  canonicalPath: '/industries/advanced-technology',
  hero: {
    id: 'at-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Advanced' }, { text: 'Technology', accent: true }],
    sub: [{ text: 'Building the future of innovation.' }],
    desc: 'We build advanced technology facilities that power discoveries, drive innovation, and improve lives. From research laboratories to high-tech manufacturing environments, we deliver spaces that perform today and adapt for tomorrow.',
    buttons: [
      { label: 'How We Build', variant: 'primary', anchor: '#at-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.lab,
  },
  overview: {
    id: 'at-overview',
    label: 'Built for Complexity.',
    labelAccent: true,
    title: [{ text: 'Environments That' }, { text: 'Drive Innovation.', accent: true }],
    paragraphs: [
      'Advanced technology facilities demand more than construction—they demand precision, coordination, and deep understanding of how research and technology environments work.',
      'We partner with innovators, researchers, and industry leaders to deliver high-performance facilities that support critical work and accelerate what’s next.',
    ],
    image: MARKET_IMG.lab,
    imageAlt: 'Modern tech facility atrium',
    points: [
      { icon: 'bar-chart', title: 'Performance Driven', text: 'Facilities engineered for reliability, efficiency, and long-term performance.' },
      { icon: 'sun', title: 'Precision Environments', text: 'Maintain the strict conditions required for research, process, and production.' },
      { icon: 'arrow-right', title: 'Adaptive by Design', text: 'Flexible spaces that evolve with technology and future needs.' },
      { icon: 'users', title: 'Collaboration Focused', text: 'Spaces that connect people, ideas, and disciplines.' },
    ],
  },
  capabilities: {
    id: 'at-capabilities',
    heading: 'Our Advanced Technology Capabilities',
    cards: [
      { icon: 'flask', title: 'Research Laboratories', text: 'Wet labs, dry labs, and specialized research spaces built to support cutting-edge science.' },
      { icon: 'box-grid', title: 'Cleanroom & Controlled Environments', text: 'Critical environment construction with exacting standards for containment, cleanliness, and control.' },
      { icon: 'wrench', title: 'Pilot Plants & Process Facilities', text: 'Facilities for testing, scaling, and production with the systems and infrastructure to perform.' },
      { icon: 'zap', title: 'Mission Critical Infrastructure', text: 'Power, cooling, and redundant systems that keep essential operations running 24/7.' },
      { icon: 'building-windows', title: 'Office & Collaboration Environments', text: 'Workspaces that foster innovation, collaboration, and well-being.' },
      { icon: 'droplet', title: 'Sustainable by Design', text: 'Energy-efficient, future-ready facilities built with sustainability in mind.' },
    ],
  },
  projects: {
    id: 'at-projects',
    heading: 'Types of Advanced Technology Projects',
    image: MARKET_IMG.lab,
    imageAlt: 'Cleanroom / lab',
    items: [
      { icon: 'flask-simple', title: 'Biotech & Pharmaceutical Facilities', text: 'Supporting drug discovery, development, and manufacturing.' },
      { icon: 'activity', title: 'Medical Device & Life Science Facilities', text: 'Precision environments for innovation and production.' },
      { icon: 'building', title: 'University & Institutional Research Facilities', text: 'Advancing research across science, engineering, and technology.' },
      { icon: 'cpu', title: 'Semiconductor & Microelectronics Facilities', text: 'High-tech environments for manufacturing and assembly.' },
      { icon: 'server', title: 'Data Centers & Tech Infrastructure', text: 'Critical facilities designed for reliability and performance.' },
    ],
  },
  approach: {
    id: 'at-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We learn your goals, the science, and the operational needs that drive the project.' },
      { num: '2', title: 'Plan', text: 'We develop a strategy focused on performance, compliance, and long-term value.' },
      { num: '3', title: 'Collaborate', text: 'We work as an extension of your team, aligning experts across disciplines.' },
      { num: '4', title: 'Build', text: 'We execute with precision, maintain strict standards, and prioritize safety.' },
      { num: '5', title: 'Deliver', text: 'We deliver high-performance facilities ready to support your mission.' },
    ],
  },
  partner: {
    id: 'at-why',
    variant: 'checklist',
    label: 'Why Partner with 320 Grit',
    heading: [{ text: 'Expertise. Precision.' }, { text: 'Performance.', accent: true }],
    body: 'Advanced technology projects are complex by nature. We bring the expertise, systems, and commitment needed to deliver spaces where innovation can thrive.',
    checks: [
      'Deep experience in complex, technical environments',
      'Commitment to safety, quality, and compliance',
      'Integrated project delivery and transparent communication',
      'Built to support today’s work and tomorrow’s breakthroughs',
    ],
    image: MARKET_IMG.planning,
    imageAlt: 'Modern tech building exterior',
  },
  cta: {
    id: 'at-cta',
    heading: [
      { text: 'Let’s Build ', inline: true },
      { text: 'What’s Next.', accent: true },
    ],
    body: 'From concept to completion, we build advanced technology facilities that enable innovation and shape the future.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.lab,
  },
};
