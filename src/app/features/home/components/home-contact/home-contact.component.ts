import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../../core/config/app-config';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

/**
 * Project inquiry form (3 steps), reproducing the Gravity Forms
 * multi-page form on the staging homepage.
 *
 * BACKEND NOTE: the original submits via Gravity Forms AJAX to WordPress
 * (admin-ajax.php). There is no static equivalent. This component POSTs the
 * collected data as JSON to APP_CONFIG.formEndpoint when configured; when
 * it is empty the user sees an honest "not connected yet" notice instead
 * of a fake success message.
 */
@Component({
  selector: 'app-home-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
})
export class HomeContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Staging behavior (Salient nectar-color-change-bg.js): the contact section
   * background starts black and transitions to orange (#FF5D0E) when the
   * section is >= 40% visible in the viewport, reverting on scroll-up.
   * Implemented with IntersectionObserver toggling a body class.
   */
  constructor() {
    afterNextRender(() => {
      const section = this.el.nativeElement.querySelector('.home-contact');
      if (!section || typeof IntersectionObserver === 'undefined') return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            document.body.classList.toggle('contact-orange', entry.intersectionRatio >= 0.4);
          }
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
      );
      observer.observe(section);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        document.body.classList.remove('contact-orange');
      });
    });
  }

  protected readonly step = signal(1);
  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly backendMissing = signal(false);
  protected readonly submitError = signal(false);

  protected readonly states = US_STATES;
  protected readonly roles = ['Owner', 'Developer', 'Architect', 'Designer', 'Other'];
  protected readonly projectTypes = [
    'Commercial', 'Healthcare', 'Education', 'Hospitality',
    'Advanced Technology', 'Tenant Improvement', 'Rail Roads', 'Other',
  ];
  protected readonly values = ['Under $1M', '$1M - $5M', '$5M - $10M', '$10M - $25M', '$25M+', 'Not sure yet'];
  protected readonly stages = ['Early Planning', 'Design', 'Pre-construction', 'Ready to Build', 'Existing Project'];
  protected readonly starts = ['0-3 months', '3-6 months', '6-12 months', '12+ months', 'Not decided'];

  protected readonly form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    role: ['', Validators.required],
    roleOther: [''],
    phone: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['', Validators.required],
    projectValue: ['', Validators.required],
    projectStage: ['', Validators.required],
    targetStart: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    projectDetails: [''],
    additionalInfo: [''],
  });

  protected readonly stepFields: string[][] = [
    ['firstName', 'lastName', 'role', 'phone', 'company', 'email'],
    ['projectType', 'projectValue', 'projectStage', 'targetStart', 'state', 'city'],
    [],
  ];

  next(): void {
    const fields = this.stepFields[this.step() - 1];
    let valid = true;
    for (const f of fields) {
      const c = this.form.get(f);
      c?.markAsTouched();
      if (c?.invalid) valid = false;
    }
    if (valid) {
      this.step.update((s) => Math.min(3, s + 1));
      document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  prev(): void {
    this.step.update((s) => Math.max(1, s - 1));
  }

  goToStep(n: number): void {
    if (n < this.step()) this.step.set(n);
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
      // No backend wired yet — say so plainly instead of faking success.
      this.backendMissing.set(true);
      return;
    }
    this.submitting.set(true);
    this.submitError.set(false);
    this.http.post(endpoint, this.form.value).subscribe({
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
