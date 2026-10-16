// Globo terráqueo en líneas para el hero: continentes en puntos, retícula,
// rotación lenta y conexiones desde Guatemala con pulsaciones.
// Canvas 2D sin librerías. Se pausa fuera de pantalla y respeta
// prefers-reduced-motion (dibuja un solo cuadro centrado en Guatemala).
(function () {
  var canvas = document.querySelector("[data-globe]");
  if (!canvas || !canvas.getContext) return;

  // Tierra (Natural Earth 110m, dominio público) en filas de puntos:
  // [latitud, puntos por vuelta, inicio, cantidad, inicio, cantidad...]
  var LAND = [[-54.2,117,35,2],[-52.4,122,36,1],[-50.6,127,37,2],[-48.8,132,38,3],[-47.0,136,40,3],[-45.2,141,41,3,136,1],[-43.4,145,43,3,131,1,141,1],[-41.6,150,44,4,135,2,147,1],[-39.8,154,46,4,152,1],[-38.0,158,47,7,141,3,156,1],[-36.2,161,48,7,143,5,158,1],[-34.4,165,49,9,91,1,135,2,144,8],[-32.6,168,51,9,92,5,138,4,147,8],[-30.8,172,52,10,94,6,141,18],[-29.0,175,53,11,96,7,143,19],[-27.2,178,54,11,97,8,145,20],[-25.4,181,55,11,98,9,113,1,148,19],[-23.6,183,56,13,99,11,114,2,149,19],[-21.8,186,57,15,100,11,115,3,152,18],[-20.0,188,57,16,101,11,117,2,156,15],[-18.2,190,58,16,101,13,118,3,160,12],[-16.4,192,57,18,102,15,120,3,162,7,171,3],[-14.6,194,56,20,104,15,123,1,165,1,167,3,173,2],[-12.8,195,56,21,105,14,168,4,174,1],[-11.0,196,56,22,105,15,175,1],[-9.2,197,55,24,106,14,166,1,176,1,179,1],[-7.4,198,55,25,106,15,158,3,175,5],[-5.6,199,55,25,106,15,157,1,176,4,182,1],[-3.8,200,55,24,106,16,157,2,164,1,166,2,174,6],[-2.0,200,55,20,105,18,156,2,161,4,166,2,173,2,176,1],[-0.2,200,55,18,105,19,155,3,161,4],[1.6,200,56,16,105,20,155,3,161,5],[3.4,200,57,15,105,21,154,1,156,1,163,2],[5.2,199,57,13,94,5,102,24,152,1,155,2,163,2],[7.0,199,57,10,93,34,144,1,168,1],[8.8,198,53,2,57,9,92,35,141,1,143,1,153,1],[10.6,197,52,1,57,4,63,1,90,36,140,2,152,1,155,2],[12.4,195,50,2,88,33,138,3,151,1,153,4],[14.2,194,48,4,88,31,120,3,137,3,150,6,162,1],[16.0,192,44,1,46,3,87,30,119,5,135,4,146,1,148,6,160,1],[17.8,190,41,7,86,29,117,7,134,5,145,6],[19.6,188,39,5,47,1,56,1,85,28,115,9,132,7,143,6,151,1],[21.4,186,11,1,39,4,47,1,52,1,84,28,113,11,129,9,141,8],[23.2,184,38,4,84,26,112,10,127,25,153,1],[25.0,181,34,1,36,5,83,25,109,7,118,1,124,26,151,1],[26.8,179,33,1,35,6,49,2,83,23,107,7,116,1,118,31],[28.6,176,32,9,48,1,83,29,113,35],[30.4,173,32,15,82,63],[32.2,169,30,17,80,12,94,1,101,41],[34.0,166,28,19,80,8,99,40,143,1,145,1],[35.8,162,26,21,81,5,97,38,138,1,142,2],[37.6,158,25,21,75,4,84,2,88,1,91,40,134,2,140,1],[39.4,155,24,21,73,4,81,1,84,1,86,1,89,40,131,1,138,1],[41.2,150,23,22,71,5,81,1,83,4,88,3,92,37,133,1],[43.0,146,23,21,69,5,77,2,80,4,90,36,130,1],[44.8,142,22,24,70,6,77,5,84,1,86,39],[46.6,137,21,23,68,12,81,1,83,38],[48.4,133,21,22,45,2,65,53],[50.2,128,18,22,43,1,64,50],[52.0,123,18,16,35,7,58,1,60,2,63,47,115,1],[53.8,118,15,17,33,7,56,1,58,1,62,43,110,2],[55.6,113,15,15,32,6,55,1,59,1,63,36,105,2],[57.4,108,14,12,31,4,52,1,58,1,60,36,101,2],[59.2,102,5,2,12,12,29,2,32,1,53,3,58,34,94,1,96,1],[61.0,97,4,19,28,2,35,2,50,3,54,37,93,2],[62.8,91,4,18,24,1,28,1,33,2,47,3,51,40],[64.6,86,1,1,3,1,5,18,24,3,31,2,38,2,46,2,49,2,53,33],[66.4,80,0,2,3,18,24,2,28,4,36,1,43,4,48,32],[68.2,74,0,1,3,10,18,2,22,1,26,5,40,5,46,28],[70.0,68,3,4,9,2,12,5,18,3,24,6,38,2,47,17],[71.8,62,9,4,15,3,21,6,40,1,44,9,55,2],[73.6,56,9,1,11,5,19,6,36,1,41,5],[75.4,50,9,1,12,2,17,5,33,1,37,4,44,1],[77.2,44,7,1,11,1,13,7,34,1]];

  var ACCENT = "35,107,87";
  var SUPPORT = "214,96,50";
  var HOME = { lat: 14.63, lon: -90.51 };
  // Puntos de referencia: Latinoamérica y algunos centros de negocio.
  var MARKERS = [
    { lat: 19.43, lon: -99.13, arc: true },  // Ciudad de México
    { lat: 13.69, lon: -89.22 },             // San Salvador
    { lat: 14.07, lon: -87.19 },             // Tegucigalpa
    { lat: 9.93, lon: -84.08 },              // San José
    { lat: 8.98, lon: -79.52 },              // Panamá
    { lat: 4.71, lon: -74.07, arc: true },   // Bogotá
    { lat: 18.49, lon: -69.93, arc: true },  // Santo Domingo
    { lat: -12.05, lon: -77.04, arc: true }, // Lima
    { lat: 25.76, lon: -80.19, arc: true },  // Miami
    { lat: 40.71, lon: -74.0, arc: true },   // Nueva York
    { lat: -23.55, lon: -46.63, arc: true }, // São Paulo
    { lat: -34.6, lon: -58.38, arc: true },  // Buenos Aires
    { lat: -33.45, lon: -70.67 },            // Santiago
    { lat: 40.42, lon: -3.7, arc: true },    // Madrid
    { lat: 51.51, lon: -0.13 },              // Londres
    { lat: 35.68, lon: 139.69 },             // Tokio
    { lat: 1.35, lon: 103.82 },              // Singapur
    { lat: -33.87, lon: 151.21 }             // Sídney
  ];

  var RAD = Math.PI / 180;
  var TILT = 16 * RAD;           // inclinación: el centro del disco queda a 16° N
  var SPEED = 4 * RAD;           // grados por segundo (una vuelta cada 90 s)
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function toVec(lat, lon) {
    var la = lat * RAD, lo = lon * RAD;
    return [Math.cos(la) * Math.cos(lo), Math.cos(la) * Math.sin(lo), Math.sin(la)];
  }

  var dots = [];
  LAND.forEach(function (row) {
    for (var i = 2; i < row.length; i += 2) {
      for (var k = row[i]; k < row[i] + row[i + 1]; k++) {
        dots.push(toVec(row[0], -180 + (k + 0.5) * 360 / row[1]));
      }
    }
  });

  var home = toVec(HOME.lat, HOME.lon);
  MARKERS.forEach(function (m, i) {
    m.v = toVec(m.lat, m.lon);
    m.phase = (i * 0.37) % 1;
    if (m.arc) m.path = arcPath(home, m.v);
  });

  // Arco de círculo máximo elevado sobre la superficie.
  function arcPath(a, b) {
    var dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    var omega = Math.acos(Math.min(1, Math.max(-1, dot)));
    var lift = 0.08 + omega * 0.18, pts = [];
    for (var s = 0; s <= 32; s++) {
      var t = s / 32, sa = Math.sin((1 - t) * omega) / Math.sin(omega), sb = Math.sin(t * omega) / Math.sin(omega);
      var h = 1 + lift * Math.sin(Math.PI * t);
      pts.push([(a[0] * sa + b[0] * sb) * h, (a[1] * sa + b[1] * sb) * h, (a[2] * sa + b[2] * sb) * h]);
    }
    return pts;
  }

  // Retícula: meridianos cada 30° y paralelos cada 20°.
  var graticule = [];
  for (var lon = -180; lon < 180; lon += 30) {
    var line = [];
    for (var la = -90; la <= 90; la += 5) line.push(toVec(la, lon));
    graticule.push(line);
  }
  for (var lat = -60; lat <= 60; lat += 20) {
    var ring = [];
    for (var lo = -180; lo <= 180; lo += 5) ring.push(toVec(lat, lo));
    graticule.push(ring);
  }

  var ctx = canvas.getContext("2d");
  var size = 0, dpr = 1, R = 0, cx = 0, cy = 0;
  var rotation = -HOME.lon * RAD - 20 * RAD; // Guatemala entra por la izquierda y cruza el frente
  var cosT = Math.cos(TILT), sinT = Math.sin(TILT);
  var cosR = 1, sinR = 0;

  // Gira alrededor del eje polar y luego inclina. Devuelve [x, y, z]; z > 0 es visible.
  function project(v) {
    var x = v[0] * cosR - v[1] * sinR;
    var y = v[0] * sinR + v[1] * cosR;
    var z = v[2];
    return [y, z * cosT - x * sinT, z * sinT + x * cosT];
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    size = rect.width;
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = size * 0.42; cx = size / 2; cy = size / 2;
  }

  function strokePath(points, alpha, width, minZ) {
    ctx.beginPath();
    var drawing = false;
    for (var i = 0; i < points.length; i++) {
      var p = project(points[i]);
      if (p[2] > minZ) {
        var sx = cx + p[0] * R, sy = cy - p[1] * R;
        if (drawing) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy);
        drawing = true;
      } else {
        drawing = false;
      }
    }
    ctx.strokeStyle = "rgba(" + ACCENT + "," + alpha + ")";
    ctx.lineWidth = width;
    ctx.stroke();
  }

  function draw(time) {
    var t = time / 1000;
    cosR = Math.cos(rotation); sinR = Math.sin(rotation);
    ctx.clearRect(0, 0, size, size);

    // Esfera con luz suave desde arriba a la izquierda.
    var fill = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
    fill.addColorStop(0, "rgba(255,255,255,0.95)");
    fill.addColorStop(1, "rgba(" + ACCENT + ",0.10)");
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = "rgba(" + ACCENT + ",0.35)"; ctx.lineWidth = 1; ctx.stroke();

    graticule.forEach(function (line) { strokePath(line, 0.13, 0.8, 0); });

    // Continentes: los puntos de la cara oculta se ven tenues, como en un globo de cristal.
    for (var i = 0; i < dots.length; i++) {
      var p = project(dots[i]);
      var sx = cx + p[0] * R, sy = cy - p[1] * R;
      if (p[2] > 0) {
        ctx.fillStyle = "rgba(" + ACCENT + "," + (0.35 + p[2] * 0.55).toFixed(3) + ")";
        var r = 0.45 + p[2] * 0.55;
        ctx.fillRect(sx - r, sy - r, r * 2, r * 2);
      } else if (p[2] > -0.6) {
        ctx.fillStyle = "rgba(" + ACCENT + ",0.06)";
        ctx.fillRect(sx - 0.5, sy - 0.5, 1, 1);
      }
    }

    // Arcos desde Guatemala con un destello que viaja por cada uno.
    MARKERS.forEach(function (m) {
      if (!m.path) return;
      strokePath(m.path, 0.28, 1, 0.02);
      var head = ((t * 0.35 + m.phase) % 1) * (m.path.length - 1);
      var seg = m.path.slice(Math.max(0, Math.floor(head) - 5), Math.floor(head) + 1);
      if (seg.length > 1) {
        ctx.save();
        ctx.beginPath();
        var on = false;
        seg.forEach(function (v) {
          var q = project(v);
          if (q[2] > 0.02) {
            var x = cx + q[0] * R, y = cy - q[1] * R;
            if (on) ctx.lineTo(x, y); else ctx.moveTo(x, y);
            on = true;
          } else on = false;
        });
        ctx.strokeStyle = "rgba(" + SUPPORT + ",0.9)";
        ctx.lineWidth = 1.8; ctx.lineCap = "round";
        ctx.stroke();
        ctx.restore();
      }
    });

    // Puntos con pulsación; Guatemala es el principal.
    MARKERS.concat([{ v: home, phase: 0, main: true }]).forEach(function (m) {
      var p = project(m.v);
      if (p[2] <= 0.05) return;
      var sx = cx + p[0] * R, sy = cy - p[1] * R;
      var color = m.main ? SUPPORT : ACCENT;
      var pulse = (t * (m.main ? 0.7 : 0.5) + m.phase) % 1;
      var depth = 0.4 + p[2] * 0.6;
      ctx.beginPath();
      ctx.arc(sx, sy, (m.main ? 5 : 3) + pulse * (m.main ? 16 : 10), 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(" + color + "," + ((1 - pulse) * 0.55 * depth).toFixed(3) + ")";
      ctx.lineWidth = 1.2; ctx.stroke();
      var breathe = 1 + Math.sin((t + m.phase * 4) * 2.4) * 0.18;
      ctx.beginPath();
      ctx.arc(sx, sy, (m.main ? 4 : 2.3) * breathe, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + color + "," + depth.toFixed(3) + ")";
      ctx.fill();
      if (m.main) {
        ctx.beginPath(); ctx.arc(sx, sy, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; ctx.fill();
      }
    });
  }

  var running = false, visible = true, last = 0, dragging = false, dragX = 0, velocity = SPEED;

  function frame(now) {
    if (!running) return;
    var dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    if (!dragging) {
      velocity += (SPEED - velocity) * Math.min(dt * 1.5, 1); // vuelve a su ritmo tras arrastrar
      rotation += velocity * dt;
    }
    draw(now);
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduceMotion || !visible || document.hidden) return;
    running = true; last = 0;
    requestAnimationFrame(frame);
  }

  function stop() { running = false; }

  resize();
  draw(0);

  window.addEventListener("resize", function () { resize(); if (!running) draw(0); });
  document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }).observe(canvas);
  }

  // Arrastrar para girar el globo.
  canvas.addEventListener("pointerdown", function (e) {
    dragging = true; dragX = e.clientX; canvas.setPointerCapture(e.pointerId);
    canvas.classList.add("is-dragging");
  });
  canvas.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var delta = (e.clientX - dragX) / R;
    rotation += delta; velocity = delta * 60; dragX = e.clientX;
    if (!running) draw(performance.now());
  });
  function endDrag() { dragging = false; canvas.classList.remove("is-dragging"); }
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);

  start();
})();
