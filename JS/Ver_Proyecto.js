// ============================================================
// Ver_Proyecto.js — Modal de detalle y carrusel de proyectos
//
// v2: Compatible con las tarjetas .proyecto-card nuevas.
// Al hacer click en una tarjeta nueva se construye un modal
// premium desde los datos del div oculto #contenedor_Proyectos.
// El sistema original de .Proyectos se mantiene como fallback.
// ============================================================

// ------------------------------------------------------------
// Mapa de datos: vincula cada .proyecto-card con su índice
// en el div oculto #contenedor_Proyectos (mismo orden visual)
// proyecto-card orden en DOM: P5, P8, P7, P6, P1, P4, P3, P2
// índice en #contenedor_Proyectos (0-based): 4, 7, 6, 5, 0, 3, 2, 1
// ------------------------------------------------------------
const CARD_INDEX_MAP = [3, 6, 5, 4, 0, 2, 1];

// ------------------------------------------------------------
// Helpers para mostrar / ocultar flechas del carrusel
// ------------------------------------------------------------
function agregar_flecha(el) { if (el) el.style.display = "flex"; }
function borrar_flecha(el)  { if (el) el.style.display = "none";  }

// ------------------------------------------------------------
// Navegación del carrusel dentro del modal nuevo
// ------------------------------------------------------------
function siguiente(galeria) {
  const img      = galeria.querySelector("img");
  const imagenes = galeria.dataset.imagenes.split(",").map(s => s.trim()).filter(Boolean);
  if (imagenes.length <= 1) return;
  const index = imagenes.indexOf(img.src.split("/").pop());

  if (index + 1 !== 0)               agregar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  if (index + 2 === imagenes.length) borrar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  if (index !== -2 && index < imagenes.length - 1)
    img.src = "Proyectos_imagenes/" + imagenes[index + 1];
}

function anterior(galeria) {
  const img      = galeria.querySelector("img");
  const imagenes = galeria.dataset.imagenes.split(",").map(s => s.trim()).filter(Boolean);
  if (imagenes.length <= 1) return;
  const index = imagenes.indexOf(img.src.split("/").pop());

  if (index + 2 !== imagenes.length) agregar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  if (index - 1 === 0)               borrar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  if (index !== -1 && index !== 0)
    img.src = "Proyectos_imagenes/" + imagenes[index - 1];
}

// ------------------------------------------------------------
// abrirImagenFullscreen(imgElement)
// ------------------------------------------------------------
function abrirImagenFullscreen(imgElement) {
  const overlay = document.createElement("div");
  overlay.classList.add("imagen-fullscreen");

  const imgClone    = imgElement.cloneNode(true);
  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("cerrar-fullscreen");
  botonCerrar.innerHTML = "&times;";

  overlay.appendChild(botonCerrar);
  overlay.appendChild(imgClone);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  function cerrar() {
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", escHandler);
  }

  botonCerrar.addEventListener("click", e => { e.stopPropagation(); cerrar(); });
  overlay.addEventListener("click", e => { if (e.target === overlay) cerrar(); });
  const escHandler = e => { if (e.key === "Escape") cerrar(); };
  document.addEventListener("keydown", escHandler);
}

// Click en imagen del modal → fullscreen
document.addEventListener("click", e => {
  if (e.target.matches("#contenedor_temporal .galeria img") ||
      e.target.matches("#modal-proyecto-nuevo .mpn-galeria img")) {
    e.stopPropagation();
    abrirImagenFullscreen(e.target);
  }
});

