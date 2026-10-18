import { HeroData, ImpactItem, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/safety.php */

export const HERO: HeroData = {
  id: 'safe-hero',
  label: 'Safety',
  title: 'Building with Care.<br><span class="hc-orange">Protecting People.</span>',
  description:
    'At 320 Grit, safety is more than a priority—it’s a core value that guides every decision, every day. We are committed to protecting our people, partners, and the communities we build in.',
  descriptionWidth: '520px',
  image: {
    /* NOTE: template uses ?w=900 on the hero (likely a source typo) — reproduced as-is. */
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85',
    alt: '',
    fetchPriority: 'high',
  },
  ctas: [{ label: 'Our Safety Approach', href: '#safe-approach', variant: 'outline' }],
};

export const APPROACH: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Plan Safely',
    text: 'We identify risks early and plan proactively to eliminate or minimize them.',
  },
  {
    icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
    title: 'Work Safely',
    text: 'We provide training, tools, and clear expectations to support safe work.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Lead Safely',
    text: 'We hold ourselves and each other accountable at every level.',
  },
  {
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Improve Continuously',
    text: 'We learn, adapt, and raise the bar through data, feedback, and innovation.',
  },
];

export const STATS: ImpactItem[] = [
  { num: '2.4M+', label: 'Work Hours (2023)' },
  { num: '0.48', label: 'TRIR (Total Recordable Incident Rate)' },
  { num: '0', label: 'Fatalities Since Inception' },
  { num: '100%', label: 'Safety Training Completion' },
  { num: '100%', label: 'Project-Specific Safety Plans' },
];

export const CULTURE: SplitData = {
  id: 'safe-culture',
  background: '#0A0A0A',
  label: 'Our Safety Culture',
  title: 'Every Person. Every Day.',
  paragraphs: [
    'We believe every incident is preventable. Our culture empowers every person on site to speak up, stop work when necessary, and make safety personal.',
  ],
  checklist: [
    'Empowering our teams to take ownership of safety',
    'Encouraging open communication and reporting',
    'Recognizing and reinforcing safe behaviors',
    'Supporting mental and physical well-being',
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Worker on rebar',
  },
  imagePosition: 'left',
};

export const FOCUS: ValueCard[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'People',
    text: 'Protecting the health, safety, and well-being of our employees, subcontractors, and partners.',
  },
  {
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    title: 'Prevention',
    text: 'Eliminating hazards through proactive planning, hazard assessments, and robust safety programs.',
  },
  {
    icon: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
    title: 'Training',
    text: 'Providing ongoing, role-specific training to build knowledge, confidence, and competence.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    title: 'Technology',
    text: 'Leveraging innovative tools and data to enhance awareness and reduce risk.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Partnership',
    text: 'Collaborating with trade partners who share our commitment to safety excellence.',
  },
  {
    icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/>',
    title: 'Community',
    text: 'Extending our commitment to safety to the communities where we live and build.',
  },
];

export const CTA = {
  title: 'Safety Isn’t Just a Policy.<br><span class="hc-orange">It’s Our Promise.</span>',
  text: 'We will continue to build a safer tomorrow—together. Because when our people go home safely, we all win.',
  cta: { label: 'Our Safety Policy', href: '#contact', variant: 'primary' as const },
};
