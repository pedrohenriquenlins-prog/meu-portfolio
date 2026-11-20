// Menu responsivo para celulares
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", menuIsOpen);
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.setAttribute("aria-label", menuIsOpen ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu depois que uma seção é selecionada
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Atualiza automaticamente o ano do rodapé
document.querySelector("#year").textContent = new Date().getFullYear();

// Mostra os elementos quando entram na área visível da tela
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  // Alternativa para navegadores antigos
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Destaca no menu a seção que está sendo visualizada
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));
