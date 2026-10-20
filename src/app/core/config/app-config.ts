/** Public, non-secret site configuration. No credentials here. */
export const APP_CONFIG = {
  siteUrl: 'https://320grit.com',
  companyName: '320 Grit',
  defaultDescription:
    '320 Grit provides Bid-Build, Design-Build, Expert Witness, and Forensic Accounting services for complex construction projects.',
  contact: {
    // Filled from staging header/footer during implementation.
    email: '',
    phone: '',
  },
  /**
   * Form submission endpoint for all three site forms (contact, introduce
   * yourself, job application). Points at the Cloudflare Worker
   * (320grit-project/forms-worker/worker.js), which emails submissions to
   * info@320grit.com via Resend. While the Worker's RESEND_API_KEY secret
   * is unset, it answers with an error and the forms show their honest
   * "could not send" state — never a fake success.
   */
  formEndpoint: 'https://super-limit-5eb6.syedtaimoor26.workers.dev',
} as const;
