import { Component, input } from '@angular/core';
import { CtaLink, ProjectCard, SectionHeader } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { HcButtonComponent } from '../hc-button/hc-button.component';

/** Shared .ab-project-grid (our-values light, quality light, sustainability dark). */
@Component({
  selector: 'app-project-grid',
  imports: [HcRevealDirective, HcButtonComponent],
  templateUrl: './project-card-grid.component.html',
  styleUrl: './project-card-grid.component.scss',
})
export class ProjectCardGridComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  readonly light = input(false);
  readonly header = input<SectionHeader>();
  readonly introCta = input<CtaLink>();
  readonly cards = input.required<ProjectCard[]>();
  readonly columns = input<string>('repeat(3, 1fr)');

  protected noop(event: Event): void {
    event.preventDefault();
  }
}
