import { HeroData, ProjectCard, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/sustainability.php.
   NOTE: project names are placeholder content — reproduced as-is. */

export const HERO: HeroData = {
  id: 'sus-hero',
  label: 'Sustainability',
  title: 'Building a Better Future.<br><span class="hc-orange">Together.</span>',
  description:
    'Sustainable construction isn’t an add-on at 320 Grit—it’s how we build. From waste diversion and responsible material sourcing to energy-efficient delivery, we reduce environmental impact while delivering buildings that perform for decades.',
  descriptionWidth: '540px',
  image: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
  ctas: [{ label: 'Our Approach to Sustainability', href: '#sus-commit', variant: 'outline' }],
};

export const COMMITMENT: ValueCard[] = [
  {
    icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
    title: 'Environmental Stewardship',
    text: 'We cut construction waste at the source—diversion planning, material optimization, and responsible disposal on every jobsite.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Social Responsibility',
    text: 'Healthy, safe buildings for the people who use them—and fair, responsible practices for the communities we build in.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Ethical Governance',
    text: 'Open-book honesty about materials, methods, and environmental performance—no greenwashing, just accountable building.',
  },
  {
    icon: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
    title: 'Long-Term Value',
    text: 'Durable, energy-efficient buildings with lower operating costs—sustainability that pays back over the building’s life.',
  },
];

export const HOW: SplitData = {
  id: 'sus-how',
  background: '#0A0A0A',
  label: 'How We Build Sustainably',
  title: 'Smarter Solutions.<br>Measurable Impact.',
  iconRows: [
    {
      icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/>',
      title: 'Sustainable Design & Planning',
      text: 'Early collaboration with owners and designers to optimize energy performance, material efficiency, and long-term adaptability.',
    },
    {
      icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
      title: 'Responsible Materials',
      text: 'Low-impact, regionally sourced, and recycled materials that cut embodied carbon and keep resources in the circular economy.',
    },
    {
      icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
      title: 'Efficient Construction',
      text: 'Prefabrication, tight logistics, and current field technology that minimize waste, cut emissions, and keep jobsites efficient.',
    },
    {
      icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
      title: 'Healthy Environments',
      text: 'Daylight, air quality, and non-toxic materials—interiors engineered for occupant health, comfort, and productivity.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Workers overlooking city',
  },
  imagePosition: 'right',
};

export const PROJECTS: ProjectCard[] = [
  {
    title: 'EcoEdge Corporate Campus',
    loc: 'Austin, TX',
    text: 'High-performance corporate campus engineered for energy efficiency, occupant wellness, and a reduced carbon footprint.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'Riverside Education Center',
    loc: 'Portland, OR',
    text: 'Education facility designed for net-zero energy readiness—sustainable materials, daylighting, and renewable-ready systems.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
  },
  {
    title: 'Greenway Medical Pavilion',
    loc: 'Nashville, TN',
    text: 'Medical pavilion designed around patient well-being—efficient MEP systems that cut energy and water use without compromising care.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
];

export const CTA = {
  title: 'Build Green.<br><span class="hc-orange">Build to Last.</span>',
  text: 'Partner with a contractor that treats sustainability as standard practice—lower operating costs, healthier spaces, and a smaller footprint.',
  cta: { label: 'Build Sustainably With Us', href: '#contact', variant: 'primary' as const },
};
