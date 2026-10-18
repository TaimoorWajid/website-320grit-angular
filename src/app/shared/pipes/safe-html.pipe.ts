import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Bypasses Angular's HTML sanitizer for trusted SVG/icon markup.
 *
 * Angular's server-side sanitizer strips SVG elements from [innerHTML]
 * bindings during SSR/prerendering, leaving icons empty in the static HTML.
 * This pipe marks our own icon SVG strings (from our data registries) as
 * trusted so they render on both server and client.
 *
 * Only use with our own static icon markup — never with user input.
 */
@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value ?? '');
  }
}
