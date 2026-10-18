import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { FOOTER_CONTACT_ICONS } from '../../core/data/footer.data';
import { HomeContactComponent } from '../home/components/home-contact/home-contact.component';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}

/**
 * Contact Us (/contact-us) — compact page hero + the shared project
 * inquiry form (reused from the homepage, not duplicated) + a contact
 * info block. Contact details match the footer verbatim.
 */
@Component({
  selector: 'app-contact-page',
  imports: [RevealDirective, HomeContactComponent, SafeHtmlPipe],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  protected readonly items: ContactItem[] = [
    {
      label: 'Phone',
      value: '(323) 555-0199',
      href: 'tel:+13235550199',
      icon: FOOTER_CONTACT_ICONS[0],
    },
    {
      label: 'Email',
      value: 'info@320grit.com',
      href: 'mailto:info@320grit.com',
      icon: FOOTER_CONTACT_ICONS[1],
    },
    {
      label: 'Office',
      value: '100 Spectrum Center Drive, Suite 900, Irvine, CA 92618',
      href: 'https://maps.google.com/?q=100+Spectrum+Center+Drive+Suite+900+Irvine+CA+92618',
      icon: FOOTER_CONTACT_ICONS[2],
    },
  ];

  constructor() {
    inject(SeoService).update({ title: 'Contact Us', canonicalPath: '/contact-us' });
  }
}
