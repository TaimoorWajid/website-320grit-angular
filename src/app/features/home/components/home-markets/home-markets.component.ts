import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SmoothScrollService } from '../../../../core/services/smooth-scroll.service';
import { MarketIconComponent } from '../../../markets/shared/market-icon/market-icon.component';
import { MARKET_IMG } from '../../../markets/shared/market-assets';

interface MarketChip {
  /** MARKET_ICONS registry key for the circular chip icon. */
  icon: string;
  /** Small gray uppercase line. */
  line1: string;
  /** White bold uppercase line. */
  line2: string;
}

interface MarketCard {
  /** Verbatim tab label from staging (note: last five are uppercase). */
  label: string;
  number: string;
  /** MARKET_ICONS registry key for the eyebrow icon. */
  icon: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  paragraph: string;
  chips: MarketChip[];
  href: string;
  /** Full-bleed card background photo. */
  bg: string;
  /** Staging anomaly: this pane's card bg 404s and has no image in source. */
  bgFallback?: boolean;
}

/**
 * Staging anomaly preserved verbatim: cards 4–8 reuse the behavioral-health
 * placeholder sub-services / paragraph / tag strip from the source.
 */
const PLACEHOLDER_BULLETS = ['Treatment Centers', 'Behavioral Clinics', 'Recovery Facilities', 'Patient Housing'];
const PLACEHOLDER_PARAGRAPH = 'Spaces thoughtfully designed to promote comfort, dignity, and healing.';
const PLACEHOLDER_CHIPS: MarketChip[] = [
  { icon: 'check-square', line1: 'DESIGN', line2: 'BUILD' },
  { icon: 'building', line1: 'CONSTRUCTION', line2: 'INSIGHT' },
  { icon: 'shield', line1: '', line2: 'DISCRETION' },
  { icon: 'shield-check', line1: 'WELLNESS', line2: 'FOCUSED' },
];

/**
 * Section — "Markets we served" sticky scroll-spy.
 * Ports Salient's nectar-scrolling-tabs as staging renders it: a sticky
 * left tab list (~15–20%) beside a right column of 8 tall stacked cards
 * with full-bleed background photos. Scrolling moves through the cards;
 * an IntersectionObserver scroll-spy keeps the active tab in sync, and
 * clicking a tab smooth-scrolls to its card. Copy is verbatim from
 * refs/grit-staging/sections.md §5.
 */
