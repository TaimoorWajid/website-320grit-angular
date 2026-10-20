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
  { icon: 'building-windows', tabTitle: 'Hospitals', fullTitle: '01 Hospitals', desc: 'Full-service acute-care hospital construction — from ground-up towers to complex additions. We navigate HCAI requirements, coordinate demanding MEP systems, and phase work so critical departments stay operational.', image: '/assets/images/env-hospitals.webp' },
  { icon: 'box-grid', tabTitle: 'Medical Centers', fullTitle: '02 Medical Centers', desc: 'Multi-specialty medical centers engineered for patient flow, clinical efficiency, and staff collaboration — delivered on disciplined schedules around active operations.', image: '/assets/images/env-medical-centers.webp' },
  { icon: 'activity', tabTitle: 'Outpatient Facilities', fullTitle: '03 Outpatient Facilities', desc: 'High-throughput outpatient buildings designed for patient comfort and fast room turnover, with durable finishes and efficient clinical layouts.', image: '/assets/images/env-outpatient.webp' },
  { icon: 'plus', tabTitle: 'Clinics', fullTitle: '04 Clinics', desc: 'Focused clinic environments optimized for specific care pathways — from primary care to specialty practices — built for speed without cutting corners.', image: '/assets/images/env-clinics.webp' },
  { icon: 'plus-circle', tabTitle: 'Specialty Care', fullTitle: '05 Specialty Care', desc: 'Surgery centers, oncology suites, and specialty care environments with demanding technical requirements: medical gases, specialized HVAC, and precise shielding.', image: '/assets/images/env-specialty.webp' },
  { icon: 'building-medical', tabTitle: 'Medical Office Buildings', fullTitle: '06 Medical Office Buildings', desc: 'Class-A medical office buildings that attract top providers — flexible floor plates, patient-friendly circulation, and building systems designed for clinical tenants.', image: '/assets/images/env-mob.webp' },
  { icon: 'bed', tabTitle: 'Ambulatory Facilities', fullTitle: '07 Ambulatory Facilities', desc: 'Ambulatory surgery centers and same-day care facilities built for speed, safety, and rapid recovery — where schedule certainty directly protects revenue.', image: '/assets/images/env-ambulatory.webp' },
  { icon: 'wrench', tabTitle: 'Renovation & Expansion', fullTitle: '08 Renovation & Expansion', desc: 'ICRA-compliant phased renovations inside fully operational hospitals. We isolate work zones, protect air quality, and maintain life-safety systems while building what\u2019s next.', image: MARKET_IMG.labour },
];

export interface IconText {
  icon: string;
  title: string;
  text: string;
}

export const DIFFERENCE_CARDS: IconText[] = [
  { icon: 'school', title: 'Continuity', text: 'Hospitals never close. We plan phasing, logistics, and interim life-safety measures so patient care continues without interruption — nights, weekends, and go-lives included.' },
  { icon: 'users-alt', title: 'Coordination', text: 'Dozens of trades, complex MEP systems, and strict regulatory oversight. Our preconstruction planning and BIM coordination catch conflicts before they cost time in the field.' },
  { icon: 'shield', title: 'Control', text: 'Infection control (ICRA), interim life safety (ILSM), noise and vibration management — healthcare demands documented control of every variable. We build that discipline into the schedule.' },
  { icon: 'user-alt2', title: 'Patient Experience', text: 'Every decision — from corridor widths to acoustic separation — affects healing. We build environments designed around patients, families, and caregivers.' },
];

export const PRECISION_LAYERS = ['Structure', 'MEP Systems', 'Clinical Spaces', 'Patient Areas', 'Circulation', 'Building Systems'];

