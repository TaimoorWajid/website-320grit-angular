import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../core/services/seo.service';
import { APP_CONFIG } from '../../../core/config/app-config';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { CtaBandComponent } from '../../../shared/components/cta-band/cta-band.component';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  interest: 'Area of Interest',
  years: 'Years of Experience',
  message: 'Message',
  consent: 'Consent',
};

interface Reason {
  title: string;
  text: string;
  icon: string;
}

/**
 * Introduce yourself (/careers/introduce-yourself) — rebuilt on the careers
 * rebuild standards. POSTs FormData to APP_CONFIG.formEndpoint when
 * configured; otherwise shows an honest "backend not connected" notice
 * directing candidates to info@320grit.com — never a fake success.
 */
@Component({
  selector: 'app-new-introduce-page',
  imports: [RouterLink, ReactiveFormsModule, RevealDirective, SafeHtmlPipe, CtaBandComponent, FileUploadComponent],
  templateUrl: './introduce-page.component.html',
  styleUrl: './introduce-page.component.scss',
})
export class IntroducePageComponent {
  protected readonly icons = CAREERS_ICONS;

  protected readonly reasons: Reason[] = [
    {
      title: 'Get Considered First',
      text: 'When a matching role opens — including internships — candidates in our talent pool hear about it first.',
      icon: CAREERS_ICONS.target(),
    },
    {
      title: 'Be Known By Name',
      text: 'A real introduction goes further than a job-board application. We remember good people.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Start The Conversation',
      text: 'Tell us what you want to build. Your next opportunity might be closer than you think.',
      icon: CAREERS_ICONS.layers(),
    },
  ];

  protected readonly interestOptions = [
    'Field Operations',
    'Project Management',
    'Preconstruction',
    'Office & Admin',
    'Internship',
    'Other',
  ];

  protected readonly yearsOptions = [
    'Student / Recent Graduate',
    '0–2 years',
    '3–5 years',
    '6–10 years',
    '10+ years',
  ];

  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly backendMissing = signal(false);
  protected readonly submitError = signal(false);
  protected readonly resumeFile = signal<File | null>(null);

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_RE)]],
    phone: [''],
    interest: ['', Validators.required],
    years: [''],
    message: ['', Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  constructor() {
    inject(SeoService).update({
      title: 'Introduce Yourself | 320 Grit Careers',
      description:
        'No matching role open? Introduce yourself to 320 Grit — join our talent pool for future construction, project management, and internship opportunities in California.',
      canonicalPath: '/careers/introduce-yourself',
    });
  }

  fieldError(name: string): string {
    const c = this.form.get(name);
    if (!c || !c.invalid || !(c.touched || c.dirty)) return '';
    if (name === 'email' && c.errors?.['pattern']) return 'Please enter a valid email address.';
    return `${FIELD_LABELS[name] ?? name} is required.`;
  }

  fieldInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const endpoint = APP_CONFIG.formEndpoint;
    if (!endpoint) {
      this.backendMissing.set(true);
      return;
    }
    const payload = new FormData();
    for (const [k, v] of Object.entries(this.form.value)) {
      if (v !== null && v !== undefined) payload.set(k, String(v));
    }
    const resume = this.resumeFile();
    if (resume) payload.set('resume', resume, resume.name);
    this.submitting.set(true);
    this.submitError.set(false);
    this.backendMissing.set(false);
    this.http.post(endpoint, payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set(true);
      },
    });
  }
}
