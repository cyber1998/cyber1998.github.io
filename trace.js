// Hero visual: a live request trace (distributed-tracing waterfall).
// One request fans out through auth, cache, database, vector search and an
// LLM rerank. Spans draw in order, then the trace replays with new timings.
(function () {
  var root = document.getElementById('trace');
  if (!root) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // start / end in ms at baseline; depth sets indentation; kind picks the bar style
  var SPANS = [
    { name: 'gateway',            start: 0,   end: 142, depth: 0, kind: 'parent' },
    { name: 'auth.verify',        start: 2,   end: 9,   depth: 1 },
    { name: 'api.recommend',      start: 10,  end: 137, depth: 1, kind: 'parent' },
    { name: 'redis.get',          start: 12,  end: 15,  depth: 2, note: 'miss' },
    { name: 'postgres.query',     start: 16,  end: 47,  depth: 2 },
    { name: 'pgvector.search',    start: 48,  end: 70,  depth: 2 },
    { name: 'llm.rerank',         start: 71,  end: 128, depth: 2, kind: 'ai' },
    { name: 'redis.set',          start: 129, end: 132, depth: 2 },
    { name: 'serialize',          start: 133, end: 137, depth: 2 }
  ];
  var SCALE = 160; // ms shown across the track

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ---- Build DOM ----
  var head = el('div', 'trace-head');
  var req = el('div', 'trace-req');
  req.appendChild(el('span', 'trace-method', 'POST'));
  req.appendChild(el('span', 'trace-path', '/v1/recommendations'));
  var status = el('div', 'trace-status');
  var code = el('span', 'trace-code', '200');
  var total = el('span', 'trace-total', '0 ms');
  status.appendChild(code);
  status.appendChild(total);
  head.appendChild(req);
  head.appendChild(status);

  var axis = el('div', 'trace-row trace-axis');
  axis.appendChild(el('span', 'trace-name', 'span'));
  var axisTrack = el('div', 'trace-track');
  [0, 40, 80, 120, 160].forEach(function (t) {
    var tick = el('span', 'trace-tick', t + '');
    tick.style.left = (t / SCALE * 100) + '%';
    axisTrack.appendChild(tick);
  });
  axis.appendChild(axisTrack);
  axis.appendChild(el('span', 'trace-dur', 'ms'));

  var body = el('div', 'trace-body');
  var cursor = el('div', 'trace-cursor');
  var rows = SPANS.map(function (s) {
    var row = el('div', 'trace-row');
    var name = el('span', 'trace-name', s.name);
    name.style.paddingLeft = (s.depth * 12) + 'px';
    if (s.note) name.appendChild(el('em', 'trace-note', s.note));
    var track = el('div', 'trace-track');
    var bar = el('span', 'trace-bar' + (s.kind ? ' is-' + s.kind : ''));
    track.appendChild(bar);
    var dur = el('span', 'trace-dur', '');
    row.appendChild(name);
    row.appendChild(track);
    row.appendChild(dur);
    body.appendChild(row);
    return { row: row, bar: bar, dur: dur };
  });
  body.appendChild(cursor);

  var foot = el('div', 'trace-foot');
  var traceId = el('span', 'trace-id', '');
  var meta = el('span', 'trace-meta', SPANS.length + ' spans · cache miss');
  foot.appendChild(traceId);
  foot.appendChild(meta);

  root.appendChild(head);
  root.appendChild(axis);
  root.appendChild(body);
  root.appendChild(foot);

  // Position along the track column (name column + 12px gap before it, 12px + 30px after)
  function trackPos(p) {
    return 'calc(var(--name-w) + 12px + (100% - var(--name-w) - 54px) * ' + p + ')';
  }

  function hex(n) {
    var s = '';
    for (var i = 0; i < n; i++) s += Math.floor(Math.random() * 16).toString(16);
    return s;
  }

  // ---- Render one trace ----
  function timings() {
    var f = 0.82 + Math.random() * 0.3;
    return SPANS.map(function (s) {
      return { start: s.start * f, end: s.end * f };
    });
  }

  function place(i, t) {
    var r = rows[i];
    r.bar.style.left = (t.start / SCALE * 100) + '%';
    r.bar.style.width = Math.max((t.end - t.start) / SCALE * 100, 0.8) + '%';
    r.dur.textContent = Math.max(1, Math.round(t.end - t.start)) + '';
    r.row.classList.add('is-on');
  }

  function renderStatic() {
    var t = timings();
    traceId.textContent = 'trace ' + hex(8);
    t.forEach(function (x, i) { place(i, x); });
    total.textContent = Math.round(t[0].end) + ' ms';
    root.classList.add('is-done');
  }

  if (reducedMotion) {
    renderStatic();
    return;
  }

  var onScreen = true;
  var timers = [];
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  function play() {
    timers.forEach(clearTimeout);
    timers = [];
    var t = timings();
    var totalMs = t[0].end;
    var step = 170;

    root.classList.remove('is-done');
    traceId.textContent = 'trace ' + hex(8);
    total.textContent = '0 ms';
    rows.forEach(function (r) {
      r.row.classList.remove('is-on');
      r.bar.style.width = '0';
      r.dur.textContent = '';
    });

    // Cursor sweeps the timeline while spans arrive
    var sweep = step * SPANS.length + 300;
    cursor.style.transition = 'none';
    cursor.style.left = trackPos(0);
    cursor.style.opacity = '1';
    void cursor.offsetWidth;
    cursor.style.transition = 'left ' + sweep + 'ms linear, opacity 0.4s ease';
    cursor.style.left = trackPos(totalMs / SCALE);

    // Spans appear in start order
    var order = SPANS.map(function (_, i) { return i; })
      .sort(function (a, b) { return t[a].start - t[b].start; });
    order.forEach(function (i, k) {
      later(function () {
        place(i, t[i]);
        total.textContent = Math.round(Math.min(totalMs, t[i].end)) + ' ms';
      }, 200 + k * step);
    });

    later(function () {
      total.textContent = Math.round(totalMs) + ' ms';
      cursor.style.opacity = '0';
      root.classList.add('is-done');
      root.classList.add('is-glitching');
      later(function () { root.classList.remove('is-glitching'); }, 450);
    }, 200 + sweep);

    later(function () {
      if (onScreen && !document.hidden) play();
      else waiting = true;
    }, 200 + sweep + 5200);
  }

  var waiting = false;
  function resume() {
    if (waiting && onScreen && !document.hidden) {
      waiting = false;
      play();
    }
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      onScreen = e[0].isIntersecting;
      resume();
    }).observe(root);
  }
  document.addEventListener('visibilitychange', resume);

  play();
})();