// ------------------------------------------------------------
// abrirModalNuevo(cardIndex)
// Construye un modal premium usando datos del div oculto
// para la tarjeta nueva que fue clickeada.
// cardIndex = índice en CARD_INDEX_MAP
// ------------------------------------------------------------
function abrirModalNuevo(cardIndex) {
  const proyectoIndex = CARD_INDEX_MAP[cardIndex];
  const proyectosOcultos = document.querySelectorAll("#contenedor_Proyectos .Proyectos");
  const source = proyectosOcultos[proyectoIndex];
  if (!source) return;

  // --- Extraer datos del div oculto ---
  const titulo    = source.querySelector("h4")?.textContent || "";
  const descEl    = source.querySelector("p");
  const descripcion = descEl ? descEl.innerHTML : "";
  const galeriaEl = source.querySelector(".galeria");
  const imagenSrc = galeriaEl?.querySelector("img")?.src || "";
  const dataIm    = galeriaEl?.dataset?.imagenes || "";
  const tags      = [...source.querySelectorAll(".Lenguajes_Programacion_Proyectos p")].map(p => p.textContent);
  const linkEl    = source.querySelector(".boton_proyecto");
  const linkHref  = linkEl?.href || "";
  const linkText  = linkEl?.textContent?.trim() || "";

  // Detectar si tiene certificado
  const esProfesional = titulo.toLowerCase().includes("xpertta") ||
    descripcion.toLowerCase().includes("xperta") ||
    descripcion.toLowerCase().includes("xpertta") ||
    descripcion.toLowerCase().includes("práctica profesional") ||
    descripcion.toLowerCase().includes("professional internship");
  const tieneCertificado = descripcion.toLowerCase().includes("certificado") ||
    descripcion.toLowerCase().includes("certificate");

  // --- Construir HTML del modal ---
  const modal = document.createElement("div");
  modal.id = "modal-proyecto-nuevo";
  modal.innerHTML = `
    <div class="mpn-backdrop"></div>
    <div class="mpn-panel" role="dialog" aria-modal="true">

      <button class="mpn-cerrar" aria-label="Cerrar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <div class="mpn-galeria-wrapper">
        <div class="galeria mpn-galeria" data-imagenes="${dataIm}">
          <a href="#" class="boton_anterior_proyecto mpn-flecha mpn-flecha-anterior">&#8249;</a>
          <img src="${imagenSrc}" alt="${titulo}" />
          <a href="#" class="boton_siguiente_proyecto mpn-flecha mpn-flecha-siguiente">&#8250;</a>
        </div>
      </div>

      <div class="mpn-contenido">
        <div class="mpn-header">
          ${esProfesional ? `<span class="mpn-badge mpn-badge-pro">Práctica Profesional</span>` : `<span class="mpn-badge mpn-badge-personal">Proyecto Personal</span>`}
          ${tieneCertificado ? `<span class="mpn-cert"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Certificado</span>` : ""}
        </div>

        <h2 class="mpn-titulo">${titulo}</h2>

        <div class="mpn-desc">${descripcion}</div>

        ${tags.length ? `
        <div class="mpn-tags">
          ${tags.map(t => `<span class="mpn-tag">${t}</span>`).join("")}
        </div>` : ""}

        <div class="mpn-acciones">
          ${linkHref ? `
          <a href="${linkHref}" target="_blank" rel="noopener" class="mpn-btn-codigo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            ${linkText || "Ver código"}
          </a>` : `
          <span class="mpn-confidencial">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Código confidencial
          </span>`}
          <button class="mpn-btn-cerrar-texto">Cerrar</button>
        </div>
      </div>

    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("modal-abierto");
  document.body.style.overflow = "hidden";

  // Animar entrada con anime.js si está disponible
  if (window.anime) {
    anime({
      targets: ".mpn-panel",
      opacity:      [0, 1],
      translateY:   [40, 0],
      duration: 400,
      easing: "easeOutCubic"
    });
  }

  // --- Carrusel ---
  const galeria       = modal.querySelector(".mpn-galeria");
  const btnSiguiente  = modal.querySelector(".mpn-flecha-siguiente");
  const btnAnterior   = modal.querySelector(".mpn-flecha-anterior");
  const imagenes = dataIm.split(",").map(s => s.trim()).filter(Boolean);

  // Ocultar flechas si solo hay 1 imagen o ninguna
  borrar_flecha(btnAnterior);
  if (imagenes.length <= 1) {
    borrar_flecha(btnSiguiente);
  } else {
    agregar_flecha(btnSiguiente);
  }

  btnSiguiente.addEventListener("click", e => { e.preventDefault(); siguiente(galeria); });
  btnAnterior.addEventListener("click",  e => { e.preventDefault(); anterior(galeria);  });

  // --- Cerrar ---
  function cerrarModal() {
    if (window.anime) {
      anime({
        targets: ".mpn-panel",
        opacity:    [1, 0],
        translateY: [0, 30],
        duration: 280,
        easing: "easeInCubic",
        complete: () => {
          modal.remove();
          document.body.classList.remove("modal-abierto");
          document.body.style.overflow = "";
        }
      });
    } else {
      modal.remove();
      document.body.classList.remove("modal-abierto");
      document.body.style.overflow = "";
    }
    document.removeEventListener("keydown", escHandler);
  }

  modal.querySelector(".mpn-cerrar").addEventListener("click", cerrarModal);
  modal.querySelector(".mpn-btn-cerrar-texto").addEventListener("click", cerrarModal);
  modal.querySelector(".mpn-backdrop").addEventListener("click", cerrarModal);
  const escHandler = e => { if (e.key === "Escape") cerrarModal(); };
  document.addEventListener("keydown", escHandler);
}

// ------------------------------------------------------------
// ver(tarjeta) — sistema original para .Proyectos ocultos
// (se mantiene por si se necesita)
// ------------------------------------------------------------
function ver(tarjeta_Proyeccto) {
  document.body.classList.add("modal-abierto");

  const div     = document.createElement("div");
  const tarjeta = tarjeta_Proyeccto.cloneNode(true);
  tarjeta.classList.add("modal");

  const p = tarjeta.querySelector("p.limitado");
  if (p) { p.classList.remove("limitado"); p.classList.add("expandido"); }

  tarjeta.querySelectorAll("[data-ellipsis]").forEach(p => p.removeAttribute("data-ellipsis"));

  div.id = "contenedor_temporal";
  div.append(tarjeta);
  div.classList.add("modal_Contenedor");
  document.body.append(div);

  const galeria        = tarjeta.querySelector(".galeria");
  const boton_siguiente = div.querySelector(".boton_siguiente_proyecto");
  const boton_anterior  = div.querySelector(".boton_anterior_proyecto");
  const botonCerrar     = div.querySelector(".cerrar_proyecto");

  if (galeria.dataset.imagenes.split(",").length !== 1) agregar_flecha(boton_siguiente);
  if (botonCerrar) botonCerrar.style.display = "block";

  boton_siguiente?.addEventListener("click", e => { e.preventDefault(); siguiente(galeria); });
  boton_anterior?.addEventListener("click",  e => { e.preventDefault(); anterior(galeria);  });
  botonCerrar?.addEventListener("click", e => {
    e.preventDefault();
    div.remove();
    document.body.classList.remove("modal-abierto");
    document.body.style.overflow = "";
  });
}

// ------------------------------------------------------------
// Listeners — tarjetas nuevas (.proyecto-card)
// ------------------------------------------------------------
document.querySelectorAll(".proyecto-card").forEach((card, cardIndex) => {
  card.addEventListener("click", e => {
    // No abrir modal si clickean un <a> o <button> dentro de la tarjeta
    if (e.target.closest("a") || e.target.closest("button")) return;
    abrirModalNuevo(cardIndex);
  });
});

// ------------------------------------------------------------
// Listeners — tarjetas originales .Proyectos (si estuvieran visibles)
// ------------------------------------------------------------
document.querySelectorAll(".Proyectos").forEach(proyecto => {
  proyecto.addEventListener("click", e => {
    if (e.target.matches("a")) return;
    ver(e.currentTarget);
  });
});

document.querySelectorAll(".Proyectos p.limitado").forEach(p => {
  if (p.scrollHeight > p.clientHeight) p.dataset.ellipsis = "true";
});


// ============================================================
// CSS del modal inyectado en <head>
// Se usan las variables de color del proyecto para respetar
// la paleta y el tema claro/oscuro automáticamente.
// ============================================================
(function injectModalStyles() {
  const style = document.createElement("style");
  style.id = "mpn-styles";
  style.textContent = `
    /* ---- Overlay ---- */
    #modal-proyecto-nuevo {
      position: fixed;
      inset: 0;
      z-index: 5000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .mpn-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(6px);
      cursor: pointer;
    }

    /* ---- Panel principal ---- */
    .mpn-panel {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow: hidden;
      border-radius: 20px;
      background: var(--color-bg-darker, #131619);
      border: 1px solid var(--color-border, #272c33);
      box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,32,85,0.12);
    }

    /* Línea de acento superior */
    .mpn-panel::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--color-primary, #cc2055), transparent 70%);
      border-radius: 20px 20px 0 0;
      z-index: 2;
    }

    /* ---- Lado izquierdo: galería ---- */
    .mpn-galeria-wrapper {
      position: relative;
      background: #0a0a0f;
      overflow: hidden;
    }

    .mpn-galeria {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mpn-galeria img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
      cursor: zoom-in;
    }

    .mpn-galeria img:hover { transform: scale(1.03); }

    /* Flechas del carrusel */
    .mpn-flecha {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(0,0,0,0.6);
      border: 1px solid rgba(255,255,255,0.15);
      color: #fff;
      font-size: 24px;
      display: none;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      line-height: 1;
      padding-bottom: 2px;
    }

    .mpn-flecha:hover {
      background: var(--color-primary, #cc2055);
      transform: translateY(-50%) scale(1.1);
    }

    .mpn-flecha-anterior { left: 10px; }
    .mpn-flecha-siguiente { right: 10px; }

    /* ---- Lado derecho: contenido ---- */
    .mpn-contenido {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 32px 28px;
      overflow-y: auto;
      max-height: 90vh;
      scrollbar-width: thin;
      scrollbar-color: var(--color-border, #272c33) transparent;
    }

    .mpn-contenido::-webkit-scrollbar { width: 4px; }
    .mpn-contenido::-webkit-scrollbar-thumb { background: var(--color-border, #272c33); border-radius: 4px; }

    /* ---- Header del contenido ---- */
    .mpn-header {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .mpn-badge {
      padding: 4px 12px;
      border-radius: 50px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .mpn-badge-pro {
      background: linear-gradient(135deg, #7c3aed, var(--color-primary, #cc2055));
      color: #fff;
    }

    .mpn-badge-personal {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: var(--color-text, #cecece);
    }

    .mpn-cert {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      color: #4ade80;
      font-weight: 600;
    }

    /* ---- Título ---- */
    .mpn-titulo {
      font-family: 'Syne', monospace, sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--color-text-white, #f8fafc);
      margin: 0;
      line-height: 1.3;
    }

    /* ---- Descripción ---- */
    .mpn-desc {
      font-size: 13.5px;
      line-height: 1.75;
      color: var(--color-text, #cecece);
      opacity: 0.85;
    }

    .mpn-desc strong { color: var(--color-text-white, #f8fafc); font-weight: 600; }

    /* ---- Tags ---- */
    .mpn-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .mpn-tag {
      padding: 4px 12px;
      border-radius: 50px;
      background: rgba(204,32,85,0.1);
      border: 1px solid rgba(204,32,85,0.3);
      color: var(--color-primary, #cc2055);
      font-size: 11.5px;
      font-weight: 500;
    }

    /* ---- Acciones ---- */
    .mpn-acciones {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: auto;
      padding-top: 8px;
      border-top: 1px solid var(--color-border, #272c33);
    }

    .mpn-btn-codigo {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      border-radius: 8px;
      background: var(--color-primary, #cc2055);
      color: #fff;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      border: 2px solid var(--color-primary, #cc2055);
      transition: all 0.25s ease;
      font-family: monospace;
    }

    .mpn-btn-codigo:hover {
      background: transparent;
      color: var(--color-primary, #cc2055);
    }

    .mpn-btn-cerrar-texto {
      padding: 10px 20px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid var(--color-border, #272c33);
      color: var(--color-text, #cecece);
      font-size: 13px;
      cursor: pointer;
      font-family: monospace;
      transition: border-color 0.2s, color 0.2s;
    }

    .mpn-btn-cerrar-texto:hover {
      border-color: var(--color-text, #cecece);
      color: var(--color-text-white, #f8fafc);
    }

    .mpn-confidencial {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--color-text, #cecece);
      opacity: 0.55;
      font-style: italic;
      font-family: monospace;
    }

    /* ---- Botón cerrar (X) ---- */
    .mpn-cerrar {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 10;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--color-border, #272c33);
      background: var(--color-bg-dark, #0f1114);
      color: var(--color-text, #cecece);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .mpn-cerrar:hover {
      background: var(--color-primary, #cc2055);
      border-color: var(--color-primary, #cc2055);
      color: #fff;
      transform: rotate(90deg);
    }

    /* ---- Tema claro ---- */
    .tema-claro .mpn-panel {
      background: #ffffff !important;
      border-color: #dee2e6 !important;
      box-shadow: 0 30px 80px rgba(0,0,0,0.18);
    }

    .tema-claro .mpn-titulo { color: #212529 !important; }
    .tema-claro .mpn-desc   { color: #495057 !important; opacity: 1; }
    .tema-claro .mpn-desc strong { color: #212529 !important; }

    .tema-claro .mpn-badge-personal {
      background: rgba(0,0,0,0.06) !important;
      border-color: rgba(0,0,0,0.15) !important;
      color: #495057 !important;
    }

    .tema-claro .mpn-btn-cerrar-texto {
      border-color: #dee2e6 !important;
      color: #495057 !important;
    }

    .tema-claro .mpn-btn-cerrar-texto:hover {
      color: #212529 !important;
      border-color: #adb5bd !important;
    }

    .tema-claro .mpn-cerrar {
      background: #f8f9fa !important;
      border-color: #dee2e6 !important;
      color: #212529 !important;
    }

    .tema-claro .mpn-cerrar:hover {
      background: #cc2055 !important;
      border-color: #cc2055 !important;
      color: #fff !important;
    }

    .tema-claro .mpn-acciones {
      border-top-color: #dee2e6 !important;
    }

    .tema-claro .mpn-galeria-wrapper { background: #e9ecef !important; }

    /* ---- Responsive ---- */
    @media (max-width: 700px) {
      .mpn-panel {
        grid-template-columns: 1fr;
        max-height: 92vh;
        border-radius: 16px 16px 0 0;
        align-self: flex-end;
        margin-bottom: 0;
      }

      #modal-proyecto-nuevo {
        align-items: flex-end;
        padding: 0;
      }

      .mpn-galeria-wrapper { min-height: 220px; }
      .mpn-contenido { padding: 24px 20px; max-height: 55vh; }
    }

    /* ---- Sección proyectos — Tema claro ---- */
    .tema-claro #seccion-proyectos-nueva {
      background: transparent !important;
    }

    .tema-claro .proyecto-card {
      background: #ffffff !important;
      border-color: #dee2e6 !important;
    }

    .tema-claro .proyecto-card:hover {
      border-color: var(--color-primary, #cc2055) !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.12), 0 0 0 1px rgba(204,32,85,0.2) !important;
    }

    .tema-claro .proyecto-nombre {
      color: #212529 !important;
    }

    .tema-claro .proyecto-card:hover .proyecto-nombre {
      color: var(--color-primary, #cc2055) !important;
    }

    .tema-claro .proyecto-card.destacada:hover .proyecto-nombre {
      color: #7c3aed !important;
    }

    .tema-claro .proyecto-desc {
      color: #495057 !important;
      opacity: 1 !important;
    }

    .tema-claro .proyecto-tag {
      background: rgba(204,32,85,0.08) !important;
      border-color: rgba(204,32,85,0.25) !important;
      color: var(--color-primary, #cc2055) !important;
    }

    .tema-claro .proyecto-card.destacada .proyecto-tag {
      background: rgba(124,58,237,0.08) !important;
      border-color: rgba(124,58,237,0.3) !important;
      color: #7c3aed !important;
    }

    .tema-claro .proyecto-footer {
      border-top-color: #dee2e6 !important;
    }

    .tema-claro .proyecto-ver-codigo {
      color: var(--color-primary, #cc2055) !important;
    }

    .tema-claro .proyecto-confidencial {
      color: #6c757d !important;
    }

    .tema-claro .proyecto-numero {
      color: rgba(0,0,0,0.12) !important;
    }

    .tema-claro .proyectos-eyebrow {
      color: var(--color-primary, #cc2055) !important;
    }

    .tema-claro .proyectos-contador {
      -webkit-text-stroke-color: rgba(204,32,85,0.18) !important;
    }

    .tema-claro .filtro-btn {
      border-color: #dee2e6 !important;
      color: #495057 !important;
    }

    .tema-claro .filtro-btn:hover,
    .tema-claro .filtro-btn.activo {
      background: var(--color-primary, #cc2055) !important;
      border-color: var(--color-primary, #cc2055) !important;
      color: #fff !important;
      box-shadow: 0 0 20px rgba(204,32,85,0.25) !important;
    }

    .tema-claro .btn-ver-github {
      border-color: var(--color-primary, #cc2055) !important;
      color: var(--color-primary, #cc2055) !important;
    }

    .tema-claro .btn-ver-github:hover {
      background: var(--color-primary, #cc2055) !important;
      color: #fff !important;
    }

    .tema-claro .proyecto-cert {
      color: #16a34a !important;
    }

    /* Fondo de imagen en tarjeta oscuro aunque estén en tema claro */
    .tema-claro .proyecto-imagen-wrapper {
      background: #1a1a2e !important;
    }
  `;
  document.head.appendChild(style);
})();