@Component({
  selector: 'app-home-markets',
  imports: [RouterLink, RevealDirective, MarketIconComponent],
  templateUrl: './home-markets.component.html',
  styleUrl: './home-markets.component.scss',
})
export class HomeMarketsComponent {
  protected readonly cards: MarketCard[] = [
    {
      label: 'Rail Roads',
      number: '01',
      icon: 'train',
      eyebrow: 'RAILROAD',
      title: 'Rail Infrastructure',
      bullets: ['Track Systems', 'Operations Facilities', 'Signal Buildings', 'Maintenance Yards'],
      paragraph: 'A luxury hillside residence designed for comfort, privacy, and timeless living.',
      chips: [
        { icon: 'check-square', line1: 'DESIGN', line2: 'BUILD' },
        { icon: 'train', line1: 'RAIL', line2: 'INFRASTRUCTURE' },
        { icon: 'shield', line1: 'MISSION', line2: 'CRITICAL' },
        { icon: 'shield-check', line1: 'SAFETY', line2: 'FIRST' },
      ],
      href: '/industries/railroads',
      bg: MARKET_IMG.railroad,
    },
    {
      label: 'Healthcare',
      number: '02',
      icon: 'building-medical',
      eyebrow: 'HEALTHCARE',
      title: 'Hospital / MOB / Imaging',
      bullets: ['Hospitals', 'Medical Office Buildings', 'Imaging Centers', 'Outpatient Facilities'],
      paragraph: 'Precision-built healthcare environments designed around patient care.',
      chips: [
        { icon: 'shield-check', line1: 'DESIGN', line2: 'BUILD' },
        { icon: 'shield-plus', line1: 'MISSION', line2: 'CRITICAL' },
        { icon: 'shield', line1: 'CODE', line2: 'COMPLIANCE' },
        { icon: 'heart', line1: 'PATIENT', line2: 'FOCUSED' },
      ],
      href: '/industries/healthcare',
      bg: MARKET_IMG.healthcare,
    },
    {
      label: 'Behavioral Health',
      number: '03',
      icon: 'plus-circle',
      eyebrow: 'BEHAVIORAL HEALTH',
      title: 'Healing Environments',
      bullets: [
        'Inpatient Psychiatric Units',
        'Residential Treatment Centers',
        'Outpatient Behavioral Clinics',
        'Crisis Stabilization Units',
      ],
      paragraph:
        '320 Grit designs and builds behavioral health facilities where safety and dignity come first. ' +
        'From ligature-resistant inpatient units to warm residential treatment centers, we deliver ' +
        'therapeutic environments across California that meet OSHPD and licensing standards — on time and on budget.',
      chips: [
        { icon: 'check-square', line1: 'DESIGN', line2: 'BUILD' },
        { icon: 'shield-check', line1: 'LIGATURE', line2: 'RESISTANT' },
        { icon: 'bed', line1: 'INPATIENT', line2: 'CARE' },
        { icon: 'users', line1: 'TRAUMA', line2: 'INFORMED' },
      ],
      href: '/industries/behavioral-health',
      bg: MARKET_IMG.behavioralHealth,
    },
    {
      label: 'Advanced Technology',
      number: '04',
      icon: 'cpu',
      eyebrow: 'ADVANCED TECHNOLOGY',
      title: 'Research & Laboratory',
      bullets: [
        'Data Centers & Mission-Critical Facilities',
        'Life Sciences & Research Laboratories',
        'Cleanrooms & Controlled Environments',
        'Advanced Manufacturing Plants',
      ],
      paragraph:
        'Technology facilities leave no room for error — and neither do we. 320 Grit builds data centers, ' +
        'laboratories, and cleanrooms with the power redundancy, precision environmental controls, and security ' +
        'that mission-critical operations demand, delivering zero-downtime construction across California.',
      chips: [
        { icon: 'server', line1: 'DATA', line2: 'CENTERS' },
        { icon: 'cpu', line1: 'MISSION', line2: 'CRITICAL' },
        { icon: 'flask-simple', line1: 'CLEANROOM', line2: 'CERTIFIED' },
        { icon: 'zap', line1: 'ZERO', line2: 'DOWNTIME' },
      ],
      href: '/industries/advanced-technology',
      bg: MARKET_IMG.lab,
    },
    {
      label: 'Commercial',
      number: '05',
      icon: 'building',
      eyebrow: 'COMMERCIAL',
      title: 'Corporate & Office',
      bullets: [
        'Corporate Offices & Headquarters',
        'Retail Centers & Mixed-Use',
        'Ground-Up Commercial Buildings',
        'Commercial Renovations & Expansions',
      ],
      paragraph:
        'Great commercial spaces drive business results. 320 Grit delivers Class A offices, retail centers, and ' +
        'mixed-use developments across California with design-build efficiency, transparent costs, and schedules ' +
        'that get tenants in faster — maximizing long-term value for owners and developers.',
      chips: [
        { icon: 'building', line1: 'GROUND', line2: 'UP' },
        { icon: 'building-windows', line1: 'CLASS A', line2: 'OFFICE' },
        { icon: 'dollar', line1: 'VALUE', line2: 'ENGINEERING' },
        { icon: 'users', line1: 'TENANT', line2: 'FOCUSED' },
      ],
      href: '/industries/commercial-construction',
      bg: MARKET_IMG.commercial,
    },
    {
      label: 'Tenant Improvement',
      number: '06',
      icon: 'pencil',
      eyebrow: 'TENANT IMPROVEMENT',
      title: 'Modern Interior Transformations',
      bullets: [
        'Office Build-Outs & Reconfigurations',
        'Corporate Headquarters Renovations',
        'Retail & Restaurant Tenant Improvements',
        'Medical & Lab Interior Fit-Outs',
      ],
      paragraph:
        'From concept to keys, 320 Grit delivers tenant improvements that turn empty shells into high-performing workplaces. ' +
        'Our California TI teams specialize in fast-track office build-outs, corporate renovations, and occupied-space ' +
        'construction — minimizing downtime while maximizing the return on your space.',
      chips: [
        { icon: 'building', line1: 'OFFICE', line2: 'BUILD-OUTS' },
        { icon: 'shield', line1: 'MINIMAL', line2: 'DOWNTIME' },
        { icon: 'shield-dot', line1: 'OCCUPIED', line2: 'SPACE EXPERTS' },
        { icon: 'heart', line1: 'TENANT', line2: 'FOCUSED' },
      ],
      href: '/industries/tenant-improvement',
      bg: MARKET_IMG.planning,
    },
    {
      label: 'Education',
      number: '07',
      icon: 'graduation-cap',
      eyebrow: 'EDUCATION',
      title: 'Learning Environments',
      bullets: [
        'K-12 Schools & Campuses',
        'Higher Education Facilities',
        'Classroom Modernizations',
        'Gyms, Labs & Libraries',
      ],
      paragraph:
        '320 Grit builds learning environments engineered for the next generation. From K-12 campuses to university ' +
        'facilities across California, we deliver classrooms, laboratories, and athletic spaces on tight academic ' +
        'calendars — with student safety, durability, and the learning experience at the center of every build.',
      chips: [
        { icon: 'building', line1: 'K-12', line2: 'CAMPUSES' },
        { icon: 'graduation-cap', line1: 'HIGHER', line2: 'EDUCATION' },
        { icon: 'shield', line1: 'STUDENT', line2: 'SAFETY FIRST' },
        { icon: 'heart', line1: 'COMMUNITY', line2: 'FOCUSED' },
      ],
      href: '/industries/education',
      bg: MARKET_IMG.industries,
    },
    {
      label: 'Hospitality',
      number: '08',
      icon: 'bell',
      eyebrow: 'HOSPITALITY',
      title: 'Hotels & Guest Experiences',
      bullets: [
        'Hotels & Resorts',
        'Restaurants & Bars',
        'Lobbies & Common Areas',
        'Guest Room Renovations',
      ],
      paragraph:
        'Great hospitality is built on unforgettable guest experiences — and so is 320 Grit. We deliver hotel ' +
        'construction, restaurant build-outs, and resort renovations across California, crafting lobbies, guest rooms, ' +
        'and dining spaces that keep guests coming back.',
      chips: [
        { icon: 'building', line1: 'HOTELS', line2: '& RESORTS' },
        { icon: 'utensils', line1: 'RESTAURANT', line2: 'BUILD-OUTS' },
        { icon: 'shield', line1: 'BRAND', line2: 'STANDARDS' },
        { icon: 'heart', line1: 'GUEST', line2: 'EXPERIENCE' },
      ],
      href: '/industries/hospitality',
      bg: MARKET_IMG.lobby,
    },
  ];

  protected readonly activeCard = signal(0);

  private readonly cardRefs = viewChildren<ElementRef<HTMLElement>>('marketCard');
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Scroll-spy: runs in the browser only (afterNextRender).
    // Uses Lenis scroll events for reliable detection with smooth scroll.
    afterNextRender(() => {
      const cards = this.cardRefs().map((r) => r.nativeElement);
      if (!cards.length) return;

      const updateActive = () => {
        const viewportCenter = window.innerHeight * 0.5;
        let bestIdx = 0;
        let bestDist = Infinity;
        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - viewportCenter);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });
        this.activeCard.set(bestIdx);
      };

      // Initial check
      updateActive();

      // Capture scroll from the document scrolling element; its scroll event
      // does not reliably reach window in every browser/runtime.
      document.addEventListener('scroll', updateActive, { passive: true, capture: true });
      this.destroyRef.onDestroy(() => document.removeEventListener('scroll', updateActive, true));

    });
  }

  /** Tab click: smooth-scroll (Lenis-aware) to the card, offset for the fixed header. */
  protected selectCard(index: number): void {
    this.activeCard.set(index);
    const el = this.cardRefs()[index]?.nativeElement;
    if (el) this.smoothScroll.scrollTo(el, { offset: -90 });
  }
}
