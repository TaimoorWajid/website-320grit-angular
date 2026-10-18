import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Railroads — reference implementation of the shared rr-* layout (spec §5). */
export const RAILROADS_DATA: MarketPageData = {
  seoTitle: 'Railroad Construction',
  canonicalPath: '/industries/railroads',
  hero: {
    id: 'rr-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Railroads' }],
    sub: [{ text: 'Building the critical infrastructure that keeps people and industries moving forward.' }],
    subMaxWidth: '520px',
    desc: 'From new rail construction and expansions to complex trackwork and system improvements, 320 Grit delivers with safety, precision, and a relentless focus on performance.',
    buttons: [{ label: 'Let’s Build What Moves', variant: 'primary', anchor: '#rr-cta' }],
    image: MARKET_IMG.banner,
  },
  overview: {
    id: 'rr-overview',
    label: 'Overview',
    title: [{ text: 'Infrastructure That Connects Communities and Powers Progress.' }],
    paragraphs: [
      'Rail is one of the most efficient, sustainable, and reliable ways to move people and goods. We partner with rail owners, agencies, and private clients to deliver projects that improve safety, increase capacity, and support long-term growth.',
    ],
    image: MARKET_IMG.labour,
    imageAlt: 'Rail construction crew on tracks',
    points: [
      { icon: 'train', title: 'Complex Projects', text: 'Experience delivering challenging rail and transit infrastructure.' },
      { icon: 'shield', title: 'Safety Driven', text: 'Committed to protecting people, the public, and the environment.' },
      { icon: 'users-alt', title: 'Collaborative Approach', text: 'Strong partnerships and clear communication every step of the way.' },
      { icon: 'layers', title: 'Built to Last', text: 'Quality craftsmanship and building for long-term performance.' },
    ],
  },
  capabilities: {
    id: 'rr-capabilities',
    heading: 'Our Railroad Construction Capabilities',
    cards: [
      { icon: 'train', title: 'Track Construction & Rehabilitation', text: 'New track installation, track upgrades, and rehabilitation.' },
      { icon: 'school', title: 'Bridge & Structure Work', text: 'Rail bridges, retaining walls, culverts, and structural repairs.' },
      { icon: 'settings', title: 'Turnouts & Crossing Systems', text: 'Turnouts, crossings, signaling foundations, and trackwork.' },
      { icon: 'building-windows', title: 'Yard & Terminal Development', text: 'Rail yards, terminals, and intermodal facilities.' },
      { icon: 'zap', title: 'Electrification Support', text: 'Overhead systems, foundations, and electrical infrastructure.' },
      { icon: 'wrench', title: 'Maintenance & System Improvements', text: 'Ongoing maintenance, inspections, and infrastructure upgrades.' },
    ],
  },
  projects: {
    id: 'rr-projects',
    heading: 'Types of Rail Projects We Deliver',
    imageFirst: true,
    image: MARKET_IMG.banner,
    imageAlt: 'Passenger train on curved track at sunset',
    items: [
      { icon: 'train', title: 'Mainline Rail Construction', text: 'New mainline construction and capacity expansions.' },
      { icon: 'train-alt', title: 'Commuter & Passenger Rail', text: 'Stations, platforms, trackwork, and associated facilities.' },
      { icon: 'package', title: 'Freight & Intermodal Facilities', text: 'Yards, sidings, containers, and logistics infrastructure.' },
      { icon: 'building-windows', title: 'Industrial Rail Solutions', text: 'Spur tracks, plant rail systems, and material handling.' },
      { icon: 'shield', title: 'Safety & System Upgrades', text: 'Track improvements, crossings, and safety enhancements.' },
    ],
  },
  approach: {
    id: 'rr-approach',
    label: 'Our Approach',
    heading: 'How We Deliver',
    showIcons: true,
    showArrows: true,
    steps: [
      { icon: 'search', num: '1', title: 'Understand', text: 'We learn your goals, challenges, and operational requirements.' },
      { icon: 'file-text', num: '2', title: 'Plan', text: 'We develop a clear plan focused on safety, efficiency, and constructability.' },
      { icon: 'users-alt', num: '3', title: 'Execute', text: 'Our experienced teams deliver with precision, safety, and accountability.' },
      { icon: 'check-square', num: '4', title: 'Ensure Quality', text: 'Rigorous inspections and testing to meet the highest industry standards.' },
      { icon: 'bar-chart', num: '5', title: 'Deliver Value', text: 'Reliable infrastructure that performs today and for years to come.' },
    ],
  },
  partner: {
    id: 'rr-partner',
    variant: 'text-image',
    label: 'A Partner You Can Count On',
    heading: [{ text: 'Experience. Accountability.' }, { text: 'Infrastructure That Lasts.' }],
    body: '320 Grit brings deep construction expertise, strong partnerships, and a commitment to delivering rail projects that keep the world moving forward.',
    image: MARKET_IMG.labour,
    imageAlt: 'Rail construction site with workers and crane',
  },
  cta: {
    id: 'rr-cta',
    heading: [
      { text: 'Let’s Build What ', inline: true },
      { text: 'Moves', accent: true, inline: true },
      { text: ' Tomorrow.' },
    ],
    body: 'Partner with 320 Grit for your next railroad project.',
    button: { label: 'Start a Project', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
