document.addEventListener('mouseenter', (e) => {
  if (e.target.matches && e.target.matches('.boton-boing')) {
    anime({
      targets: '#boing',
      translateY: [
        { value: -50, duration: 300 },
        { value: 0, duration: 600 }
      ],
      easing: 'easeOutElastic(1, .8)',
    });
  }
}, true);

const elementos = document.querySelectorAll('.Habilidades_blandas');

function resaltarElemento() {
  const randomIndex = Math.floor(Math.random() * elementos.length);
  const elemento = elementos[randomIndex];

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

// Ejecutar cada 2 segundos
setInterval(resaltarElemento, 2000);
