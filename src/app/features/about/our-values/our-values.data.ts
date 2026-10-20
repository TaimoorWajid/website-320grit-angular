import { HeroData, ProjectCard, SplitData, ValueCard } from '../shared/about.types';

/* Copy verbatim from template-parts/components/about-us/our-values.php */

export const HERO: HeroData = {
  id: 'val-hero',
  label: 'Our Values',
  title: 'The Principles That<br><span class="hc-orange">Build Us.</span>',
  description:
    'Integrity, quality, accountability, collaboration, safety, and continuous improvement — these six principles govern every 320 Grit project, from preconstruction planning through final handover. They shape how we estimate, how we manage trade partners, and how we stand behind our work long after closeout.',
  descriptionWidth: '520px',
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85',
    alt: '',
    fetchPriority: 'high',
  },
};

export const CORE_VALUES: ValueCard[] = [
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

export const DRIVE: SplitData = {
  id: 'val-drive',
  background: '#050505',
  label: 'What Drives Us',
  title: 'More Than Buildings,<br><span class="hc-orange">We Build Legacies.</span>',
  paragraphs: [
    'We are driven by purpose, not just plans. Every 320 Grit project — from railroad infrastructure to hospital and medical construction — is guided by the same six values, applied with the same discipline on every jobsite.',
    'That means open-book transparency in our budgets, uncompromising safety planning before mobilization, and accountability that doesn’t end at substantial completion. When challenges arise, we address them directly and follow through until the work is right.',
    'The result is lasting impact: facilities that heal, infrastructure that moves commerce, and partnerships that owners return to project after project.',
  ],
  cta: { label: 'Our Story', href: '/our-story/', variant: 'outline' },
  image: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    alt: 'Team silhouette on site',
  },
  imagePosition: 'right',
};

export const IN_ACTION: ProjectCard[] = [
  {
    title: 'We Lead',
    text: 'With integrity and accountability — transparent budgets, honest schedules, and decisions that put the owner’s interests first on every project.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',
  },
  {
    title: 'We Build',
    text: 'With precision and perseverance — quality workmanship, tight coordination of trade partners, and an uncompromising commitment to doing it right the first time.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80',
  },
  {
    title: 'We Partner',
    text: 'With respect, trust, and true collaboration — working shoulder-to-shoulder with owners, architects, and engineers from preconstruction through closeout.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80',
  },
  {
    title: 'We Impact',
    text: 'Communities and industries through the work we do — hospitals that heal, infrastructure that connects, and buildings that serve for generations.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
  },
];
