import { Component, input } from '@angular/core';
import { OcPillar, ocIcon } from '../../../shared/oc.types';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { SafeHtmlPipe } from '../../../../../shared/pipes/safe-html.pipe';

/** Owner Representation pillars: 5 numbered cards with stagger delays (i*80ms). */
@Component({
  selector: 'app-or-pillar-grid',
  imports: [OcRevealDirective, SafeHtmlPipe],
  templateUrl: './or-pillar-grid.component.html',
  styleUrl: './or-pillar-grid.component.scss',
})
export class OrPillarGridComponent {
  readonly pillars = input.required<OcPillar[]>();

  protected icon(paths: string): string {
    return ocIcon(paths, 28, 1.6);
  }
}
