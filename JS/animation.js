// ============================================================
// animation.js — Animaciones con anime.js
//
// Depende de: anime.js (debe cargarse antes en el HTML)
//
// Contiene:
//   1. Animación de rebote en el ícono de descarga de CV
//   2. Resaltado aleatorio de chips de habilidades blandas
// ============================================================

// --- Rebote en el ícono del botón "Descargar CV" ---
// Se usa event delegation en lugar de agregar listeners a cada botón,
// lo que es más eficiente si hubiera múltiples botones .boton-boing
document.addEventListener('mouseenter', (e) => {
  if (e.target.matches && e.target.matches('.boton-boing')) {
    anime({
      targets: '#boing',
      translateY: [
        { value: -50, duration: 300 },
        { value: 0,   duration: 600 }
      ],
      easing: 'easeOutElastic(1, .8)',
    });
  }
}, true); // useCapture: true para que funcione con mouseenter via delegation

// --- Resaltado aleatorio de habilidades blandas ---
// Cada 2 segundos se elige un chip al azar y se aplica
// una animación de brillo + escala para llamar la atención
const elementos = document.querySelectorAll('.Habilidades_blandas');

function resaltarElemento() {
  const randomIndex = Math.floor(Math.random() * elementos.length);
  const elemento    = elementos[randomIndex];

  anime({
    targets: elemento,
    boxShadow: [
      '0 0 0px rgba(255, 255, 255, 0)',
      '0 0 20px rgba(255, 255, 0, 0.8)',
      '0 0 0px rgba(255, 255, 255, 0)'
    ],
    scale: [
      { value: 1.1, duration: 200 },
      { value: 1.0, duration: 200 }
    ],
    duration: 1000,
    easing: 'easeInOutQuad'
  });
}

setInterval(resaltarElemento, 2000);