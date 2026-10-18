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
      // Custom scrollbar: visible while scrolling, fades after 1s idle
      // (ports salient-child/assets/js/header.js).
      this.initScrollbarVisibility();
      this.destroyRef.onDestroy(() => this.smoothScroll.destroy());
    });
  }

  private initScrollbarVisibility(): void {
    const htmlEl = document.documentElement;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const HOVER_ZONE_PX = 16;

    const show = () => htmlEl.classList.add('sb-visible');
    const hideIfIdle = () => {
      if (!htmlEl.classList.contains('sb-hovering')) htmlEl.classList.remove('sb-visible');
    };

    const onScroll = () => {
      show();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(hideIfIdle, 1000);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (e.clientX >= window.innerWidth - HOVER_ZONE_PX) {
        htmlEl.classList.add('sb-hovering');
        show();
      } else {
        htmlEl.classList.remove('sb-hovering');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(hideIfIdle, 1000);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(scrollTimeout);
    });
  }
}
