import { Component, afterNextRender, inject, DestroyRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AnimationManagerService } from './core/animations/animation-manager.service';
import { SmoothScrollService } from './core/services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly animations = inject(AnimationManagerService);
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      // GSAP plugin registration (browser-only, once).
      this.animations.setup();
      // Lenis smooth scroll (skipped on server + reduced motion).
      this.smoothScroll.initialize();
      this.destroyRef.onDestroy(() => this.smoothScroll.destroy());
    });
  }
}
