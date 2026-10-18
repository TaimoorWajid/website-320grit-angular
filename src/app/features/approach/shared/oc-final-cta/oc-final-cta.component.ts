import { Component } from '@angular/core';
import { OcRevealDirective } from '../oc-reveal.directive';
import { OcParallaxDirective } from '../oc-parallax.directive';
import { OcButtonComponent } from '../oc-button/oc-button.component';

/** Final parallax CTA: "Your Vision. One Team. One Outcome." */
@Component({
  selector: 'app-oc-final-cta',
  imports: [OcRevealDirective, OcParallaxDirective, OcButtonComponent],
  templateUrl: './oc-final-cta.component.html',
  styleUrl: './oc-final-cta.component.scss',
})
export class OcFinalCtaComponent {
  protected readonly cta = { label: 'Start a Project', href: '#contact', variant: 'primary' as const, large: true };
}
