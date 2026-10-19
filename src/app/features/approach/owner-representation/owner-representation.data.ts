import { OcPillar, OcProcessStep } from '../shared/oc.types';

/* Construction Management / Owner Representation — expert SEO copy.
 * 320 Grit acts as the owner's fiduciary advocate across the entire
 * project lifecycle: planning, procurement, construction, and closeout. */

/** Hero copy — Construction Management / Owner's Representation. */
export const OR_HERO = {
  eyebrow: '01 — Owner Representation',
  titleTop: 'Your Advocate.',
  titleBottom: 'From Vision to Keys.',
  lead: '320 Grit serves as your owner\u2019s representative \u2014 an independent construction management expert who protects your budget, your schedule, and your interests on every decision, every day.',
  ctaPrimary: 'How We Protect You',
  ctaSecondary: 'Start a Project',
};

/** Animated count-up stats strip. value = target number; prefix/suffix decorate it. */
export interface OrStat {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
}

export const OR_STATS: OrStat[] = [
  { value: 120, decimals: 0, prefix: '', suffix: '+', label: 'Projects Managed End-to-End' },
  { value: 850, decimals: 0, prefix: '$', suffix: 'M+', label: 'Construction Value Overseen' },
  { value: 98, decimals: 0, prefix: '', suffix: '%', label: 'On-Time, On-Budget Delivery' },
  { value: 25, decimals: 0, prefix: '', suffix: '+', label: 'Years of Combined Field Leadership' },
];

export const OR_PILLARS: OcPillar[] = [
  {
    num: '01',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    title: 'Fiduciary Loyalty',
    text: 'We answer only to you. Every recommendation we make is measured against a single standard: what serves the owner’s interest best.',
  },
  {
    num: '02',
    icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    title: 'Cost Command',
    text: 'From conceptual budgets to final change-order negotiation, we keep every dollar accountable—so the price you approve is the price you pay.',
  },
  {
    num: '03',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: 'Schedule Certainty',
    text: 'We build the master schedule, drive the critical path, and hold every party to their commitments—so milestones are met, not moved.',
  },
  {
    num: '04',
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Quality Without Compromise',
    text: 'Independent inspections, submittal review, and punch-list rigor ensure the building you receive matches the building you were promised.',
  },
  {
    num: '05',
    icon: '<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>',
    title: 'Risk Foresight',
    text: 'We surface problems while they are still inexpensive to solve—permits, soils, labor, materials, contracts—before they become claims.',
  },
];

export const OR_PROCESS_STEPS: OcProcessStep[] = [
  {
    num: '01',
    icon: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
    title: 'Engage & Assess',
    text: 'We learn your objectives, constraints, and definition of success—then map every risk standing between you and it.',
    points: ['Goals & priorities', 'Budget reality-check', 'Site & entitlement review', 'Risk register'],
  },
  {
    num: '02',
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    title: 'Plan & Budget',
    text: 'We turn vision into a buildable plan: real budgets, real schedules, and procurement strategies set before design locks.',
    points: ['Conceptual estimating', 'Master scheduling', 'Delivery-method strategy', 'Cash-flow forecasting'],
  },
  {
    num: '03',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Procure & Contract',
    text: 'We run competitive, transparent procurement—qualifying bidders, leveling proposals, and negotiating contracts that protect you.',
    points: ['Bid packaging', 'Contractor qualification', 'Bid leveling', 'Contract negotiation'],
  },
  {
    num: '04',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Manage & Control',
    text: 'During construction we are your eyes on site: cost control, schedule enforcement, quality inspections, and change-order discipline.',
    points: ['Cost & draw management', 'Schedule enforcement', 'QA inspections', 'Change-order control', 'Safety oversight'],
  },
  {
    num: '05',
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Closeout & Handover',
    text: 'We drive punch-list to zero, commission every system, assemble your closeout documents, and stand beside you at final acceptance.',
    points: ['Punch-list completion', 'Systems commissioning', 'Warranties & O&M manuals', 'Final accounting'],
  },
];

export const OR_SHOULDNT: string[] = [
  'Navigate permits alone',
  'Accept the first bid',
  'Learn about overruns late',
  'Argue change orders yourself',
  'Wonder what is happening on site',
];

export const OR_SHOULD: string[] = [
  'An expert in your corner',
  'Competitive, vetted pricing',
  'Real-time cost visibility',
  'Negotiated like a professional',
  'Total project transparency',
];

/** Sticky section nav — mirrors the services pages' grit-sidenav pattern. */
export interface OrSidenavItem {
  section: string;
  num: string;
  label: string;
}

export const OR_SIDENAV: OrSidenavItem[] = [
  { section: 'hero', num: '01', label: 'Overview' },
  { section: 'services', num: '02', label: 'What We Manage' },
  { section: 'process', num: '03', label: 'How We Protect You' },
  { section: 'advocate', num: '04', label: 'The Difference' },
  { section: 'cta', num: '05', label: 'Get Started' },
];
