import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { prefersReducedMotion } from '../../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';
import { OR_PROCESS_STEPS } from '../../owner-representation.data';

/**
 * cm-process — vertical scroll-driven timeline.
 * A glowing progress line draws down the center as the user scrolls
 * (native scroll progress, no GSAP pin), milestones alternate left/right,
 * and each card slides in with a staggered reveal. Static under
 * reduced motion / SSR.
 */
@Component({
  selector: 'app-cm-process',
  imports: [RevealDirective, SafeHtmlPipe],
  templateUrl: './cm-process.component.html',
  styleUrl: './cm-process.component.scss',
})
export class CmProcessComponent {
  protected readonly steps = OR_PROCESS_STEPS;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');
  private readonly fill = viewChild<ElementRef<HTMLElement>>('fill');

  constructor() {
    afterNextRender(() => this.initProgress());
  }

  private initProgress(): void {
    const trackEl = this.track()?.nativeElement;
    const fillEl = this.fill()?.nativeElement;
    if (!trackEl || !fillEl || prefersReducedMotion()) return;

    const update = () => {
      const r = trackEl.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress of the track passing through the viewport.
      const total = r.height + vh * 0.4;
      const done = Math.min(Math.max(vh * 0.7 - r.top, 0), total);
      fillEl.style.transform = `scaleY(${(done / total).toFixed(4)})`;
    };

    document.addEventListener('scroll', update, { passive: true, capture: true });
    window.addEventListener('resize', update);
    update();
    this.destroyRef.onDestroy(() => {
      document.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    });
  }
}
