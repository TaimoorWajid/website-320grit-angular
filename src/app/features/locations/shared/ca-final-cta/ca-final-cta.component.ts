import { Component } from '@angular/core';
import { CaRevealDirective } from '../ca-reveal.directive';
import { CaButtonComponent } from '../ca-button/ca-button.component';

/** Final CTA: "Build What’s Next in California." */
@Component({
  selector: 'app-ca-final-cta',
  imports: [CaRevealDirective, CaButtonComponent],
  templateUrl: './ca-final-cta.component.html',
  styleUrl: './ca-final-cta.component.scss',
})
export class CaFinalCtaComponent {
  protected readonly cta = { label: 'Start a Project', href: '#contact', variant: 'primary' as const, large: true };
}
