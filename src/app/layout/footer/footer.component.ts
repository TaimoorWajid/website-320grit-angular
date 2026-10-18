import { Component } from '@angular/core';
import {
  FOOTER_AREAS,
  FOOTER_CONTACT_ICONS,
  FOOTER_LOGO_ARROW,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_SOCIALS,
} from '../../core/data/footer.data';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

/** Site footer — custom .grit-footer (the Salient #footer-outer is empty). */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [SafeHtmlPipe],
})
export class FooterComponent {
  protected readonly socials = FOOTER_SOCIALS;
  protected readonly quickLinks = FOOTER_QUICK_LINKS;
  protected readonly services = FOOTER_SERVICES;
  protected readonly areas = FOOTER_AREAS;
  protected readonly contactIcons = FOOTER_CONTACT_ICONS;
  protected readonly logoArrow = FOOTER_LOGO_ARROW;
}
