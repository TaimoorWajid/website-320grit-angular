import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FOOTER_CONTACT_ICONS,
  FOOTER_LINK_GROUPS,
  FOOTER_LOGO_ARROW,
} from '../../core/data/footer.data';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

/** Site footer — orange band on every page; link columns render from
    FOOTER_LINK_GROUPS (real routes only). */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [RouterLink, SafeHtmlPipe],
})
export class FooterComponent {
  protected readonly linkGroups = FOOTER_LINK_GROUPS;
  protected readonly contactIcons = FOOTER_CONTACT_ICONS;
  protected readonly logoArrow = FOOTER_LOGO_ARROW;
}
