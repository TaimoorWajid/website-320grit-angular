import { Component, input } from '@angular/core';
import { OcOrbitNode, ocIcon } from '../oc.types';
import { OcRevealDirective } from '../oc-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/**
 * "One Team. One Direction." — trig-positioned orbit hub.
 * 7 nodes at angle = -90° + i*(360/7), positioned at
 * top: 50+sin*37% / left: 50+cos*37%; SVG spokes computed identically.
 * Node hover depth is pure CSS (:hover z-index 10).
 */
@Component({
  selector: 'app-oc-orbit',
  imports: [OcRevealDirective, SafeHtmlPipe],
  templateUrl: './oc-orbit.component.html',
  styleUrl: './oc-orbit.component.scss',
})
export class OcOrbitComponent {
  readonly nodes = input.required<OcOrbitNode[]>();

  /** [top%, left%] for node i (percentages of the square stage). */
  protected nodePos(i: number): [number, number] {
    const rad = ((-90 + i * (360 / 7)) * Math.PI) / 180;
    return [50 + Math.sin(rad) * 37, 50 + Math.cos(rad) * 37];
  }

  /** Spoke line endpoint for node i in the 400x400 viewBox. */
  protected spoke(i: number): { x2: number; y2: number } {
    const rad = ((-90 + i * (360 / 7)) * Math.PI) / 180;
    return { x2: 200 + Math.cos(rad) * 148, y2: 200 + Math.sin(rad) * 148 };
  }

  protected icon(paths: string): string {
    return ocIcon(paths, 22, 1.6);
  }
}
