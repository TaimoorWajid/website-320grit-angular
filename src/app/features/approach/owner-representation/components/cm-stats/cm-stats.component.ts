import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { prefersReducedMotion } from '../../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';
import { OR_STATS, OrStat } from '../../owner-representation.data';

/**
 * cm-stats — animated count-up stats strip.
 * Numbers ease up from 0 when the strip scrolls into view (IntersectionObserver,
 * easeOutExpo, requestAnimationFrame). Static values under reduced motion / SSR.
 */
@Component({
  selector: 'app-cm-stats',
  imports: [RevealDirective],
  templateUrl: './cm-stats.component.html',
  styleUrl: './cm-stats.component.scss',
})
export class CmStatsComponent {
  protected readonly stats = OR_STATS;
  protected readonly display = signal<OrStat[]>(OR_STATS.map((s) => ({ ...s, value: 0 })));

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.initCountUp());
  }

  private initCountUp(): void {
    if (prefersReducedMotion()) {
      this.display.set(OR_STATS.map((s) => ({ ...s })));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            this.animate();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(this.host.nativeElement);
    this.destroyRef.onDestroy(() => io.disconnect());
  }

  private animate(): void {
    const duration = 1800;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
      this.display.set(
        OR_STATS.map((s) => ({
          ...s,
          value: Math.round(s.value * eased * Math.pow(10, s.decimals)) / Math.pow(10, s.decimals),
        })),
      );
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  protected format(s: OrStat): string {
    const num = s.decimals > 0 ? s.value.toFixed(s.decimals) : String(Math.round(s.value));
    return `${s.prefix}${Number(num).toLocaleString('en-US', { minimumFractionDigits: s.decimals })}${s.suffix}`;
  }
}
