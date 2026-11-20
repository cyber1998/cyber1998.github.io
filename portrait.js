// Hero portrait: glitches on load, on hover, and every few seconds while visible.
(function () {
  var root = document.getElementById('portrait');
  if (!root) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var onScreen = true;
  var busy = false;

  function glitch() {
    if (busy) return;
    busy = true;
    root.classList.add('is-glitching');
    setTimeout(function () {
      root.classList.remove('is-glitching');
      busy = false;
    }, 450);
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      onScreen = e[0].isIntersecting;
    }).observe(root);
  }

  root.addEventListener('pointerenter', glitch);
  setTimeout(glitch, 900);

  (function loop() {
    setTimeout(function () {
      if (onScreen && !document.hidden) {
        glitch();
        // Sometimes a quick second hit, like a signal dropping out
        if (Math.random() < 0.35) setTimeout(glitch, 520);
      }
      loop();
    }, 4500 + Math.random() * 5000);
  })();
})();
