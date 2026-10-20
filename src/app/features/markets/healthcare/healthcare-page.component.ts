import { Component, inject, signal } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { MarketIconComponent } from '../shared/market-icon/market-icon.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { MARKET_IMG } from '../shared/market-assets';
import {
  APPROACH_BULLETS,
  APPROACH_STEPS,
  DIFFERENCE_CARDS,
  ENV_TABS,
  FLOW_LEGEND,
  HEALTHCARE_FAQS,
  PRECISION_LAYERS,
  SYSTEMS,
  TRANSITION_STAGES,
  WHY_CARDS,
} from './healthcare.data';

/**
 * Healthcare market page — bespoke 10-section layout (does NOT use
 * the shared rr-* skeleton). Interactive: environment tab switcher
 * with crossfade, single-open FAQ accordion.
 */
@Component({
  selector: 'app-healthcare-page',
  imports: [RevealDirective, MarketIconComponent, CtaBandComponent],
  templateUrl: './healthcare-page.component.html',
  styleUrl: './healthcare-page.component.scss',
})
export class HealthcarePageComponent {
  protected readonly heroImage = MARKET_IMG.lab;
  protected readonly precisionImage = MARKET_IMG.lab;
  protected readonly approachImage = MARKET_IMG.labour;

  protected readonly flowLegend = FLOW_LEGEND;
  protected readonly differenceCards = DIFFERENCE_CARDS;
  protected readonly layers = PRECISION_LAYERS;
  protected readonly envTabs = ENV_TABS;
  protected readonly approachSteps = APPROACH_STEPS;
  protected readonly approachBullets = APPROACH_BULLETS;
  protected readonly stages = TRANSITION_STAGES;
  protected readonly systems = SYSTEMS;
  protected readonly whyCards = WHY_CARDS;
  protected readonly faqs = HEALTHCARE_FAQS;

  /** Environment tab switcher. */
  protected readonly activeEnv = signal(0);
  protected readonly envVisible = signal(true);

  /** FAQ accordion: single-open, -1 = all closed (matches original). */
  protected readonly openFaq = signal(-1);

  private readonly smoothScroll = inject(SmoothScrollService);

  constructor() {
    inject(SeoService).update({ title: 'Healthcare Construction', canonicalPath: '/industries/healthcare' });
  }

  selectEnv(index: number): void {
    if (index === this.activeEnv()) return;
    this.envVisible.set(false);
    window.setTimeout(() => {
      this.activeEnv.set(index);
      this.envVisible.set(true);
    }, 250);
  }

  toggleFaq(index: number): void {
    this.openFaq.set(this.openFaq() === index ? -1 : index);
  }

  onAnchor(event: Event, anchor: string): void {
    event.preventDefault();
    this.smoothScroll.scrollTo(anchor, { offset: 80 });
  }

  protected capDelay(i: number): number {
    return Math.min(i + 1, 4) * 0.1;
  }
}
