import { HeroData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/awards.php */

export const HERO: HeroData = {
  id: 'awd-hero',
  label: 'Awards & Recognitions',
  title: 'Recognized for<br><span class="hc-orange">Excellence.</span>',
  description:
    'Our commitment to safety, quality, and innovation has earned us industry recognition and the trust of our clients and partners.',
  descriptionWidth: '520px',
  image: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const AWARDS: ValueCard[] = [
  {
    eyebrow: 'TOP 400',
    title: 'ENR Top 400 Contractors 2024',
    text: 'Recognized among the nation’s leading contractors.',
  },
  {
    eyebrow: 'SAFETY LEADER',
    title: 'AGC California Safety Excellence 2023',
    text: 'Honored for outstanding safety performance.',
  },
  {
    eyebrow: 'EXCELLENCE',
    title: 'ABC Excellence in Construction 2023',
    text: 'Awarded for project quality and craftsmanship.',
  },
  {
    eyebrow: 'CLIENT TRUST',
    title: 'Built on relationships. Proven by results.',
    text: 'Our greatest recognition is the trust of our clients.',
  },
];

export const CTA = {
  title: 'Excellence Is Not a Destination.<br><span class="hc-orange">It’s How We Work.</span>',
  text: 'Awards recognize the past. Our commitment is to the future—delivering safer, smarter, and higher-quality projects for every client we serve.',
  cta: { label: 'Start a Project', href: '#contact', variant: 'primary' as const },
};
