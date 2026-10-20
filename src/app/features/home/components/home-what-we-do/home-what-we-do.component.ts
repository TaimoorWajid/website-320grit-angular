import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

interface FeatureCard {
  eyebrow: string;
  title: string;
  paragraphs: [string, string];
  /** Verbatim checklist items from staging (.grit-feature-list). */
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
 * while the three content cards scroll; an IntersectionObserver crossfades
 * the sticky media to the card currently in view.
 * Copy is verbatim from refs/grit-staging/sections.md §4.
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
      eyebrow: 'COMMERCIAL CONSTRUCTION',
      title: 'Building Commercial Spaces That Drive Business.',
      paragraphs: [
        'From corporate headquarters and retail centers to medical facilities and mixed-use developments, we deliver commercial construction with precision, transparency, and uncompromising quality.',
        'Every milestone is managed by experienced professionals, ensuring projects stay on schedule, within budget, and built to perform for decades.',
      ],
      cta: 'Explore Commercial Projects',
      href: '/industries/commercial-construction',
      image: 'assets/images/What-we-do-faeture-image.webp',
      checklist: [
        '25+ Years of Combined Experience',
        'Skilled Craftsmen & In-House Team',
        'Safety Focused, Quality Driven',
        'Transparent Communication',
        'Built on Integrity. Delivered with Grit.',
      ],
    },
    {
      eyebrow: 'RESIDENTIAL CONSTRUCTION',
      title: 'Crafted Homes. Built for Generations.',
      paragraphs: [
        'Every home we build is designed around your vision, lifestyle, and long-term investment. From custom residences to luxury estates, we combine exceptional craftsmanship, premium materials, and meticulous project management to deliver homes that are as enduring as they are beautiful.',
        'Our collaborative approach ensures a seamless experience—from concept and planning to the final walkthrough.',
      ],
      cta: 'Explore Residential Projects',
      href: '',
      image: 'assets/images/ChatGPT-Image-Jul-27-2026-08_14_05-PM.webp',
      checklist: [
        'Modern & Contemporary Designs',
        'High-End Interior Finishes',
        'Energy-Efficient Construction',
        'Transparent Budget & Timeline',
        'Dedicated Project Management',
      ],
    },
    {
      eyebrow: 'PROJECT MANAGEMENT',
      title: 'Building Success Through Exceptional Leadership.',
      paragraphs: [
        'Every milestone is carefully planned, every resource strategically managed, and every detail meticulously executed. Our project managers coordinate people, timelines, budgets, and quality standards to ensure seamless delivery from groundbreaking to final handover.',
        'With a commitment to transparency and accountability, we provide clients with complete confidence throughout every stage of construction.',
      ],
      cta: 'Explore Projects Managed By Us',
      href: '',
      image: 'assets/images/ChatGPT-Image-Jul-28-2026-07_22_35-AM.webp',
      checklist: [
        'Strategic Planning & Execution',
        'Schedule & Budget Optimization',
        'Vendor & Subcontractor Management',
        'Quality & Safety Oversight',
        'Seamless Client Communication',
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
