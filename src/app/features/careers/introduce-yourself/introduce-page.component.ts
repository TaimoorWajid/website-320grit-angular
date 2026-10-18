import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../../core/services/seo.service';
import { APP_CONFIG } from '../../../core/config/app-config';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { CAREERS_ICONS } from '../shared/careers-icons';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABELS: Record<string, string> = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email Address',
  location: 'Current Location',
  interest: 'Area of Interest',
  about: 'Tell Us About Yourself',
  consent: 'Consent',
};

interface Reason {
  title: string;
  text: string;
  icon: string;
}

/**
 * Introduce yourself (/careers/introduce-yourself) — ported from
 * introduce-yourself.php. The WP submit was demo-only; this port POSTs
 * to APP_CONFIG.formEndpoint when configured and otherwise shows an
 * honest "backend not connected" notice — never a fake success.
 */
@Component({
  selector: 'app-introduce-page',
  imports: [RouterLink, ReactiveFormsModule, RevealDirective, FileUploadComponent, SafeHtmlPipe],
  templateUrl: './introduce-page.component.html',
  styleUrl: './introduce-page.component.scss',
})
export class IntroducePageComponent {
  protected readonly icons = CAREERS_ICONS;

  protected readonly reasons: Reason[] = [
    {
      title: 'Future Opportunities',
      text: 'Be considered for upcoming roles that match your skills.',
      icon: CAREERS_ICONS.target(),
    },
    {
      title: 'Talent Network',
      text: 'Join our network of professionals building the future.',
      icon: CAREERS_ICONS.users(),
    },
    {
      title: 'Make an Impact',
      text: 'Your next opportunity might be closer than you think.',
      icon: CAREERS_ICONS.layers(),
    },
  ];

  protected readonly interestOptions = [
    'Project Management',
    'Field Operations',
    'Preconstruction',
    'Estimating',
    'Safety',
    'Corporate / Accounting',
    'Other',
  ];
  protected readonly yearsOptions = ['0–2 years', '3–5 years', '6–10 years', '10+ years'];

  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly backendMissing = signal(false);
  protected readonly submitError = signal(false);
  protected readonly resumeFile = signal<File | null>(null);

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(EMAIL_RE)]],
    phone: [''],
    location: ['', Validators.required],
    position: [''],
    interest: ['', Validators.required],
    years: [''],
    about: ['', Validators.required],
    linkedin: [''],
    consent: [false, Validators.requiredTrue],
  });

  constructor() {
    inject(SeoService).update({ title: 'Introduce Yourself', canonicalPath: '/careers/introduce-yourself' });
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
