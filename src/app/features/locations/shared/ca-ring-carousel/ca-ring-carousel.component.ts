import { Component, DestroyRef, ElementRef, afterNextRender, inject, input, signal, viewChild } from '@angular/core';
import { CaMarket } from '../ca.types';
import { CaRevealDirective } from '../ca-reveal.directive';
import { prefersReducedMotion } from '../../../../core/animations/animation.util';

const RADIUS = 320;
const LERP = 0.12;

/**
 * "Our California Markets" 3D ring carousel, mirroring california.js:
 * cards on a circle (radius 320px, STEP = 360/N); front card centered via
 * targetAngle = -idx * STEP with 0.12 lerp; wheel (180ms cooldown +
 * trackpad filtering), touch swipe (>=36px, clamped at ends), dots.
 * Reduced-motion → cards laid out statically.
 */
@Component({
  selector: 'app-ca-ring-carousel',
  imports: [CaRevealDirective],
  templateUrl: './ca-ring-carousel.component.html',
  styleUrl: './ca-ring-carousel.component.scss',
})
export class CaRingCarouselComponent {
  private readonly destroyRef = inject(DestroyRef);
  readonly markets = input.required<CaMarket[]>();

  private readonly viewport = viewChild<ElementRef<HTMLElement>>('viewport');

  /** Currently displayed (lerped) angle in degrees. */
  protected readonly displayAngle = signal(0);
  protected readonly activeIndex = signal(0);
  protected readonly staticLayout = signal(false);

  private targetAngle = 0;
  private rafId = 0;
  private wheelCooldown = false;
  private lastWheelTime = 0;
  private isPointerInside = false;
  private touchY: number | null = null;

  protected get step(): number {
    return 360 / this.markets().length;
  }

  /** Card transform for index i at the current display angle. */
  protected cardTransform(i: number): string {
    const deg = this.displayAngle() + i * this.step;
    const rad = (deg * Math.PI) / 180;
    const x = Math.sin(rad) * RADIUS;
    const z = Math.cos(rad) * RADIUS;
    const depth = (z + RADIUS) / (2 * RADIUS);
    const scale = 0.72 + depth * 0.28;
    return `translateX(${x.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateY(${(-deg).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
  }

  protected cardOpacity(i: number): number {
    const deg = this.displayAngle() + i * this.step;
    const depth = (Math.cos((deg * Math.PI) / 180) * RADIUS + RADIUS) / (2 * RADIUS);
    return 0.3 + depth * 0.7;
  }

  protected cardZ(i: number): number {
    const deg = this.displayAngle() + i * this.step;
    const depth = (Math.cos((deg * Math.PI) / 180) * RADIUS + RADIUS) / (2 * RADIUS);
    return Math.round(depth * 100);
  }

  protected isFront(i: number): boolean {
    const deg = this.displayAngle() + i * this.step;
    const depth = (Math.cos((deg * Math.PI) / 180) * RADIUS + RADIUS) / (2 * RADIUS);
    return depth > 0.88;
  }

  protected goToIndex(idx: number, animate: boolean): void {
    const n = this.markets().length;
    idx = ((idx % n) + n) % n;
    this.activeIndex.set(idx);
    this.targetAngle = -idx * this.step;
    if (animate) {
      if (!this.rafId) this.rafId = requestAnimationFrame(() => this.tick());
    } else {
      this.displayAngle.set(this.targetAngle);
    }
  }

  private tick(): void {
    const next = this.displayAngle() + (this.targetAngle - this.displayAngle()) * LERP;
    if (Math.abs(this.targetAngle - next) > 0.08) {
      this.displayAngle.set(next);
      this.rafId = requestAnimationFrame(() => this.tick());
    } else {
      this.displayAngle.set(this.targetAngle);
      this.rafId = 0;
    }
  }

  protected noop(event: Event): void {
    event.preventDefault();
  }

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) {
        this.staticLayout.set(true);
        return;
      }
      const viewport = this.viewport()?.nativeElement;
      if (!viewport) return;
      const n = this.markets().length;

      const onEnter = () => (this.isPointerInside = true);
      const onMove = (e: MouseEvent) => {
        const r = viewport.getBoundingClientRect();
        this.isPointerInside =
          e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      };
      const onLeave = () => (this.isPointerInside = false);
      const onWheel = (e: WheelEvent) => {
        if (!this.isPointerInside) return;
        const raw = e.deltaY || e.deltaX;
        if (Math.abs(raw) < 1) return;
        const norm = e.deltaMode === 1 ? raw * 16 : e.deltaMode === 2 ? raw * 100 : raw;
        const dir = norm > 0 ? 1 : -1;
        const now = performance.now();
        if (now - this.lastWheelTime < 120 && Math.abs(norm) < 50) return;
        e.preventDefault();
        e.stopPropagation();
        this.lastWheelTime = now;
        if (this.wheelCooldown) return;
        this.wheelCooldown = true;
        setTimeout(() => (this.wheelCooldown = false), 180);
        this.goToIndex(this.activeIndex() + dir, true);
      };
      const onTouchStart = (e: TouchEvent) => {
        this.touchY = e.touches[0].clientY;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (!this.isPointerInside || this.touchY === null) return;
        const dy = this.touchY - e.touches[0].clientY;
        if (Math.abs(dy) < 36) return;
        if (dy < 0 && this.activeIndex() === 0) return;
        if (dy > 0 && this.activeIndex() === n - 1) return;
        e.preventDefault();
        this.goToIndex(this.activeIndex() + (dy > 0 ? 1 : -1), true);
        this.touchY = e.touches[0].clientY;
      };
      const onTouchEnd = () => (this.touchY = null);

      viewport.addEventListener('mouseenter', onEnter);
      viewport.addEventListener('mousemove', onMove);
      viewport.addEventListener('mouseleave', onLeave);
      viewport.addEventListener('wheel', onWheel, { passive: false });
      viewport.addEventListener('touchstart', onTouchStart, { passive: true });
      viewport.addEventListener('touchmove', onTouchMove, { passive: false });
      viewport.addEventListener('touchend', onTouchEnd);

      this.destroyRef.onDestroy(() => {
        viewport.removeEventListener('mouseenter', onEnter);
        viewport.removeEventListener('mousemove', onMove);
        viewport.removeEventListener('mouseleave', onLeave);
        viewport.removeEventListener('wheel', onWheel);
        viewport.removeEventListener('touchstart', onTouchStart);
        viewport.removeEventListener('touchmove', onTouchMove);
        viewport.removeEventListener('touchend', onTouchEnd);
        if (this.rafId) cancelAnimationFrame(this.rafId);
      });
    });
  }
}
