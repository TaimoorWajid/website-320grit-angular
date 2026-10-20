/* Services index page data — /services.
   Copy written in the voice of the existing service pages (professional
   construction-consulting tone). Icons are the original staging SVGs
   (same set as the mega-menu "What we do" panel). Images are existing
   originals from public/assets/images — no stock or generated imagery. */

export interface ServiceCard {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  image: string;
  icon: string;
}

export const SERVICES_HERO = {
  eyebrow: '01 — What We Do',
  intro:
    'From the first sketch to the final walkthrough — and the courtroom when it matters — 320 GRIT delivers every construction service an owner needs under one accountable roof.',
} as const;

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: 'Design-Build',
    desc: 'One contract. One accountable team. We unite design and construction from day one, so collaboration replaces finger-pointing and your vision moves from concept to completion without losing momentum.',
    bullets: ['Single point of responsibility', 'Faster delivery timelines', 'Cost certainty from concept'],
    href: '/services/design-build',
    image: '/assets/images/commercial-construction.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20l9-9-4-4-9 9v4h4z"></path><path d="M2 21h4"></path></svg>`,
  },
  {
    title: 'Bid-Build',
    desc: 'The proven delivery method, executed with discipline. Competitive bidding, transparent pricing, and rigorous construction management keep your project on time and on budget at every step.',
    bullets: ['Competitive, transparent bidding', 'Defined scope and schedule', 'Disciplined cost control'],
    href: '/services/bid-build',
    image: '/assets/images/labour-320-grit.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="5" width="16" height="15" rx="1"></rect><path d="M8 3v4M16 3v4M4 10h16"></path></svg>`,
  },
  {
    title: 'Expert Witness',
    desc: 'When disputes arise, facts win. Our construction experts provide independent analysis, clear reporting, and credible testimony that holds up under scrutiny — in mediation, arbitration, and court.',
    bullets: ['Independent forensic analysis', 'Clear, defensible reporting', 'Credible courtroom testimony'],
    href: '/services/expert-witness',
    image: '/assets/images/What-is-an-expert-witness.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="3" width="12" height="18" rx="1"></rect><path d="M9 8h6M9 12h6M9 16h3"></path></svg>`,
  },
  {
    title: 'Forensic Accounting',
    desc: 'Follow the numbers. Uncover the truth. Our forensic accountants investigate construction costs, claims, and disputes with meticulous financial analysis you can trust and evidence that stands up.',
    bullets: ['Cost and claim investigation', 'Delay and disruption analysis', 'Litigation-ready documentation'],
    href: '/services/forensic-accounting',
    image: '/assets/images/what-is-forensic-accounting.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 6 5 9.5 5 13.5A7 7 0 0019 13.5C19 9.5 16 6 12 2z"></path></svg>`,
  },
  {
    title: 'Commercial Construction',
    desc: 'Ground-up builds for offices, retail, and industrial. We deliver commercial spaces that work as hard as you do — built to spec, built to last, and built around how your business operates.',
    bullets: ['Ground-up construction', 'Corporate offices and retail', 'Industrial and mixed-use'],
    href: '/industries/commercial-construction',
    image: '/assets/images/Industries-we-serve-feature-image.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 21V6l8-3 8 3v15"></path><path d="M9 21v-6h6v6"></path><path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"></path></svg>`,
  },
  {
    title: 'Tenant Improvements',
    desc: 'Functional, modern spaces tailored to your needs. From office build-outs to retail and restaurant interiors, we transform existing spaces with minimal disruption to your operations.',
    bullets: ['Office build-outs and reconfigurations', 'Retail and restaurant interiors', 'Occupied-space expertise'],
    href: '/industries/tenant-improvement',
    image: '/assets/images/ChatGPT-Image-Aug-3-2026-05_11_51-PM.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 15a4 4 0 018 0v6H4v-6z"></path><path d="M6 15V9a6 6 0 0112 0v1"></path></svg>`,
  },
];

export interface ApproachCard {
  number: string;
  title: string;
  desc: string;
  href: string;
}

export const APPROACH_CARDS: ApproachCard[] = [
  {
    number: '01',
    title: 'Decidedly Owner & Team-Centric',
    desc: 'Research, budgeting, and planning with your interests at the center of every decision.',
    href: '/approach/owner-centric',
  },
  {
    number: '02',
    title: 'Construction Management / Owner Representation',
    desc: 'Collaborative design and value engineering from an advocate who speaks construction fluently.',
    href: '/approach/owner-representation',
  },
];
