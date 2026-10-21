/**
 * 320 Grit startup loader.
 *
 * Visible in the initial HTML before JavaScript starts, preventing a flash of
 * page content. Behavior mirrors the reference architecture's loader:
 * - Removed immediately once the initial Angular route is ready to paint AND
 *   the native window load event has completed. No minimum duration,
 *   completion hold, or exit fade. Background video and lazy assets do not
 *   delay dismissal. Percentages describe readiness milestones, not bytes.
 * - Manual skip, bootstrap failure, or an eight-second fallback timeout
 *   releases the page. While active, app-root is inert. Dismissal restores
 *   interaction and focus without changing page dimensions.
 * - The loader does not replay on SPA navigation.
 * - Once dismissed, the loader never shows again for the lifetime of the tab
 *   session (persisted in sessionStorage). This covers tab switches where the
 *   browser discarded the background tab and silently reloads it on return,
 *   as well as manual refreshes: if the page was already loaded in this tab,
 *   the loader is removed before first paint instead of flashing.
 * - No-JavaScript visitors never see the overlay; a failed loader script
 *   removes it via the script tag's onerror handler in index.html.
 */
(() => {
  const FLAG = 'grit:loader-dismissed';
  const wasDismissed = (() => {
    try {
      return sessionStorage.getItem(FLAG) === '1';
    } catch {
      return false; // Storage unavailable (e.g. private mode): fall back to showing the loader.
    }
  })();
  const markDismissed = () => {
    try {
      sessionStorage.setItem(FLAG, '1');
    } catch {
      /* Storage unavailable — loader simply behaves as before. */
    }
  };
  const loader = document.getElementById('site-loader');
  const root = document.querySelector('app-root');
  if (!loader || !root) return;
  if (wasDismissed) {
    // This tab already loaded the page once (tab discard + silent reload on
    // switch-back, or a manual refresh). Never show the loader again: remove
    // it synchronously, before first paint, so it cannot flash.
    markDismissed();
    loader.remove();
    return;
  }
  const track = loader.querySelector('.loader-track');
  const fill = loader.querySelector('.loader-fill');
  const percent = loader.querySelector('.loader-percent');
  const skip = loader.querySelector('.loader-skip');
  const cleanups = [];
  let finished = false;
  let value = 0;
  let appReady = false;
  let windowReady = document.readyState === 'complete';
  let timer;
  const progress = next => {
    if (finished) return;
    value = Math.max(value, Math.min(100, Math.round(next)));
    fill.style.transform = `scaleX(${value / 100})`;
    percent.textContent = `${value}%`;
    track.setAttribute('aria-valuenow', String(value));
  };
  const dismiss = () => {
    if (finished) return;
    finished = true;
    markDismissed();
    clearTimeout(timer);
    cleanups.forEach(cleanup => cleanup());
    root.removeAttribute('inert');
    const hadFocus = loader.contains(document.activeElement);
    loader.remove();
    if (hadFocus) document.getElementById('main-content')?.focus({ preventScroll: true });
  };
  const complete = () => {
    // Dismiss as soon as the app is ready to paint. Do NOT wait for the
    // window load event: it holds for every subresource (below-fold images,
    // fonts), which delays first paint and LCP on slow networks. The app
    // renders its SSR HTML immediately; images and fonts pop in
    // progressively (fonts use display=swap).
    if (!finished && appReady) {
      progress(100);
      dismiss();
    }
  };
  const listen = (target, event, callback) => {
    target.addEventListener(event, callback, { once: true });
    cleanups.push(() => target.removeEventListener(event, callback));
  };
  const onAppReady = () => {
    if (finished || appReady) return;
    appReady = true;
    // Background video and lazy assets must not hold an otherwise ready page.
    progress(95);
    complete();
  };
  // Fail open even when application boot or a media request never completes.
  timer = setTimeout(dismiss, 8000);
  loader.hidden = false;
  root.setAttribute('inert', '');
  skip.addEventListener('click', dismiss, { once: true });
  const preventScroll = event => event.preventDefault();
  loader.addEventListener('wheel', preventScroll, { passive: false });
  cleanups.push(() => loader.removeEventListener('wheel', preventScroll));
  listen(window, 'grit:app-ready', onAppReady);
  listen(window, 'grit:app-error', dismiss);
  listen(window, 'load', () => { windowReady = true; progress(appReady ? value : 20); complete(); });
  progress(windowReady ? 20 : 10);
})();
