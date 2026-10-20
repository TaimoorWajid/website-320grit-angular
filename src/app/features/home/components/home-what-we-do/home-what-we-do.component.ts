import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

interface FeatureCard {
  eyebrow: string;
  title: string;
  paragraphs: [string, string];
  /** Five checklist items per service card (.grit-feature-list). */
  checklist: [string, string, string, string, string];
  cta: string;
  /** Site-relative route, or '' when the source CTA has an empty href. */
  href: string;
  image: string;
}

/**
 * Section 4 — "What we do": sticky-media feature cards.
 * Ports Salient's nectar-sticky-media-sections (media-width-60pct,
 * media-height-75vh, content-position-right): the left media panel sticks
 * while the content cards scroll; an IntersectionObserver crossfades
 * the sticky media to the card currently in view.
 * Cards are the client's 4 core services (Design-Build, Bid-Build,
 * Expert Witness, Forensic Accounting); copy is drawn from each service
 * page, and each card's image is that service page's hero image.
 */
@Component({
  selector: 'app-home-what-we-do',
  imports: [RouterLink, RevealDirective],
  templateUrl: './home-what-we-do.component.html',
  styleUrl: './home-what-we-do.component.scss',
})
export class HomeWhatWeDoComponent {
  protected readonly cards: FeatureCard[] = [
    {
      eyebrow: 'DESIGN-BUILD',
      title: 'Design and Construction, Delivered as One.',
      paragraphs: [
        'Our design-build services collapse design and construction into a single, streamlined workflow — cutting months off your schedule while giving you cost certainty from day one.',
        'With one contract and one accountable team, decisions happen faster, risk transfers to us, and your project moves from concept to completion without the friction of separate design and build contracts.',
      ],
      cta: 'Explore Design-Build',
      href: '/services/design-build',
      image: 'assets/images/commercial-construction.webp',
      checklist: [
        'Single Contract, Single Point of Responsibility',
        'Overlapping Phases for Faster Delivery',
        'Early Cost Lock & Budget Certainty',
        'Integrated Design & Build Team',
        'Risk Transfer to the Design-Builder',
      ],
    },
    {
      eyebrow: 'BID-BUILD',
      title: 'Competitive Bids. Transparent Pricing. Disciplined Execution.',
      paragraphs: [
        'A proven delivery method built on competitive bidding, transparent pricing, and disciplined execution — giving owners clarity and control from the first bid to final handover.',
        'Your design is completed first, qualified contractors compete on price, and construction proceeds under a lump-sum contract with clear accountability at every step.',
      ],
      cta: 'Explore Bid-Build',
      href: '/services/bid-build',
      image: 'assets/images/labour-320-grit.webp',
      checklist: [
        'Complete Design Before Bidding',
        'Competitive Bidding for Best Value',
        'Lump-Sum Contract Pricing',
        'Clear Accountability & Documentation',
        'Full Owner Control of Design',
      ],
    },
    {
      eyebrow: 'EXPERT WITNESS',
      title: 'Independent Expertise That Strengthens Your Case.',
      paragraphs: [
        'Our expert witnesses deliver clear, unbiased opinions backed by deep construction experience, technical knowledge, and industry standards — helping attorneys and owners win in mediation, arbitration, and court.',
        'From construction defects and delay claims to standard-of-care opinions, we translate technical complexity into clear, persuasive testimony that judges, juries, and arbitrators trust.',
      ],
      cta: 'Explore Expert Witness',
      href: '/services/expert-witness',
      image: 'assets/images/ChatGPT-Image-Aug-9-2026-12_23_33-AM.webp',
      checklist: [
        'Objective & Independent Opinions',
        'Defect, Delay & Cost Claim Analysis',
        'Daubert & Frye-Compliant Methodology',
        'Deposition & Trial Testimony',
        'Standard-of-Care Opinions',
      ],
    },
    {
      eyebrow: 'FORENSIC ACCOUNTING',
      title: 'Financial Facts That Hold Up in Court.',
      paragraphs: [
        'Our forensic accounting services deliver unbiased analysis, uncover financial irregularities, and provide the evidence you need to make informed decisions and win cases.',
        'From fraud detection and damage quantification to expert reports and litigation support, we follow the money through complex construction finances and present findings that withstand scrutiny.',
      ],
      cta: 'Explore Forensic Accounting',
      href: '/services/forensic-accounting',
      image: 'assets/images/forensic-expert-bg-hero.webp',
      checklist: [
        'Fraud Detection & Investigation',
        'Financial Investigations',
        'Damage Quantification',
        'Court-Ready Expert Reports',
        'Litigation Support',
      ],
    },
  ];

  protected readonly activeMedia = signal(0);

  private readonly cardRefs = viewChildren<ElementRef<HTMLElement>>('cardRef');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.initMediaSync());
  }

  /** Crossfade the sticky media to the card nearest the viewport center. */
  private initMediaSync(): void {
    const els = this.cardRefs().map((ref) => ref.nativeElement);
    if (els.length === 0) return;

    const updateActive = () => {
      const viewportCenter = window.innerHeight * 0.5;
      let bestIdx = 0;
      let bestDist = Infinity;
      els.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      this.activeMedia.set(bestIdx);
    };

    updateActive();
    // Scroll events from the document's scrolling element are captured at
    // document (they do not bubble to window in every browser/runtime).
    document.addEventListener('scroll', updateActive, { passive: true, capture: true });
    this.destroyRef.onDestroy(() => document.removeEventListener('scroll', updateActive, true));

  }
}
