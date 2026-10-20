import { Component, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SeoService } from '../../../core/services/seo.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

type Mode = 'received' | 'prepared' | 'generic';

const STORE_KEY = 'grit-application-summary';

interface ApplyState {
  mode: 'received' | 'prepared';
  jobTitle: string;
  jobSlug: string;
}

/**
 * Application success (/careers/application/success) — honest
 * confirmation only. With a received submission it confirms receipt;
 * with a prepared (backend-not-connected) application it clearly
 * states NOTHING was submitted and shows how to email the resume.
 * Direct visits without any context show a generic page — never a
 * fabricated confirmation or reference number.
 */
@Component({
  selector: 'app-success-page',
  imports: [RouterLink, RevealDirective, CtaBandComponent, SafeHtmlPipe],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss',
})
export class SuccessPageComponent {
  protected readonly icons = CAREERS_ICONS;

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly jobSlug = toSignal(inject(ActivatedRoute).queryParamMap.pipe(map((p) => p.get('job') ?? '')), {
    initialValue: '',
  });

  protected readonly mode = signal<Mode>('generic');
  protected readonly jobTitle = signal('');
  protected readonly jobSlugSig = signal('');

  protected readonly job = computed(() => this.jobsService.getBySlug(this.jobSlugSig() || this.jobSlug()));

  protected readonly encodeSubject = computed(() =>
    encodeURIComponent(`Application — ${this.jobTitle() || '320 Grit Careers'}`),
  );

  protected readonly nextSteps = computed(() => {
    if (this.mode() === 'prepared') {
      return [
        { title: 'Send your resume', text: 'Email your resume to info@320grit.com with the job title in the subject line — that completes your application.' },
        { title: 'We review every application', text: 'The 320 Grit hiring team reviews each submission against the role requirements.' },
        { title: 'Hear back from us', text: 'If your experience aligns, we\'ll reach out at the email you provided to schedule a conversation.' },
      ];
    }
    return [
      { title: 'We review your application', text: 'The 320 Grit hiring team reviews each application against the role requirements.' },
      { title: 'Interview invitation', text: 'If your experience aligns with the role, we\'ll reach out to schedule a conversation.' },
      { title: 'Decision & next steps', text: 'We follow up with every candidate we interview — you won\'t be left guessing.' },
    ];
  });

  constructor() {
    this.seo.update({
      title: 'Application Received | 320 Grit',
      canonicalPath: '/careers/application/success',
      noIndex: true,
    });

    if (isPlatformBrowser(this.platformId)) {
      const state = (window.history.state ?? {}) as Partial<ApplyState>;
      if (state.mode === 'received' || state.mode === 'prepared') {
        this.mode.set(state.mode);
        this.jobTitle.set(state.jobTitle ?? '');
        this.jobSlugSig.set(state.jobSlug ?? '');
        try {
          sessionStorage.setItem(STORE_KEY, JSON.stringify(state));
        } catch {
          /* storage unavailable — navigation state is enough */
        }
      } else {
        // Refresh landed here: fall back to the stored summary, if any.
        try {
          const raw = sessionStorage.getItem(STORE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw) as ApplyState;
            if (parsed.mode === 'received' || parsed.mode === 'prepared') {
              this.mode.set(parsed.mode);
              this.jobTitle.set(parsed.jobTitle ?? '');
              this.jobSlugSig.set(parsed.jobSlug ?? '');
            }
          }
        } catch {
          /* ignore */
        }
      }
    }

    // Show the job title even when only the slug is known.
    effect(() => {
      if (!this.jobTitle() && this.job()?.title) {
        this.jobTitle.set(this.job()!.title);
      }
    });
  }
}
