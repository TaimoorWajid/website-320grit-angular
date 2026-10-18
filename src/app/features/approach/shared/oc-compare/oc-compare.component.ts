import { Component } from '@angular/core';
import { OcRevealDirective } from '../oc-reveal.directive';

/** Should/Shouldn't compare panels with animated divider. Copy verbatim from spec. */
@Component({
  selector: 'app-oc-compare',
  imports: [OcRevealDirective],
  templateUrl: './oc-compare.component.html',
  styleUrl: './oc-compare.component.scss',
})
export class OcCompareComponent {
  protected readonly shouldnt = [
    'Chase information',
    'Decode construction jargon',
    'Discover problems late',
    'Manage every detail',
    'Wonder who is responsible',
  ];
  protected readonly should = [
    'Clear information',
    'Early visibility',
    'Informed decisions',
    'Accountability',
    'Confidence',
  ];
}
