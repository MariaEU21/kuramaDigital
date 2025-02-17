/*
==========================================================
main.js
----------------------------------------------------------
1. Intersection Observer (fade-in).
2. Menú hamburguesa (open/close).
==========================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1) FADE-IN AL HACER SCROLL
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  const observerOptions = { threshold: 0.1 };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  fadeInSections.forEach(section => observer.observe(section));

  // 2) MENÚ HAMBURGUESA
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // No se incluye JS para el carrusel de promociones,
  // ya que se ha eliminado esa sección.
});
