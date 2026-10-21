/**
 * Hostinger Node.js entry point for the 320 Grit Angular SSR server.
 *
 * Hostinger requires listen() to be called within ~3 seconds of startup, but
 * importing the full Angular SSR bundle can take longer than that on a cold
 * container. So this launcher:
 *   1. starts listening IMMEDIATELY on the platform-provided PORT, and
 *   2. loads the heavy SSR bundle in the background, holding any requests
 *      that arrive during the load and releasing them once it's ready.
 *
 * Hostinger settings for this file:
 *   Entry file:       hostinger-entry.mjs
 *   Output directory: dist/website-320grit-angular/browser
 *   Env (required):   NG_ALLOWED_HOSTS=<your domain, e.g. staging.320grit.com>
 */
import express from 'express';

const port = Number(process.env['PORT']) || 4000;
const app = express();

let ready = false;
const waiting = [];
app.use((req, res, next) => {
  if (ready) {
    next();
  } else {
    waiting.push(next);
  }
});

// Listen FIRST — this is what Hostinger's startup check looks for.
app.listen(port, () => {
  console.log(`320 Grit: listening on port ${port}; loading SSR bundle...`);
});

try {
  const { reqHandler } = await import(
    './dist/website-320grit-angular/server/server.mjs'
  );
  app.use(reqHandler);
  ready = true;
  waiting.splice(0).forEach((next) => next());
  console.log('320 Grit: SSR bundle loaded; serving requests.');
} catch (err) {
  console.error('320 Grit: failed to load SSR bundle:', err);
  process.exit(1);
}
