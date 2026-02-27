// ============================================================
// functions.js — Utilidades generales de la página
//
// Contiene:
//   1. Header fijo al hacer scroll
//   2. Scroll al tope al cargar la página
//   3. Toggle del menú hamburguesa (móvil)
// ============================================================

// Optimización de scroll con requestAnimationFrame para evitar
// múltiples ejecuciones por frame (patrón "ticking")
let isTicking = false;

window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector('header');
      // La clase .fijo activa position: fixed y el backdrop-filter en header.css
      header.classList.toggle('fijo', window.scrollY > 50);
      isTicking = false;
    });
    isTicking = true;
  }
});

// Forzar scroll al inicio al recargar para evitar que el navegador
// recuerde la posición anterior
window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// --- Menú hamburguesa (visible solo en móvil vía header.css) ---
const menuBtn = document.getElementById('menu-btn');
const menu    = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Cerrar el menú al hacer click en cualquier enlace dentro de él
menu.addEventListener('click', () => {
  menu.classList.remove('show');
});