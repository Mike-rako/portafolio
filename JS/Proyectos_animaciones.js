// ============================================================
// Proyectos_animaciones.js
// Filtros de categoría + animaciones de entrada (IntersectionObserver + Anime.js)
// para la sección de proyectos nueva.
//
// Depende de anime.js (debe cargarse antes en el HTML).
// ============================================================

// ---- Filtros de categoría ----
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');

    const filtro = btn.dataset.filtro;

    document.querySelectorAll('.proyecto-card').forEach(card => {
      if (filtro === 'todos') {
        card.classList.remove('oculta');
      } else {
        const cats = card.dataset.categoria || '';
        card.classList.toggle('oculta', !cats.includes(filtro));
      }
    });

    // Re-animar las tarjetas visibles tras el filtrado
    const visibles = document.querySelectorAll('.proyecto-card:not(.oculta)');
    anime({
      targets: visibles,
      opacity:    [0, 1],
      translateY: [16, 0],
      delay:    anime.stagger(70),
      duration: 420,
      easing:   'easeOutCubic'
    });
  });
});

// ---- Animación de entrada: tarjetas ----
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Limpiar el delay una vez terminada la transición para que
      // el filtrado posterior no herede el stagger original
      entry.target.addEventListener('transitionend', () => {
        entry.target.style.transitionDelay = '';
      }, { once: true });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.proyecto-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
  cardObserver.observe(card);
});

// ---- Animación de entrada: encabezado de sección ----
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: '.proyectos-eyebrow',
        opacity:    [0, 1],
        translateX: [-20, 0],
        duration:   650,
        easing:     'easeOutCubic'
      });
      anime({
        targets: '.proyectos-contador',
        opacity:    [0, 1],
        translateX: [30, 0],
        duration:   750,
        delay:      130,
        easing:     'easeOutCubic'
      });
      anime({
        targets: '.filtro-btn',
        opacity:    [0, 1],
        translateY: [12, 0],
        delay:    anime.stagger(55, { start: 280 }),
        duration: 450,
        easing:   'easeOutCubic'
      });
      headerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const seccion = document.getElementById('seccion-proyectos-nueva');
if (seccion) headerObserver.observe(seccion);