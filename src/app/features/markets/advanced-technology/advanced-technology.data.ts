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
    sub: [{ text: 'Cleanrooms, laboratories, and mission-critical facilities engineered for precision.' }],
    subMaxWidth: '520px',
    desc: '320 Grit builds advanced technology facilities—research laboratories, cleanrooms, and high-tech manufacturing environments—with exacting standards for contamination control, systems reliability, and regulatory compliance.',
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
      'We partner with innovators, researchers, and industry leaders to deliver high-performance facilities—from ISO-classified cleanrooms to cGMP laboratories—supported by rigorous commissioning and validation.',
    ],
    image: MARKET_IMG.lab,
    imageAlt: 'Modern tech facility atrium',
    points: [
      { icon: 'bar-chart', title: 'Mission-Critical Reliability', text: 'Redundant power, precision HVAC, and robust systems engineered for zero-downtime operations.' },
      { icon: 'sun', title: 'Controlled Environments', text: 'Cleanrooms, labs, and process spaces built to ISO classifications and exacting tolerances.' },
      { icon: 'arrow-right', title: 'Designed for Change', text: 'Flexible lab planning and modular infrastructure that adapts as science and technology evolve.' },
      { icon: 'users', title: 'Collaboration Focused', text: 'Integrated project delivery that connects researchers, engineers, and builders.' },
    ],
  },
  capabilities: {
    id: 'at-capabilities',
    heading: 'Our Advanced Technology Capabilities',
    cards: [
      { icon: 'flask', title: 'Research Laboratories', text: 'Wet labs, dry labs, vivariums, and specialized research spaces with precision MEP systems.' },
      { icon: 'box-grid', title: 'Cleanroom & Controlled Environments', text: 'ISO-classified cleanrooms with validated contamination control and commissioning.' },
      { icon: 'wrench', title: 'Pilot Plants & Process Facilities', text: 'Pilot-scale and process facilities with specialized utilities and process infrastructure.' },
      { icon: 'zap', title: 'Mission Critical Infrastructure', text: 'Redundant power, cooling, and life-safety systems for 24/7 critical operations.' },
      { icon: 'building-windows', title: 'Office & Collaboration Environments', text: 'High-performance workplaces that support collaboration and researcher well-being.' },
      { icon: 'droplet', title: 'Sustainable by Design', text: 'Energy-efficient labs and facilities designed for LEED and long-term operational savings.' },
    ],
  },
  projects: {
    id: 'at-projects',
    heading: 'Types of Advanced Technology Projects',
    image: MARKET_IMG.lab,
    imageAlt: 'Cleanroom / lab',
    items: [
      { icon: 'flask-simple', title: 'Biotech & Pharmaceutical Facilities', text: 'cGMP laboratories, manufacturing suites, and R&D facilities for drug discovery and production.' },
      { icon: 'activity', title: 'Medical Device & Life Science Facilities', text: 'Precision manufacturing and lab environments for medical device innovation.' },
      { icon: 'building', title: 'University & Institutional Research Facilities', text: 'Academic research buildings, core labs, and interdisciplinary science facilities.' },
      { icon: 'cpu', title: 'Semiconductor & Microelectronics Facilities', text: 'Ultra-clean manufacturing environments with exacting process controls.' },
      { icon: 'server', title: 'Data Centers & Tech Infrastructure', text: 'Mission-critical data centers engineered for uptime, efficiency, and scale.' },
    ],
  },
  approach: {
    id: 'at-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We learn your science, process requirements, and operational constraints.' },
      { num: '2', title: 'Plan', text: 'Detailed planning around validation, compliance, and long-term performance.' },
      { num: '3', title: 'Collaborate', text: 'Integrated teams aligning scientists, engineers, and builders from day one.' },
      { num: '4', title: 'Build', text: 'Precision execution with rigorous quality control and commissioning.' },
      { num: '5', title: 'Deliver', text: 'Validated, high-performance facilities ready for critical work.' },
    ],
  },
  partner: {
    id: 'at-why',
    variant: 'checklist',
    label: 'Why Partner with 320 Grit',
    heading: [{ text: 'Expertise. Precision.' }, { text: 'Performance.', accent: true }],
    body: 'Advanced technology construction demands precision at every level. 320 Grit delivers cleanrooms, laboratories, and mission-critical facilities with the technical rigor your work requires.',
    checks: [
      'Cleanroom and controlled-environment construction expertise',
      'Rigorous commissioning, validation, and quality programs',
      'Integrated delivery with transparent communication',
      'Facilities engineered for today’s research and tomorrow’s breakthroughs',
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
    body: 'From cleanrooms to research campuses, 320 Grit builds advanced technology facilities that enable discovery.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.lab,
  },
};
