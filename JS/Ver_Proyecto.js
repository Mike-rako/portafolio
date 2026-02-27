// ============================================================
// Ver_Proyecto.js — Modal de detalle y carrusel de proyectos
//
// Flujo:
//   1. Click en una tarjeta .Proyectos → abre un modal
//   2. El modal clona la tarjeta y expande el texto truncado
//   3. Dentro del modal hay un carrusel para navegar imágenes
//   4. Las imágenes del modal se pueden abrir en pantalla completa
// ============================================================

// ------------------------------------------------------------
// Helpers para mostrar / ocultar flechas del carrusel
// ------------------------------------------------------------
function agregar_flecha(anterior_siguiente) {
  anterior_siguiente.style.display = "flex";
}

function borrar_flecha(anterior_siguiente) {
  anterior_siguiente.style.display = "none";
}

// ------------------------------------------------------------
// siguiente(galeria) / anterior(galeria)
// Navegan entre las imágenes listadas en data-imagenes.
// El atributo data-imagenes contiene los nombres de archivo
// separados por comas (sin la ruta base).
// ------------------------------------------------------------
function siguiente(galeria) {
  const img     = galeria.querySelector("img");
  const imagenes = galeria.dataset.imagenes.split(",").map((s) => s.trim());
  const index    = imagenes.indexOf(img.src.split("/").pop());

  if (index + 1 !== 0) {
    agregar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  }
  if (index + 2 === imagenes.length) {
    borrar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  }
  if (index !== -2 && index < imagenes.length) {
    img.src = "Proyectos_imagenes/" + imagenes[index + 1];
  }
}

function anterior(galeria) {
  const img      = galeria.querySelector("img");
  const imagenes = galeria.dataset.imagenes.split(",").map((s) => s.trim());
  const index    = imagenes.indexOf(img.src.split("/").pop());

  if (index + 2 !== imagenes.length) {
    agregar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  }
  if (index - 1 === 0) {
    borrar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  }
  if (index !== -1 && index !== 0) {
    img.src = "Proyectos_imagenes/" + imagenes[index - 1];
  }
}

// ------------------------------------------------------------
// abrirImagenFullscreen(imgElement)
// Muestra la imagen en un overlay de pantalla completa.
// Se cierra con: botón X, click fuera de la imagen, o tecla ESC.
// ------------------------------------------------------------
function abrirImagenFullscreen(imgElement) {
  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.classList.add("imagen-fullscreen");

  const imgClone    = imgElement.cloneNode(true);
  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("cerrar-fullscreen");
  botonCerrar.innerHTML = "&times;";

  fullscreenDiv.appendChild(botonCerrar);
  fullscreenDiv.appendChild(imgClone);
  document.body.appendChild(fullscreenDiv);

  // Bloquear scroll del body mientras el overlay está abierto
  document.body.style.overflow = "hidden";

  function cerrarFullscreen() {
    fullscreenDiv.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", cerrarConEsc);
  }

  botonCerrar.addEventListener("click", (e) => {
    e.stopPropagation();
    cerrarFullscreen();
  });

  // Cerrar al hacer click en el fondo (no en la imagen)
  fullscreenDiv.addEventListener("click", (e) => {
    if (e.target === fullscreenDiv) cerrarFullscreen();
  });

  const cerrarConEsc = (e) => {
    if (e.key === "Escape") cerrarFullscreen();
  };
  document.addEventListener("keydown", cerrarConEsc);
}

// Abrir imagen en fullscreen solo cuando está dentro de un modal activo
document.addEventListener("click", (e) => {
  if (e.target.matches("#contenedor_temporal .galeria img")) {
    e.stopPropagation();
    abrirImagenFullscreen(e.target);
  }
});

// ------------------------------------------------------------
// ver(tarjeta_Proyeccto)
// Crea el modal clonando la tarjeta del proyecto.
// Expande el texto truncado (.limitado → .expandido)
// y configura los controles del carrusel.
// ------------------------------------------------------------
function ver(tarjeta_Proyeccto) {
  document.body.classList.add("modal-abierto");

  const div    = document.createElement("div");
  const tarjeta = tarjeta_Proyeccto.cloneNode(true);
  tarjeta.classList.add("modal");

  // Expandir texto que estaba truncado en la tarjeta
  const p = tarjeta.querySelector("p.limitado");
  if (p) {
    p.classList.remove("limitado");
    p.classList.add("expandido");
  }

  // Limpiar atributos de elipsis visual
  tarjeta.querySelectorAll("[data-ellipsis]").forEach((p) => {
    p.removeAttribute("data-ellipsis");
  });

  div.id = "contenedor_temporal";
  div.append(tarjeta);
  div.classList.add("modal_Contenedor");
  document.body.append(div);

  const galeria        = tarjeta.querySelector(".galeria");
  const boton_siguiente = div.querySelector(".boton_siguiente_proyecto");
  const boton_anterior  = div.querySelector(".boton_anterior_proyecto");
  const botonCerrar     = div.querySelector(".cerrar_proyecto");

  // Mostrar flecha "siguiente" solo si hay más de una imagen
  if (galeria.dataset.imagenes.split(",").length !== 1) {
    agregar_flecha(boton_siguiente);
  }

  botonCerrar.style.display = "block";

  if (boton_siguiente) {
    boton_siguiente.addEventListener("click", (e) => {
      e.preventDefault();
      siguiente(galeria);
    });
  }

  if (boton_anterior) {
    boton_anterior.addEventListener("click", (e) => {
      e.preventDefault();
      anterior(galeria);
    });
  }

  if (botonCerrar) {
    botonCerrar.addEventListener("click", (e) => {
      e.preventDefault();
      div.remove();
      document.body.classList.remove("modal-abierto");
    });
  }
}

// --- Abrir modal al hacer click en una tarjeta ---
// Se ignora el click si viene de un <a> (botón "Ver código", etc.)
document.querySelectorAll(".Proyectos").forEach((proyecto) => {
  proyecto.addEventListener("click", (e) => {
    if (e.target.matches("a")) return;
    ver(e.currentTarget);
  });
});

// --- Marcar con data-ellipsis los textos que están truncados ---
// Se usa para mostrar "..." visual en Proyectos.css
document.querySelectorAll(".Proyectos p.limitado").forEach((p) => {
  if (p.scrollHeight > p.clientHeight) {
    p.dataset.ellipsis = "true";
  }
});