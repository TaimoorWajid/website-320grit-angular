import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SeoService } from '../../../core/services/seo.service';
import { SmoothScrollService } from '../../../core/services/smooth-scroll.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

interface NextStep {
  num: string;
  title: string;
  text: string;
}

interface ActionCard {
  title: string;
  text: string;
  cta: string;
  link: string[] | string;
  fragment?: string;
  variant: 'primary' | 'outline';
  icon: string;
}

/**
 * Thank you (/careers/thank-you) — ported from thank-you.php.
 * Orphaned in the WP templates (nothing links to it); kept as a
 * route for future use. Query params: ?type=application|interest&job={slug}.
 */
@Component({
  selector: 'app-thank-you-page',
  imports: [RouterLink, RevealDirective, SafeHtmlPipe],
  templateUrl: './thank-you-page.component.html',
  styleUrl: './thank-you-page.component.scss',
})
export class ThankYouPageComponent {
  protected readonly icons = CAREERS_ICONS;

  private readonly queryParams = toSignal(inject(ActivatedRoute).queryParamMap, {
    initialValue: null as unknown as import('@angular/router').ParamMap,
  });
  private readonly jobsService = inject(JobsService);

  protected readonly type = computed(() =>
    this.queryParams()?.get('type') === 'interest' ? 'interest' : 'application',
  );
  protected readonly jobTitle = computed(() => this.jobsService.getBySlug(this.queryParams()?.get('job'))?.title ?? null);

  protected readonly nextSteps: NextStep[] = [
    {
      num: '01',
      title: 'We Review',
      text: 'Our team carefully reviews every application against the role requirements and our values.',
    },
    {
      num: '02',
      title: 'We Reach Out',
      text: 'If there’s a strong fit, a member of our recruiting or hiring team will contact you directly.',
    },
    {
      num: '03',
      title: 'We Connect',
      text: 'Next steps may include a conversation, interview, or additional information request.',
    },
  ];

  protected readonly actions: ActionCard[] = [
    {
      title: 'Explore Other Opportunities',
      text: 'While you wait, browse additional open positions that might also be a good fit.',
      cta: 'View Open Positions',
      link: '/open-positions',
      variant: 'primary',
      icon: CAREERS_ICONS.arrow(),
    },
    {
      title: 'Learn About Our Culture',
      text: 'Get a deeper sense of who we are, how we work, and what it means to build with 320 Grit.',
      cta: 'Our Culture',
      link: '/careers',
      fragment: 'our-culture',
      variant: 'outline',
      icon: CAREERS_ICONS.arrow(),
    },
    {
      title: 'Stay Connected',
      text: 'Follow us for project updates, company news, and future career opportunities.',
      cta: 'Back To Home',
      link: '/',
      variant: 'outline',
      icon: CAREERS_ICONS.arrow(),
    },
  ];

  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly router = inject(Router);

  constructor() {
    inject(SeoService).update({ title: 'Thank You', canonicalPath: '/careers/thank-you', noIndex: true });
  }

  goToCulture(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/careers']).then(() => {
      window.setTimeout(() => this.smoothScroll.scrollTo('#our-culture'), 150);
    });
  }
}
