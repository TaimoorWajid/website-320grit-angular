import { Component, input } from '@angular/core';
import { HcRevealDirective } from '../hc-reveal.directive';

/** Shared quote block: .ab-quote (story split) or centered variant (quality). */
@Component({
  selector: 'app-quote-block',
  imports: [HcRevealDirective],
  templateUrl: './quote-block.component.html',
  styleUrl: './quote-block.component.scss',
})
export class QuoteBlockComponent {
  readonly sectionId = input.required<string>();
  readonly background = input<string>();
  /** 'side' renders .ab-quote; 'centered' renders the quality §4 centered style */
  readonly variant = input<'side' | 'centered'>('side');
  readonly quote = input.required<string>();
  readonly cite = input.required<string>();
}
