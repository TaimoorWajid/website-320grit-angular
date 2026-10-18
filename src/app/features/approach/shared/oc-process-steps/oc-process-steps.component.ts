import { Component, input } from '@angular/core';
import { OcProcessStep, ocIcon } from '../oc.types';
import { OcRevealDirective } from '../oc-reveal.directive';

/** "How We Work with Owners": 5 process steps with connectors (i*90ms stagger). */
@Component({
  selector: 'app-oc-process-steps',
  imports: [OcRevealDirective],
  templateUrl: './oc-process-steps.component.html',
  styleUrl: './oc-process-steps.component.scss',
})
export class OcProcessStepsComponent {
  readonly steps = input.required<OcProcessStep[]>();

  protected icon(paths: string): string {
    return ocIcon(paths, 22, 1.6);
  }
}
