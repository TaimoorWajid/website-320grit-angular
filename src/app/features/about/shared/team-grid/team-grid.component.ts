import { Component, input } from '@angular/core';
import { TeamMember } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';

/** Shared .ab-team-grid (our-leadership). */
@Component({
  selector: 'app-team-grid',
  imports: [HcRevealDirective],
  templateUrl: './team-grid.component.html',
  styleUrl: './team-grid.component.scss',
})
export class TeamGridComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  readonly label = input<string>();
  readonly title = input<string>();
  readonly members = input.required<TeamMember[]>();
}
