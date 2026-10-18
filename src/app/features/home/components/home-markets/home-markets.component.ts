import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

interface MarketTab {
  /** Verbatim tab label from the source nav. */
  label: string;
  number: string;
  eyebrow: string;
  title: string;
  chips: string[];
  paragraph: string;
  tags: string[];
  href: string;
  /** Staging anomaly: this pane's card bg 404s and has no image in source. */
  bgFallback?: boolean;
}

/**
 * Staging anomaly preserved verbatim: panes 4–8 reuse the behavioral-health
 * placeholder sub-services / paragraph / tag strip from the source.
 */
const PLACEHOLDER_CHIPS = ['Treatment Centers', 'Behavioral Clinics', 'Recovery Facilities', 'Patient Housing'];
const PLACEHOLDER_PARAGRAPH = 'Spaces thoughtfully designed to promote comfort, dignity, and healing.';
const PLACEHOLDER_TAGS = ['DESIGN BUILD', 'CONSTRUCTION INSIGHT', 'DISCRETION', 'WELLNESS FOCUSED'];

/**
 * Section 5 — "Markets we served" scrolling tabs.
 * Ports Salient's nectar-scrolling-tabs: 8 tabs, one content pane per tab,
 * pure-CSS crossfade on switch (grid-stacked panes), black section background.
 * Copy is verbatim from refs/grit-staging/sections.md §5.
 */
@Component({
  selector: 'app-home-markets',
  imports: [RouterLink, RevealDirective],
  templateUrl: './home-markets.component.html',
  styleUrl: './home-markets.component.scss',
})
export class HomeMarketsComponent {
  protected readonly tabs: MarketTab[] = [
    {
      label: 'Rail Roads',
      number: '01',
      eyebrow: 'RAILROAD',
      title: 'Rail Infrastructure',
      chips: ['Track Systems', 'Operations Facilities', 'Signal Buildings', 'Maintenance Yards'],
      paragraph: 'A luxury hillside residence designed for comfort, privacy, and timeless living.',
      tags: ['DESIGN BUILD', 'RAIL INFRASTRUCTURE', 'MISSION CRITICAL', 'SAFETY FIRST'],
      href: '/industries/railroads',
    },
    {
      label: 'Healthcare',
      number: '02',
      eyebrow: 'HEALTHCARE',
      title: 'Hospital / MOB / Imaging',
      chips: ['Hospitals', 'Medical Office Buildings', 'Imaging Centers', 'Outpatient Facilities'],
      paragraph: 'Precision-built healthcare environments designed around patient care.',
      tags: ['DESIGN BUILD', 'MISSION CRITICAL', 'CODE COMPLIANCE', 'PATIENT FOCUSED'],
      href: '/industries/healthcare',
    },
    {
      label: 'Behavioral Health',
      number: '03',
      eyebrow: 'BEHAVIORAL HEALTH',
      title: 'Healing Environments',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/behavioral-health',
    },
    {
      label: 'ADVANCED TECHNOLOGY',
      number: '04',
      eyebrow: 'ADVANCED TECHNOLOGY',
      title: 'Research & Laboratory',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/advanced-technology',
    },
    {
      label: 'COMMERCIAL',
      number: '05',
      eyebrow: 'COMMERCIAL',
      title: 'Corporate & Office',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/commercial-construction',
      bgFallback: true,
    },
    {
      label: 'TENANT IMPROVEMENT',
      number: '06',
      eyebrow: 'TENANT IMPROVEMENT',
      title: 'Modern Interior Transformations',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/tenant-improvement',
    },
    {
      label: 'EDUCATION',
      number: '07',
      eyebrow: 'EDUCATION',
      title: 'Learning Environments',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/education',
    },
    {
      label: 'HOSPITALITY',
      number: '08',
      eyebrow: 'HOSPITALITY',
      title: 'Hotels & Guest Experiences',
      chips: [...PLACEHOLDER_CHIPS],
      paragraph: PLACEHOLDER_PARAGRAPH,
      tags: [...PLACEHOLDER_TAGS],
      href: '/industries/hospitality',
    },
  ];

  protected readonly activeTab = signal(0);

  protected selectTab(index: number): void {
    this.activeTab.set(index);
  }
}
