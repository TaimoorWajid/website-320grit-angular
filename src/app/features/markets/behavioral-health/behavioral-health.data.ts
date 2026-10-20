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
    desc: '320 Grit builds behavioral health facilities—from inpatient psychiatric units to residential treatment centers—with ligature-resistant construction, trauma-informed design support, and strict compliance with behavioral health codes and standards.',
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
      'We partner with owners, operators, and design teams to deliver safe, secure, and therapeutic environments—built to FGI Guidelines and Joint Commission expectations—that support patients, families, and clinical staff.',
    ],
    image: MARKET_IMG.residence,
    imageAlt: 'Calm therapeutic interior',
    points: [
      { icon: 'shield', title: 'Ligature-Resistant Construction', text: 'Tamper-resistant fixtures, anti-ligature hardware, and secure environments built to behavioral health facility standards.' },
      { icon: 'user', title: 'Trauma-Informed Spaces', text: 'Calming layouts, natural light, acoustic control, and durable finishes that support recovery.' },
      { icon: 'file-text', title: 'Built for Operations', text: 'Efficient nurse sightlines, durable low-maintenance systems, and layouts that support clinical workflows.' },
      { icon: 'users', title: 'Trusted Partner', text: 'A collaborative delivery approach built on transparency and a shared commitment to patient outcomes.' },
    ],
  },
  capabilities: {
    id: 'bh-capabilities',
    heading: 'Our Behavioral Health Construction Capabilities',
    cards: [
      { icon: 'shield-check', title: 'Secure Environments', text: 'Ligature-resistant and tamper-resistant construction for inpatient and secure behavioral health units.' },
      { icon: 'home-door', title: 'Patient-Centered Design', text: 'Dignified, private, comfortable spaces that support therapeutic care and recovery.' },
      { icon: 'wrench', title: 'Renovations & Adaptive Reuse', text: 'Converting existing buildings into code-compliant behavioral health facilities with minimal disruption.' },
      { icon: 'users', title: 'Consultant & Stakeholder Collaboration', text: 'Coordinating with clinicians, operators, and design teams to align the built environment with care models.' },
      { icon: 'clock', title: 'Schedule & Budget Discipline', text: 'Disciplined preconstruction and project controls that protect budget and schedule.' },
      { icon: 'shield', title: 'Compliance & Codes', text: 'Built to FGI Guidelines, Joint Commission standards, and state behavioral health facility regulations.' },
    ],
  },
  projects: {
    id: 'bh-projects',
    heading: 'Types of Behavioral Health Projects',
    image: MARKET_IMG.residence,
    imageAlt: 'Behavioral health outdoor courtyard',
    items: [
      { icon: 'building', title: 'Inpatient Facilities', text: 'Acute psychiatric units, crisis stabilization, and long-term residential treatment facilities.' },
      { icon: 'home', title: 'Outpatient & Community Centers', text: 'Outpatient clinics, counseling centers, and community-based behavioral health facilities.' },
      { icon: 'activity', title: 'Addiction Treatment Centers', text: 'Detox, residential, and outpatient substance use treatment facilities.' },
      { icon: 'user', title: 'Youth & Adolescent Facilities', text: 'Age-appropriate behavioral health environments designed for safety and development.' },
      { icon: 'home-door', title: 'Supportive Housing', text: 'Transitional and permanent supportive housing integrated with behavioral health services.' },
    ],
  },
  approach: {
    id: 'bh-approach',
    label: 'Our Approach',
    steps: [
      { num: '1', title: 'Listen', text: 'We learn your care model, patient population, and operational requirements.' },
      { num: '2', title: 'Plan', text: 'Thoughtful planning that balances therapeutic goals, safety requirements, and budget.' },
      { num: '3', title: 'Collaborate', text: 'We work as an extension of your team—clinicians, operators, and designers aligned.' },
      { num: '4', title: 'Build', text: 'Precise execution with strict quality control and safety-first jobsites.' },
      { num: '5', title: 'Deliver', text: 'Facilities ready to support healing from day one—and for decades to come.' },
    ],
  },
  partner: {
    id: 'bh-commitment',
    variant: 'commitment',
    label: 'Our Commitment',
    heading: [{ text: 'Building Hope.' }, { text: 'Creating Possibilities.', accent: true }],
    body: 'Behavioral health facilities are more than buildings—they are instruments of care. 320 Grit builds secure, therapeutic environments that protect patients, support staff, and strengthen communities.',
    diffCardLeft: true,
    diffCards: [
      { icon: 'shield', title: 'People First', text: 'Every detail—from hardware to sightlines—is designed around patient safety and dignity.' },
      { icon: 'shield', title: 'Long-Term Value', text: 'Durable, low-maintenance facilities engineered for decades of demanding use.' },
      { icon: 'shield', title: 'Building Better Communities', text: 'Quality behavioral health infrastructure that expands access to care.' },
    ],
  },
  cta: {
    id: 'bh-cta',
    heading: [{ text: 'Let’s Build Spaces Where' }, { text: 'People Can Heal.', accent: true }],
    body: 'Partner with 320 Grit for behavioral health construction—from inpatient units to outpatient centers.',
    button: { label: 'Start a Conversation', variant: 'primary', route: '/contact-us' },
    bgImage: MARKET_IMG.residence,
  },
};
