/* Footer content — link groups mirror the real route table only (no dead
   links, no placeholder pages). Contact SVGs are the originals from the
   staging site. */

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'Who We Are',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Our Leadership', href: '/our-leadership' },
      { label: 'Our Values', href: '/our-values' },
      { label: 'Safety', href: '/safety' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
  {
    heading: 'What We Do',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Bid-Build', href: '/services/bid-build' },
      { label: 'Design-Build', href: '/services/design-build' },
      { label: 'Expert Witness', href: '/services/expert-witness' },
      { label: 'Forensic Accounting', href: '/services/forensic-accounting' },
      { label: 'Owner-Centric', href: '/approach/owner-centric' },
      { label: 'Owner Representation', href: '/approach/owner-representation' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Industries', href: '/industries' },
      { label: 'Railroads', href: '/industries/railroads' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Behavioral Health', href: '/industries/behavioral-health' },
      { label: 'Advanced Technology', href: '/industries/advanced-technology' },
      { label: 'Tenant Improvement', href: '/industries/tenant-improvement' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Commercial Construction', href: '/industries/commercial-construction' },
    ],
  },
  {
    heading: 'Careers',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Open Positions', href: '/careers/jobs' },
      { label: 'Our Culture', href: '/careers/our-culture' },
      { label: 'Benefits', href: '/careers/benefits' },
      { label: 'Professional Growth', href: '/careers/professional-growth' },
      { label: 'Internships', href: '/careers/internships' },
      { label: 'Introduce Yourself', href: '/careers/introduce-yourself' },
    ],
  },
  {
    heading: 'Where We Work',
    links: [
      { label: 'Locations', href: '/locations' },
      { label: 'California', href: '/locations/california' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
];

export const FOOTER_CONTACT_ICONS: string[] = [
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
];
