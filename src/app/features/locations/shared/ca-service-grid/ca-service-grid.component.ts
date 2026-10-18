import { Component, input } from '@angular/core';
import { CaIconCard, caIcon } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';
import { CaButtonComponent } from '../ca-button/ca-button.component';

/** "Our Services" — 6 purple-icon cards + ghost-purple CTA. */
@Component({
  selector: 'app-ca-service-grid',
  imports: [CaRevealDirective, CaButtonComponent],
  templateUrl: './ca-service-grid.component.html',
  styleUrl: './ca-service-grid.component.scss',
})
export class CaServiceGridComponent {
  readonly services = input.required<CaIconCard[]>();

  protected readonly viewAll = { label: 'View All Services', href: '#contact', variant: 'ghost-purple' as const };

  protected icon(paths: string): string {
    return caIcon(paths, 24, 1.6);
  }
}
