import { Component } from '@angular/core';
import { OcRevealDirective } from '../oc-reveal.directive';
import { OcParallaxDirective } from '../oc-parallax.directive';
import { OcButtonComponent } from '../oc-button/oc-button.component';

/** Owner-centric hero: parallax bg + glow + scroll hint. Copy verbatim from spec. */
@Component({
  selector: 'app-oc-hero',
  imports: [OcRevealDirective, OcParallaxDirective, OcButtonComponent],
  templateUrl: './oc-hero.component.html',
  styleUrl: './oc-hero.component.scss',
})
export class OcHeroComponent {
  protected readonly primaryCta = { label: 'How We Work', href: '#oc-pillars', variant: 'primary' as const };
  protected readonly ghostCta = { label: 'Start a Project', href: '#contact', variant: 'ghost' as const };
}
