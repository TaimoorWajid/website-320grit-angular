/**
 * Careers job data — verbatim port of `grit_get_demo_jobs()` from
 * template-parts/components/careers/job-data.php.
 * The source marks this "replace with CPT later"; keep this static
 * array as seed data behind the JobsService interface.
 */
export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  short_desc: string;
  posted_date: string; // YYYY-MM-DD
  excerpt: string;
  overview: string;
  reports_to: string;
  travel: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  why_grit: string[];
}

const SHARED_BENEFITS = [
  'Competitive compensation',
  'Health, dental & vision benefits',
  '401(k) with company match',
  'Professional development',
  'A culture that values people',
];

const SHARED_WHY_GRIT = [
  'People First Culture',
  'Growth & Development',
  'Competitive Benefits',
  'Challenging Projects',
  'Make a Real Impact',
];

export const JOBS: Job[] = [
  {
    id: 'superintendent',
    slug: 'superintendent',
    title: 'Superintendent',
    department: 'Field Operations',
    location: 'California, USA',
    employment_type: 'Full-Time',
    short_desc: 'Oversee field operations and ensure projects are built safely and on time.',
    posted_date: '2026-05-08',
    excerpt:
      'Lead on-site construction activities, coordinate subcontractors, and uphold the highest safety and quality standards.',
    overview:
      'The Superintendent is the on-site leader responsible for day-to-day field operations. You will coordinate trades, manage schedules, enforce safety protocols, and ensure work meets 320 Grit quality standards.',
    reports_to: 'Senior Project Manager',
    travel: 'Site-based',
    responsibilities: [
      'Direct and coordinate all on-site construction activities',
      'Enforce safety policies and maintain a safe work environment',
      'Coordinate subcontractors and material deliveries',
      'Monitor progress against schedule and budget',
      'Document daily reports and quality control',
    ],
    qualifications: [
      '7+ years of field supervision experience in commercial construction',
      'OSHA 30 certification required',
      'Strong knowledge of building codes and construction methods',
      'Excellent leadership and problem-solving skills',
    ],
    benefits: SHARED_BENEFITS,
    why_grit: SHARED_WHY_GRIT,
  },
  {
    id: 'project-engineer',
    slug: 'project-engineer',
    title: 'Project Engineer',
    department: 'Project Management',
    location: 'California, USA',
    employment_type: 'Full-Time',
    short_desc: 'Support project managers with documentation, planning and day-to-day coordination.',
    posted_date: '2026-05-12',
    excerpt:
      'Provide technical and administrative support to Project Managers while developing core project management skills.',
    overview:
      'The Project Engineer assists the Project Manager in planning, documenting, and coordinating project activities. This is an excellent growth role for professionals looking to advance into Project Management.',
    reports_to: 'Project Manager',
    travel: 'Occasional',
    responsibilities: [
      'Prepare and track submittals, RFIs, and change orders',
      'Assist with schedule updates and progress tracking',
      'Coordinate with field teams and design consultants',
      'Maintain project documentation and filing systems',
      'Support cost control and quantity tracking',
    ],
    qualifications: [
      '2+ years of construction project engineering experience',
      "Bachelor's degree in Construction Management, Civil Engineering, or related field",
      'Proficiency with Procore or similar construction software',
      'Strong organizational and communication skills',
    ],
    benefits: SHARED_BENEFITS,
    why_grit: SHARED_WHY_GRIT,
  },
];

/** Departments in template order (landing pills + jobs filter). */
export const DEPARTMENTS = ['Project Management', 'Field Operations'];
