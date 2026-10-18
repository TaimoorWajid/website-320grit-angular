import { HeroData, ProjectCard, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/quality.php */

export const HERO: HeroData = {
  id: 'qual-hero',
  label: 'Quality',
  title: 'Built to the Highest Standard.<br><span class="hc-orange">Every Time.</span>',
  description:
    'Quality is more than a goal—it’s how we build. From preconstruction to project closeout, we hold ourselves to the highest standards to deliver exceptional results that stand the test of time.',
  descriptionWidth: '540px',
  image: {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
  ctas: [{ label: 'Our Approach to Quality', href: '#qual-commit', variant: 'outline' }],
};

export const COMMITMENT: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Do It Right',
    text: 'We plan thoroughly, build carefully, and verify relentlessly to get it right the first time.',
  },
  {
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    title: 'Excellence in Execution',
    text: 'Our experienced teams, proven processes, and attention to detail deliver exceptional workmanship.',
  },
  {
    icon: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
    title: 'Quality Assurance',
    text: 'Rigorous inspections, testing, and quality control ensure every element meets our exacting standards.',
  },
  {
    icon: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
    title: 'Continuous Improvement',
    text: 'We learn from every project and invest in innovation to raise the bar on quality across everything we do.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Built on Trust',
    text: 'We deliver what we promise and earn lasting trust through transparency, integrity, and results.',
  },
];

export const DETAILS: ProjectCard[] = [
  {
    title: 'Precision in Every Detail',
    text: 'We plan meticulously, manage proactively, and build with unmatched attention to detail to ensure every aspect of our work meets the highest standard.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
  {
    title: 'Commitment to Excellence',
    text: 'We partner with the best in the industry, use proven processes, and hold ourselves accountable to deliver outstanding quality on every project.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    title: 'Continuous Improvement',
    text: 'We are relentless in our pursuit of better—learning, evolving, and innovating to raise the bar and deliver even greater value for our clients.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
];

/** Icon-only foundation cards (quality §4): titles are the h3s. */
export const FOUNDATIONS: ValueCard[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Quality People',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    title: 'Quality Process',
  },
  {
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    title: 'Quality Projects',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Quality Partnerships',
  },
];
