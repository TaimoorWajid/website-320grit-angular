import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OcRevealDirective } from '../oc-reveal.directive';
import { OcParallaxDirective } from '../oc-parallax.directive';

/** Final parallax CTA: "Your Vision. One Team. One Outcome." */
@Component({
  selector: 'app-oc-final-cta',
  imports: [OcRevealDirective, OcParallaxDirective, RouterLink],
  templateUrl: './oc-final-cta.component.html',
  styleUrl: './oc-final-cta.component.scss',
})
export class OcFinalCtaComponent {}
