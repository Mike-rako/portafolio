function agregar_flecha(anterior_siguiente) {
  anterior_siguiente.style.display = "flex";
}
function borrar_flecha(anterior_siguiente) {
  anterior_siguiente.style.display = "none";
}

function siguiente(galeria) {
  const img = galeria.querySelector("img");

  let imagenes = galeria.dataset.imagenes.split(",").map((s) => s.trim());
  let index = imagenes.indexOf(img.src.split("/").pop());

  if (index + 1 != 0) {
    agregar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  }
  if (index + 2 == imagenes.length) {
    borrar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  }
  if (index != -2 && index < imagenes.length) {
    img.src = "Proyectos_imagenes/" + imagenes[index + 1];
  }
}

function anterior(galeria) {
  const img = galeria.querySelector("img");

  let imagenes = galeria.dataset.imagenes.split(",").map((s) => s.trim());
  let index = imagenes.indexOf(img.src.split("/").pop());

  if (index + 2 != imagenes.length) {
    agregar_flecha(galeria.querySelector(".boton_siguiente_proyecto"));
  }
  if (index - 1 == 0) {
    borrar_flecha(galeria.querySelector(".boton_anterior_proyecto"));
  }
  if (index != -1 && index != 0) {
    img.src = "Proyectos_imagenes/" + imagenes[index - 1];
  }
}

// Función para abrir imagen en pantalla completa
function abrirImagenFullscreen(imgElement) {
  // Crear contenedor fullscreen
  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.classList.add("imagen-fullscreen");
  
  // Clonar la imagen
  const imgClone = imgElement.cloneNode(true);
  
  // Crear botón de cerrar
  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("cerrar-fullscreen");
  botonCerrar.innerHTML = "&times;"; // Símbolo X
  
  // Añadir elementos
  fullscreenDiv.appendChild(botonCerrar);
  fullscreenDiv.appendChild(imgClone);
  document.body.appendChild(fullscreenDiv);
  
  // Prevenir scroll
  document.body.style.overflow = "hidden";
  
  // Cerrar al hacer clic en la X
  botonCerrar.addEventListener("click", (e) => {
    e.stopPropagation();
    cerrarFullscreen();
  });
  
  // Cerrar al hacer clic fuera de la imagen
  fullscreenDiv.addEventListener("click", (e) => {
    if (e.target === fullscreenDiv) {
      cerrarFullscreen();
    }
  });
  
  // Cerrar con tecla ESC
  const cerrarConEsc = (e) => {
    if (e.key === "Escape") {
      cerrarFullscreen();
    }
  };
  document.addEventListener("keydown", cerrarConEsc);
  
  function cerrarFullscreen() {
    fullscreenDiv.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", cerrarConEsc);
  }
}

// Agregar evento click a las imágenes dentro de los modales
document.addEventListener("click", (e) => {
  // Solo si la imagen está dentro de un modal abierto
  if (e.target.matches("#contenedor_temporal .galeria img")) {
    e.stopPropagation();
    abrirImagenFullscreen(e.target);
  }
});

function ver(tarjeta_Proyeccto) {
  document.body.classList.add("modal-abierto");
  var div = document.createElement("div");
  div.id = "contenedor_temporal";
  var tarjeta = tarjeta_Proyeccto.cloneNode(true);
  tarjeta.classList.add("modal");

  const p = tarjeta.querySelector("p.limitado");
  if (p) {
    p.classList.remove("limitado");
    p.classList.add("expandido");
  }

  tarjeta.querySelectorAll("[data-ellipsis]").forEach((p) => {
    p.removeAttribute("data-ellipsis");
  });

  div.append(tarjeta);
  div.classList.add("modal_Contenedor");
  document.body.append(div);

  const galeria = tarjeta.querySelector(".galeria");

  const boton_siguiente = div.querySelector(".boton_siguiente_proyecto");

  if (galeria.dataset.imagenes.split(",").length != 1) {
    agregar_flecha(boton_siguiente);
  }

  const boton_anterior = div.querySelector(".boton_anterior_proyecto");

  const botonCerrar = div.querySelector(".cerrar_proyecto");
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

document.querySelectorAll(".Proyectos").forEach((proyecto) => {
  proyecto.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      return;
    }
    ver(e.currentTarget);
  });
});

document.querySelectorAll(".Proyectos p.limitado").forEach((p) => {
  if (p.scrollHeight > p.clientHeight) {
    p.dataset.ellipsis = "true";
  }
});