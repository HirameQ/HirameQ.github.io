// Stub window.gtag and window.dataLayer early on every page.
//
// Why: @docusaurus/plugin-google-gtag attaches a router listener that calls
// window.gtag(...) on every navigation. In dev mode (and briefly in prod
// before gtag.js loads) window.gtag is undefined, so the listener crashes
// with "window.gtag is not a function". This stub installs a no-op that the
// real gtag.js overrides once it loads.

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}
