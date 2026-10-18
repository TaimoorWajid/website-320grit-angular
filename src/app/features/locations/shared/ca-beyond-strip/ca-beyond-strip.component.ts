import { Component, input } from '@angular/core';
import { CaIconCard, caIcon } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html.pipe';

/** "Building Beyond the Project." — fixed-bg strip with 3 icon items. */
@Component({
  selector: 'app-ca-beyond-strip',
  imports: [CaRevealDirective, SafeHtmlPipe],
  templateUrl: './ca-beyond-strip.component.html',
  styleUrl: './ca-beyond-strip.component.scss',
})
export class CaBeyondStripComponent {
  readonly items = input.required<CaIconCard[]>();

  protected icon(paths: string): string {
    return caIcon(paths, 22, 1.6);
  }
}
