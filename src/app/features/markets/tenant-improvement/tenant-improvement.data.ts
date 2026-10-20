import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Tenant Improvement (spec §6e). 4-step approach, V5 partner variant. */
export const TENANT_IMPROVEMENT_DATA: MarketPageData = {
  seoTitle: 'Tenant Improvement Construction',
  canonicalPath: '/industries/tenant-improvement',
  hero: {
    id: 'ti-hero',
    label: '01 — Markets We Serve',
    title: [{ text: 'Tenant' }, { text: 'Improvement', accent: true }],
    sub: [{ text: 'Transforming spaces. Elevating performance.' }],
    subMaxWidth: '520px',
    desc: '320 Grit delivers tenant improvements—from office buildouts to full-floor renovations—with fast-track scheduling, minimal disruption to occupied buildings, and finishes that reflect your brand.',
    buttons: [
      { label: 'Let’s Build Your Space', variant: 'primary', anchor: '#ti-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.banner,
  },
  overview: {
    id: 'ti-overview',
    label: '02 — Overview',
    title: [{ text: 'Spaces Designed Around ', inline: true }, { text: 'Your Business.', accent: true }],
    paragraphs: [
      'Every business is unique—and your space should be too. Our tenant improvement solutions combine smart space planning, efficient scheduling, and expert interior construction to create environments that support productivity, reflect your brand, and impress clients.',
      'From small refreshes to full-floor buildouts, we deliver on fast-track schedules—often in occupied buildings—with phased work, after-hours shifts, and rigorous dust and noise control.',
    ],
    image: MARKET_IMG.lobby,
    imageAlt: 'Modern office interior',
    points: [
      { icon: 'user-alt', title: 'Brand-Driven Design', text: 'Interiors that reflect your brand, support your culture, and flex with your growth.' },
      { icon: 'shield', title: 'Occupied-Space Expertise', text: 'Phased construction, after-hours work, and dust and noise controls that keep your business running.' },
      { icon: 'clock', title: 'Fast-Track Delivery', text: 'Accelerated schedules, accurate estimating, and disciplined controls for predictable outcomes.' },
      { icon: 'droplet', title: 'Healthier Workplaces', text: 'Low-VOC materials, efficient lighting, and wellness-focused design for better indoor environments.' },
    ],
  },
  capabilities: {
    id: 'ti-capabilities',
    label: '03 — Our Capabilities',
    heading: 'Our Tenant Improvement Capabilities',
    cards: [
      { icon: 'layout-grid', title: 'Space Planning & Design', text: 'Test fits, space planning, and design collaboration that maximize usable square footage.' },
      { icon: 'wrench', title: 'Interior Construction & Finishes', text: 'Demolition, framing, drywall, and premium finishes executed with precision.' },
      { icon: 'zap', title: 'MEP Systems Upgrades', text: 'HVAC, electrical, plumbing, and lighting upgrades engineered for performance and efficiency.' },
      { icon: 'partition', title: 'Partitions & Demising Walls', text: 'Demising walls, office fronts, and flexible partitions that adapt as you grow.' },
      { icon: 'home-door', title: 'Furniture, Fixtures & Equipment (FF&E)', text: 'Furniture, fixture, and equipment coordination for a complete, move-in-ready space.' },
      { icon: 'building-windows', title: 'Code Compliance & Permitting', text: 'ADA compliance, permits, and inspections managed from start to finish.' },
    ],
  },
  projects: {
    id: 'ti-projects',
    label: '04 — Project Types',
    heading: 'Types of Tenant Improvement Projects',
    image: MARKET_IMG.planning,
    imageAlt: 'Modern open office',
    items: [
      { icon: 'building-windows', title: 'Office Build-Outs', text: 'Corporate offices, coworking spaces, and headquarters built for productivity and culture.' },
      { icon: 'home', title: 'Retail Spaces', text: 'Retail stores, showrooms, and customer-facing spaces that drive foot traffic.' },
      { icon: 'activity', title: 'Medical & Dental Offices', text: 'Compliant clinical spaces with specialized plumbing, electrical, and privacy requirements.' },
      { icon: 'utensils', title: 'Restaurants & Hospitality', text: 'Restaurants, bars, and hospitality interiors built for atmosphere and operations.' },
      { icon: 'building', title: 'Industrial & Flex Spaces', text: 'Warehouse offices, flex space, and light industrial interiors.' },
      { icon: 'home-door', title: 'Shell Spaces to Move-In Ready', text: 'Cold dark shell to fully finished—permits, construction, and FF&E in one handoff.' },
    ],
  },
  approach: {
    id: 'ti-approach',
    label: '05 — Our Approach',
    columns: 4,
    splitNumTitle: true,
    steps: [
      { num: '01', title: 'Listen', text: 'We learn your goals, headcount plans, and how your team actually works.' },
      { num: '02', title: 'Plan', text: 'Test fits, budgets, and phased schedules built around your move-in date.' },
      { num: '03', title: 'Build', text: 'Clean, safe, coordinated construction—even in occupied buildings.' },
      { num: '04', title: 'Deliver', text: 'Punch-list complete, systems commissioned, ready for move-in day.' },
    ],
  },
  partner: {
    id: 'ti-why',
    variant: 'checklist-difference',
    label: '06 — Why Partner with 320 Grit?',
    body: '320 Grit specializes in tenant improvements—office buildouts, renovations, and interior construction delivered fast, with minimal disruption and finishes that last.',
    checks: [
      'Tenant improvement specialists—from 1,000 SF refreshes to full-floor buildouts',
      'Occupied-building expertise: phased work, after-hours shifts, dust and noise control',
      'Established relationships with architects, engineers, and building managers',
      'Transparent budgets, proactive communication, no surprises',
      'Safety, quality, and client satisfaction on every project',
    ],
    image: MARKET_IMG.lab,
    imageAlt: 'Cleanroom laboratory interior',
    diffHeading: 'The 320 Grit Difference',
    diffCards: [
      { icon: 'clock', title: 'On-Time Delivery', text: 'Move-in dates are commitments. We plan backward from yours.' },
      { icon: 'dollar', title: 'Budget Focused', text: 'Detailed estimating and cost control—no budget creep.' },
      { icon: 'users', title: 'Client Collaboration', text: 'One point of contact, weekly updates, total transparency.' },
      { icon: 'shield', title: 'Quality Guaranteed', text: 'Premium finishes and workmanship we stand behind.' },
    ],
  },
  cta: {
    id: 'ti-cta',
    label: '07 — Get Started',
    heading: [{ text: 'Transform Your Space.' }, { text: 'Elevate Your Business.', accent: true }],
    body: 'From test fit to move-in day, 320 Grit builds tenant improvements that work as hard as you do.',
    button: { label: 'Start Your Project', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.banner,
  },
};
