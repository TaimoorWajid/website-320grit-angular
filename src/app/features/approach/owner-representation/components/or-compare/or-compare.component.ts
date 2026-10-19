import { Component } from '@angular/core';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { OR_SHOULD, OR_SHOULDNT } from '../../owner-representation.data';

/** Going it alone vs. having 320 Grit as your owner's representative. */
@Component({
  selector: 'app-or-compare',
  imports: [OcRevealDirective],
  templateUrl: './or-compare.component.html',
  styleUrl: './or-compare.component.scss',
})
export class OrCompareComponent {
  protected readonly shouldnt = OR_SHOULDNT;
  protected readonly should = OR_SHOULD;
}
