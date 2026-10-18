import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Tenant Improvement (spec §6e). 4-step approach, V5 partner variant. */
export const TENANT_IMPROVEMENT_DATA: MarketPageData = {
  seoTitle: 'Tenant Improvement Construction',
  canonicalPath: '/industries/tenant-improvement',
  hero: {
    id: 'ti-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Tenant' }, { text: 'Improvement', accent: true }],
    sub: [{ text: 'Transforming spaces. Elevating performance.' }],
    desc: '320 Grit delivers tenant improvement projects that align with your business goals, reflect your brand, and enhance the way your space works.',
    buttons: [
      { label: 'Let’s Build Your Space', variant: 'primary', anchor: '#ti-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.banner,
  },
  overview: {
    id: 'ti-overview',
    label: 'Overview',
    title: [{ text: 'Spaces Designed Around ', inline: true }, { text: 'Your Business.', accent: true }],
    paragraphs: [
      'Every business is unique—and your space should be too. Our tenant improvement solutions combine smart design, efficient planning, and expert construction to create environments that support productivity, inspire teams, and leave a lasting impression.',
      'From small updates to full-scale build-outs, we deliver spaces that are on time, on budget, and built to perform.',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Modern office interior',
    points: [
      { icon: 'user-alt', title: 'Built Around You', text: 'We design and build spaces that reflect your brand, support your culture, and adapt to your goals.' },
      { icon: 'shield', title: 'Minimal Disruption', text: 'We plan carefully and communicate clearly to keep your business running with minimal interruption.' },
      { icon: 'clock', title: 'On Time, On Budget', text: 'We deliver predictable results through proven processes, accurate estimating, and disciplined project management.' },
      { icon: 'droplet', title: 'Sustainable Solutions', text: 'We incorporate sustainable materials and efficient systems to create healthier, more responsible spaces.' },
    ],
  },
  capabilities: {
    id: 'ti-capabilities',
    heading: 'Our Tenant Improvement Capabilities',
    cards: [
      { icon: 'layout-grid', title: 'Space Planning & Design', text: 'Functional layouts that maximize efficiency, flow, and collaboration.' },
      { icon: 'wrench', title: 'Interior Construction & Finishes', text: 'High-quality finishes and detail-driven execution that bring your vision to life.' },
      { icon: 'zap', title: 'MEP Systems Upgrades', text: 'Electrical, mechanical, plumbing, and lighting solutions that improve performance.' },
      { icon: 'partition', title: 'Partitions & Demising Walls', text: 'Flexible solutions that create privacy, define space, and adapt as you grow.' },
      { icon: 'home-door', title: 'Furniture, Fixtures & Equipment (FF&E)', text: 'Seamless coordination and installation for a complete, move-in ready space.' },
      { icon: 'building-windows', title: 'Code Compliance & Permitting', text: 'We manage permitting and code requirements from start to finish.' },
    ],
  },
  projects: {
    id: 'ti-projects',
    heading: 'Types of Tenant Improvement Projects',
    image: MARKET_IMG.planning,
    imageAlt: 'Modern open office',
    items: [
      { icon: 'building-windows', title: 'Office Build-Outs', text: 'Productive, comfortable environments for teams of all sizes.' },
      { icon: 'home', title: 'Retail Spaces', text: 'Inviting spaces that enhance the customer experience.' },
      { icon: 'activity', title: 'Medical & Dental Offices', text: 'Functional, compliant spaces designed for care.' },
      { icon: 'utensils', title: 'Restaurants & Hospitality', text: 'Memorable environments that elevate your brand.' },
      { icon: 'building', title: 'Industrial & Flex Spaces', text: 'Efficient spaces built to support your operations.' },
      { icon: 'home-door', title: 'Shell Spaces to Move-In Ready', text: 'From empty shell to fully functional—ready for day one.' },
    ],
  },
  approach: {
    id: 'ti-approach',
    label: 'Our Approach',
    columns: 4,
    splitNumTitle: true,
    steps: [
      { num: '01', title: 'Listen', text: 'We learn about your goals, challenges, and the way your team works.' },
      { num: '02', title: 'Plan', text: 'We create a smart plan focused on design, budget, schedule, and logistics.' },
      { num: '03', title: 'Build', text: 'We execute with precision, maintain safety, and keep you informed.' },
      { num: '04', title: 'Deliver', text: 'We deliver a space that’s ready to perform from day one.' },
    ],
  },
  partner: {
    id: 'ti-why',
    variant: 'checklist-difference',
    label: 'Why Partner with 320 Grit?',
    body: '320 Grit delivers tenant improvement projects that align with your business goals, reflect your brand, and enhance the way your space works.',
    checks: [
      'Specialized expertise in tenant improvement projects of all sizes',
      'Deep understanding of building systems and space planning',
      'Strong relationships with architects, engineers, and trade partners',
      'Transparent communication and proactive problem solving',
      'Committed to safety, quality, and client satisfaction',
    ],
    image: MARKET_IMG.lab,
    imageAlt: 'Modern lounge space',
    diffHeading: 'The 320 Grit Difference',
    diffCards: [
      { icon: 'clock', title: 'On-Time Delivery', text: 'We respect your time and deliver on our promises.' },
      { icon: 'dollar', title: 'Budget Focused', text: 'Accurate planning and cost control from day one.' },
      { icon: 'users', title: 'Client Collaboration', text: 'We work with you, not just for you.' },
      { icon: 'shield', title: 'Quality Guaranteed', text: 'We stand behind our work—always.' },
    ],
  },
  cta: {
    id: 'ti-cta',
    heading: [{ text: 'Transform Your Space.' }, { text: 'Elevate Your Business.', accent: true }],
    body: 'Let’s build a space that works for you—today and tomorrow.',
    button: { label: 'Start Your Project', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
