import { OcChip, OcOrbitNode, OcPillar, OcProcessStep } from '../shared/oc.types';

/* Copy verbatim from template-parts/components/our-approach/owner-centric.php */

export const PILLARS: OcPillar[] = [
  {
    num: '01',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: 'Start with the Outcome',
    text: 'We begin by understanding what the project needs to accomplish—not simply what needs to be built.',
  },
  {
    num: '02',
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    title: 'Make Decisions Clear',
    text: 'Owners shouldn’t have to decode construction jargon to understand their project. We communicate options, impacts, and risks clearly.',
  },
  {
    num: '03',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Protect What Matters',
    text: 'Budget, schedule, quality, functionality and long-term value are considered together—not independently.',
  },
  {
    num: '04',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Stay Aligned',
    text: 'We keep the owner, designers, consultants, contractors and key stakeholders moving toward the same objective.',
  },
  {
    num: '05',
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Own the Details',
    text: 'When an issue appears, we don’t look for somewhere else to place the blame. We focus on understanding it and moving toward a solution.',
  },
];

export const ORBIT_NODES: OcOrbitNode[] = [
  {
    label: 'Owner',
    icon: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>',
    name: 'Owner',
    role: 'Vision → Priorities → Decisions',
  },
  {
    label: 'Architect',
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>',
    name: 'Architect',
    role: 'Intent → Coordination → Constructability',
  },
  {
    label: 'Engineers',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    name: 'Engineers',
    role: 'Analysis → Solutions → Integration',
  },
  {
    label: 'Consultants',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    name: 'Consultants',
    role: 'Expertise → Guidance → Oversight',
  },
  {
    label: 'Trade Partners',
    icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
    name: 'Trade Partners',
    role: 'Expertise → Execution → Quality',
  },
  {
    label: 'Suppliers',
    icon: '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>',
    name: 'Suppliers',
    role: 'Materials → Availability → Reliability',
  },
  {
    label: 'Stakeholders',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    name: 'Stakeholders',
    role: 'Investment → Support → Success',
  },
];

export const PROCESS_STEPS: OcProcessStep[] = [
  {
    num: '01',
    icon: '<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>',
    title: 'Listen',
    text: 'Before proposing solutions, we understand the owner’s priorities.',
    points: ['Budget', 'Schedule', 'Function', 'Quality', 'Risk', 'Long-term value'],
  },
  {
    num: '02',
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Align',
    text: 'We translate those priorities into a common project direction.',
    points: ['Everyone should understand what we’re trying to achieve—and why.'],
  },
  {
    num: '03',
    icon: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
    title: 'Anticipate',
    text: 'We look ahead rather than simply reacting to what’s happening today.',
    points: ['What’s next?', 'What could change?', 'What could impact cost?', 'What could impact schedule?', 'What decision is needed?'],
  },
  {
    num: '04',
    icon: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    title: 'Communicate',
    text: 'Clear communication isn’t a reporting exercise. It’s a project-control tool.',
    points: ['Transparent', 'Consistent', 'Timely', 'Actionable'],
  },
  {
    num: '05',
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Deliver',
    text: 'The objective isn’t simply to finish construction.',
    points: ['It’s to deliver an outcome the owner can stand behind.'],
  },
];

export const CHIPS: OcChip[] = [
  { label: 'Cost', top: '8%', left: '-8%' },
  { label: 'Time', top: '8%', right: '-8%' },
  { label: 'Quality', bottom: '28%', left: '-12%' },
  { label: 'Risk', bottom: '28%', right: '-12%' },
  { label: 'Scope', bottom: '5%', left: '18%' },
  { label: 'Coordination', bottom: '5%', right: '18%' },
];

/** Sticky section nav — mirrors the services pages' grit-sidenav pattern. */
export interface OcSidenavItem {
  section: string;
  num: string;
  label: string;
}

export const SIDENAV: OcSidenavItem[] = [
  { section: 'hero', num: '01', label: 'Overview' },
  { section: 'pillars', num: '02', label: 'Our Pillars' },
  { section: 'orbit', num: '03', label: 'One Team' },
  { section: 'process', num: '04', label: 'How We Work' },
  { section: 'compare', num: '05', label: 'The Difference' },
  { section: 'info', num: '06', label: 'Good Information' },
  { section: 'cta', num: '07', label: 'Get Started' },
];
