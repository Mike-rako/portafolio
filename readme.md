# 🚀 Portafolio Personal - Michael Barillas

Portafolio web profesional desarrollado para mostrar mis proyectos, habilidades y experiencia como desarrollador de software junior especializado en backend.

[![Deploy Status](https://img.shields.io/badge/status-live-success)](https://mike-rako.github.io/portafolio/)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 🌟 Características

- ✨ **Diseño Moderno y Responsivo**: Adaptable a cualquier dispositivo (móvil, tablet, desktop)
- 🎨 **Tema Claro/Oscuro**: Cambia entre modos de visualización según tu preferencia
- 🎭 **Animaciones Suaves**: Efectos visuales con Anime.js para una experiencia fluida
- 📱 **Navegación Intuitiva**: Menú fijo y navegación por secciones
- 📧 **Formulario de Contacto**: Integración con Formspree para recibir mensajes
- 🎯 **Galería de Proyectos**: Sistema de modal para ver proyectos en detalle
- ⚡ **Rendimiento Optimizado**: Carga rápida y animaciones fluidas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS, Grid y Flexbox
- **JavaScript ES6**: Interactividad y funcionalidad dinámica
- **Anime.js**: Librería para animaciones avanzadas
- **Formspree**: Servicio de formularios sin backend

## 📂 Estructura del Proyecto

```
portafolio/
│
├── index.html                 # Página principal
├── CSS/
│   ├── animated_bars.css      # Animación de barras decorativas
│   ├── header.css             # Estilos del header y navegación
│   ├── inicio.css             # Sección de inicio/hero
│   ├── write.css              # Efecto máquina de escribir
│   ├── Sobre_mi.css           # Sección "Sobre mí"
│   ├── barras_sobre_mi.css    # Barras de habilidades
│   ├── Lenguajes.css          # Sección de lenguajes de programación
│   ├── Proyectos.css          # Galería de proyectos
│   ├── Contacto.css           # Formulario de contacto
│   └── footer.css             # Footer del sitio
│
├── JS/
│   ├── animation.js           # Animaciones con Anime.js
│   ├── funtions.js            # Funciones generales (scroll, menú)
│   ├── Ver_Proyecto.js        # Sistema de modal para proyectos
│   └── Tema_Claro.js          # Cambio de tema claro/oscuro
│
├── media/                     # Imágenes y recursos
└── Proyectos_imagenes/        # Capturas de proyectos

```

## 🚀 Instalación y Uso Local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Mike-rako/portafolio.git
   ```

2. **Navega al directorio**
   ```bash
   cd portafolio
   ```

3. **Abre el archivo**
   - Simplemente abre `index.html` en tu navegador favorito
   - O usa Live Server en VS Code para desarrollo

## 📋 Secciones del Portafolio

1. **Inicio**: Presentación con foto, nombre y llamadas a la acción
2. **Sobre Mí**: Descripción profesional, habilidades blandas y especializaciones
3. **Lenguajes**: Barras de progreso de lenguajes de programación y herramientas
4. **Proyectos**: Galería interactiva con sistema de modal para ver detalles
5. **Contacto**: Formulario funcional y enlaces a redes sociales

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `header.css`:

```css
:root {
    --color-primary: #cc2055;        /* Color principal */
    --color-bg-dark: #0f1114;        /* Fondo oscuro */
    --color-text: #cecece;           /* Color de texto */
    /* ... más variables */
}
```

### Agregar Proyectos

En `index.html`, duplica y modifica este bloque:

```html
<div class="Proyectos">
    <h4>Nombre del Proyecto</h4>
    <div class="galeria" data-imagenes="imagen1.png,imagen2.png">
        <a href="#" class="boton_anterior_proyecto"><</a>
        <img src="Proyectos_imagenes/imagen1.png" alt="" />
        <a href="#" class="boton_siguiente_proyecto">></a>
    </div>
    <p>Descripción del proyecto...</p>
    <div class="Lenguajes_Programacion_Proyectos">
        <div>
            <p>Tecnología 1</p>
            <p>Tecnología 2</p>
        </div>
    </div>
    <div>
        <a href="URL_GITHUB" class="boton_proyecto">Ver código</a>
        <a href="#" class="cerrar_proyecto">Cerrar</a>
    </div>
</div>
```

## 📧 Contacto

- **GitHub**: [@Mike-rako](https://github.com/Mike-rako)
- **LinkedIn**: [Michael David Barillas Núñez](www.linkedin.com/in/michael-david-barillas-nuñez-b94b9336b)
- **Ubicación**: San José, Costa Rica

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Librerias y servicios

- [Anime.js](https://animejs.com/) - Librería de animaciones
- [Formspree](https://formspree.io/) - Servicio de formularios
- Inspiración de diseño de diversos portafolios modernos

---

**Desarrollado por Michael Barillas** | © 2025