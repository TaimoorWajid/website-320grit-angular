import { Component, computed, input } from '@angular/core';
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
  /** 'feature' renders a single member as a full-width editorial split
      (photo left, story right) instead of a centered card. Multi-member
      grids and the about-us preview keep the card layout. */
  readonly variant = input<'card' | 'feature'>('card');

  /** True only for a single member rendered as a feature. */
  readonly isFeature = computed(() => this.variant() === 'feature' && this.members().length === 1);

  /** Initials badge for members whose photo is not yet available. */
  initials(m: TeamMember): string {
    return m.name
      .split(/\s+/)
      .map((w) => w.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
