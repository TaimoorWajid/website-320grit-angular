import {
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../core/services/seo.service';
import { APP_CONFIG } from '../../../core/config/app-config';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE_RE = /^(?=(?:\D*\d){7,})[+()\d\s.-]{7,40}$/;
const URL_RE = /^https?:\/\/.+/;
const MAX_INTRO = 4000;

const STEPS = ['Your Details', 'Documents', 'Review & Submit'] as const;

const FIELD_ERRORS: Record<string, string> = {
  required: 'Please complete this field.',
  email: 'Enter a valid email address.',
  phone: 'Enter a phone number with at least 7 digits.',
  url: 'Enter a full URL starting with http:// or https://.',
  maxlength: 'This entry is too long.',
};

/**
 * Job application (/careers/:slug/apply) — rebuilt on Howell's
 * 3-step apply flow: personal details → documents → review.
 * POSTs FormData to APP_CONFIG.formEndpoint when configured;
 * with no endpoint it shows the honest "backend not connected"
 * notice (never a fake success) and offers a clearly-labeled
 * "application prepared → email your resume" path instead.
 *
 * Exposes `canLeave()` (Howell's canDeactivate pattern) so a route
 * guard can confirm before abandoning a dirty application.
 */
@Component({
  selector: 'app-apply-job-page',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    RevealDirective,
    NotFoundComponent,
    FileUploadComponent,
    SafeHtmlPipe,
  ],
  templateUrl: './apply-job-page.component.html',
  styleUrl: './apply-job-page.component.scss',
})
export class ApplyJobPageComponent {
  protected readonly icons = CAREERS_ICONS;
  protected readonly steps = STEPS;
  protected readonly maxIntro = MAX_INTRO;

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  protected readonly job = computed(() => this.jobsService.getBySlug(this.slug()));

  protected readonly step = signal(1);
  protected readonly resumeFile = signal<File | null>(null);
  protected readonly submitting = signal(false);
  protected readonly submitError = signal(false);
  protected readonly backendMissing = signal(false);
  protected readonly resumeError = signal('');
  protected readonly introLength = signal(0);
  /** Skipped once the application has genuinely left the page (success or prepared). */
  private finished = false;

