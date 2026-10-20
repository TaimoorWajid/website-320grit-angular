import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Hospitality (spec §6d). Partner variant V2: checklist + image. */
export const HOSPITALITY_DATA: MarketPageData = {
  seoTitle: 'Hospitality Construction',
  canonicalPath: '/industries/hospitality',
  hero: {
    id: 'hos-hero',
    label: '01 — Markets We Serve',
    title: [{ text: 'Hospitality' }],
    sub: [
      { text: 'Building Experiences.', accent: true },
      { text: 'Creating Destinations.' },
    ],
    subMaxWidth: '520px',
    desc: '320 Grit builds hospitality environments—hotels, resorts, restaurants, and event venues—with brand-standard precision, guest-experience detailing, and phased delivery that protects revenue.',
    buttons: [
      { label: 'Let’s Build Memorable Spaces', variant: 'primary', anchor: '#hos-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.lobby,
  },
  overview: {
    id: 'hos-overview',
    label: '02 — Overview',
    title: [{ text: 'Thoughtfully Built.' }, { text: 'Expertly Delivered.', accent: true }],
    paragraphs: [
      'Hospitality construction demands precision, creativity, and an unwavering focus on the guest experience. We partner with owners, developers, and brands to bring their vision to life—on time, on budget, and built to last.',
      'Our team understands the unique demands of hospitality environments—brand standards, PIP requirements, and occupied-property phasing—and delivers spaces that are beautiful, functional, and built for performance.',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Hotel lobby',
    points: [
      { icon: 'star', title: 'Guest-First Detailing', text: 'Finishes, lighting, and acoustics engineered around the guest experience.' },
      { icon: 'shield', title: 'Built for Operations', text: 'Durable materials, efficient back-of-house, and systems designed for 24/7 hospitality operations.' },
      { icon: 'users', title: 'Brand-Standard Execution', text: 'Precise delivery to brand standards, PIP requirements, and franchise specifications.' },
      { icon: 'droplet', title: 'Efficient & Responsible', text: 'Energy and water efficiency that cuts operating costs and supports brand sustainability goals.' },
    ],
  },
  capabilities: {
    id: 'hos-capabilities',
    label: '03 — Our Capabilities',
    heading: 'Our Hospitality Construction Capabilities',
    cards: [
      { icon: 'building-windows', title: 'New Construction', text: 'Ground-up hotels, resorts, and mixed-use hospitality developments.' },
      { icon: 'wrench', title: 'Renovations & Repositioning', text: 'PIPs, rebrands, and repositioning renovations—often in occupied properties.' },
      { icon: 'home-door', title: 'Interiors & Finishes', text: 'Guest rooms, lobbies, and public spaces with high-end hospitality finishes.' },
      { icon: 'zap', title: 'MEP & Systems Integration', text: 'HVAC, plumbing, and electrical systems designed for guest comfort and efficiency.' },
      { icon: 'file-text', title: 'Preconstruction Planning', text: 'Early budgeting, value engineering, and procurement for hospitality programs.' },
      { icon: 'warehouse', title: 'Construction Management', text: 'CM delivery with rigorous schedule, quality, and safety management.' },
    ],
  },
  projects: {
    id: 'hos-projects',
    label: '04 — Project Types',
    heading: 'Types of Hospitality Projects',
    image: MARKET_IMG.residence,
    imageAlt: 'Luxury residence at dusk',
    items: [
      { icon: 'building-windows', title: 'Hotels & Resorts', text: 'Full-service, select-service, boutique, and extended-stay properties.' },
      { icon: 'utensils', title: 'Restaurants & Bars', text: 'Destination dining, bars, and food-and-beverage venues.' },
      { icon: 'droplet', title: 'Wellness & Spa Facilities', text: 'Spas, fitness centers, and wellness amenities.' },
      { icon: 'user', title: 'Meeting & Event Spaces', text: 'Ballrooms, conference centers, and flexible event venues.' },
      { icon: 'home', title: 'Amenity & Support Facilities', text: 'Pools, back-of-house, and operational spaces that keep properties running.' },
    ],
  },
  approach: {
    id: 'hos-approach',
    label: '05 — Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We learn your brand standards, guest profile, and business objectives.' },
      { num: '2', title: 'Plan', text: 'Phased planning that protects revenue and minimizes guest disruption.' },
      { num: '3', title: 'Collaborate', text: 'One team with owners, operators, brands, and designers.' },
      { num: '4', title: 'Build', text: 'Meticulous execution with uncompromising quality control.' },
      { num: '5', title: 'Deliver', text: 'Properties ready to welcome guests—and built to perform for years.' },
    ],
  },
  partner: {
    id: 'hos-partner',
    variant: 'checklist',
    label: '06 — A Partner You Can Count On',
    heading: [{ text: 'Hospitality Is About More Than Buildings.' }, { text: 'It’s About People.' }],
    body: 'Hospitality construction is about trust, timing, and detail. 320 Grit delivers hotels, resorts, and restaurants with the precision your brand demands.',
    checks: [
      'Hospitality-specific expertise: hotels, resorts, restaurants, and venues',
      'Phased occupied-property renovations that protect revenue',
      'Brand-standard and PIP-compliant delivery',
      'Relentless focus on quality, safety, and schedule',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Luxury hotel room',
  },
  cta: {
    id: 'hos-cta',
    label: '07 — Get Started',
    heading: [{ text: 'Let’s Build Spaces That' }, { text: 'Welcome the World.', accent: true }],
    body: 'From ground-up resorts to occupied-hotel renovations, 320 Grit builds hospitality spaces guests remember.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.lobby,
  },
};
