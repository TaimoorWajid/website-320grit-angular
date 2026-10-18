import { HeroData, SplitData, TimelineItem, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/our-story.php */

export const HERO: HeroData = {
  id: 'story-hero',
  label: 'Our Story',
  title: 'Built on Experience.<br><span class="hc-orange">Driven by Purpose.</span>',
  description:
    '320 GRIT was founded on the belief that great construction is more than building structures—it’s about building trust, relationships, and a better future for the communities we serve.',
  descriptionWidth: '540px',
  image: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const BEGAN: SplitData = {
  id: 'story-began',
  background: '#0A0A0A',
  label: 'How It All Began',
  title: 'From the Ground Up',
  paragraphs: [
    '320 GRIT began with a simple idea—raise the standard. We saw an opportunity to approach construction differently through better planning, transparent communication, and an unrelenting focus on safety and quality.',
    'What started as a small team with big values has grown into a trusted construction partner across the United States, delivering complex projects with precision and integrity.',
  ],
  cta: { label: 'Our Journey', href: '#story-milestones', variant: 'outline' },
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Construction team at sunrise',
  },
  imagePosition: 'right',
};

export const VALUES: ValueCard[] = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Integrity',
    text: 'We do what’s right, even when no one is watching.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Safety',
    text: 'We protect our people, our partners, and our communities.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: 'Excellence',
    text: 'We pursue the highest standards in everything we do.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Collaboration',
    text: 'We believe the best results come from strong relationships.',
  },
  {
    icon: '<path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/>',
    title: 'Innovation',
    text: 'We embrace smarter solutions to build a better tomorrow.',
  },
];

export const MILESTONES: TimelineItem[] = [
  {
    year: '2008',
    title: 'Founded',
    text: '320 GRIT was established with a vision to raise the standard in construction.',
  },
  {
    year: '2012',
    title: 'First Major Project',
    text: 'Delivered our first large-scale project, earning our clients’ confidence.',
  },
  {
    year: '2016',
    title: 'Expansion',
    text: 'Expanded our team and services to meet growing demand across markets.',
  },
  {
    year: '2020',
    title: 'National Reach',
    text: 'Strengthened our presence nationwide with key projects in multiple industries.',
  },
  {
    year: '2024',
    title: 'Continuing the Journey',
    text: 'Focused on innovation, sustainability, and long-term partnerships for the future.',
  },
];

export const PURPOSE: SplitData = {
  id: 'story-purpose',
  background: '#050505',
  label: 'Our Purpose',
  title: 'Building More Than Structures',
  paragraphs: [
    'We’re in the business of building more than buildings. We build lasting partnerships, stronger communities, and a legacy of trust that extends far beyond the last day on site.',
  ],
  quote: {
    text: '“At 320 GRIT, every project is an opportunity to make a lasting impact.”',
    cite: '— 320 GRIT Leadership Team',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    alt: 'Modern building exterior at night',
  },
  imagePosition: 'left',
};
