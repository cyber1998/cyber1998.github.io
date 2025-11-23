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
    serviceBaseUrl: "https://api-bot.writesonic.com/v1/botsonic/generate",
    // TODO: Move this to environment variable or server-side config
    token: window.BOTSONIC_TOKEN
  };

  // Verify token is available and valid
  if (!config.token || typeof config.token !== 'string' || config.token.trim() === '') {
    console.error('Botsonic token not configured. Please set window.BOTSONIC_TOKEN or update config.js');
    return;
  }

  // Validate serviceBaseUrl
  try {
    new URL(config.serviceBaseUrl);
  } catch (e) {
    console.error('Invalid serviceBaseUrl:', config.serviceBaseUrl);
    return;
  }

  // Initialize Botsonic widget
  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");
  Botsonic("init", {
    serviceBaseUrl: "https://api-bot.writesonic.com",
    token: "3255c3ee-fb9a-429c-93b7-c474ef0a82b1",
  });
  
  // Wait for Botsonic script to load, then initialize
  let initAttempts = 0;
  const maxAttempts = 50;
  
  function initBotsonic() {
    if (typeof window.Botsonic === 'function') {
      try {
        window.Botsonic("init", {
          serviceBaseUrl: config.serviceBaseUrl,
          token: config.token
        });
        console.log('Botsonic initialized successfully with token:', config.token.substring(0, 8) + '...');
      } catch (error) {
        console.error('Error initializing Botsonic:', error);
      }
    } else if (initAttempts < maxAttempts) {
      initAttempts++;
      setTimeout(initBotsonic, 100);
    } else {
      console.error('Failed to initialize Botsonic after multiple attempts');
    }
  }
  
  // Start initialization attempts
  initBotsonic();
})();
