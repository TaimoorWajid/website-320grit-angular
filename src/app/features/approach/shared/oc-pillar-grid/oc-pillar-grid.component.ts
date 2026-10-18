import { Component, input } from '@angular/core';
import { OcPillar, ocIcon } from '../oc.types';
import { OcRevealDirective } from '../oc-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/** Owner-centric pillars: 5 numbered cards with stagger delays (i*80ms). */
@Component({
  selector: 'app-oc-pillar-grid',
  imports: [OcRevealDirective, SafeHtmlPipe],
  templateUrl: './oc-pillar-grid.component.html',
  styleUrl: './oc-pillar-grid.component.scss',
})
export class OcPillarGridComponent {
  readonly pillars = input.required<OcPillar[]>();

  protected icon(paths: string): string {
    return ocIcon(paths, 28, 1.6);
  }
}
