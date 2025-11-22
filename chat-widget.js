/**
 * Botsonic Chat Widget Integration
 * 
 * Configuration:
 * Set the BOTSONIC_TOKEN environment variable or update config.token
 * before deploying to production.
 */

(function() {
  // Configuration - Replace with environment variable in production
  const config = {
    serviceBaseUrl: "https://api-bot.writesonic.com",
    // TODO: Move this to environment variable or server-side config
    token: window.BOTSONIC_TOKEN
  };

  // Verify token is available
  if (!config.token) {
    console.error('Botsonic token not configured. Please set window.BOTSONIC_TOKEN or update config.js');
    return;
  }

  // Initialize Botsonic widget
  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] = w[o] || function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
    js = d.createElement(s);
    fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");

  // Initialize with configuration once script loads
  window.addEventListener('load', function() {
    if (typeof Botsonic === 'function') {
      Botsonic("init", {
        serviceBaseUrl: config.serviceBaseUrl,
        token: config.token
      });
    }
  });
})();
