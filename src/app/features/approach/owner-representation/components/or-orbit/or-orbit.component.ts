import { Component, input } from '@angular/core';
import { OcOrbitNode, ocIcon } from '../../../shared/oc.types';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';

/**
 * "One Advocate. Total Oversight." — trig-positioned orbit hub.
 * 320 Grit at the center as the owner's representative; 7 project
 * parties orbit around it. Same geometry as oc-orbit.
 */
@Component({
  selector: 'app-or-orbit',
  imports: [OcRevealDirective, SafeHtmlPipe],
  templateUrl: './or-orbit.component.html',
  styleUrl: './or-orbit.component.scss',
})
export class OrOrbitComponent {
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
