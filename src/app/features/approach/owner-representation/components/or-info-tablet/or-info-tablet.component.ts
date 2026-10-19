import { Component, DestroyRef, ElementRef, afterNextRender, inject, input, viewChild } from '@angular/core';
import { OcChip } from '../../../shared/oc.types';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { prefersReducedMotion } from '../../../../../core/animations/animation.util';

/**
 * "Why Owners Need an Advocate." — tablet with floating chips
 * and mouse-move 3D tilt (mirrors oc-info-tablet).
 */
@Component({
  selector: 'app-or-info-tablet',
  imports: [OcRevealDirective],
  templateUrl: './or-info-tablet.component.html',
  styleUrl: './or-info-tablet.component.scss',
})
export class OrInfoTabletComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly chips = input.required<OcChip[]>();
  private readonly visual = viewChild<ElementRef<HTMLElement>>('visual');
  private readonly tablet = viewChild<ElementRef<HTMLElement>>('tablet');

  constructor() {
    afterNextRender(() => {
      const wrap = this.visual()?.nativeElement;
      const tablet = this.tablet()?.nativeElement;
      if (!wrap || !tablet || prefersReducedMotion()) return;
      const onMove = (e: MouseEvent) => {
        const rect = wrap.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        tablet.style.transform = `rotateY(${-8 + x * 12}deg) rotateX(${4 - y * 8}deg)`;
      };
      const onLeave = () => {
        tablet.style.transform = 'rotateY(-8deg) rotateX(4deg)';
      };
      wrap.addEventListener('mousemove', onMove);
      wrap.addEventListener('mouseleave', onLeave);
      this.destroyRef.onDestroy(() => {
        wrap.removeEventListener('mousemove', onMove);
        wrap.removeEventListener('mouseleave', onLeave);
      });
    });
  }
}
