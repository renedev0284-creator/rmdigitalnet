document.addEventListener("DOMContentLoaded", function () {
  // ---------------- Menú móvil ----------------
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("main-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
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

  // ---------------- Scroll suave a anclas ----------------
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    var url = new URL(link.href, window.location.href);
    var isSamePage = url.pathname === window.location.pathname;

    if (isSamePage && url.hash) {
      link.addEventListener("click", function (e) {
        var target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });

  // ---------------- Animación al hacer scroll ----------------
  var revealTargets = document.querySelectorAll(".card, .cta, .post-preview");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }
});
