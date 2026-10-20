import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MEGA_MENUS, MegaMenu } from '../../core/data/mega-menu.data';
import { SmoothScrollService } from '../../core/services/smooth-scroll.service';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

interface MobileItem {
  label: string;
  href: string;
  children?: { label: string; href: string; children?: { label: string; href: string }[] }[];
}

/**
 * Site header. Desktop: logo + mega-menu nav + CTA. Mobile (<1026px):
 * hamburger opens a slide-out-from-right off-canvas menu.
 * Behaviors ported from the Salient header + child theme:
 * - hides on scroll down, reveals on scroll up (data-hhun="1")
 * - .grit-nav--scrolled after 80px (helper.js initNavbarScroll)
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly megaMenus: MegaMenu[] = MEGA_MENUS;
  protected readonly mobileOpen = signal(false);
  protected readonly openMega = signal<string | null>(null);
  protected readonly openMobileSection = signal<string | null>(null);
  protected readonly hidden = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly mobileMenu: MobileItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Who we are',
      href: '#',
      children: [
        { label: 'About 320 Grit', href: '/about-us' },
        {
          label: 'About Us',
          href: '#',
          children: [
            { label: 'Our Story', href: '/our-story' },
            { label: 'Our Leadership', href: '/our-leadership' },
            { label: 'Our Values', href: '/our-values' },
          ],
        },
        {
          label: 'Commitment',
          href: '#',
          children: [
            { label: 'Safety', href: '/safety' },
            { label: 'Sustainability', href: '/sustainability' },
          ],
        },
      ],
    },
    {
      label: 'What we do',
      href: '#',
      children: [
        { label: 'Bid-Build', href: '/services/bid-build' },
        { label: 'Forensic Accounting', href: '/services/forensic-accounting' },
        { label: 'Expert Witness', href: '/services/expert-witness' },
        { label: 'Design Build', href: '/services/design-build' },
        { label: 'Owner Centric', href: '/approach/owner-centric' },
      ],
    },
    {
      label: 'Industries we serve',
      href: '#',
      children: [
        { label: 'Commercial Construction', href: '/industries/commercial-construction' },
        { label: 'Hospitality', href: '/industries/hospitality' },
        { label: 'RailRoads', href: '/industries/railroads' },
        { label: 'Advanced Technology', href: '/industries/advanced-technology' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Tenant Improvement', href: '/industries/tenant-improvement' },
        { label: 'Behavioral Health', href: '/industries/behavioral-health' },
        { label: 'Education', href: '/industries/education' },
      ],
    },
    {
      label: 'Where we work',
      href: '/locations',
      children: [{ label: 'California', href: '/locations/california' }],
    },
    {
      label: 'Career',
      href: '/careers',
      children: [
        { label: 'Our culture', href: '/careers/our-culture' },
        { label: 'Benefits', href: '/careers/benefits' },
        { label: 'Professional growth', href: '/careers/professional-growth' },
        { label: 'Open positions', href: '/careers/jobs' },
        { label: 'Internships', href: '/careers/internships' },
      ],
    },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.initScrollBehavior());
  }

  /** Toggle a desktop mega-menu panel (click support; hover handled in CSS). */
  toggleMega(label: string): void {
    this.openMega.update((cur) => (cur === label ? null : label));
  }

  closeMega(): void {
    this.openMega.set(null);
    this.clearMegaTimer();
  }

  /** Hover opens immediately; leaving starts a short delay so the cursor
      can travel from the nav link into the panel without it closing. */
  onMegaEnter(label: string): void {
    this.clearMegaTimer();
    this.openMega.set(label);
  }

  onMegaLeave(): void {
    this.clearMegaTimer();
    this.megaTimer = window.setTimeout(() => this.openMega.set(null), 180);
  }

  private megaTimer: number | null = null;

  private clearMegaTimer(): void {
    if (this.megaTimer !== null) {
      clearTimeout(this.megaTimer);
      this.megaTimer = null;
    }
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
    document.body.style.overflow = this.mobileOpen() ? 'hidden' : '';
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
    this.openMobileSection.set(null);
    document.body.style.overflow = '';
  }

  toggleMobileSection(label: string): void {
    this.openMobileSection.update((cur) => (cur === label ? null : label));
  }

  /** Anchor links (e.g. #contact-form) smooth-scroll instead of routing. */
  goToAnchor(href: string, event: Event): void {
    if (!href.startsWith('#') || href.length < 2) return;
    const el = document.querySelector(href);
    if (!el) return;
    event.preventDefault();
    this.closeMobile();
    this.closeMega();
    this.smoothScroll.scrollTo(el as HTMLElement);
  }

  private initScrollBehavior(): void {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      this.scrolled.set(y > 80);
      // Hide on scroll down, reveal on scroll up (Salient hhun).
      if (y > 300 && y > lastY + 4) this.hidden.set(true);
      else if (y < lastY - 4 || y < 300) this.hidden.set(false);
      lastY = y;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.closeMobile();
        this.closeMega();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    });
  }
}
