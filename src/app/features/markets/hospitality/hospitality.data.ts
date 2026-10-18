import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Hospitality (spec §6d). Partner variant V2: checklist + image. */
export const HOSPITALITY_DATA: MarketPageData = {
  seoTitle: 'Hospitality Construction',
  canonicalPath: '/industries/hospitality',
  hero: {
    id: 'hos-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Hospitality' }],
    sub: [
      { text: 'Building Experiences.', accent: true },
      { text: 'Creating Destinations.' },
    ],
    subMaxWidth: '520px',
    desc: 'From boutique hotels to full-scale resorts, 320 Grit builds hospitality environments that inspire guests, deliver operational excellence, and drive long-term value.',
    buttons: [
      { label: 'Let’s Build Memorable Spaces', variant: 'primary', anchor: '#hos-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.lobby,
  },
  overview: {
    id: 'hos-overview',
    label: 'Overview',
    title: [{ text: 'Thoughtfully Built.' }, { text: 'Expertly Delivered.', accent: true }],
    paragraphs: [
      'Hospitality construction demands precision, creativity, and an unwavering focus on the guest experience. We partner with owners, developers, and brands to bring their vision to life—on time, on budget, and built to last.',
      'Our team understands the unique demands of hospitality environments and delivers spaces that are beautiful, functional, and built for performance.',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Hotel lobby',
    points: [
      { icon: 'star', title: 'Guest Experience Focused', text: 'Every detail is considered to create welcoming, comfortable, and unforgettable guest experiences.' },
      { icon: 'shield', title: 'Operationally Minded', text: 'We build for efficiency, durability, and ease of operations—today and for the long run.' },
      { icon: 'users', title: 'Brand Aligned', text: 'We collaborate closely to ensure every element reflects your brand standards and vision.' },
      { icon: 'droplet', title: 'Sustainable & Responsible', text: 'We integrate sustainable building practices that reduce impact and support long-term value.' },
    ],
  },
  capabilities: {
    id: 'hos-capabilities',
    heading: 'Our Hospitality Construction Capabilities',
    cards: [
      { icon: 'building-windows', title: 'New Construction', text: 'Ground-up hotels, resorts, and hospitality venues built with precision.' },
      { icon: 'wrench', title: 'Renovations & Repositioning', text: 'Transforming existing properties to elevate guest experience and value.' },
      { icon: 'home-door', title: 'Interiors & Finishes', text: 'High-quality interiors that reflect your brand and delight guests.' },
      { icon: 'zap', title: 'MEP & Systems Integration', text: 'Seamless integration of building systems for comfort, safety, and efficiency.' },
      { icon: 'file-text', title: 'Preconstruction Planning', text: 'Early collaboration and detailed planning that drives accuracy.' },
      { icon: 'warehouse', title: 'Construction Management', text: 'Expert management delivering quality, safety, and schedule certainty.' },
    ],
  },
  projects: {
    id: 'hos-projects',
    heading: 'Types of Hospitality Projects',
    image: MARKET_IMG.residence,
    imageAlt: 'Resort terrace at sunset',
    items: [
      { icon: 'building-windows', title: 'Hotels & Resorts', text: 'Full-service, limited-service, boutique, luxury, and extended-stay hotels.' },
      { icon: 'utensils', title: 'Restaurants & Bars', text: 'Unique dining experiences and destination venues that bring people together.' },
      { icon: 'droplet', title: 'Wellness & Spa Facilities', text: 'Serene, functional spaces that promote relaxation and rejuvenation.' },
      { icon: 'user', title: 'Meeting & Event Spaces', text: 'Flexible, technology-ready spaces for events, conferences, and gatherings.' },
      { icon: 'home', title: 'Amenity & Support Facilities', text: 'Pools, fitness centers, back-of-house, and operational spaces that support the guest experience.' },
    ],
  },
  approach: {
    id: 'hos-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We listen to your goals, brand vision, and operational needs.' },
      { num: '2', title: 'Plan', text: 'We develop a smart plan focused on design, budget, schedule, and logistics.' },
      { num: '3', title: 'Collaborate', text: 'We work as one team—aligning experts, partners, and stakeholders.' },
      { num: '4', title: 'Build', text: 'We execute with precision, maintain safety, and uphold the highest standards.' },
      { num: '5', title: 'Deliver', text: 'We deliver exceptional spaces that exceed expectations and perform for years to come.' },
    ],
  },
  partner: {
    id: 'hos-partner',
    variant: 'checklist',
    label: 'A Partner You Can Count On',
    heading: [{ text: 'Hospitality Is About More Than Buildings.' }, { text: 'It’s About People.' }],
    body: '320 Grit is committed to building hospitality spaces that create lasting impressions and lasting value.',
    checks: [
      'Deep hospitality construction expertise',
      'Proven project delivery and reliability',
      'Commitment to quality, safety, and service',
      'Built on relationships. Focused on results.',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Luxury hotel room',
  },
  cta: {
    id: 'hos-cta',
    heading: [{ text: 'Let’s Build Spaces That' }, { text: 'Welcome the World.', accent: true }],
    body: 'From concept to completion, we build hospitality environments that guests remember and owners rely on.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.lobby,
  },
};
