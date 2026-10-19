import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { OcHeroComponent } from '../shared/oc-hero/oc-hero.component';
import { OcPillarGridComponent } from '../shared/oc-pillar-grid/oc-pillar-grid.component';
import { OcOrbitComponent } from '../shared/oc-orbit/oc-orbit.component';
import { OcProcessStepsComponent } from '../shared/oc-process-steps/oc-process-steps.component';
import { OcCompareComponent } from '../shared/oc-compare/oc-compare.component';
import { OcInfoTabletComponent } from '../shared/oc-info-tablet/oc-info-tablet.component';
import { OcFinalCtaComponent } from '../shared/oc-final-cta/oc-final-cta.component';
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
    OcFinalCtaComponent,
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

      // Sidenav scroll-spy: middle-of-viewport highlight.
      // Only updates after the user scrolls — prevents wrong initial highlight on page load.
      let hasScrolled = false;
      const onScroll = () => {
        hasScrolled = true;
      };
      document.addEventListener('scroll', onScroll, { passive: true, capture: true });
      this.destroyRef.onDestroy(() =>
        document.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions),
      );

      const spy = new IntersectionObserver(
        (entries) => {
          if (!hasScrolled) return;
          for (const e of entries) {
            if (e.isIntersecting) {
              this.activeSection.set(e.target.getAttribute('data-section') ?? 'hero');
            }
          }
        },
        { rootMargin: '-45% 0px -45% 0px' },
      );
      root.querySelectorAll('[data-section]').forEach((el: Element) => spy.observe(el));
      this.destroyRef.onDestroy(() => spy.disconnect());
    });
  }

  protected scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    const el = this.host.nativeElement.querySelector(`[data-section="${section}"]`);
    if (el) this.smoothScroll.scrollTo(el as HTMLElement);
  }
}
