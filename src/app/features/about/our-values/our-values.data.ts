import { HeroData, ProjectCard, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/our-values.php */

export const HERO: HeroData = {
  id: 'val-hero',
  label: 'Our Values',
  title: 'The Principles That<br><span class="hc-orange">Build Us.</span>',
  description:
    'Our values shape the way we lead, build, and partner. They are the foundation of every relationship, decision, and structure we create.',
  descriptionWidth: '520px',
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const CORE_VALUES: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Safety',
    text: 'We prioritize the safety of our people, partners, and communities in everything we do.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Integrity',
    text: 'We do what’s right, even when no one is watching. Honesty and transparency, always.',
  },
  {
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    title: 'Quality',
    text: 'We pursue excellence in every detail and deliver the highest standards on every project.',
  },
  {
    icon: '<path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/>',
    title: 'Innovation',
    text: 'We embrace smarter solutions and forward thinking to build better, stronger outcomes.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Collaboration',
    text: 'We believe the best results come from strong relationships and working together as one team.',
  },
  {
    icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/>',
    title: 'Commitment',
    text: 'We are dedicated to our clients, our teams, and the communities we serve. We finish what we start.',
  },
];

export const DRIVE: SplitData = {
  id: 'val-drive',
  background: '#050505',
  label: 'What Drives Us',
  title: 'More Than Buildings,<br><span class="hc-orange">We Build Legacies.</span>',
  paragraphs: [
    'We are driven by purpose, not just plans. Our values guide every decision, strengthen every partnership, and create a lasting impact for generations to come.',
  ],
  cta: { label: 'Our Story', href: '/our-story/', variant: 'outline' },
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Team silhouette on site',
  },
  imagePosition: 'right',
};

export const IN_ACTION: ProjectCard[] = [
  {
    title: 'We Lead',
    text: 'With integrity, accountability, and a relentless focus on doing what’s right.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',
  },
  {
    title: 'We Build',
    text: 'With precision, perseverance, and a commitment to excellence.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80',
  },
  {
    title: 'We Partner',
    text: 'With respect, trust, and collaboration that lasts beyond the project.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
  },
  {
    title: 'We Impact',
    text: 'Communities, industries, and lives through the work we do.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
  },
];
