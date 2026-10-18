import { HeroData, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/community.php */

export const HERO: HeroData = {
  id: 'com-hero',
  label: 'Community',
  title: 'Building More<br><span class="hc-orange">Than Structures.</span>',
  description:
    'We are proud to support and invest in the communities where we live and work. Together, we build stronger, healthier, and more vibrant places for all.',
  descriptionWidth: '520px',
  image: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const PILLARS: ValueCard[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Investing Locally',
    text: 'Supporting local businesses, organizations, and initiatives.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Volunteerism',
    text: 'Our team gives time and talent to make a difference.',
  },
  {
    icon: '<path d="M2 20h20M5 20V10l7-5 7 5v10"/>',
    title: 'Building Opportunities',
    text: 'Creating jobs, careers, and pathways for the future.',
  },
  {
    icon: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>',
    title: 'Stronger Together',
    text: 'Partnering with communities to build a better tomorrow.',
  },
];

export const CTA_SPLIT: SplitData = {
  id: 'com-cta',
  background: '#050505',
  title: 'Strong Communities<br><span class="hc-orange">Build a Better Future.</span>',
  paragraphs: [
    'When we invest in the places we build, everyone wins. From local hiring and supplier partnerships to community programs and volunteer initiatives, we are committed to leaving every community stronger than we found it.',
  ],
  cta: { label: 'Partner With Us', href: '#contact', variant: 'primary' },
  image: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
    alt: 'Team volunteering',
  },
  imagePosition: 'left',
};