export interface ApproachStep {
  num: string;
  title: string;
  text: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  { num: '01', title: 'Understand', text: 'We learn your operations first — patient volumes, department adjacencies, infection-control requirements, and HCAI jurisdiction — before planning a single activity.' },
  { num: '02', title: 'Plan', text: 'Phasing, logistics, ICRA/ILSM, and procurement strategy developed with your clinical and facilities teams, so construction supports care — not the reverse.' },
  { num: '03', title: 'Coordinate', text: 'BIM-coordinated MEP, pull-planned schedules, and daily huddles keep architects, engineers, trades, and hospital staff aligned.' },
  { num: '04', title: 'Execute', text: 'Disciplined field execution with infection-control monitoring, above-ceiling permits, and commissioning baked into the workflow — not bolted on.' },
  { num: '05', title: 'Deliver', text: 'HCAI closeout documentation, systems training, and warranty support. We hand over a facility your team can operate with confidence on day one.' },
];

export const APPROACH_BULLETS = [
  'ICRA-compliant occupied-facility construction',
  'HCAI permitting and inspection experience',
  'Phasing & logistics that protect patient care',
  'Interim life-safety management (ILSM)',
  'Clear communication with clinical stakeholders',
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
  { icon: 'user-alt', title: 'Owner-Focused', text: 'We start with your capital plan, operational constraints, and patient mission — then build the construction strategy around them.' },
  { icon: 'layers', title: 'Disciplined', text: 'Pull-planned schedules, BIM coordination, and documented infection control. Complex healthcare work demands rigor; we bring it every day.' },
  { icon: 'info-circle', title: 'Transparent', text: 'Open-book budgets, proactive issue logs, and direct access to our team. You always know exactly where your project stands.' },
  { icon: 'sun-alt', title: 'Adaptive', text: 'Ground-up hospital, MOB tenant improvement, or midnight ICRA renovation — we scale our approach to your facility and your timeline.' },
];

export interface Faq {
  q: string;
  a: string;
}

export const HEALTHCARE_FAQS: Faq[] = [
  {
    q: 'What types of healthcare construction does 320 Grit support?',
    a: 'We support ground-up hospitals, medical centers, outpatient and ambulatory surgery facilities, clinics, specialty care environments, medical office buildings (MOBs), imaging centers, and ICRA-compliant renovation & expansion projects in both new and occupied settings.',
  },
  {
    q: 'What makes healthcare construction different?',
    a: 'Healthcare facilities carry unique operational, regulatory, infection-control, and continuity requirements — including HCAI oversight in California. Construction often occurs while the facility remains fully active, demanding specialized phasing, ICRA/ILSM planning, and trade coordination.',
  },
  {
    q: 'Can 320 Grit work around an operating healthcare facility?',
    a: 'Yes. Occupied-facility construction is a core strength. We develop detailed logistics and phasing plans — with infection-control risk assessments and interim life-safety measures — that protect patient care, staff workflows, and critical systems throughout the project.',
  },
  {
    q: 'How does 320 Grit approach renovation and expansion?',
    a: 'We begin with a deep understanding of current operations, then design a phased plan that isolates work zones, maintains medical gases and life-safety systems, and keeps disruption to an absolute minimum — including night and weekend work windows where needed.',
  },
  {
    q: 'Can 320 Grit work with my existing design team?',
    a: 'Absolutely. We routinely collaborate with owners\u2019 architects, engineers, and consultants — joining early in preconstruction to align budgets, resolve BIM conflicts, and lock a buildable, HCAI-compliant plan before mobilization.',
  },
  {
    q: 'What markets does 320 Grit serve for healthcare construction?',
    a: 'We are headquartered in California with deep HCAI experience, serving healthcare clients across the state and select Western markets — with the capability to support projects nationwide when required.',
  },
];

export const FLOW_LEGEND = [
  { key: 'patient', label: 'Patient Flow' },
  { key: 'staff', label: 'Staff Flow' },
  { key: 'material', label: 'Material Flow' },
  { key: 'emergency', label: 'Emergency Access' },
  { key: 'construction', label: 'Construction Access' },
];
