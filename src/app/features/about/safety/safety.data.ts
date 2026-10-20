import { HeroData, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/safety.php */

export const HERO: HeroData = {
  id: 'safe-hero',
  label: 'Safety',
  title: 'Building with Care.<br><span class="hc-orange">Protecting People.</span>',
  description:
    'Construction safety isn’t a checklist at 320 Grit—it’s how we run every jobsite. From OSHA-compliant safety planning to daily field enforcement, we protect our crews, trade partners, and the public on every project we build.',
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
    text: 'Every project starts with a site-specific safety plan—hazard assessments, JSAs, and engineered controls that eliminate risk before boots hit the ground.',
  },
  {
    icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
    title: 'Work Safely',
    text: 'OSHA-certified training, the right PPE, and clear field expectations give every worker the knowledge and authority to work safe.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Lead Safely',
    text: 'Superintendents, foremen, and crews share ownership. Anyone can stop work for an unsafe condition—no questions, no retaliation.',
  },
  {
    icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
    title: 'Improve Continuously',
    text: 'Near-miss reporting, incident reviews, and toolbox talks feed a loop that makes every jobsite safer than the last.',
  },
];

export const CULTURE: SplitData = {
  id: 'safe-culture',
  background: '#0A0A0A',
  label: 'Our Safety Culture',
  title: 'Every Person. Every Day.',
  paragraphs: [
    'We believe every construction incident is preventable. That conviction shapes our safety culture: every person on a 320 Grit jobsite—employee or subcontractor—is empowered to speak up, stop work when something looks wrong, and take safety personally. It’s not a program handed down from the office; it’s a field-level commitment lived out in pre-task planning, daily huddles, and open reporting.',
  ],
  checklist: [
    'Stop-work authority for every worker on every jobsite',
    'Daily safety huddles and weekly toolbox talks on every project',
    'Near-miss and hazard reporting without fear of retaliation',
    'Ongoing OSHA training, certifications, and mentorship for field teams',
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
    text: 'Protecting the health and well-being of our employees, subcontractors, and everyone who steps onto our jobsites.',
  },
  {
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    title: 'Prevention',
    text: 'Eliminating hazards before they cause harm through pre-task planning, job hazard analyses, and layered controls.',
  },
  {
    icon: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
    title: 'Training',
    text: 'Role-specific OSHA training, equipment certifications, and onboarding that build real competence—not just compliance.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    title: 'Technology',
    text: 'Using current field technology—from digital inspections to real-time reporting—to see risk earlier and act faster.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Partnership',
    text: 'Prequalifying subcontractors on safety performance and holding every trade partner to the same zero-harm standard.',
  },
  {
    icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/>',
    title: 'Community',
    text: 'Protecting the public around our work—pedestrian controls, dust and noise management, and clean, secure jobsites.',
  },
];

export const CTA = {
  title: 'Safety Isn’t a Policy.<br><span class="hc-orange">It’s Our Culture.</span>',
  text: 'Partner with a contractor whose safety program protects your people, your schedule, and your reputation. Every worker home safe, every day.',
  cta: { label: 'Start a Safe Project', href: '#contact', variant: 'primary' as const },
};
