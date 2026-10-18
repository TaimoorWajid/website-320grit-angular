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
  tags: string[];
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
const PLACEHOLDER_TAGS = ['DESIGN BUILD', 'CONSTRUCTION INSIGHT', 'DISCRETION', 'WELLNESS FOCUSED'];

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
      tags: ['DESIGN BUILD', 'RAIL INFRASTRUCTURE', 'MISSION CRITICAL', 'SAFETY FIRST'],
      href: '/industries/railroads',
      bg: MARKET_IMG.labour,
    },
    {
      label: 'Healthcare',
      number: '02',
      icon: 'building-medical',
      eyebrow: 'HEALTHCARE',
      title: 'Hospital / MOB / Imaging',
      bullets: ['Hospitals', 'Medical Office Buildings', 'Imaging Centers', 'Outpatient Facilities'],
      paragraph: 'Precision-built healthcare environments designed around patient care.',
      tags: ['DESIGN BUILD', 'MISSION CRITICAL', 'CODE COMPLIANCE', 'PATIENT FOCUSED'],
      href: '/industries/healthcare',
      bg: MARKET_IMG.lab,
    },
    {
      label: 'Behavioral Health',
      number: '03',
      icon: 'home-door',
      eyebrow: 'BEHAVIORAL HEALTH',
      title: 'Healing Environments',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/behavioral-health',
      bg: MARKET_IMG.residence,
    },
    {
      label: 'ADVANCED TECHNOLOGY',
      number: '04',
      icon: 'cpu',
      eyebrow: 'ADVANCED TECHNOLOGY',
      title: 'Research & Laboratory',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/advanced-technology',
      bg: MARKET_IMG.lab,
    },
    {
      label: 'COMMERCIAL',
      number: '05',
      icon: 'building',
      eyebrow: 'COMMERCIAL',
      title: 'Corporate & Office',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/commercial-construction',
      bg: '',
      bgFallback: true,
    },
    {
      label: 'TENANT IMPROVEMENT',
      number: '06',
      icon: 'wrench',
      eyebrow: 'TENANT IMPROVEMENT',
      title: 'Modern Interior Transformations',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/tenant-improvement',
      bg: MARKET_IMG.planning,
    },
    {
      label: 'EDUCATION',
      number: '07',
      icon: 'school',
      eyebrow: 'EDUCATION',
      title: 'Learning Environments',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/education',
      bg: MARKET_IMG.industries,
    },
    {
      label: 'HOSPITALITY',
      number: '08',
      icon: 'utensils',
      eyebrow: 'HOSPITALITY',
      title: 'Hotels & Guest Experiences',
      bullets: [...PLACEHOLDER_BULLETS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
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
    afterNextRender(() => {
      const cards = this.cardRefs().map((r) => r.nativeElement);
      if (!cards.length || typeof IntersectionObserver === 'undefined') return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const idx = cards.indexOf(entry.target as HTMLElement);
              if (idx >= 0) this.activeCard.set(idx);
            }
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
      );
      cards.forEach((c) => observer.observe(c));
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  /** Tab click: smooth-scroll (Lenis-aware) to the card, offset for the fixed header. */
  protected selectCard(index: number): void {
    this.activeCard.set(index);
    const el = this.cardRefs()[index]?.nativeElement;
    if (el) this.smoothScroll.scrollTo(el, { offset: -90 });
  }
}
