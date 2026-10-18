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
   * Project-inquiry form submission endpoint. The original WordPress site
   * posts via Gravity Forms to wp-admin/admin-ajax.php, which has no static
   * equivalent. Set this to a JSON endpoint to make the form submit; while
   * empty, the form shows an honest "backend not connected" notice.
   */
  formEndpoint: '',
} as const;
