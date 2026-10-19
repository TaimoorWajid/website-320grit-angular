import { Component, input } from '@angular/core';
import { OcProcessStep, ocIcon } from '../../../shared/oc.types';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';

/** "How We Protect Your Interests": 5 process steps with connectors (i*90ms stagger). */
@Component({
  selector: 'app-or-process-steps',
  imports: [OcRevealDirective, SafeHtmlPipe],
  templateUrl: './or-process-steps.component.html',
  styleUrl: './or-process-steps.component.scss',
})
export class OrProcessStepsComponent {
  readonly steps = input.required<OcProcessStep[]>();

  protected icon(paths: string): string {
    return ocIcon(paths, 22, 1.6);
  }
}
