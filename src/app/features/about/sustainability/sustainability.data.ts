import { HeroData, ImpactItem, ProjectCard, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/sustainability.php.
   NOTE: project names are placeholder content — reproduced as-is. */

export const HERO: HeroData = {
  id: 'sus-hero',
  label: 'Sustainability',
  title: 'Building a Better Future.<br><span class="hc-orange">Together.</span>',
  description:
    'At 320 Grit, sustainability is more than a goal—it’s a responsibility. We are committed to creating lasting value for our clients, our communities, and our planet through smarter building practices and sustainable solutions.',
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
    text: 'We minimize our impact on the environment through responsible resource use and waste reduction.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Social Responsibility',
    text: 'We invest in our people, partners, and communities to create safe, healthy, and thriving places to live and work.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Ethical Governance',
    text: 'We operate with integrity, transparency, and accountability in everything we do.',
  },
  {
    icon: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
    title: 'Long-Term Value',
    text: 'We build with durability and efficiency in mind to generate lasting value for generations to come.',
  },
];

export const IMPACT: ImpactItem[] = [
  { num: '45%', label: 'Average Waste Diversion from Landfills' },
  { num: '30%', label: 'Reduction in Energy Use Across Projects' },
  { num: '25%', label: 'Lower Water Use Through Efficient Systems' },
  { num: '100%', label: 'Of New Projects Aligned with Our Sustainability Standards' },
  { num: 'ESG', label: 'Integrated into Every Decision We Make' },
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
      text: 'We collaborate early to optimize design for energy performance, material efficiency, and future adaptability.',
    },
    {
      icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
      title: 'Responsible Materials',
      text: 'We prioritize low-impact, locally sourced, and recycled materials that reduce embodied carbon and support a circular economy.',
    },
    {
      icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
      title: 'Efficient Construction',
      text: 'We use innovative techniques, prefabrication, and technology to minimize waste, reduce emissions, and improve jobsite efficiency.',
    },
    {
      icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
      title: 'Healthy Environments',
      text: 'We create safe, comfortable, and healthy spaces that promote well-being and productivity.',
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
    text: 'LEED Gold Certified. High-performance building designed for efficiency, wellness, and long-term environmental impact.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    linkLabel: 'View Project',
  },
  {
    title: 'Riverside Education Center',
    loc: 'Portland, OR',
    text: 'Net Zero Energy Ready. A future-focused learning environment built with sustainable materials and renewable energy.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    linkLabel: 'View Project',
  },
  {
    title: 'Greenway Medical Pavilion',
    loc: 'Nashville, TN',
    text: 'LEED Silver Certified. Designed to improve patient well-being while reducing energy and water consumption.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    linkLabel: 'View Project',
  },
];

export const CTA = {
  title: 'Building More Than Structures—<br><span class="hc-orange">Building a Legacy.</span>',
  text: 'We believe the buildings we create today should help solve tomorrow’s challenges. Through innovation, partnership, and a relentless commitment to doing better, we’re building a legacy of sustainability that extends far beyond the jobsite.',
  cta: { label: 'Let’s Build a Better Future', href: '#contact', variant: 'primary' as const },
};
