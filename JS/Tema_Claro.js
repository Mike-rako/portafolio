// ============================================================
// Tema_Claro.js — Toggle de tema claro / oscuro
//
// Estrategia:
//   El tema oscuro es el default definido en los CSS.
//   El tema claro se aplica sobreescribiendo las variables CSS
//   en :root y aplicando estilos inline donde haga falta.
//   Al volver al oscuro se recarga la página para limpiar
//   todos los estilos inline de una sola vez.
//
// La preferencia se guarda en localStorage para persistir
// entre sesiones.
// ============================================================

function Tema_claro() {
  const root = document.documentElement;

  // Actualizar íconos del header
  document.getElementById("Tema").src   = "media/Tema_claro.png";
  document.getElementById("github").src = "media/github2.png";

  // Sobrescribir variables CSS globales definidas en header.css
  root.style.setProperty('--color-bg-dark',   '#ffffff');
  root.style.setProperty('--color-bg-darker', '#f8f9fa');
  root.style.setProperty('--color-bg-light',  '#e9ecef');
  root.style.setProperty('--color-border',    '#dee2e6');
  root.style.setProperty('--color-text',      '#212529');
  root.style.setProperty('--color-text-white','#212529');

  // Forzar background del body (no controlado por variables)
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color           = '#212529';

  // Recorrer todos los elementos y ajustar colores oscuros a claros
  document.querySelectorAll("*").forEach(elemento => {
    const styles  = window.getComputedStyle(elemento);
    const bgColor = styles.backgroundColor;

    // Convertir fondos oscuros
    if (bgColor === 'rgb(15, 17, 20)' || bgColor === 'rgba(15, 17, 20, 0.95)') {
      elemento.style.backgroundColor = '#ffffff';
    } else if (bgColor === 'rgb(19, 22, 25)') {
      elemento.style.backgroundColor = '#f8f9fa';
    } else if (bgColor === 'rgb(30, 34, 39)') {
      elemento.style.backgroundColor = '#e9ecef';
    } else if (bgColor === 'rgb(39, 44, 51)') {
      elemento.style.backgroundColor = '#dee2e6';
    }

    // Ajustar textos (excepto H1 y H2 que mantienen el color primario)
    if (elemento.tagName !== 'H1' && elemento.tagName !== 'H2') {
      if (styles.color === 'rgb(206, 206, 206)' || styles.color === 'rgb(248, 250, 252)') {
        elemento.style.color = '#212529';
      }
    } else {
      elemento.style.color = '#cc2055';
    }

    // Ajustar bordes
    if (styles.borderColor === 'rgb(39, 44, 51)' || styles.borderTopColor === 'rgb(39, 44, 51)') {
      elemento.style.borderColor = '#dee2e6';
    }

    // Ajustes puntuales por tipo de elemento
    if (elemento.tagName === 'HEADER') {
      elemento.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      elemento.style.borderBottomColor = '#dee2e6';
    }

    if (elemento.tagName === 'MAIN') {
      elemento.style.backgroundColor = '#ffffff';
    }

    if (elemento.id === 'Nombre') {
      elemento.style.color            = '#212529';
      elemento.style.borderRightColor = '#212529';
    }

    // Oscurecer íconos del header y hero para que sean visibles en fondo claro
    // Se excluyen: el toggle de tema, el logo de github del header y la foto de perfil
    if (
      elemento.tagName === "IMG" &&
      elemento.id !== "Tema" &&
      elemento.id !== "github"
    ) {
      if (
        document.querySelector("header")?.contains(elemento) ||
        (document.querySelector("main")?.contains(elemento) && elemento.id !== "foto") ||
        document.querySelector("#CV_Sobre_mi")?.contains(elemento)
      ) {
        elemento.style.filter = "brightness(0)";
      }
    }
  });

  // Suavizar sombras para tema claro
  document.querySelectorAll('.Proyectos, .tarjetas_especializaciones, .BarrasLenguajes').forEach(el => {
    el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  });

  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.background = 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)';
  }

  // Estilos adicionales para modal y menú en tema claro
  const style    = document.createElement('style');
  style.id       = 'tema-claro-styles';
  style.textContent = `
    .tema-claro .modal_Contenedor { background-color: rgba(255, 255, 255, 0.95) !important; }
    .tema-claro .Proyectos.modal  { background-color: #ffffff !important; }
    .tema-claro #menu             { background-color: #f8f9fa !important; }
  `;
  document.head.appendChild(style);

  document.body.classList.add('tema-claro');
  localStorage.setItem('tema', 'claro');
}

function Tema_oscuro() {
  const root = document.documentElement;

  document.getElementById("Tema").src = "media/Tema_oscuro.png";

  // Restaurar variables CSS originales
  root.style.setProperty('--color-bg-dark',   '#0f1114');
  root.style.setProperty('--color-bg-darker', '#131619');
  root.style.setProperty('--color-bg-light',  '#1e2227');
  root.style.setProperty('--color-border',    '#272c33');
  root.style.setProperty('--color-text',      '#cecece');
  root.style.setProperty('--color-text-white','#f8fafc');

  // Limpiar todos los estilos inline que aplicó Tema_claro()
  document.querySelectorAll("*").forEach(elemento => {
    elemento.style.backgroundColor = '';
    elemento.style.color            = '';
    elemento.style.filter           = '';
    elemento.style.boxShadow        = '';
    elemento.style.borderColor      = '';
  });

  // Remover el bloque de estilos extra del tema claro
  const extraStyles = document.getElementById('tema-claro-styles');
  if (extraStyles) extraStyles.remove();

  document.body.classList.remove('tema-claro');
  localStorage.setItem('tema', 'oscuro');

  // Recargar para restaurar completamente el estado inicial
  // (más robusto que intentar revertir cada estilo manualmente)
  location.reload();
}

// --- Event listener del botón de tema ---
document.querySelector("#Tema").addEventListener("click", () => {
  const temaActual = localStorage.getItem('tema') || 'oscuro';
  temaActual === 'oscuro' ? Tema_claro() : Tema_oscuro();
});

// --- Aplicar tema guardado al cargar la página ---
window.addEventListener('DOMContentLoaded', () => {
  const temaGuardado = localStorage.getItem('tema');
  if (temaGuardado === 'claro') Tema_claro();
});