import { Component, input } from '@angular/core';
import { CtaLink, TimelineItem } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { HcButtonComponent } from '../hc-button/hc-button.component';

/** Shared .ab-timeline with intro block (our-story milestones). */
@Component({
  selector: 'app-timeline',
  imports: [HcRevealDirective, HcButtonComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  readonly label = input<string>();
  readonly title = input<string>();
  readonly text = input<string>();
  readonly cta = input<CtaLink>();
  readonly items = input.required<TimelineItem[]>();
}
