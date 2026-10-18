import { Component, afterNextRender, inject, DestroyRef, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  private readonly router = inject(Router);

  /** On staging the footer sits inside the orange contact section (transparent bg). */
  protected readonly isHomeRoute = signal(true);

  constructor() {
    this.isHomeRoute.set(this.router.url === '/');
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.isHomeRoute.set(e.urlAfterRedirects === '/'));
    afterNextRender(() => {
      // GSAP plugin registration (browser-only, once).
      this.animations.setup();
      // Lenis smooth scroll (skipped on server + reduced motion).
      this.smoothScroll.initialize();
      this.destroyRef.onDestroy(() => this.smoothScroll.destroy());
    });
  }
}
