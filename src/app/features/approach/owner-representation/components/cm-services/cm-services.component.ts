import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { prefersReducedMotion } from '../../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';
import { OR_PILLARS } from '../../owner-representation.data';

/**
 * cm-services — the five owner's-rep disciplines as 3D tilt cards.
 * Each card rotates in 3D toward the cursor (rotateX/rotateY) with a
 * specular glare that follows the mouse. Staggered scroll reveal.
 */
@Component({
  selector: 'app-cm-services',
  imports: [RevealDirective, SafeHtmlPipe],
  templateUrl: './cm-services.component.html',
  styleUrl: './cm-services.component.scss',
})
export class CmServicesComponent {
  protected readonly pillars = OR_PILLARS;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.initTilt());
  }

  private initTilt(): void {
    if (prefersReducedMotion()) return;
    const cards = Array.from(
      this.host.nativeElement.querySelectorAll('.cm-svc__card'),
    ) as HTMLElement[];
    const cleanups: Array<() => void> = [];

    for (const card of cards) {
      let raf = 0;
      let targetRX = 0;
      let targetRY = 0;
      let curRX = 0;
      let curRY = 0;

      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        targetRY = px * 14;
        targetRX = -py * 12;
        card.style.setProperty('--glare-x', `${(px + 0.5) * 100}%`);
        card.style.setProperty('--glare-y', `${(py + 0.5) * 100}%`);
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const onLeave = () => {
        targetRX = 0;
        targetRY = 0;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const apply = () => {
        raf = 0;
        curRX += (targetRX - curRX) * 0.14;
        curRY += (targetRY - curRY) * 0.14;
        card.style.transform =
          `rotateX(${curRX.toFixed(2)}deg) rotateY(${curRY.toFixed(2)}deg)` +
          (targetRX === 0 && targetRY === 0 ? '' : ' translateZ(6px)');
        if (Math.abs(targetRX - curRX) > 0.01 || Math.abs(targetRY - curRY) > 0.01) {
          raf = requestAnimationFrame(apply);
        } else if (targetRX === 0 && targetRY === 0) {
          card.style.transform = '';
        }
      };

      card.addEventListener('mousemove', onMove, { passive: true });
      card.addEventListener('mouseleave', onLeave, { passive: true });
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
        cancelAnimationFrame(raf);
      });
    }

    this.destroyRef.onDestroy(() => cleanups.forEach((fn) => fn()));
  }
}
