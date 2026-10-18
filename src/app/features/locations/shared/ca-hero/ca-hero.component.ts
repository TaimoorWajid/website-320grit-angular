import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { CaRevealDirective } from '../ca-reveal.directive';
import { CaButtonComponent } from '../ca-button/ca-button.component';

/**
 * California hero (hc-based markup per spec §5.1): fixed background that
 * hides once the hero scrolls fully out of view (mirrors california.js).
 * NOTE: the source's primary CTA href="#at-cta" has no matching anchor
 * (leftover id); it targets the final CTA so it points at #ca-cta here.
 */
@Component({
  selector: 'app-ca-hero',
  imports: [CaRevealDirective, CaButtonComponent],
  templateUrl: './ca-hero.component.html',
  styleUrl: './ca-hero.component.scss',
})
export class CaHeroComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly hero = viewChild<ElementRef<HTMLElement>>('hero');
  private readonly heroBg = viewChild<ElementRef<HTMLElement>>('heroBg');

  protected readonly talkCta = { label: 'Talk to Our California Team', href: '#ca-cta', variant: 'hc-primary' as const };
  protected readonly servicesCta = { label: 'Explore Our Services', href: '#contact', variant: 'hc-outline' as const };

  constructor() {
    afterNextRender(() => {
      const hero = this.hero()?.nativeElement;
      const bg = this.heroBg()?.nativeElement;
      if (!hero || !bg) return;
      const sync = () => {
        const hidden = hero.getBoundingClientRect().bottom <= 0;
        bg.style.opacity = hidden ? '0' : '1';
        bg.style.pointerEvents = hidden ? 'none' : 'auto';
      };
      window.addEventListener('scroll', sync, { passive: true });
      sync();
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', sync));
    });
  }
}
