import { HeroData, SplitData, ValueCard } from '../shared/about.types';

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
    'At 320 Grit, we believe great construction is built on experience, integrity, and doing the job right the first time. Founded by two partners from different generations, our company combines over 25 years of hands-on construction experience. One partner brings decades of industry knowledge and proven expertise, while the other brings fresh perspective, energy, and a commitment to modern project management. Together, we’ve built a company that values craftsmanship, accountability, and lasting relationships.',
    '320 Grit was created with a simple mission: deliver high-quality work without compromising on communication, professionalism, or attention to detail. Whether we’re managing a project from concept to completion or solving complex construction challenges, we approach every job with the same level of dedication and pride.',
    'We understand that every project represents more than just a building, it represents our clients’ investment, vision, and trust. That’s why we’re committed to providing honest guidance, transparent communication, and quality results every step of the way. We’re not just building projects, we’re building our clients’ goals, dreams, and responsibilities that will stand the test of time.',
  ],
  cta: { label: 'Our Journey', href: '#story-values', variant: 'outline' },
  image: {
    src: 'assets/images/story-began.webp',
    alt: 'Construction team reviewing plans at a jobsite at dusk',
  },
  imagePosition: 'right',
};

export const VALUES: ValueCard[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z"/>',
    title: 'Integrity',
    text: 'We believe trust is earned through honesty, open-book transparency, and doing what we say we’ll do. We stand behind our work and always act in the best interest of our clients and partners.',
  },
  {
    icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    title: 'Quality',
    text: 'We never cut corners. From planning and coordination to the finished product, we are committed to delivering exceptional workmanship and lasting results.',
  },
  {
    icon: '<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12l2 2 4-4"/>',
    title: 'Accountability',
    text: 'We take ownership of every project and every decision. When challenges arise, we address them directly, communicate openly, and follow through until the job is complete.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',
    title: 'Collaboration',
    text: 'Successful projects are built through teamwork. We work closely with owners, architects, engineers, subcontractors, and stakeholders to achieve a shared vision and deliver the best possible outcome.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: 'Safety',
    text: 'Nothing is more important than the well-being of everyone on our projects. We promote a culture of safety through training, planning, awareness, and adherence to industry best practices.',
  },
  {
    icon: '<path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>',
    title: 'Continuous Improvement',
    text: 'Construction is constantly evolving, and so are we. We embrace new technologies, innovative solutions, and lessons learned to continually improve the way we serve our clients.',
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
