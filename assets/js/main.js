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
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    if (!button || !answer) return;

    button.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // Cierra los demás para mantener el acordeón ordenado
      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var otherAnswer = other.querySelector(".faq-answer");
        var otherButton = other.querySelector(".faq-question");
        if (otherAnswer) otherAnswer.hidden = true;
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        answer.hidden = false;
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ---------------- Sección activa en la navegación ----------------
  var navLinks = Array.from(document.querySelectorAll(".menu a:not(.menu-contact)"));
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

});
