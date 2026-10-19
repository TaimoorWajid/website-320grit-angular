import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OcRevealDirective } from '../../../shared/oc-reveal.directive';
import { OcParallaxDirective } from '../../../shared/oc-parallax.directive';

/** Final parallax CTA for Owner Representation. */
@Component({
  selector: 'app-or-final-cta',
  imports: [OcRevealDirective, OcParallaxDirective, RouterLink],
  templateUrl: './or-final-cta.component.html',
  styleUrl: './or-final-cta.component.scss',
})
export class OrFinalCtaComponent {}
