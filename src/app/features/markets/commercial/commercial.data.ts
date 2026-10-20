import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Commercial construction — ground-up and redevelopment delivery via the shared rr-* layout. */
export const COMMERCIAL_DATA: MarketPageData = {
  seoTitle: 'Commercial Construction',
  canonicalPath: '/industries/commercial-construction',
  hero: {
    id: 'cc-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Commercial Construction' }],
    sub: [{ text: 'Ground-up commercial construction and redevelopment built to protect your pro forma.' }],
    subMaxWidth: '520px',
    desc: 'From new office buildings and retail centers to industrial warehouses and mixed-use developments, 320 Grit delivers commercial construction with disciplined preconstruction, transparent cost control, and field execution that keeps your project on schedule and on budget.',
    buttons: [{ label: 'Let’s Build Your Next Asset', variant: 'primary', anchor: '#cc-cta' }],
    image: MARKET_IMG.commercial,
  },
  overview: {
    id: 'cc-overview',
    label: 'Overview',
    title: [{ text: 'Commercial Builds Engineered for Returns, Delivered With Certainty.' }],
    paragraphs: [
      'Commercial construction is a business decision. Every square foot you build must earn its place in the pro forma — and every week of delay erodes it. 320 Grit partners with developers, owners, and investors to deliver office buildings, retail centers, industrial facilities, and mixed-use projects with the cost certainty, schedule discipline, and quality finishes that strong returns are built on.',
    ],
    image: MARKET_IMG.commercialOverview,
    imageAlt: 'Commercial construction site with steel structure',
    points: [
      { icon: 'building', title: 'Development Fluency', text: 'We speak the language of pro formas — aligning design decisions, budgets, and schedules to your investment thesis.' },
      { icon: 'file-text', title: 'Preconstruction That De-Risks', text: 'Conceptual estimating, constructability reviews, and value engineering before you commit to full design.' },
      { icon: 'users-alt', title: 'Tenant Coordination', text: 'Phased delivery, tenant finish coordination, and occupied-site work plans that keep your asset leasing and operating.' },
      { icon: 'check-square', title: 'Quality That Holds Value', text: 'Durable systems, precise finishes, and commissioning that protect the asset for decades, not just the grand opening.' },
    ],
  },
  capabilities: {
    id: 'cc-capabilities',
    heading: 'Our Commercial Construction Capabilities',
    cards: [
      { icon: 'building', title: 'Ground-Up Construction', text: 'New office buildings, retail centers, and commercial shells — from site work to certificate of occupancy.' },
      { icon: 'building-windows', title: 'Industrial & Warehouse', text: 'Tilt-up warehouses, distribution centers, and light industrial with ESFR, dock systems, and clear-height optimization.' },
      { icon: 'layers', title: 'Mixed-Use Developments', text: 'Podium and wrap construction blending residential, retail, and parking in one coordinated delivery.' },
      { icon: 'settings', title: 'Design-Build Delivery', text: 'Single-point responsibility for design and construction — one contract, one accountable partner.' },
      { icon: 'zap', title: 'Core & Shell Improvements', text: 'Structural upgrades, facade modernization, and base building improvements that reposition aging assets.' },
      { icon: 'wrench', title: 'Additions & Expansions', text: 'Horizontal and vertical expansions tied into active facilities with minimal operational disruption.' },
    ],
  },
  projects: {
    id: 'cc-projects',
    heading: 'Types of Commercial Projects We Deliver',
    imageFirst: true,
    image: MARKET_IMG.commercial,
    imageAlt: 'Modern commercial building exterior',
    items: [
      { icon: 'building', title: 'Office Buildings', text: 'Speculative and build-to-suit office with efficient floor plates, amenity spaces, and smart building infrastructure.' },
      { icon: 'star', title: 'Retail Centers', text: 'Neighborhood centers, big-box pads, and restaurant rows — engineered for tenant turnover and high visibility.' },
      { icon: 'package', title: 'Industrial & Logistics', text: 'Warehouses, last-mile facilities, and flex space designed around throughput, loading, and clear height.' },
      { icon: 'building-windows', title: 'Mixed-Use & Urban Infill', text: 'Dense urban sites combining retail, office, and residential with tight logistics and community-sensitive delivery.' },
      { icon: 'shield', title: 'Redevelopment & Adaptive Reuse', text: 'Converting obsolete buildings to modern commercial use — seismic retrofits, re-skinning, and full modernization.' },
    ],
  },
  approach: {
    id: 'cc-approach',
    label: 'Our Approach',
    heading: 'How We Deliver',
    showIcons: true,
    showArrows: true,
    steps: [
      { icon: 'search', num: '1', title: 'Understand', text: 'We learn your pro forma, tenant targets, and risk tolerance before drawing a single line.' },
      { icon: 'file-text', num: '2', title: 'Preconstruct', text: 'Early budgets, constructability reviews, and value engineering that lock in cost certainty.' },
      { icon: 'users-alt', num: '3', title: 'Execute', text: 'Disciplined field teams delivering quality work with transparent, weekly cost and schedule reporting.' },
      { icon: 'check-square', num: '4', title: 'Commission', text: 'Systems startup, testing, and turnover documentation that make handover painless.' },
      { icon: 'bar-chart', num: '5', title: 'Deliver Value', text: 'An asset that leases faster, operates cheaper, and holds its value for the long term.' },
    ],
  },
  partner: {
    id: 'cc-partner',
    variant: 'text-image',
    label: 'A Partner You Can Count On',
    heading: [{ text: 'Cost Certainty. Schedule Discipline.' }, { text: 'Assets That Perform.' }],
    body: '320 Grit brings commercial construction expertise, rigorous preconstruction, and field leadership that treats your budget like our own — delivering buildings that protect the pro forma and perform for decades.',
    image: MARKET_IMG.commercialPartner,
    imageAlt: 'Commercial construction team on site',
  },
  cta: {
    id: 'cc-cta',
    heading: [
      { text: 'Let’s Build What ', inline: true },
      { text: 'Performs', accent: true, inline: true },
      { text: ' for Decades.' },
    ],
    body: 'Partner with 320 Grit for ground-up commercial construction, industrial facilities, and mixed-use developments.',
    button: { label: 'Start a Project', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.commercial,
  },
};
