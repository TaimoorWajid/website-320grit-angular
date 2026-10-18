import { MarketPageData } from '../shared/market-page/market-page.data';
import { MARKET_IMG } from '../shared/market-assets';

/** Behavioral Health (spec §6b). Partner variant V3: commitment diff-cards. */
export const BEHAVIORAL_HEALTH_DATA: MarketPageData = {
  seoTitle: 'Behavioral Health Construction',
  canonicalPath: '/industries/behavioral-health',
  hero: {
    id: 'bh-hero',
    label: 'Markets We Serve',
    title: [{ text: 'Behavioral' }, { text: 'Health', accent: true }],
    sub: [{ text: 'Thoughtfully built environments that support healing, dignity, and long-term well-being.' }],
    subMaxWidth: '520px',
    desc: '320 Grit delivers behavioral health facilities that prioritize safety, functionality, and comfort—creating spaces where people can heal and thrive.',
    buttons: [
      { label: 'Let’s Build Better Spaces', variant: 'primary', anchor: '#bh-cta' },
      { label: 'Talk to Our Team', variant: 'outline', route: '/contact-us' },
    ],
    image: MARKET_IMG.residence,
  },
  overview: {
    id: 'bh-overview',
    label: 'Overview',
    title: [{ text: 'Spaces That Put' }, { text: 'People First.', accent: true }],
    paragraphs: [
      'Behavioral health facilities require more than construction expertise—they require empathy, careful planning, and a deep understanding of how the built environment impacts recovery.',
      'We partner with owners, operators, and design teams to deliver safe, secure, and therapeutic environments that support patients, families, and staff.',
    ],
    image: MARKET_IMG.residence,
    imageAlt: 'Calm therapeutic interior',
    points: [
      { icon: 'shield', title: 'Safety & Security', text: 'Design and construction solutions that prioritize the safety of patients, staff, and visitors.' },
      { icon: 'user', title: 'Therapeutic Environments', text: 'Spaces designed to reduce stress, promote healing, and support positive outcomes.' },
      { icon: 'file-text', title: 'Operational Focus', text: 'Efficient layouts and durable systems that support day-to-day operations and long-term value.' },
      { icon: 'users', title: 'Trusted Partner', text: 'A collaborative approach built on transparency, communication, and a shared mission.' },
    ],
  },
  capabilities: {
    id: 'bh-capabilities',
    heading: 'Our Behavioral Health Construction Capabilities',
    cards: [
      { icon: 'shield-check', title: 'Secure Environments', text: 'Experience delivering ligature-resistant, tamper-resistant, and secure facility solutions.' },
      { icon: 'home-door', title: 'Patient-Centered Design', text: 'Support spaces that promote dignity, privacy, comfort, and therapeutic care.' },
      { icon: 'wrench', title: 'Renovations & Adaptive Reuse', text: 'Transforming existing buildings to meet modern behavioral health standards.' },
      { icon: 'users', title: 'Consultant & Stakeholder Collaboration', text: 'Working closely with clinicians, operators, and planners to align vision with execution.' },
      { icon: 'clock', title: 'Schedule & Budget Discipline', text: 'Delivering projects on time and on budget without compromising quality or safety.' },
      { icon: 'shield', title: 'Compliance & Codes', text: 'Deep knowledge of behavioral health codes, regulations, and best practices.' },
    ],
  },
  projects: {
    id: 'bh-projects',
    heading: 'Types of Behavioral Health Projects',
    image: MARKET_IMG.residence,
    imageAlt: 'Behavioral health outdoor courtyard',
    items: [
      { icon: 'building', title: 'Inpatient Facilities', text: 'Acute care, short-term stabilization, and long-term treatment centers.' },
      { icon: 'home', title: 'Outpatient & Community Centers', text: 'Therapy centers, counseling clinics, and outpatient services.' },
      { icon: 'activity', title: 'Addiction Treatment Centers', text: 'Detox, residential treatment, and recovery support facilities.' },
      { icon: 'user', title: 'Youth & Adolescent Facilities', text: 'Specialized environments designed for younger populations.' },
      { icon: 'home-door', title: 'Supportive Housing', text: 'Transitional and permanent supportive housing for recovery.' },
    ],
  },
  approach: {
    id: 'bh-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We listen to your goals, needs, and the needs of the communities you serve.' },
      { num: '2', title: 'Plan', text: 'We develop thoughtful solutions that balance care, safety, function, and budget.' },
      { num: '3', title: 'Collaborate', text: 'We work as an extension of your team to keep every stakeholder aligned.' },
      { num: '4', title: 'Build', text: 'We execute with precision, maintain transparency, and prioritize safety.' },
      { num: '5', title: 'Deliver', text: 'We deliver spaces that support healing today and long-term impact tomorrow.' },
    ],
  },
  partner: {
    id: 'bh-commitment',
    variant: 'commitment',
    label: 'Our Commitment',
    heading: [{ text: 'Building Hope.' }, { text: 'Creating Possibilities.', accent: true }],
    body: 'At 320 Grit, we understand that the spaces we build have a direct impact on people’s lives. We are committed to building behavioral health facilities that create a foundation for healing, growth, and brighter futures.',
    diffCardLeft: true,
    diffCards: [
      { icon: 'shield', title: 'People First', text: 'Every decision we make considers the people who will live, work, and heal in these spaces.' },
      { icon: 'shield', title: 'Long-Term Value', text: 'We build durable, efficient facilities that stand the test of time.' },
      { icon: 'shield', title: 'Building Better Communities', text: 'Stronger facilities lead to stronger communities.' },
    ],
  },
  cta: {
    id: 'bh-cta',
    heading: [{ text: 'Let’s Build Spaces Where' }, { text: 'People Can Heal.', accent: true }],
    body: 'Partner with 320 Grit for your next behavioral health project.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.residence,
  },
};
