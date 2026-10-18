/* Trust badge items extracted verbatim from the staging homepage. */

export interface TrustItem { title: string; sub: string; icon: string; }

export const TRUST_ITEMS: TrustItem[] = [
  {
    title: 'Licensed',
    sub: '& Insured',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2.2 4.5 5v6.2c0 5.4 3.6 9.9 7.5 11.3 3.9-1.4 7.5-5.9 7.5-11.3V5L12 2.2Z"/>
          <path d="M8.6 12.2l2.3 2.3 4.3-4.6"/>
        </svg>`,
  },
  {
    title: 'Bonded',
    sub: '& Reliable',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2.2 4.5 5v6.2c0 5.4 3.6 9.9 7.5 11.3 3.9-1.4 7.5-5.9 7.5-11.3V5L12 2.2Z"/>
          <path d="M7.3 12.6l1.9-1.9 1.4 1.4.9-.9 1 1 .9-.9 1.9 1.9"/>
          <path d="M9.2 10.7 7.3 8.8M14.8 10.7l1.9-1.9"/>
        </svg>`,
  },
  {
    title: 'California',
    sub: 'Based',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21.5s7-7.2 7-12.8a7 7 0 1 0-14 0c0 5.6 7 12.8 7 12.8Z"/>
          <circle cx="12" cy="8.6" r="2.3"/>
        </svg>`,
  },
  {
    title: 'Free',
    sub: 'Estimates',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="4.2" width="14" height="17.6" rx="2"/>
          <rect x="9" y="2" width="6" height="3.6" rx="1"/>
          <line x1="8.3" y1="10.6" x2="15.7" y2="10.6"/>
          <line x1="8.3" y1="14.2" x2="15.7" y2="14.2"/>
          <line x1="8.3" y1="17.8" x2="12.8" y2="17.8"/>
        </svg>`,
  },
  {
    title: 'On-Time',
    sub: 'Delivery',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="13.5" r="8.3"/>
          <line x1="12" y1="13.5" x2="12" y2="9"/>
          <line x1="12" y1="13.5" x2="15.2" y2="15"/>
          <line x1="10" y1="2.2" x2="14" y2="2.2"/>
          <line x1="12" y1="2.2" x2="12" y2="5"/>
        </svg>`,
  },
];
