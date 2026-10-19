import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { prefersReducedMotion } from '../../../../../core/animations/animation.util';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';
import { OR_HERO } from '../../owner-representation.data';

/**
 * cm-hero — Construction Management hero.
 *
 * A genuinely unique, premium hero: full-viewport animated gradient mesh,
 * a canvas particle field, mouse-parallax layers, and a floating 3D
 * glass "live oversight" card that tilts in 3D space with the cursor.
 * Nothing is shared with the owner-centric hero.
 */
@Component({
  selector: 'app-cm-hero',
  imports: [RouterLink, RevealDirective],
  templateUrl: './cm-hero.component.html',
  styleUrl: './cm-hero.component.scss',
})
export class CmHeroComponent {
  protected readonly HERO = OR_HERO;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('particles');
  private readonly floatCard = viewChild<ElementRef<HTMLElement>>('floatCard');

  constructor() {
    afterNextRender(() => {
      this.initParticles();
      this.initParallax();
    });
  }

  /** Scroll to the services section (anchor button). */
  protected scrollToServices(event: Event): void {
    event.preventDefault();
    document.querySelector('[data-section="services"]')?.scrollIntoView({ behavior: 'smooth' });
  }

  // ---------------------------------------------------------------- particle field
  private initParticles(): void {
    const canvasEl = this.canvas()?.nativeElement;
    if (!canvasEl || prefersReducedMotion()) return;

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      const r = this.host.nativeElement.getBoundingClientRect();
      w = canvasEl.width = Math.floor(r.width);
      h = canvasEl.height = Math.floor(r.height);
    };
    resize();
    window.addEventListener('resize', resize);

    interface P {
      x: number; y: number; vx: number; vy: number; r: number; hue: number; a: number;
    }
    const count = Math.min(90, Math.floor((w * h) / 22000));
    const parts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      hue: Math.random() < 0.22 ? 22 : 268, // 20% orange, 80% purple
      a: Math.random() * 0.5 + 0.25,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 62%, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    });
  }

  // ---------------------------------------------------------------- mouse parallax + 3D card
  private initParallax(): void {
    if (prefersReducedMotion()) return;
    const hostEl = this.host.nativeElement;
    const cardEl = this.floatCard()?.nativeElement;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = hostEl.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      // Layered parallax: mesh and canvas drift opposite the cursor.
      hostEl.style.setProperty('--cm-px', cx.toFixed(4));
      hostEl.style.setProperty('--cm-py', cy.toFixed(4));
      if (cardEl) {
        cardEl.style.transform =
          `rotateY(${(cx * 14).toFixed(2)}deg) rotateX(${(-cy * 12).toFixed(2)}deg)`;
      }
      if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
        raf = requestAnimationFrame(apply);
      }
    };

    hostEl.addEventListener('mousemove', onMove, { passive: true });
    this.destroyRef.onDestroy(() => hostEl.removeEventListener('mousemove', onMove));
  }
}
