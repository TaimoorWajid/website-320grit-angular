import { MARKET_IMG } from '../shared/market-assets';

/** Healthcare page content — bespoke 10-section layout (spec §4). */

export interface EnvTab {
  icon: string;
  tabTitle: string;
  fullTitle: string;
  desc: string;
  image: string;
}

export const ENV_TABS: EnvTab[] = [
  { icon: 'building-windows', tabTitle: 'Hospitals', fullTitle: '01 Hospitals', desc: 'Complex environments requiring disciplined coordination and careful construction planning.', image: MARKET_IMG.lab },
  { icon: 'box-grid', tabTitle: 'Medical Centers', fullTitle: '02 Medical Centers', desc: 'Multi-specialty facilities built for efficiency, patient flow, and clinical excellence.', image: MARKET_IMG.lab },
  { icon: 'activity', tabTitle: 'Outpatient Facilities', fullTitle: '03 Outpatient Facilities', desc: 'Patient-centered spaces designed for high throughput and comfort.', image: MARKET_IMG.lab },
  { icon: 'plus', tabTitle: 'Clinics', fullTitle: '04 Clinics', desc: 'Focused clinical environments optimized for specific care pathways.', image: MARKET_IMG.lab },
  { icon: 'plus-circle', tabTitle: 'Specialty Care', fullTitle: '05 Specialty Care', desc: 'Advanced care environments with specialized systems and workflows.', image: MARKET_IMG.lab },
  { icon: 'building-medical', tabTitle: 'Medical Office Buildings', fullTitle: '06 Medical Office Buildings', desc: 'Professional medical office spaces designed for providers and patients.', image: MARKET_IMG.planning },
  { icon: 'bed', tabTitle: 'Ambulatory Facilities', fullTitle: '07 Ambulatory Facilities', desc: 'Same-day care environments built for speed, safety, and recovery.', image: MARKET_IMG.lab },
  { icon: 'wrench', tabTitle: 'Renovation & Expansion', fullTitle: '08 Renovation & Expansion', desc: 'Phased work in active facilities that protects operations while building the future.', image: MARKET_IMG.labour },
];

export interface IconText {
  icon: string;
  title: string;
  text: string;
}

export const DIFFERENCE_CARDS: IconText[] = [
  { icon: 'school', title: 'Continuity', text: 'Facilities often remain operational. Construction must adapt without disrupting care.' },
  { icon: 'users-alt', title: 'Coordination', text: 'Multiple systems, trades and stakeholders must work together with precision.' },
  { icon: 'shield', title: 'Control', text: 'Schedule, quality, safety and documentation require disciplined management.' },
  { icon: 'user-alt2', title: 'Patient Experience', text: 'Environments are built with the people who use them at the center of every decision.' },
];

export const PRECISION_LAYERS = ['Structure', 'MEP Systems', 'Clinical Spaces', 'Patient Areas', 'Circulation', 'Building Systems'];

export interface ApproachStep {
  num: string;
  title: string;
  text: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  { num: '01', title: 'Understand', text: 'Listen, learn and define operational and project requirements.' },
  { num: '02', title: 'Plan', text: 'Develop a strategy that aligns design, logistics and execution.' },
  { num: '03', title: 'Coordinate', text: 'Bring teams together with clarity and accountability.' },
  { num: '04', title: 'Execute', text: 'Build with precision, maintaining safety and operational continuity.' },
  { num: '05', title: 'Deliver', text: 'Close out with quality, documentation and confidence.' },
];

export const APPROACH_BULLETS = [
  'Occupied facility expertise',
  'Phasing & logistics planning',
  'Safety for patients, staff & visitors',
  'Clear communication',
];

export interface Stage {
  label: string;
  image: string;
  active?: boolean;
}

export const TRANSITION_STAGES: Stage[] = [
  { label: 'Existing', image: MARKET_IMG.labour },
  { label: 'Transition', image: MARKET_IMG.banner },
  { label: 'Delivered', image: MARKET_IMG.lab, active: true },
];

export const SYSTEMS: IconText[] = [
  { icon: 'sun', title: 'Mechanical', text: '' },
  { icon: 'zap', title: 'Electrical', text: '' },
  { icon: 'droplet', title: 'Plumbing', text: '' },
  { icon: 'shield', title: 'Life Safety', text: '' },
  { icon: 'layout-grid', title: 'Structural', text: '' },
  { icon: 'home-door', title: 'Interiors', text: '' },
];

export const WHY_CARDS: IconText[] = [
  { icon: 'user-alt', title: 'Owner-Focused', text: 'We start with your goals, constraints and operational needs.' },
  { icon: 'layers', title: 'Disciplined', text: 'Complex construction requires disciplined planning and execution.' },
  { icon: 'info-circle', title: 'Transparent', text: 'Clear communication keeps you informed and in control.' },
  { icon: 'sun-alt', title: 'Adaptive', text: 'Every healthcare environment is unique. We adapt to deliver what’s needed.' },
];

export interface Faq {
  q: string;
  a: string;
}

export const HEALTHCARE_FAQS: Faq[] = [
  {
    q: 'What types of healthcare construction does 320 Grit support?',
    a: 'We support hospitals, medical centers, outpatient and ambulatory facilities, clinics, specialty care environments, medical office buildings, and renovation & expansion projects in both new and occupied settings.',
  },
  {
    q: 'What makes healthcare construction different?',
    a: 'Healthcare facilities have unique operational, regulatory, infection-control, and continuity requirements. Construction must often occur while the facility remains active, demanding specialized planning, phasing, and coordination.',
  },
  {
    q: 'Can 320 Grit work around an operating healthcare facility?',
    a: 'Yes. Occupied-facility construction is a core strength. We develop detailed logistics and phasing plans that protect patient care, staff workflows, and life-safety systems throughout the project.',
  },
  {
    q: 'How does 320 Grit approach renovation and expansion?',
    a: 'We begin with a deep understanding of current operations, then design a phased plan that isolates work zones, maintains critical systems, and keeps disruption to an absolute minimum.',
  },
  {
    q: 'Can 320 Grit work with my existing design team?',
    a: 'Absolutely. We routinely collaborate with owners’ architects, engineers, and consultants. Our role is to bring construction expertise early and execute with precision.',
  },
  {
    q: 'What markets does 320 Grit serve for healthcare construction?',
    a: 'We primarily serve healthcare clients across California and select Western markets, with the capability to support projects nationwide when required.',
  },
];

export const FLOW_LEGEND = [
  { key: 'patient', label: 'Patient Flow' },
  { key: 'staff', label: 'Staff Flow' },
  { key: 'material', label: 'Material Flow' },
  { key: 'emergency', label: 'Emergency Access' },
  { key: 'construction', label: 'Construction Access' },
];
