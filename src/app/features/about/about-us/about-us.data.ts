import { CORE_VALUES } from '../our-values/our-values.data';
import { TEAM } from '../our-leadership/our-leadership.data';
import { TeamMember, ValueCard } from '../shared/about.types';

/* About Us index page data — /about-us.
   Copy drawn from the client-provided Our Story / Leadership / Values
   content already live on the about pages — no invented facts, no stats,
   no founding-date claims. Card images are each page's own imagery. */

export const ABOUT_HERO = {
  eyebrow: '01 — Who We Are',
  intro:
    'Founded by two partners from different generations, 320 Grit combines over 25 years of hands-on construction experience with modern project management. We deliver high-quality work without compromising on communication, professionalism, or attention to detail — honest guidance and transparent communication on every project we build.',
  image: '/assets/images/hero-about.webp',
} as const;

export interface AboutCard {
  title: string;
  desc: string;
  href: string;
  image: string;
  icon: string;
}

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: 'Our Story',
    desc: '320 Grit was founded on a simple belief: great construction is about building trust, relationships, and a better future for the communities we serve. See how two partners from different generations built an owner-focused construction company from the ground up.',
    href: '/our-story',
    image: '/assets/images/story-began.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 21V8l8-5 8 5v13"></path><path d="M9 21v-6h6v6"></path></svg>`,
  },
  {
    title: 'Our Leadership',
    desc: 'Behind every 320 Grit project is leadership that takes personal ownership of the outcome. Meet the leaders who bring hands-on construction expertise, transparent communication, and an uncompromising commitment to delivering on schedule and on budget.',
    href: '/our-leadership',
    image: '/assets/images/leadership-values.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>`,
  },
  {
    title: 'Our Values',
    desc: 'Integrity, quality, accountability, collaboration, safety, and continuous improvement — six principles that govern every 320 Grit project, from preconstruction planning and estimating through final handover and beyond.',
    href: '/our-values',
    image: '/assets/images/values-hero.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-4.6-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.4-7 10-7 10-1.5-.9-2.9-1.8-4-2.8"></path><path d="M9 12h6"></path></svg>`,
  },
  {
    title: 'Safety',
    desc: 'Safety is not a checklist at 320 Grit — it is how we run every jobsite. Site-specific safety plans, OSHA-compliant training, daily field enforcement, and stop-work authority for every worker protect our crews, trade partners, and the public.',
    href: '/safety',
    image: '/assets/images/safety-hero.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="10" rx="1"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>`,
  },
  {
    title: 'Sustainability',
    desc: 'Sustainable construction is how we build — not an add-on. Waste diversion, responsible material sourcing, and energy-efficient delivery reduce environmental impact while producing buildings that perform for decades.',
    href: '/sustainability',
    image: '/assets/images/sustainability-hero.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3c4 3 7 6.5 7 11a7 7 0 0 1-14 0c0-4.5 3-8 7-11Z"></path></svg>`,
  },
];

/* Leadership preview — the real team from our-leadership.data (photos,
   names, roles), with one-line summaries drawn from their real bios. */
const LEADER_LINES: Record<string, string> = {
  'Brett Smith':
    'Over 8 years of construction project oversight across railroad, medical, commercial, and multifamily projects — driven by the lasting impact great spaces have on the people who use them.',
};

export const LEADERSHIP_PREVIEW: TeamMember[] = TEAM.map((m) => ({
  ...m,
  bio: LEADER_LINES[m.name] ?? m.bio,
}));

/* Values strip — the six real company values from our-values.data
   (icons + names), each with a one-line summary of its full text. */
const VALUE_LINES: Record<string, string> = {
  Integrity: 'Trust earned through honesty, open-book transparency, and doing what we say we’ll do.',
  Quality: 'We never cut corners — exceptional workmanship and lasting results on every project.',
  Accountability: 'We own every project and every decision, and follow through until the job is complete.',
  Collaboration: 'Owners, architects, engineers, and trade partners working toward one shared vision.',
  Safety: 'Nothing is more important than the well-being of everyone on our projects.',
  'Continuous Improvement': 'New technologies and lessons learned, applied to serve our clients better every time.',
};

export const VALUES_STRIP: ValueCard[] = CORE_VALUES.map((v) => ({
  icon: v.icon,
  title: v.title,
  text: VALUE_LINES[v.title] ?? v.text,
}));
