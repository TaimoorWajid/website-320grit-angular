import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { APP_CONFIG } from '../config/app-config';

export interface SeoUpdate {
  title: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Per-page SEO: title, meta description, canonical, OG/Twitter, robots.
 * Mirrors the Howell Group SeoService pattern.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  update(seo: SeoUpdate): void {
    const siteUrl = APP_CONFIG.siteUrl.replace(/\/$/, '');
    const fullTitle = seo.title.includes('320 Grit') ? seo.title : `${seo.title} | 320 Grit`;

    this.title.setTitle(fullTitle);
    this.setMeta('description', seo.description ?? APP_CONFIG.defaultDescription);
    this.setMeta('og:title', fullTitle, 'property');
    this.setMeta('og:description', seo.description ?? APP_CONFIG.defaultDescription, 'property');
    this.setMeta('og:type', 'website', 'property');
    this.setMeta('twitter:card', 'summary_large_image');
    if (seo.image) {
      const image = seo.image.startsWith('http') ? seo.image : `${siteUrl}${seo.image}`;
      this.setMeta('og:image', image, 'property');
      this.setMeta('twitter:image', image);
    }
    this.setMeta('robots', seo.noIndex ? 'noindex, nofollow' : 'index, follow');

    if (isPlatformBrowser(this.platformId) && seo.canonicalPath) {
      this.setCanonical(`${siteUrl}${seo.canonicalPath}`);
    }
  }

  private setMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
    const selector = attr === 'property' ? `property="${name}"` : `name="${name}"`;
    let tag = this.document.head.querySelector(`meta[${selector}]`);
    if (!tag) {
      tag = this.document.createElement('meta');
      tag.setAttribute(attr, name);
      this.document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
