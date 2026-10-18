import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { AnimationManagerService } from '../../core/animations/animation-manager.service';
import { prefersReducedMotion } from '../../core/animations/animation.util';

export interface RevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
}

/**
 * [appReveal] — scroll-triggered reveal, mirroring the theme's
 * helper.js scrollReveal() defaults (y 50, expo.out, start 'top 85%').
 * No-op under reduced motion; context reverted on destroy.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly animations = inject(AnimationManagerService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly options = input<RevealOptions, string | RevealOptions>({}, {
    alias: 'appReveal',
    // Bare `appReveal` passes "" — coerce to default options.
    transform: (v) => (typeof v === 'string' ? {} : (v ?? {})),
  });

  private context: gsap.Context | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
    const opts = this.options();
    this.context = this.animations.createContext(() => {
      gsap.from(this.el.nativeElement, {
        y: opts.y ?? 50,
        opacity: 0,
        duration: opts.duration ?? 1,
        delay: opts.delay ?? 0,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: opts.start ?? 'top 85%',
          once: opts.once ?? true,
        },
      });
    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.context?.revert();
    this.context = null;
  }
}
