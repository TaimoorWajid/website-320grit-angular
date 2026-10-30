/* Mega-menu content extracted verbatim from the staging site (nav-forms.md).
   Icons are the original inline SVGs. Typo 'Bahvioral Health' corrected to 'Behavioral Health'. */

export interface MegaMenuItem {
  href: string; title: string; desc: string; icon: string;
}

export interface MegaMenuColumn { header: string; items: MegaMenuItem[]; }

export interface MegaMenu {
  label: string;
  columns: MegaMenuColumn[];
  featureImage: string;
  featureTitle: string;
  featureLinkText: string;
  featureLinkHref: string;
  mapImage?: string;
}

export const MEGA_MENUS: MegaMenu[] = [
  {
    label: 'Who we are',
    columns: [
      {
        header: 'About us',
        items: [
          {
            href: '/our-story',
            title: 'Our story',
            desc: 'Built on grit. Driven by purpose.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 21V8l8-5 8 5v13"></path><path d="M9 21v-6h6v6"></path></svg>`,
          },
          {
            href: '/our-leadership',
            title: 'Leadership',
            desc: 'Meet our experienced leaders.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>`,
          },
          {
            href: '/our-values',
            title: 'Our values',
            desc: 'Integrity, excellence, teamwork.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-4.6-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.4-7 10-7 10-1.5-.9-2.9-1.8-4-2.8"></path><path d="M9 12h6"></path></svg>`,
          },
        ],
      },
      {
        header: 'Commitment',
        items: [
          {
            href: '/safety',
            title: 'Safety',
            desc: 'Safety is our way of life.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="10" rx="1"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>`,
          },
          {
            href: '/sustainability',
            title: 'Sustainability',
            desc: 'Building better for a better future.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3c4 3 7 6.5 7 11a7 7 0 0 1-14 0c0-4.5 3-8 7-11Z"></path></svg>`,
          },
        ],
      },
    ],
    featureImage: '/assets/images/Who-we-are-feature-image.webp',
    featureTitle: `Building trust.`,
    featureLinkText: 'About 320 Grit',
    featureLinkHref: '/about-us',
  },
  {
    label: 'What we do',
    columns: [
      {
        header: 'Specialized services',
        items: [
          {
            href: '/services/design-build',
            title: 'Design-Build',
            desc: 'Seamless collaboration from concept to completion.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20l9-9-4-4-9 9v4h4z"></path><path d="M2 21h4"></path></svg>`,
          },
          {
            href: '/services/bid-build',
            title: 'Bid-Build',
            desc: 'On time, on budget, every step.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="5" width="16" height="15" rx="1"></rect><path d="M8 3v4M16 3v4M4 10h16"></path></svg>`,
          },
          {
            href: '/services/expert-witness',
            title: 'Expert Witness',
            desc: 'Independent expertise for construction disputes.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="3" width="12" height="18" rx="1"></rect><path d="M9 8h6M9 12h6M9 16h3"></path></svg>`,
          },
          {
            href: '/services/forensic-accounting',
            title: 'Forensic Accounting',
            desc: 'Financial investigation for construction disputes.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 6 5 9.5 5 13.5A7 7 0 0019 13.5C19 9.5 16 6 12 2z"></path></svg>`,
          },
        ],
      },
      {
        header: 'Our approach',
        items: [
          {
            href: '/approach/owner-centric',
            title: 'Decidedly Owner & Team-centric',
            desc: 'Research, budgeting, and planning.',
            icon: `01`,
          },
        ],
      },
    ],
    featureImage: '/assets/images/What-we-do-faeture-image.webp',
    featureTitle: `End-to-end construction.`,
    featureLinkText: 'View all services',
    featureLinkHref: '/services',
  },
  {
    label: 'Industries we serve',
    columns: [
      {
        header: '',
        items: [
          {
            href: '/industries/railroads',
            title: 'RailRoads',
            desc: 'Rail Infrastructure.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 21V6l8-3 8 3v15"></path><path d="M9 21v-6h6v6"></path><path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"></path></svg>`,
          },
          {
            href: '/industries/healthcare',
            title: 'Healthcare',
            desc: 'Hospitals, clinics, medical offices.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-4.6-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.4-7 10-7 10"></path><path d="M12 8v6M9 11h6"></path></svg>`,
          },
          {
            href: '/industries/education',
            title: 'Education',
            desc: 'Schools, colleges, universities.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10l9-6 9 6-9 6-9-6z"></path><path d="M7 12.5V17c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5"></path></svg>`,
          },
        ],
      },
      {
        header: '',
        items: [
          {
            href: '/industries/behavioral-health',
            title: 'Behavioral Health',
            desc: 'Treatment centers, clinics, and healing environments.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21V11l5 3v-3l5 3V8l5 3v10H3z"></path></svg>`,
          },
          {
            href: '/industries/hospitality',
            title: 'Hospitality',
            desc: 'Hotels, restaurants, entertainment.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M3 12a3 3 0 003 3h12a3 3 0 003-3M7 12V8a2 2 0 012-2h6a2 2 0 012 2v4"></path><path d="M5 18h14"></path></svg>`,
          },
          {
            href: '/industries/commercial-construction',
            title: 'Commercial',
            desc: 'Stores, shopping centers, marketplaces.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle><path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h7.2a2 2 0 002-1.8L20 8H6"></path></svg>`,
          },
        ],
      },
      {
        header: '',
        items: [
          {
            href: '/industries/advanced-technology',
            title: 'Advanced Technology',
            desc: 'Infrastructure for a connected world.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="6" rx="1"></rect><rect x="4" y="14" width="16" height="6" rx="1"></rect><path d="M8 7h.01M8 17h.01"></path></svg>`,
          },
          {
            href: '/industries/tenant-improvement',
            title: 'Tenant Improvement',
            desc: 'Office build-outs and interior renovations.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 10l8-5 8 5"></path><path d="M5 10v9M9 10v9M15 10v9M19 10v9"></path><path d="M3 19h18"></path></svg>`,
          },
        ],
      },
    ],
    featureImage: '/assets/images/Industries-we-serve-feature-image.webp',
    featureTitle: `Expertise across industries.`,
    featureLinkText: 'View all industries',
    featureLinkHref: '/industries',
  },
  {
    label: 'Where we work',
    columns: [
      {
        header: 'Our locations',
        items: [
          {
            href: '/locations/california',
            title: 'California',
            desc: 'Serving clients statewide',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-5.5 7-11a7 7 0 00-14 0c0 5.5 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`,
          },
        ],
      },
    ],
    featureImage: '/assets/images/Industries-we-serve-feature-image.webp',
    featureTitle: `Building across key markets.<br>Local expertise.<br>National strength.`,
    featureLinkText: 'Explore locations',
    featureLinkHref: '/locations',
    mapImage: '/assets/images/Nationwide-Map.webp',
  },
  {
    label: 'Career',
    columns: [
      {
        header: 'Why 320GRIT?',
        items: [
          {
            href: '/careers/our-culture',
            title: 'Our culture',
            desc: 'A team built on grit and respect.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 12l3 3 6-7"></path><circle cx="12" cy="12" r="9"></circle></svg>`,
          },
          {
            href: '/careers/benefits',
            title: 'Benefits',
            desc: 'We take care of our team.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="9" width="16" height="11" rx="1"></rect><path d="M4 13h16"></path><path d="M12 9v11"></path><path d="M12 9c-1.5 0-3-1-3-2.5S10.5 4 12 4s3 1 3 2.5S13.5 9 12 9z"></path></svg>`,
          },
          {
            href: '/careers/professional-growth',
            title: 'Professional growth',
            desc: 'Grow your skills. Build your future.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="7" r="3"></circle><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"></path><path d="M15 8l2 2 4-4"></path></svg>`,
          },
        ],
      },
      {
        header: 'Career opportunities',
        items: [
          {
            href: '/careers/jobs',
            title: 'Open positions',
            desc: 'Explore current opportunities.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="7" width="16" height="13" rx="1"></rect><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"></path><path d="M4 12h16"></path></svg>`,
          },
          {
            href: '/careers/internships',
            title: 'Internships',
            desc: 'Start your career with 320GRIT.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="6"></circle><path d="M14.5 14.5L20 20"></path></svg>`,
          },
        ],
      },
    ],
    featureImage: '/assets/images/career-feature-image.webp',
    featureTitle: `Build more than structures.`,
    featureLinkText: 'View careers',
    featureLinkHref: '/careers',
  },
];
