document.addEventListener("DOMContentLoaded", function () {
  // ---------------- Menú móvil ----------------
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("main-menu");

  if (toggle && menu) {
    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    }

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
  }

  // ---------------- Acordeón de FAQs ----------------
  // La animación vive en CSS (.faq-item.is-open); aquí solo se cambia el estado.
  var faqItems = document.querySelectorAll(".faq-item");

  function setFaqOpen(item, open) {
    item.classList.toggle("is-open", open);
    var button = item.querySelector(".faq-question");
    if (button) button.setAttribute("aria-expanded", open ? "true" : "false");
  }

  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", function () {
      var willOpen = !item.classList.contains("is-open");
      // Cierra los demás para mantener el acordeón ordenado
      faqItems.forEach(function (other) { setFaqOpen(other, false); });
      setFaqOpen(item, willOpen);
    });
  });

  // ---------------- Sección activa en la navegación ----------------
  // Solo cuentan los enlaces de esta misma página: "/" (inicio) y "/#seccion".
  // Los que van a otra página, como /blog/, no deben marcarse al hacer scroll.
  var navLinks = Array.from(document.querySelectorAll(".menu a:not(.menu-contact)")).filter(function (link) {
    return new URL(link.href, window.location.href).pathname === window.location.pathname;
  });
  var sections = navLinks
    .map(function (link) {
      var hash = new URL(link.href, window.location.href).hash;
      return hash ? document.querySelector(hash) : document.getElementById("inicio");
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        navLinks.forEach(function (link) {
          var hash = new URL(link.href, window.location.href).hash;
          var isCurrent = hash ? hash === "#" + entry.target.id : entry.target.id === "inicio";
          link.classList.toggle("active", isCurrent);
        });
      });
    }, { rootMargin: "-25% 0px -60%", threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  // ---------------- Aparicion progresiva ----------------
  var revealItems = document.querySelectorAll("[data-reveal]");

  if (revealItems.length && document.documentElement.classList.contains("motion-ready")) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

      revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  // Tarjetas escalonadas: cada hijo recibe su índice; al terminar su entrada
  // se marca "is-settled" para que el hover no herede el retraso.
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, index) {
      child.style.setProperty("--i", index);
      child.addEventListener("transitionend", function settle(event) {
        if (event.propertyName !== "opacity") return;
        child.classList.add("is-settled");
        child.removeEventListener("transitionend", settle);
      });
    });
  });

  // ---------------- Menú con sombra y CTA fijo en móvil ----------------
  var topnav = document.querySelector(".topnav");
  var mobileCta = document.querySelector(".mobile-cta");
  var hero = document.querySelector(".hero, .project-hero");
  var footer = document.querySelector(".footer");
  var scrollTicking = false;

  function updateOnScroll() {
    scrollTicking = false;
    var y = window.scrollY;
    if (topnav) topnav.classList.toggle("is-scrolled", y > 8);

    if (mobileCta) {
      var pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : y > 480;
      var nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      var bannerOpen = cookieBanner && !cookieBanner.hidden;
      mobileCta.classList.toggle("is-visible", pastHero && !nearFooter && !bannerOpen);
    }
  }

  window.addEventListener("scroll", function () {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateOnScroll);
  }, { passive: true });

  // ---------------- Preferencias de cookies ----------------
  var cookieBanner = document.getElementById("cookie-banner");
  var cookieAccept = document.getElementById("cookie-accept");
  var cookieNecessary = document.getElementById("cookie-necessary");
  var cookieSettings = document.querySelectorAll("[data-cookie-settings]");
  var consentKey = "rmdigital_cookie_consent";
  // v2: el banner ahora informa de Google Analytics; las decisiones tomadas
  // con el texto anterior ("sin analítica") se vuelven a preguntar.
  var consentVersion = 2;
  var consentLifetime = 180 * 24 * 60 * 60 * 1000;

  function readConsent() {
    try {
      var stored = JSON.parse(localStorage.getItem(consentKey));
      if (!stored || stored.version !== consentVersion || stored.expiresAt < Date.now()) return null;
      return stored;
    } catch (error) {
      return null;
    }
  }

  // ---------------- Google Analytics 4 (solo si hay consentimiento) ----------------
  function loadAnalytics() {
    if (!window.RM_GA_ID) return;
    window["ga-disable-" + window.RM_GA_ID] = false;
    if (window.__rmGaLoaded) return;
    window.__rmGaLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", window.RM_GA_ID, { anonymize_ip: true });

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + window.RM_GA_ID;
    document.head.appendChild(script);
  }

  // Si alguien retira el consentimiento, se detiene el envío de datos en esta
  // misma visita (opt-out oficial de gtag.js); en las siguientes ya no se carga.
  function disableAnalytics() {
    if (window.RM_GA_ID) window["ga-disable-" + window.RM_GA_ID] = true;
  }

  // ---------------- Clics de contacto como conversiones ----------------
  // Se envían solo si GA ya está cargado (es decir, hubo consentimiento).
  // En GA4 conviene marcar el evento "contact" como evento clave.
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link || typeof window.gtag !== "function") return;

    var href = link.getAttribute("href");
    var method = null;
    if (href.indexOf("https://wa.me/") === 0) method = "whatsapp";
    else if (href.indexOf("mailto:") === 0) method = "email";
    else if (href.indexOf("tel:") === 0) method = "phone";
    if (!method) return;

    var section = link.closest("section[id], aside, header, footer");
    window.gtag("event", "contact", {
      method: method,
      cta_location: link.classList.contains("mobile-cta") ? "mobile_sticky" : section ? (section.id || section.tagName.toLowerCase()) : "page",
      cta_text: link.textContent.replace(/\s+/g, " ").trim().slice(0, 80)
    });
  });

  function showCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.hidden = false;
    requestAnimationFrame(function () { cookieBanner.classList.add("is-visible"); });
    updateOnScroll();
  }

  function hideCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove("is-visible");
    window.setTimeout(function () { cookieBanner.hidden = true; updateOnScroll(); }, 220);
  }

  function saveConsent(choice) {
    try {
      localStorage.setItem(consentKey, JSON.stringify({
        version: consentVersion,
        choice: choice,
        savedAt: Date.now(),
        expiresAt: Date.now() + consentLifetime
      }));
    } catch (error) {
      // El banner puede cerrarse aunque el navegador bloquee localStorage.
    }
    if (choice === "accepted") loadAnalytics();
    else disableAnalytics();
    hideCookieBanner();
  }

  var existingConsent = readConsent();
  if (existingConsent && existingConsent.choice === "accepted") loadAnalytics();
  if (cookieBanner && !existingConsent) showCookieBanner();
  if (cookieAccept) cookieAccept.addEventListener("click", function () { saveConsent("accepted"); });
  if (cookieNecessary) cookieNecessary.addEventListener("click", function () { saveConsent("necessary"); });

  updateOnScroll();

  cookieSettings.forEach(function (button) {
    button.addEventListener("click", function () {
      showCookieBanner();
      if (cookieNecessary) cookieNecessary.focus();
    });
  });

});
