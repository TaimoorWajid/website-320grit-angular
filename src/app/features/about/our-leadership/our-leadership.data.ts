import { HeroData, SplitData, TeamMember, ValueCard } from '../shared/about.types';

/* Real 320 Grit leadership team (client-provided bios and photos).
   Soda Kuy's photo is forthcoming — she renders with an initials badge. */

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
    name: 'Brett Smith',
    role: 'President',
    bio: 'Brett has over 8 years of construction project oversight with a focus on railroad, medical, commercial, and multifamily, and residential construction. He has developed his expertise in delivering urgent and complex projects from pre-construction through completion while keeping stakeholder\u2019s expectations and interests at heart. Brett\u2019s passion for construction is driven by the opportunity to create lasting, tangible spaces that impact people\u2019s lives and contribute to the growth and development of our families and communities. Whether it\u2019s a hospital that saves lives, an office space that fosters innovation, or a multifamily building that provides an inviting home to families, Brett is driven by the ability to leave a lasting impact. The knowledge that he has contributed to shaping the spaces where people work, live, and heal is what fuels his ongoing dedication to the craft of construction.',
    img: 'assets/images/team-brett-smith.jpg',
  },
  {
    name: 'Mason Laurin',
    role: 'Construction Manager',
    bio: 'Mason is a Development professional in the making and a future leader in our industry. Having grown up with design, construction, management, and business, he brings fresh perspective and energy to 320 Grit. Currently pursuing an Engineering and Business degree, he\u2019s already shaping 320 Grit while CM consulting $82M of hospital projects.',
    img: 'assets/images/team-mason-laurin.jpg',
  },
  {
    name: 'Soda Kuy',
    role: 'Business Management',
    bio: 'Soda leads business management at 320 Grit, keeping our operations, finances, and client relationships running smoothly behind the scenes.',
    img: '',
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
