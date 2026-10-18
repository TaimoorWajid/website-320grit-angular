import { HeroData, SplitData, StatItem, TeamMember, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/our-leadership.php.
   NOTE: team photos/bios are placeholder content (Unsplash portraits,
   generic executive names) — reproduced as-is; flag for replacement. */

export const HERO: HeroData = {
  id: 'lead-hero',
  label: 'Our Leadership',
  title: 'Leadership That Builds<br><span class="hc-orange">Legacies.</span>',
  description:
    'Great projects start with strong leadership. Our leadership team brings decades of experience, a passion for excellence, and a shared commitment to building a better future.',
  descriptionWidth: '540px',
  image: {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const STATS: StatItem[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    num: '100+',
    label: 'Years of Combined Experience',
  },
  {
    icon: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/>',
    num: '500+',
    label: 'Projects Completed Across the U.S.',
  },
  {
    icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
    num: '20+',
    label: 'Markets Served',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    num: '1',
    label: 'Unified Commitment to Excellence',
  },
];

export const APPROACH: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Lead with Integrity',
    text: 'We do what’s right—always.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Empower Our Teams',
    text: 'We invest in our people and encourage ownership.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: 'Deliver Lasting Impact',
    text: 'We build more than projects—we build trust and communities.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Michael D. Campbell',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 25+ years in construction and real estate development.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Sarah J. Mitchell',
    role: 'President',
    bio: 'Expert in operational strategy and project delivery with a focus on people and process.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'David R. Thompson',
    role: 'Chief Operating Officer',
    bio: 'Drives performance across projects and markets with precision and accountability.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Jason P. Anderson',
    role: 'Chief Financial Officer',
    bio: 'Financial steward focused on sustainable growth and long-term value creation.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Melissa K. Rodriguez',
    role: 'Chief People Officer',
    bio: 'Champion of culture, talent development, and a people-first mindset.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

/** Values split uses a nested 2-col plain list (h3 orange + p muted), not value cards. */
export const VALUES_SPLIT: SplitData = {
  id: 'lead-values',
  background: '#050505',
  label: 'Our Values',
  title: 'The Principles That Guide Us',
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Team on site at sunset',
  },
  imagePosition: 'left',
};

export const VALUES_LIST: { title: string; text: string }[] = [
  { title: 'Safety', text: 'We prioritize safety in every decision, every time.' },
  { title: 'Integrity', text: 'We build trust through honesty, transparency, and accountability.' },
  { title: 'Quality', text: 'We are committed to delivering the highest standards.' },
  { title: 'Innovation', text: 'We embrace innovation to solve complex challenges.' },
  { title: 'Community', text: 'We strengthen communities through meaningful partnerships.' },
];
