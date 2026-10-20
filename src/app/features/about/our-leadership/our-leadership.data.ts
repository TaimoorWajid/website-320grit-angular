import { HeroData, SplitData, TeamMember, ValueCard } from '../shared/about.types';

/* Real 320 Grit leadership team (client-provided bios and photos).
   Soda Kuy's photo is forthcoming — she renders with an initials badge. */

export const HERO: HeroData = {
  id: 'lead-hero',
  label: '01 — Our Leadership',
  title: 'Leadership That Builds<br><span class="hc-orange">Legacies.</span>',
  description:
    'Behind every 320 Grit project is leadership that takes personal ownership of the outcome. From preconstruction planning to final handover, our leaders bring hands-on construction expertise, transparent communication, and an uncompromising commitment to delivering on schedule and on budget.',
  descriptionWidth: '540px',
  ctas: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Start a Conversation', href: '/contact-us', variant: 'outline' },
  ],
  image: {
    src: 'assets/images/leadership-hero.webp',
    alt: 'Construction leadership reviewing progress on a daylight jobsite',
    fetchPriority: 'high',
  },
};

export const APPROACH: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Lead with Integrity',
    text: 'We do what’s right—always. Open-book transparency, honest guidance, and promises kept on every project, from bid to closeout.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Empower Our Teams',
    text: 'We invest in our people and give them real ownership. Empowered field teams make faster decisions and deliver sharper results.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: 'Deliver Lasting Impact',
    text: 'We build more than structures—we build trust, relationships, and community assets that perform for decades.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Brett Smith',
    role: 'President',
    bio: 'Brett has over 8 years of construction project oversight with a focus on railroad, medical, commercial, and multifamily, and residential construction. He has developed his expertise in delivering urgent and complex projects from pre-construction through completion while keeping stakeholder\u2019s expectations and interests at heart. Brett\u2019s passion for construction is driven by the opportunity to create lasting, tangible spaces that impact people\u2019s lives and contribute to the growth and development of our families and communities. Whether it\u2019s a hospital that saves lives, an office space that fosters innovation, or a multifamily building that provides an inviting home to families, Brett is driven by the ability to leave a lasting impact. The knowledge that he has contributed to shaping the spaces where people work, live, and heal is what fuels his ongoing dedication to the craft of construction.',
    img: 'assets/images/brett-smith.webp',
  },
  {
    name: 'Mason Laurin',
    role: 'Construction Manager',
    bio: 'Mason is a Development professional in the making and a future leader in our industry. Having grown up with design, construction, management, and business, he brings fresh perspective and energy to 320 Grit. Currently pursuing an Engineering and Business degree, he\u2019s already shaping 320 Grit while CM consulting $82M of hospital projects.',
    img: 'assets/images/mason-laurin.jpg',
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
  label: '04 — Our Values',
  title: 'How We Lead Every Project',
  image: {
    src: 'assets/images/leadership-values.webp',
    alt: '320 Grit team collaborating on a daylight jobsite',
  },
  imagePosition: 'left',
};

export const VALUES_LIST: { title: string; text: string }[] = [
  { title: 'Safety', text: 'Zero-compromise safety culture—training, planning, and field awareness on every jobsite, every day.' },
  { title: 'Integrity', text: 'Open-book honesty with owners, partners, and crews. We say what we’ll do, then do it.' },
  { title: 'Quality', text: 'No shortcuts, no excuses. Exceptional workmanship from preconstruction through punch list.' },
  { title: 'Innovation', text: 'Modern project management, current technology, and smarter methods for complex builds.' },
  { title: 'Community', text: 'Hospitals, schools, and workplaces that serve—we build where our communities live and grow.' },
];
