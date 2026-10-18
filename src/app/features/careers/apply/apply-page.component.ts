import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../core/services/seo.service';
import { APP_CONFIG } from '../../../core/config/app-config';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { JobsService } from '../shared/jobs.service';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEP_LABELS = ['Your Information', 'Experience', 'Resume & Documents', 'Review & Submit'];

const FIELD_LABELS: Record<string, string> = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  phone: 'Phone Number',
  location: 'Current Location',
  yearsExperience: 'Years of Relevant Experience',
  currentTitle: 'Current / Most Recent Position',
  currentCompany: 'Current / Most Recent Company',
  relevantExperience: 'Relevant Experience Summary',
  education: 'Education',
  consent: 'Consent',
};

/**
 * Apply (/careers/apply?job={slug}) — ported from apply-position.php.
 * 4-step reactive form with per-step validation, review summary and
 * consent. The WP submit was demo-only; this port POSTs a FormData
 * payload (resume included) to APP_CONFIG.formEndpoint when configured
 * and otherwise shows an honest "backend not connected" notice —
 * never a fake success.
 */
@Component({
  selector: 'app-apply-page',
  imports: [RouterLink, ReactiveFormsModule, RevealDirective, FileUploadComponent],
  templateUrl: './apply-page.component.html',
  styleUrl: './apply-page.component.scss',
})
export class ApplyPageComponent {
  protected readonly icons = CAREERS_ICONS;
  protected readonly stepLabels = STEP_LABELS;

  private readonly jobsService = inject(JobsService);
  private readonly seo = inject(SeoService);
  private readonly jobSlug = toSignal(inject(ActivatedRoute).queryParamMap.pipe(map((p) => p.get('job') ?? '')), {
    initialValue: '',
  });

  /**
   * WP fell back to project-manager for unknown slugs; keep that here.
   * Reactive so query-param-only navigation updates the sidebar.
   */
  protected readonly job = computed(() => this.jobsService.getBySlug(this.jobSlug()) ?? this.jobsService.getAll()[0]);

  constructor() {
    effect(() => {
      this.seo.update({
        title: `Apply — ${this.job().title}`,
        canonicalPath: '/careers/apply',
        noIndex: true,
      });
    });
  }
  protected readonly step = signal(1);
  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly backendMissing = signal(false);
  protected readonly submitError = signal(false);
  protected readonly resumeError = signal('');

  protected readonly resumeFile = signal<File | null>(null);
  protected readonly additionalFiles = signal<File[]>([]);

  protected readonly yearsOptions = ['0–2 years', '3–5 years', '6–10 years', '10+ years'];
  protected readonly hearAboutOptions = ['LinkedIn', '320 Grit Website', 'Employee Referral', 'Indeed', 'Other'];

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly formWrap = viewChild<ElementRef<HTMLElement>>('formWrap');

  protected readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_RE)]],
    phone: ['', Validators.required],
    location: ['', Validators.required],
    linkedin: [''],
    hearAbout: [''],
    yearsExperience: ['', Validators.required],
    currentTitle: ['', Validators.required],
    currentCompany: ['', Validators.required],
    relevantExperience: ['', Validators.required],
    education: ['', Validators.required],
    certifications: [''],
    consent: [false, Validators.requiredTrue],
  });

  private readonly stepFields: string[][] = [
    ['firstName', 'lastName', 'email', 'phone', 'location'],
    ['yearsExperience', 'currentTitle', 'currentCompany', 'relevantExperience', 'education'],
    [],
    ['consent'],
  ];

  protected readonly fullName = computed(() => {
    const f = this.form.value;
    return `${f.firstName ?? ''} ${f.lastName ?? ''}`.trim() || '—';
  });

  fieldError(name: string): string {
    const c = this.form.get(name);
    if (!c || !c.invalid || !(c.touched || c.dirty)) return '';
    const label = FIELD_LABELS[name] ?? name;
    if (name === 'email' && c.errors?.['pattern']) return 'Please enter a valid email address.';
    return `${label} is required.`;
  }

  fieldInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  private validateStep(s: number): boolean {
    let valid = true;
    for (const name of this.stepFields[s - 1]) {
      const c = this.form.get(name);
      c?.markAsTouched();
      if (c?.invalid) valid = false;
    }
    if (s === 3) {
      if (!this.resumeFile()) {
        this.resumeError.set('Resume is required.');
        valid = false;
      } else {
        this.resumeError.set('');
      }
    }
    return valid;
  }

  next(): void {
    if (!this.validateStep(this.step())) return;
    this.step.update((s) => Math.min(4, s + 1));
    this.scrollToForm();
  }

  prev(): void {
    this.step.update((s) => Math.max(1, s - 1));
    this.scrollToForm();
  }

  private scrollToForm(): void {
    this.formWrap()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  submit(): void {
    if (!this.validateStep(4)) return;
    const endpoint = APP_CONFIG.formEndpoint;
    if (!endpoint) {
      this.backendMissing.set(true);
      return;
    }
    const payload = new FormData();
    const v = this.form.value;
    payload.set('job_slug', this.job().slug);
    payload.set('job_title', this.job().title);
    for (const [k, val] of Object.entries(v)) {
      if (val !== null && val !== undefined) payload.set(k, String(val));
    }
    const resume = this.resumeFile();
    if (resume) payload.set('resume', resume, resume.name);
    this.additionalFiles().forEach((f, i) => payload.set(`additional_docs[${i}]`, f, f.name));
    this.submitting.set(true);
    this.submitError.set(false);
    this.http.post(endpoint, payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
        this.scrollToForm();
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set(true);
      },
    });
  }
}
