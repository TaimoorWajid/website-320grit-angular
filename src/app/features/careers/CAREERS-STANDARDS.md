# Careers — Design & Content Standards

For the page agents building the careers rebuild. Follow these on every careers page.

## Layout & styling

- **Hero:** content at 10% left padding (6% ≤768px) — no wrapping `*-container` with
  `max-width`/`padding-inline` on the hero inner; see service-page heroes for the pattern.
- **Eyebrows:** standard orange `grit-eyebrow` (12px/600, letter-spacing 0.25em, uppercase),
  **numbered** following section order (01, 02, 03 …), like the services and industries pages.
- **Buttons:** `.btn-explore` only, natural width (never hardcode widths), single line
  (`white-space: nowrap` is set globally).
- **Color ratio 80/20 purple-orange:** purple `#792CD5` is the dominant accent
  (icons, title accents, numbers, borders, hover glows). Orange `#FF5D0E` ONLY for:
  `grit-eyebrow` labels and CTA buttons on the shared CTA band.
- **Sections:** alternate backgrounds `#000000` / `#070707`; add
  `border-top: 1px solid rgba(255,255,255,0.08)` between sections so each reads as
  clearly ended. Sections below the hero may use the centered container pattern
  (the 10% rule applies to heroes).
- **CTA:** shared `app-cta-band` (mesh variant, the default). Titles max 2 lines via `<br>`;
  pass an `eyebrow` input continuing the page's section numbering.
- **Shared pieces:** `_careers.scss` for shared careers styles; reuse existing shared
  components (`job-card`, `save-job-button`, `breadcrumb`, `file-upload`, `share-buttons`).

## Voice & content

- **320 Grit voice:** construction-industry, California-based, professional. SEO-friendly,
  expert copy; no placeholder/lorem text.
- **NO Howell branding or copy anywhere** — structure and engineering patterns may be
  inspired by Howell, but all text, logos, and images are 320 Grit only.
- **Only 2 jobs exist:** `superintendent` and `project-engineer` in
  `shared/jobs.data.ts`. Do not invent jobs. Unknown slugs → proper 404 (never a
  silent fallback to another job).
- **Facts:** company founded 2026 — no pre-2026 milestones, no invented stats
  (no fake project counts, years of experience, revenue figures).
- **Images:** no AI people faces — silhouettes/back views only. Imagery should look
  like a real construction company (bright/daylight where appropriate).

## Forms

- Post as **FormData** to `APP_CONFIG.formEndpoint` when set (see
  `features/careers/apply/apply-page.component.ts` `submit()` for the pattern —
  file inputs included via `payload.set()`).
- When `formEndpoint` is empty: show the honest "backend not connected" notice
  naming `info@320grit.com` — **never fake a success message**.

## Route map (nested under `/careers`)

`/careers` (landing) · `/careers/jobs` · `/careers/saved` ·
`/careers/introduce-yourself` · `/careers/our-culture` · `/careers/benefits` ·
`/careers/professional-growth` · `/careers/internships` ·
`/careers/application/success` · `/careers/:slug/apply` · `/careers/:slug` (last)

Redirects: `/open-positions` → `/careers/jobs` · `/careers/open-positions` →
`/careers/jobs` · `/careers/thank-you` → `/careers/application/success` ·
`/careers/apply` → `/careers/jobs`
