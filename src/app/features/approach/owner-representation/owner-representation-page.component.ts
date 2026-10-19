import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { OrPillarGridComponent } from './components/or-pillar-grid/or-pillar-grid.component';
import { OrProcessStepsComponent } from './components/or-process-steps/or-process-steps.component';
import { OrHeroComponent } from './components/or-hero/or-hero.component';
import { OrOrbitComponent } from './components/or-orbit/or-orbit.component';
import { OrCompareComponent } from './components/or-compare/or-compare.component';
import { OrInfoTabletComponent } from './components/or-info-tablet/or-info-tablet.component';
import { OrFinalCtaComponent } from './components/or-final-cta/or-final-cta.component';
import {
  OR_CHIPS,
  OR_ORBIT_NODES,
  OR_PILLARS,
  OR_PROCESS_STEPS,
  OR_SIDENAV,
} from './owner-representation.data';

/** Construction Management / Owner Representation — composition of or- sections in template order. */
@Component({
  selector: 'app-owner-representation-page',
  imports: [
    OrHeroComponent,
    OrPillarGridComponent,
    OrOrbitComponent,
    OrProcessStepsComponent,
    OrCompareComponent,
    OrInfoTabletComponent,
    OrFinalCtaComponent,
  ],
  templateUrl: './owner-representation-page.component.html',
  styleUrl: './owner-representation-page.component.scss',
})
export class OwnerRepresentationPageComponent {
  protected readonly PILLARS = OR_PILLARS;
  protected readonly ORBIT_NODES = OR_ORBIT_NODES;
  protected readonly PROCESS_STEPS = OR_PROCESS_STEPS;
  protected readonly CHIPS = OR_CHIPS;
  protected readonly SIDENAV = OR_SIDENAV;

  /** Sidenav scroll-spy highlight (mirrors the services pages). */
  protected readonly activeSection = signal('hero');

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly smoothScroll = inject(SmoothScrollService);

  constructor() {
    inject(SeoService).update({
      title: 'Construction Management & Owner Representation Services',
      description:
        '320 Grit provides owner’s representation and construction management services — independent advocacy protecting your budget, schedule, and quality from planning through closeout.',
      canonicalPath: '/approach/owner-representation',
    });

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
