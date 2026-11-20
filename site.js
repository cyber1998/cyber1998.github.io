// Shared UI: footer year, glitch headings, scroll reveal, count-up stats, subtle card tilt.
(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Glitch: short RGB-split bursts on headings ----
  var glitchEls = Array.prototype.slice.call(document.querySelectorAll('[data-glitch]'));
  glitchEls.forEach(function (el) {
    el.setAttribute('data-text', el.textContent.replace(/s+/g, ' ').trim());
    el.classList.add('glitch');
  });
  function glitch(el) {
    if (!el || el.classList.contains('is-glitching')) return;
    el.classList.add('is-glitching');
    setTimeout(function () { el.classList.remove('is-glitching'); }, 450);
  }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }
  if (!reducedMotion && glitchEls.length) {
    // Intro burst on the first heading block
    var intro = glitchEls.filter(function (el) { return el.classList.contains('line'); });
    (intro.length ? intro : glitchEls.slice(0, 1)).forEach(function (el, i) {
      setTimeout(function () { glitch(el); }, 500 + i * 140);
    });
    // Occasional burst on a visible heading
    (function schedule() {
      setTimeout(function () {
        if (!document.hidden) {
          var visible = glitchEls.filter(inView);
          if (visible.length) glitch(visible[Math.floor(Math.random() * visible.length)]);
        }
        schedule();
      }, 4500 + Math.random() * 5000);
    })();
    if (finePointer) {
      glitchEls.forEach(function (el) {
        el.addEventListener('mouseenter', function () { glitch(el); });
      });
    }
  }

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---- Count-up numbers ----
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseInt(el.dataset.count, 10);
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    el.textContent = '0';
    var obs = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      var start = performance.now();
      (function step(now) {
        var p = Math.min((now - start) / 1000, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(start);
    });
    obs.observe(el);
  });

  // ---- Subtle 3D tilt on cards ----
  if (finePointer && !reducedMotion) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      var strength = parseFloat(card.dataset.tilt) || 4;
      var raf = null;
      var px = 0;
      var py = 0;
      function apply() {
        raf = null;
        var r = card.getBoundingClientRect();
        var x = px / r.width - 0.5;
        var y = py / r.height - 0.5;
        card.style.transform = 'perspective(1000px) rotateX(' + (-y * strength) + 'deg) rotateY(' + (x * strength) + 'deg)';
      }
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        px = e.clientX - r.left;
        py = e.clientY - r.top;
        card.classList.add('is-tilting');
        if (!raf) raf = requestAnimationFrame(apply);
      });
      card.addEventListener('pointerleave', function () {
        if (raf) cancelAnimationFrame(raf);
        raf = null;
        card.classList.remove('is-tilting');
        card.style.transform = '';
      });
    });
  }
})();
