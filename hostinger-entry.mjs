/**
 * Hostinger Node.js entry point for the 320 Grit Angular SSR server.
 *
 * The built server (dist/website-320grit-angular/server/server.mjs) only calls
 * listen() when it is executed directly as the main module. Hostinger imports
 * the entry file instead, so the server never starts and the platform reports
 * "App did not call listen() within 3 seconds" (HTTP 503).
 *
 * This launcher imports the built Express app (exported as `reqHandler`) and
 * starts it unconditionally on the platform-provided PORT.
 *
 * Hostinger settings for this file:
 *   Entry file:       hostinger-entry.mjs
 *   Output directory: dist/website-320grit-angular/browser
 *   Env (required):   NG_ALLOWED_HOSTS=<your domain, e.g. staging.320grit.com>
 */
import { reqHandler } from './dist/website-320grit-angular/server/server.mjs';

const port = Number(process.env['PORT']) || 4000;

reqHandler.listen(port, () => {
  console.log(`320 Grit SSR server listening on port ${port}`);
});
