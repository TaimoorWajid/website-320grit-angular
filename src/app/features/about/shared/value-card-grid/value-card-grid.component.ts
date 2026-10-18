import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { SectionHeader, ValueCard, iconSvg } from '../about.types';
import { HcRevealDirective } from '../hc-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/** Shared .ab-value-grid: icon/eyebrow cards. Delay = min(i+1, 4) per source. */
@Component({
  selector: 'app-value-grid',
  imports: [NgClass, HcRevealDirective, SafeHtmlPipe],
  templateUrl: './value-card-grid.component.html',
  styleUrl: './value-card-grid.component.scss',
})
export class ValueCardGridComponent {
  readonly sectionId = input<string>();
  readonly background = input<string>();
  readonly header = input<SectionHeader>();
  readonly cards = input.required<ValueCard[]>();
  /** grid-template-columns value, e.g. 'repeat(5, 1fr)' */
  readonly columns = input<string>('repeat(6, 1fr)');
  readonly gridMaxWidth = input<string>();
  readonly gridMargin = input<string>();

  protected icon(paths: string): string {
    return iconSvg(paths, 24, 1.75);
  }

  /** Delay = min(i+1, 4), mirroring the source's hc-delay-N classes. */
  protected delayClasses(i: number): Record<string, boolean> {
    const d = Math.min(i + 1, 4);
    return {
      'hc-delay-1': d === 1,
      'hc-delay-2': d === 2,
      'hc-delay-3': d === 3,
      'hc-delay-4': d === 4,
    };
  }
}
