import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Railroads — reference implementation of the shared rr-* layout (spec §5). */
export const RAILROADS_DATA: MarketPageData = {
  seoTitle: 'Railroad Construction',
  canonicalPath: '/industries/railroads',
  hero: {
    id: 'rr-hero',
    label: '01 — Markets We Serve',
    title: [{ text: 'Railroads' }],
    sub: [{ text: 'Railroad construction and track rehabilitation built for safety, capacity, and long-term performance.' }],
    subMaxWidth: '520px',
    desc: 'From new track construction and line expansions to turnouts, grade crossings, and rail yard development, 320 Grit delivers railroad construction with strict safety compliance, precision trackwork, and a relentless focus on operational performance.',
    buttons: [{ label: 'Let’s Build What Moves', variant: 'primary', anchor: '#rr-cta' }],
    image: MARKET_IMG.railroad,
  },
  overview: {
    id: 'rr-overview',
    label: '02 — Overview',
    title: [{ text: 'Rail Infrastructure Built for Safety, Capacity, and Performance.' }],
    paragraphs: [
      'Rail is one of the most efficient, sustainable, and reliable ways to move people and goods. 320 Grit partners with freight railroads, transit agencies, and private rail owners to deliver track construction, rehabilitation, and rail structures that improve safety, expand capacity, and support long-term growth.',
    ],
    image: MARKET_IMG.labour,
    imageAlt: 'Rail construction crew on tracks',
    points: [
      { icon: 'train', title: 'Rail-Specific Expertise', text: 'Track construction, rehabilitation, and rail structures delivered by teams fluent in railroad standards and operating environments.' },
      { icon: 'shield', title: 'Safety-First Delivery', text: 'FRA-aware work planning, flagging coordination, and strict adherence to railroad safety protocols on every project.' },
      { icon: 'users-alt', title: 'Built Around Operations', text: 'We plan around live rail operations—coordinating track windows, flagging, and staging to minimize disruption.' },
      { icon: 'layers', title: 'Engineered for the Long Haul', text: 'Quality trackwork, drainage, and structures designed for decades of heavy-axle service.' },
    ],
  },
  capabilities: {
    id: 'rr-capabilities',
    label: '03 — Our Capabilities',
    heading: 'Our Railroad Construction Capabilities',
    cards: [
      { icon: 'train', title: 'Track Construction & Rehabilitation', text: 'New track builds, panelized track installation, rail relay, tie replacement, ballast regulation, and surfacing.' },
      { icon: 'school', title: 'Bridge & Structure Work', text: 'Railroad bridges, trestles, culverts, retaining walls, and structural steel repairs.' },
      { icon: 'settings', title: 'Turnouts & Crossing Systems', text: 'Turnout installation and rehabilitation, grade crossing surfaces, crossing signal foundations, and track geometry.' },
      { icon: 'building-windows', title: 'Yard & Terminal Development', text: 'Classification yards, intermodal terminals, transload facilities, and support infrastructure.' },
      { icon: 'zap', title: 'Electrification Support', text: 'Catenary foundations, signal bungalows, conduit systems, and electrical infrastructure for electrified corridors.' },
      { icon: 'wrench', title: 'Maintenance & System Improvements', text: 'Programmed maintenance, track inspections, drainage improvements, and capital upgrades.' },
    ],
  },
  projects: {
    id: 'rr-projects',
    label: '04 — Project Types',
    heading: 'Types of Rail Projects We Deliver',
    imageFirst: true,
    image: MARKET_IMG.banner,
    imageAlt: 'Passenger train on curved track at sunset',
    items: [
      { icon: 'train', title: 'Mainline Rail Construction', text: 'New mainline track, double-tracking, sidings, and capacity expansion projects.' },
      { icon: 'train-alt', title: 'Commuter & Passenger Rail', text: 'Stations, platforms, parking structures, and passenger rail trackwork.' },
      { icon: 'package', title: 'Freight & Intermodal Facilities', text: 'Intermodal yards, transload terminals, and freight handling infrastructure.' },
      { icon: 'building-windows', title: 'Industrial Rail Solutions', text: 'Industrial spurs, plant trackage, and rail-served facility development.' },
      { icon: 'shield', title: 'Safety & System Upgrades', text: 'Grade crossing upgrades, PTC-related civil work, and system-wide safety improvements.' },
    ],
  },
  approach: {
    id: 'rr-approach',
    label: '05 — Our Approach',
    heading: 'How We Deliver',
    showIcons: true,
    showArrows: true,
    steps: [
      { icon: 'search', num: '1', title: 'Understand', text: 'We learn your operating requirements, track windows, and performance goals.' },
      { icon: 'file-text', num: '2', title: 'Plan', text: 'Detailed work plans built around live operations, flagging, and constructability.' },
      { icon: 'users-alt', num: '3', title: 'Execute', text: 'Experienced crews delivering precise trackwork with strict safety compliance.' },
      { icon: 'check-square', num: '4', title: 'Ensure Quality', text: 'Track geometry verification, inspections, and testing to railroad standards.' },
      { icon: 'bar-chart', num: '5', title: 'Deliver Value', text: 'Reliable rail infrastructure engineered for decades of service.' },
    ],
  },
  partner: {
    id: 'rr-partner',
    variant: 'text-image',
    label: '06 — A Partner You Can Count On',
    heading: [{ text: 'Experience. Accountability.' }, { text: 'Infrastructure That Lasts.' }],
    body: '320 Grit brings railroad construction expertise, disciplined project management, and a commitment to delivering rail infrastructure that performs—safely, on schedule, and built to last.',
    image: MARKET_IMG.labour,
    imageAlt: 'Rail construction site with workers and crane',
  },
  cta: {
    id: 'rr-cta',
    label: '07 — Get Started',
    heading: [
      { text: 'Let’s Build What ', inline: true },
      { text: 'Moves', accent: true, inline: true },
      { text: ' Tomorrow.' },
    ],
    body: 'Partner with 320 Grit for railroad construction, track rehabilitation, and rail infrastructure projects.',
    button: { label: 'Start a Project', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
