import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { OcHeroComponent } from '../shared/oc-hero/oc-hero.component';
import { OcPillarGridComponent } from '../shared/oc-pillar-grid/oc-pillar-grid.component';
import { OcOrbitComponent } from '../shared/oc-orbit/oc-orbit.component';
import { OcProcessStepsComponent } from '../shared/oc-process-steps/oc-process-steps.component';
import { OcCompareComponent } from '../shared/oc-compare/oc-compare.component';
import { OcInfoTabletComponent } from '../shared/oc-info-tablet/oc-info-tablet.component';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CHIPS, ORBIT_NODES, PILLARS, PROCESS_STEPS, SIDENAV } from './owner-centric.data';

/** Owner-Centric Experience page — composition of oc- sections in template order. */
@Component({
  selector: 'app-owner-centric-page',
  imports: [
    OcHeroComponent,
    OcPillarGridComponent,
    OcOrbitComponent,
    OcProcessStepsComponent,
    OcCompareComponent,
    OcInfoTabletComponent,
    CtaBandComponent,
  ],
  templateUrl: './owner-centric-page.component.html',
  styleUrl: './owner-centric-page.component.scss',
})
export class OwnerCentricPageComponent {
  protected readonly PILLARS = PILLARS;
  protected readonly ORBIT_NODES = ORBIT_NODES;
  protected readonly PROCESS_STEPS = PROCESS_STEPS;
  protected readonly CHIPS = CHIPS;
  protected readonly SIDENAV = SIDENAV;

  /** Sidenav scroll-spy highlight (mirrors the services pages). */
  protected readonly activeSection = signal('hero');

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly smoothScroll = inject(SmoothScrollService);

  constructor() {
    inject(SeoService).update({ title: 'Owner-Centric Approach', canonicalPath: '/approach/owner-centric' });

    afterNextRender(() => {
      const root = this.host.nativeElement;

      // Sidenav scroll-spy: active = the last section whose top has crossed
      // the viewport middle. Position-based, not IntersectionObserver: the
      // old narrow middle band could be jumped over entirely on a fast
      // scroll, so the 06/07 sections could be skipped and never highlight.
      // Only real <section> elements are tracked — the sidenav <li> items
      // also carry data-section attributes and must never be mistaken for
      // sections. Only updates after the user scrolls — prevents wrong
      // initial highlight on page load.
      const sections = [...root.querySelectorAll('section[data-section]')].map((el) => ({
        key: el.getAttribute('data-section') ?? 'hero',
        el: el as HTMLElement,
      }));
      let hasScrolled = false;
      const update = () => {
        if (!hasScrolled) return;
        const middle = window.innerHeight * 0.5;
        let current = sections[0]?.key ?? 'hero';
        for (const s of sections) {
          if (s.el.getBoundingClientRect().top <= middle) current = s.key;
          else break;
        }
        this.activeSection.set(current);
      };
      const onScroll = () => {
        hasScrolled = true;
        update();
      };
      const onResize = () => update();
      document.addEventListener('scroll', onScroll, { passive: true, capture: true });
      window.addEventListener('resize', onResize);
      this.destroyRef.onDestroy(() => {
        document.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
        window.removeEventListener('resize', onResize);
      });
    });
  }

  protected scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    const el = this.host.nativeElement.querySelector(`section[data-section="${section}"]`);
    if (el) this.smoothScroll.scrollTo(el as HTMLElement);
  }
}
