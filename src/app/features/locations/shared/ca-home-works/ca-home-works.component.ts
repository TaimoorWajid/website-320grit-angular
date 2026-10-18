import { Component, input } from '@angular/core';
import { CaButtonComponent } from '../ca-button/ca-button.component';
import { CaRevealDirective } from '../ca-reveal.directive';

/** "Our California Home" + "Built Around the Way California Works". */
@Component({
  selector: 'app-ca-home-works',
  imports: [CaRevealDirective, CaButtonComponent],
  templateUrl: './ca-home-works.component.html',
  styleUrl: './ca-home-works.component.scss',
})
export class CaHomeWorksComponent {
  readonly items = input.required<{ num: string; title: string; text: string }[]>();
  protected readonly directions = { label: 'View Directions', href: '#contact', variant: 'ghost' as const };
}
