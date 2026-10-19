import type { ServicePageData } from '../shared/service-page/service-page.data';
import { SHARED_INDUSTRIES } from '../shared/service-page/service-content.data';

/**
 * Design-Build page data — single-point design + construction delivery.
 * One contract, one team, one point of accountability from concept to keys.
 */
export const DESIGN_BUILD_DATA: ServicePageData = {
  hero: {
    id: 'hero',
    eyebrow: '01 \u2014 Our Services',
    titleHtml: 'DESIGN<br><span>BUILD</span>',
    subtitleHtml: 'ONE TEAM. ONE CONTRACT.<br>ZERO FINGER-POINTING.',
    descHtml: 'Single-point design and construction delivery.<br> Faster builds. Clearer costs. Total accountability.',
    buttonText: 'LET\u2019S BUILD TOGETHER',
    buttonHref: '/contact-us',
    image: '/assets/images/commercial-construction.webp',
    imageAlt: 'Design-build construction site',
    useHcContainer: false,
  },
  why: {
    eyebrow: '02 \u2014 THE ADVANTAGE',
    titleHtml: 'Faster Delivery.<br>Clearer Costs.<br><span>One Accountable<br>Team.</span>',
    desc: 'Our design-build services collapse design and construction into a single, streamlined workflow — cutting months off your schedule while giving you cost certainty from day one.',
    cards: [
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10" /> <polyline points="12 6 12 12 16 14" /> </svg>`, title: 'Accelerated Schedules', text: 'Design and construction overlap — breaking ground months earlier.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2v20" /> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> </svg>`, title: 'Cost Certainty', text: 'Guaranteed pricing locked in early — no surprise change orders.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> </svg>`, title: 'Single Accountability', text: 'One contract, one team — no designer-versus-builder disputes.' },
    { iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /> </svg>`, title: 'Streamlined Decisions', text: 'Faster answers with designers and builders at the same table.' },
    ],
  },
  whatIs: {
    eyebrow: '03 \u2014 UNDERSTANDING THE METHOD',
    titleHtml: 'WHAT IS<br><span>DESIGN-BUILD?</span>',
    paragraphs: [
      'Design-build unites design and construction under a single contract and a single point of responsibility. Instead of hiring an architect and a contractor separately — and managing the gap between them — you partner with one integrated team accountable for the entire outcome.',
      'Because design and construction phases overlap, projects break ground faster. Because the builder prices the work while it is being designed, budgets stay honest. And because one team owns the result, there is nowhere for problems to hide.',
    ],
    image: '/assets/images/what-is-design-build.webp',
    imageAlt: 'Architectural blueprints transitioning to active construction site',
    labels: [
    { title: 'SINGLE CONTRACT', text: 'One agreement covers design and construction — simplified procurement.' },
    { title: 'OVERLAPPING PHASES', text: 'Construction begins while design is finalized — compressing schedules.' },
    { title: 'EARLY COST LOCK', text: 'Guaranteed maximum pricing established during design development.' },
    { title: 'TEAM INTEGRATION', text: 'Architects, engineers, and builders collaborate from day one.' },
    { title: 'RISK TRANSFER', text: 'Design errors and coordination risk shift from owner to the team.' },
    ],
  },
  servicesGrid: {
    eyebrow: '04 \u2014 WHAT WE DO',
    titleHtml: 'Our Design-Build Services',
    cards: [
    { image: '/assets/images/commercial-construction.webp', imageAlt: 'Ground-up design-build', title: 'Ground-Up Design-Build', text: 'Complete design and construction of new facilities under one roof.' },
    { image: '/assets/images/What-we-do-faeture-image.webp', imageAlt: 'Design-build renovations', title: 'Renovation & Expansion', text: 'Reimagine existing spaces with integrated design and build teams.' },
    { image: '/assets/images/labour-320-grit.webp', imageAlt: 'Preconstruction planning', title: 'Preconstruction & Budgeting', text: 'Real-time cost modeling that keeps design aligned with your budget.' },
    { image: '/assets/images/Industries-we-serve-feature-image.webp', imageAlt: 'Design-build interiors', title: 'Interior Build-Outs', text: 'Tenant improvements delivered faster through integrated delivery.' },
    { image: '/assets/images/healthcare-bg.webp', imageAlt: 'Specialized facilities', title: 'Specialized Facilities', text: 'Healthcare, lab, and mission-critical builds with zero-compromise quality.' },
    { image: '/assets/images/railroad-infrastructure-bg.webp', imageAlt: 'Infrastructure design-build', title: 'Infrastructure & Industrial', text: 'Heavy civil and industrial projects with streamlined execution.' },
    ],
  },
  process: {
    eyebrow: '05 \u2014 HOW WE WORK',
    titleHtml: 'Our Design-Build Process',
    steps: [
    { num: '01', title: 'Define & Align', text: 'We lock in your goals, budget, and success criteria before a single line is drawn.' },
    { num: '02', title: 'Design With Cost', text: 'Architects and builders design together — every decision priced in real time.' },
    { num: '03', title: 'Build With Speed', text: 'Construction starts while design wraps up. One team, one schedule, no handoff delays.' },
    { num: '04', title: 'Deliver & Support', text: 'We hand over the keys, commission every system, and stand behind the work.' },
    ],
  },
  industries: { title: 'Industries We Build For', items: SHARED_INDUSTRIES },
  whyChoose: {
    sectionId: 'why-choose',
    dataSection: 'why-choose',
    eyebrow: '06 \u2014 OUR DIFFERENCE',
    titleHtml: 'Why Choose<br>320 Grit?',
    body: 'We run design-build the way it was meant to run — designers and builders pulling in the same direction, with the owner\u2019s interests driving every decision.',
    cards: [
    { num: '01', title: 'Owner-First Always', text: 'We represent your interests — not the designer\u2019s, not the subcontractor\u2019s. Every recommendation serves your outcome.' },
    { num: '02', title: 'Real Cost Control', text: 'Continuous budget feedback during design means the price you approve is the price you pay.' },
    { num: '03', title: 'Schedule Compression', text: 'Overlapping design and construction routinely saves owners 20–30% on total delivery time.' },
    { num: '04', title: 'Zero Finger-Pointing', text: 'One team owns design and construction. Issues get solved — not debated about whose fault they are.' },
    ],
  },
  cta: {
    sectionId: 'cta',
    eyebrow: '07 \u2014 GET STARTED',
    titleHtml: 'One Team. One Vision.<br>Built Right.',
    sub: 'Ready to simplify your next build? Let\u2019s talk about how design-build can deliver your project faster, with total cost clarity.',
    buttonText: 'Start Your Project',
    buttonHref: '/contact-us',
  },
  faq: {
    eyebrow: '08 \u2014 COMMON QUESTIONS',
    titleHtml: 'Design-Build <span>FAQs</span>',
    body: 'Everything owners ask us before choosing design-build delivery.',
    linkText: 'Still have questions? Contact us.',
    linkHref: '/contact-us',
    items: [
    { q: 'How is design-build different from traditional bid-build?', a: 'In bid-build you hire a designer and a contractor separately and manage the space between them. In design-build, one team handles both — which means faster schedules, earlier cost certainty, and a single point of accountability.' },
    { q: 'Does design-build really save time?', a: 'Yes. Because construction can begin while design is being finalized, design-build projects typically deliver 20–30% faster than traditional sequential delivery.' },
    { q: 'Do I lose control over design quality?', a: 'No. You approve the design at every milestone, and our owner-first approach means every design decision is weighed against your goals and budget — not the builder\u2019s convenience.' },
    { q: 'How are costs controlled in design-build?', a: 'The builder prices the work continuously during design, so you see real costs — not estimates — before you commit. Most projects lock a guaranteed maximum price before construction starts.' },
    { q: 'Is design-build right for my project type?', a: 'Design-build excels for ground-up construction, renovations, tenant improvements, and specialized facilities like healthcare and labs. Talk to us about your project and we\u2019ll give you an honest assessment.' },
    { q: 'What happens if something goes wrong?', a: 'That\u2019s the beauty of single-point responsibility — there\u2019s no designer-versus-builder dispute. One team owns the problem and fixes it.' },
    ],
  },
};
