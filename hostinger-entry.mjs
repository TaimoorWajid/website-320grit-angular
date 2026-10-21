/**
 * Hostinger Node.js entry point for the 320 Grit Angular SSR server.
 *
 * The built server (dist/website-320grit-angular/server/server.mjs) now starts
 * itself unconditionally on import: src/server.ts calls
 * app.listen(PORT, '0.0.0.0') at module top level with no isMainModule guard,
 * because Hostinger imports the entry file instead of executing it directly.
 *
 * So this launcher does nothing but import the built server — the import's
 * side effect starts listening. It deliberately does NOT call listen() itself:
 * doing so would bind the same port twice and crash with EADDRINUSE.
 *
 * Hostinger settings for this file:
 *   Entry file:       hostinger-entry.mjs
 *   Output directory: dist/website-320grit-angular/browser
 *   Env (required):   NG_ALLOWED_HOSTS=<your domain, e.g. staging.320grit.com>
 */
await import('./dist/website-320grit-angular/server/server.mjs');