  protected readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_RE)]],
    phone: ['', [Validators.required, Validators.pattern(PHONE_RE)]],
    location: ['', Validators.required],
    profile: ['', Validators.pattern(URL_RE)],
    introduction: ['', Validators.maxLength(MAX_INTRO)],
    website: [''], // honeypot
    consent: [false, Validators.requiredTrue],
  });

  private readonly stepFields: string[][] = [
    ['firstName', 'lastName', 'email', 'phone', 'location'],
    [],
    ['consent'],
  ];

  constructor() {
    effect(() => {
      const j = this.job();
      if (j) {
        this.seo.update({
          title: `Apply — ${j.title} | 320 Grit`,
          description: `Apply for the ${j.title} role at 320 Grit Construction.`,
          canonicalPath: `/careers/${j.slug}/apply`,
          noIndex: true,
        });
      }
    });
  }

  /** Howell canDeactivate pattern: the guard calls this before leaving. */
  canLeave(): boolean {
    if (!this.isDirty() || this.finished) return true;
    return window.confirm('Leave this application? Your unsent details will be lost.');
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.isDirty() && !this.finished) {
      event.preventDefault();
    }
  }

  private isDirty(): boolean {
    return this.form.dirty || this.resumeFile() !== null;
  }

  fieldInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  fieldError(name: string): string {
    const c = this.form.get(name);
    if (!c || !c.invalid || !(c.touched || c.dirty)) return '';
    if (c.errors?.['required']) return FIELD_ERRORS['required'];
    if (c.errors?.['pattern'] && name === 'email') return FIELD_ERRORS['email'];
    if (c.errors?.['pattern'] && name === 'phone') return FIELD_ERRORS['phone'];
    if (c.errors?.['pattern'] && name === 'profile') return FIELD_ERRORS['url'];
    if (c.errors?.['maxlength']) return FIELD_ERRORS['maxlength'];
    if (name === 'consent') return 'Please confirm before submitting your application.';
    return 'Please complete this field.';
  }

  onIntroInput(event: Event): void {
    this.introLength.set((event.target as HTMLTextAreaElement).value.length);
  }

  /** True when the whole step is valid; focuses the first invalid field otherwise. */
  private validateStep(s: number): boolean {
    let valid = true;
    let firstInvalid = '';
    for (const name of this.stepFields[s - 1]) {
      const c = this.form.get(name);
      c?.markAsTouched();
      if (c?.invalid) {
        valid = false;
        firstInvalid ||= name;
      }
    }
    if (s === 2) {
      if (!this.resumeFile()) {
        this.resumeError.set('Please attach your resume to continue.');
        valid = false;
        firstInvalid ||= 'resume';
      } else {
        this.resumeError.set('');
      }
    }
    if (!valid) this.focusField(firstInvalid);
    return valid;
  }

  private focusField(name: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLElement>(`[data-field="${name}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus({ preventScroll: true });
      }
    });
  }

  /** Stepper: free backwards, validated forwards (stops at the first invalid step). */
  goToStep(target: number): void {
    if (target === this.step() || this.submitting()) return;
    if (target < this.step()) {
      this.step.set(target);
      return;
    }
    for (let s = this.step(); s < target; s++) {
      if (!this.validateStep(s)) {
        this.step.set(s);
        return;
      }
    }
    this.step.set(target);
  }

  next(): void {
    if (this.submitting()) return;
    if (this.validateStep(this.step())) this.step.update((s) => Math.min(3, s + 1));
  }

  prev(): void {
    if (!this.submitting()) this.step.update((s) => Math.max(1, s - 1));
  }

  stepDone(s: number): boolean {
    if (s === 1) return this.stepFields[0].every((n) => this.form.get(n)?.valid);
    if (s === 2) return this.resumeFile() !== null;
    return false;
  }

  submit(): void {
    if (this.submitting()) return;
    this.submitError.set(false);
    if (!this.validateStep(1) || !this.validateStep(2) || !this.validateStep(3)) return;

    const job = this.job();
    if (!job) return;

    const endpoint = APP_CONFIG.formEndpoint;
    if (!endpoint) {
      // Honest path: nothing was submitted. Show the notice and offer
      // the clearly-labeled "prepared → email it" summary instead.
      this.backendMissing.set(true);
      return;
    }

    const v = this.form.value;
    const payload = new FormData();
    payload.set('job_slug', job.slug);
    payload.set('job_title', job.title);
    payload.set('first_name', String(v.firstName ?? '').trim());
    payload.set('last_name', String(v.lastName ?? '').trim());
    payload.set('email', String(v.email ?? '').trim());
    payload.set('phone', String(v.phone ?? '').trim());
    payload.set('location', String(v.location ?? '').trim());
    payload.set('profile', String(v.profile ?? '').trim());
    payload.set('introduction', String(v.introduction ?? '').trim());
    payload.set('consent', String(!!v.consent));
    payload.set('website', String(v.website ?? '')); // honeypot
    const resume = this.resumeFile();
    if (resume) payload.set('resume', resume, resume.name);

    this.submitting.set(true);
    this.http
      .post(endpoint, payload)
      .pipe(timeout(45000))
      .subscribe({
        next: () => {
          this.submitting.set(false);
          this.finished = true;
          this.router.navigate(['/careers/application/success'], {
            state: { mode: 'received', jobTitle: job.title, jobSlug: job.slug },
          });
        },
        error: () => {
          // Data preserved — nothing is reset.
          this.submitting.set(false);
          this.submitError.set(true);
        },
      });
  }

  /** Honest "backend not connected" → prepared summary framed as email-to-submit. */
  continuePrepared(): void {
    const job = this.job();
    this.finished = true;
    this.router.navigate(['/careers/application/success'], {
      state: { mode: 'prepared', jobTitle: job?.title ?? '', jobSlug: job?.slug ?? '' },
    });
  }

  protected readonly fullName = computed(() => {
    const v = this.form.value;
    return `${v.firstName ?? ''} ${v.lastName ?? ''}`.trim() || '—';
  });
}
