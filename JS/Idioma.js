// Traducciones del portafolio — versión mejorada para reclutadores
const traducciones = {
  es: {
    // Header
    nav_inicio: "Inicio",
    nav_sobre_mi: "Sobre mí",
    nav_experiencia: "Experiencia",
    nav_lenguajes: "Lenguajes",
    nav_proyectos: "Proyectos",
    nav_contacto: "Contacto",
    portafolio: "Portafolio",

    // Main - Inicio
    desarrollador: "Desarrollador Backend",
    descripcion_inicio:
    "Desarrollo aplicaciones, bases de datos y APIs, <br>automatizo procesos y gestiono servidores para su despliegue en entornos reales.",
    github_text: "Git Hub",
    linkedin_text: "LinkedIn",
    descargar_cv: "Descargar CV",
    ver_proyectos: "Ver proyectos",

    // Sobre mí
    titulo_sobre_mi: "Sobre mí",
    
    descripcion_sobre_mi: `Soy Michael David Barillas Núñez, desarrollador de software backend enfocado en automatización y procesamiento de datos.<br><br>

    Desarrollo herramientas para extraer, transformar y analizar información desde fuentes reales utilizando Python, C#, SQL y tecnologías web cuando es necesario, automatizando procesos complejos y reduciendo el trabajo manual.<br><br>

    Tengo experiencia en desarrollo de APIs, sistemas de gestión y scripts de automatización, así como en administración de servidores Linux, despliegue de aplicaciones e integración de inteligencia artificial para el análisis de datos.<br><br>

    Mi enfoque es crear soluciones prácticas, eficientes y mantenibles que aporten valor desde el primer momento, manteniéndome en constante aprendizaje y adaptación a nuevas tecnologías.`,

    // Habilidades blandas
    creatividad: "Creatividad",
    trabajo_equipo: "Trabajo en equipo",
    pensamiento_critico: "Pensamiento crítico",
    adaptibilidad: "Adaptabilidad",
    resolucion_problemas: "Resolución de problemas",
    proactividad: "Proactividad",
    gestion_tiempo: "Gestión del tiempo",

    // Especializaciones
    backend: "Desarrollo Backend",
    base_datos: "Base de datos",
    desarrollo_web: "Desarrollo Web",
    desarrollo_software: "Diseño de Software",

    especialidad_backend_titulo: "Desarrollo Backend",
    especialidad_backend_desc:
      "Diseño e implementación de APIs RESTful con Python y C#, gestión de bases de datos relacionales, optimización de consultas y administración de servidores Linux.",

    especialidad_db_titulo: "Bases de Datos",
    especialidad_db_desc:
      "Diseño, normalización e implementación de bases de datos relacionales con SQL Server y MySQL. Optimización de consultas y modelado eficiente de datos.",

    especialidad_web_titulo: "Desarrollo Web",
    especialidad_web_desc:
      "Creación de interfaces responsive con HTML5, CSS3 y JavaScript. Desarrollo de aplicaciones web dinámicas e interactivas con enfoque en UX/UI.",

    especialidad_software_titulo: "Desarrollo de Software",
    especialidad_software_desc:
      "Análisis de requisitos, diseño de arquitecturas escalables y desarrollo de aplicaciones empresariales con metodologías ágiles y buenas prácticas de código.",

    // Lenguajes de programación
    titulo_lenguajes: "Lenguajes de Programación",
    herramientas: "Herramientas",

    // Proyectos — sección nueva
    titulo_proyectos: "Proyectos",
    proyectos_eyebrow: "Lo que he construido",
    filtro_todos: "Todos",
    filtro_profesional: "Profesional",
    filtro_backend: "Backend",
    filtro_web: "Web",
    filtro_desktop: "Desktop",
    ver_codigo: "Ver código",
    cerrar: "Cerrar",
    badge_profesional: "Práctica Profesional",
    badge_destacado: "Proyecto Destacado",
    ver_github: "Ver todos en GitHub",

    // Proyectos — títulos y descripciones cortas (para tarjetas nuevas)
    proyecto1_titulo: "Portafolio Personal",
    proyecto1_desc_corta:
      "El sitio que estás viendo ahora mismo. Construido desde cero con HTML, CSS y JavaScript vanilla — sin frameworks. Incluye animaciones con Anime.js, cambio de idioma ES/EN en tiempo real, modo claro/oscuro y diseño completamente responsive.",

    proyecto2_titulo: "Auto Clicker",
    proyecto2_desc_corta:
      "App de escritorio en Python con interfaz dark mode (CustomTkinter) para automatizar clicks del mouse en Windows. Permite configurar posición, intervalo desde 0.1s, tipo de click y controlar todo con la barra espaciadora. Ventana flotante siempre visible.",

    proyecto3_titulo: "Sistema de Heladería",
    proyecto3_desc_corta:
      "App de escritorio en C# con Windows Forms que aplica POO real: herencia, polimorfismo y encapsulamiento en una jerarquía de clases Helado → Nieve/Lácteo. Calcula precios con descuentos, impuestos y toppings de forma dinámica por cada orden.",

    proyecto4_titulo: "Tienda Musical Web",
    proyecto4_desc_corta:
      "Tienda online multi-página con catálogo, detalle de producto, filtros por precio y carrito persistente con localStorage. Construida con JavaScript ES6 modular y Bootstrap 5 — sin dependencias adicionales ni frameworks JS.",

    proyecto5_titulo: "Sistema de Gestión de Inventario",
    proyecto5_desc_corta:
      "Sistema web empresarial con ASP.NET Core MVC 8 y SQL Server. Autenticación por cookies con roles Admin/User, control transaccional de stock con rollback automático, dashboard con Chart.js y reportería dinámica con filtros por fecha.",

    proyecto6_titulo: "TSE Costa Rica API",
    proyecto6_desc_corta:
      "API REST construida con FastAPI que hace scraping al Boletín Judicial oficial de Costa Rica usando Selenium. Consulta personas por cédula o nombre completo — incluyendo datos de padres e hijos — con documentación Swagger integrada.",

    proyecto7_titulo: "Automatización de Documentos Administrativos",
    proyecto7_desc_corta:
      "App de escritorio en Python + PyQt5 para un bufete de abogados. Lee archivos Word, extrae campos clave y genera borradores legales mediante la API de Gemini. Gestión multi-entidad, almacenamiento persistente y exportación a Excel. Uso real en producción.",

    proyecto8_titulo: "Monitor de Publicaciones Judiciales",
    proyecto8_desc_corta:
      "Pipeline automatizado en Python que scrapea el Boletín Judicial de Costa Rica diariamente con Selenium Stealth, extrae datos estructurados con regex, clasifica los registros relevantes con Gemini AI y sube un reporte Excel a Google Drive. Desplegado en Cloud Run.",

    // Descripciones completas (para el modal al abrir cada proyecto)
    proyecto1_desc:
      "El portafolio que estás viendo ahora mismo. Desarrollado desde cero con HTML, CSS y JavaScript vanilla sin ningún framework. Incluye animaciones fluidas con Anime.js, un sistema de traducción ES/EN que cambia todo el contenido sin recargar la página, modo claro/oscuro con persistencia en localStorage y diseño totalmente responsive para móvil, tablet y escritorio.",
    proyecto2_desc:
      "Aplicación de escritorio para Windows que automatiza clicks del mouse con una interfaz dark mode construida en CustomTkinter. Permite seleccionar la posición exacta del cursor, configurar el intervalo entre clicks (desde 0.1 segundos), elegir entre click izquierdo, derecho o doble, y controlar la ejecución con la barra espaciadora. La ventana se mantiene flotante sobre cualquier otra aplicación. Organizado en módulos separados: GUI, lógica de clicks y funciones auxiliares.",
    proyecto3_desc:
      "Sistema de gestión de pedidos para heladería desarrollado en C# con Windows Forms, con enfoque en demostrar programación orientada a objetos. Implementa una jerarquía de clases donde Helado es la clase base abstracta, y Nieve y Lácteo heredan de ella con comportamientos distintos: descuentos en ciertos sabores, impuestos sobre lácteos y precios adicionales por toppings. Calcula automáticamente subtotales, aplica reglas de negocio y genera una factura detallada al finalizar cada orden.",
    proyecto4_desc:
      "Tienda online de instrumentos musicales con cuatro páginas independientes (Home, Categoría, Producto, Carrito) conectadas mediante parámetros en la URL. El carrito persiste entre sesiones con localStorage y actualiza el contador del navbar en tiempo real. Incluye filtros por precio, productos relacionados dinámicos y está estructurado con ES6 modules para separar responsabilidades. Construida solo con HTML5, CSS3, JavaScript vanilla y Bootstrap 5.3.",
    proyecto5_desc:
      "Sistema web empresarial de inventario con arquitectura MVC en 4 capas. Autenticación basada en cookies con roles Admin/User y autorización por Claims. El registro de movimientos usa transacciones con rollback automático si el stock no alcanza. El dashboard muestra métricas en tiempo real con Chart.js: valor total del inventario, top 10 productos más movidos, alertas de stock bajo y distribución por categorías. Incluye script SQL completo para levantar la base de datos con datos de prueba en segundos.",
    proyecto6_desc:
      "API REST desarrollada con FastAPI que actúa como wrapper del sitio oficial del TSE (Tribunal Supremo de Elecciones). Usa Selenium para navegar el formulario del Registro Civil y devuelve la información en formato JSON estructurado: nombre, cédula, fecha de nacimiento, nombre de padres e hijos. Expone dos endpoints POST — /cedula y /nombres — con documentación interactiva en Swagger UI y ReDoc incluida automáticamente.",
    proyecto7_desc:
      "Aplicación de escritorio en Python (PyQt5) desarrollada para el bufete XperttaLegal. Lee documentos Word con python-docx, extrae campos específicos y envía el contenido a la API de Gemini para generar borradores de documentos legales con el formato correcto. Maneja múltiples entidades (clientes, expedientes), guarda el historial de forma persistente y exporta reportes a Excel. Fue usada en producción real durante la práctica profesional. Por confidencialidad no se incluye el código completo, pero está respaldado por certificado oficial de la empresa.",
    proyecto8_desc:
      "Pipeline de datos automatizado que corre diariamente en Google Cloud Run. Usa Selenium con selenium-stealth para evadir detección anti-bot al scrapear el Boletín Judicial oficial de Costa Rica, extrae datos no estructurados de cada remate (finca, monto, ubicación, fechas, acreedor, deudor) con regex avanzadas, los envía a Gemini AI para evaluar potencial de inversión y genera un reporte Excel organizado por meses. El archivo se sincroniza automáticamente con Google Drive. Desarrollado en XperttaLegal, respaldado por certificado oficial.",

    // Experiencia
    titulo_experiencia: "Experiencia",
    exp_badge: "Práctica Profesional",
    exp_cargo: "Desarrollador de Software — Automatización de Procesos",
    exp_desc1: "Durante mi práctica profesional en <strong>XperttaLegal</strong>, un reconocido bufete de abogados, participé activamente en el desarrollo e implementación de soluciones de automatización orientadas a optimizar los flujos de trabajo internos del despacho jurídico.",
    exp_desc2: "Diseñé y desarrollé herramientas en <strong>Python</strong> para la extracción y procesamiento automatizado de información proveniente de documentos legales y fuentes de datos públicas, reduciendo significativamente los tiempos de gestión documental. Integré APIs de inteligencia artificial para asistir en la clasificación y redacción de documentos administrativos, elevando la eficiencia operativa del equipo.",
    exp_desc3: "Implementé un sistema de monitoreo automatizado de publicaciones judiciales con ejecución programada en infraestructura cloud (Google Cloud Run), garantizando disponibilidad continua. Esta experiencia consolidó mis buenas prácticas de ingeniería de software en un entorno real con altos estándares de confidencialidad y calidad.",
    exp_certificado: "Respaldado por certificado oficial emitido por la empresa",

    // Contacto
    titulo_contacto: "Contacto",
    correo: "Correo",
    nombre: "Nombre",
    tu_nombre: "Tu nombre",
    email: "Email",
    tu_correo: "Tu correo",
    mensaje: "Mensaje",
    tu_mensaje: "Tu mensaje",
    enviar_mensaje: "Enviar Mensaje",
    ubicacion: "San José — Costa Rica",
    github_titulo: "Github",
    github_desc: "La mejor forma de conocer mi trabajo",
    linkedin_titulo: "LinkedIn",
    linkedin_desc: "Para oportunidades profesionales",
    ver_perfil: "Ver mi perfil",

    // Footer
    footer_descripcion:
      "Full Stack Developer especializado en Backend · Soluciones robustas, escalables y listas para producción",
    footer_navegacion: "Navegación",
    footer_contacto_titulo: "Contacto",
    footer_disponible: "Disponible en GitHub y LinkedIn",
    footer_ubicacion: "Costa Rica, San José",
    trabajemos_juntos: "Trabajemos juntos",
    derechos: "&copy;2025 Michael Barillas Nuñez — Portafolio",
  },

  en: {
    // Header
    nav_inicio: "Home",
    nav_sobre_mi: "About Me",
    nav_experiencia: "Experience",
    nav_lenguajes: "Skills",
    nav_proyectos: "Projects",
    nav_contacto: "Contact",
    portafolio: "Portfolio",

    // Main - Inicio
    desarrollador: "Backend Developer",
    descripcion_inicio:
      "I develop applications, databases, and APIs,<br> automate processes, and manage servers in real-world environments.",
    github_text: "GitHub",
    linkedin_text: "LinkedIn",
    descargar_cv: "Download CV",
    ver_proyectos: "View Projects",

    // About Me
    titulo_sobre_mi: "About Me",
    
    descripcion_sobre_mi: `I am Michael David Barillas Núñez, a backend software developer focused on automation and data processing.<br><br>

    I build tools to extract, transform, and analyze real-world data using Python, C#, and SQL, automating complex processes and reducing manual work.<br><br>

    I have experience developing APIs, management systems, and automation scripts, as well as managing Linux servers, deploying applications, and integrating artificial intelligence for data analysis.<br><br>

    My focus is on creating practical, efficient, and maintainable solutions that deliver value from day one, while continuously learning and adapting 
    to new technologies.`,

    // Soft Skills
    creatividad: "Creativity",
    trabajo_equipo: "Teamwork",
    pensamiento_critico: "Critical Thinking",
    adaptibilidad: "Adaptability",
    resolucion_problemas: "Problem Solving",
    proactividad: "Proactivity",
    gestion_tiempo: "Time Management",

    // Specializations
    backend: "Backend Development",
    base_datos: "Database",
    desarrollo_web: "Web Development",
    desarrollo_software: "Software Development",

    especialidad_backend_titulo: "Backend Development",
    especialidad_backend_desc:
      "Design and implementation of RESTful APIs with Python and C#, relational database management, query optimization, and Linux server architecture.",

    especialidad_db_titulo: "Databases",
    especialidad_db_desc:
      "Design, normalization, and implementation of relational databases with SQL Server and MySQL. Query optimization and efficient data modeling.",

    especialidad_web_titulo: "Web Development",
    especialidad_web_desc:
      "Responsive interfaces with HTML5, CSS3, and JavaScript. Development of dynamic and interactive web applications with focus on UX/UI.",

    especialidad_software_titulo: "Software Development",
    especialidad_software_desc:
      "Requirements analysis, scalable architecture design, and enterprise application development using agile methodologies and clean code principles.",

    // Languages
    titulo_lenguajes: "Programming Languages",
    herramientas: "Tools",

    // Projects — new section
    titulo_proyectos: "Projects",
    proyectos_eyebrow: "What I've built",
    filtro_todos: "All",
    filtro_profesional: "Professional",
    filtro_backend: "Backend",
    filtro_web: "Web",
    filtro_desktop: "Desktop",
    ver_codigo: "View code",
    cerrar: "Close",
    badge_profesional: "Professional Internship",
    badge_destacado: "Featured Project",
    ver_github: "See all on GitHub",

    // Projects — short descriptions for cards
    proyecto1_titulo: "Personal Portfolio",
    proyecto1_desc_corta:
      "The site you're on right now. Built from scratch with vanilla HTML, CSS and JavaScript — no frameworks. Anime.js animations, real-time ES/EN language switching, light/dark mode with localStorage persistence, and fully responsive.",

    proyecto2_titulo: "Auto Clicker",
    proyecto2_desc_corta:
      "Windows desktop app with a dark mode GUI (CustomTkinter) to automate mouse clicks. Configure position, interval from 0.1s, click type, and toggle on/off with the spacebar. Stays floating on top of any window.",

    proyecto3_titulo: "Ice Cream Shop System",
    proyecto3_desc_corta:
      "C# desktop app with Windows Forms showcasing real OOP: inheritance, polymorphism and encapsulation across an Helado → Nieve/Lácteo class hierarchy. Dynamically calculates prices with discounts, taxes and toppings per order.",

    proyecto4_titulo: "Music Store Web",
    proyecto4_desc_corta:
      "Multi-page online store with catalog, product detail, price filters and a persistent cart using localStorage. Built with modular ES6 JavaScript and Bootstrap 5 — no JS frameworks or extra dependencies.",

    proyecto5_titulo: "Inventory Management System",
    proyecto5_desc_corta:
      "Enterprise web system with ASP.NET Core MVC 8 and SQL Server. Cookie-based auth with Admin/User roles, transactional stock control with automatic rollback, Chart.js dashboard and dynamic reporting with date filters.",

    proyecto6_titulo: "TSE Costa Rica API",
    proyecto6_desc_corta:
      "REST API built with FastAPI that scrapes Costa Rica's official Civil Registry using Selenium. Query people by ID number or full name — including parents and children data — with built-in Swagger documentation.",

    proyecto7_titulo: "Administrative Document Automation",
    proyecto7_desc_corta:
      "Python + PyQt5 desktop app for a law firm. Reads Word files, extracts key fields and generates structured legal drafts via the Gemini API. Multi-entity management, persistent storage and Excel export. Used in real production.",

    proyecto8_titulo: "Judicial Publications Monitor",
    proyecto8_desc_corta:
      "Automated Python pipeline that daily scrapes Costa Rica's Official Judicial Bulletin with Selenium Stealth, extracts structured data via regex, classifies records with Gemini AI and syncs an Excel report to Google Drive. Runs on Cloud Run.",

    // Full descriptions (for the modal)
    proyecto1_desc:
      "The portfolio you're currently viewing. Built from scratch with vanilla HTML, CSS and JavaScript — no frameworks at all. Features smooth animations powered by Anime.js, a full bilingual ES/EN system that swaps all content without reloading the page, light/dark mode with localStorage persistence, and a responsive layout that works across mobile, tablet and desktop.",
    proyecto2_desc:
      "Windows desktop application that automates mouse clicks through a dark mode interface built with CustomTkinter. Lets you pick the exact screen position, set the interval between clicks (from 0.1 seconds), choose between left, right or double click, and start/stop everything with the spacebar. The window stays floating on top of any other application at all times. Code is organized into separate modules: GUI, click logic and helper functions.",
    proyecto3_desc:
      "Ice cream shop order management system built in C# with Windows Forms, designed to demonstrate real object-oriented programming. Implements a class hierarchy where Helado is the abstract base class, with Nieve and Lácteo inheriting from it with different behaviors: flavor-based discounts, taxes on dairy products and extra charges for toppings. Automatically calculates subtotals, applies business rules and generates a detailed receipt when the order is finished.",
    proyecto4_desc:
      "Multi-page online music store with four independent pages (Home, Category, Product, Cart) connected through URL parameters. The cart persists between sessions using localStorage and updates the navbar counter in real time. Includes price sorting filters, dynamic related products and is structured with ES6 modules to separate concerns. Built with only HTML5, CSS3, vanilla JavaScript and Bootstrap 5.3 — no frameworks.",
    proyecto5_desc:
      "Enterprise inventory system with a 4-layer MVC architecture. Cookie-based authentication with Admin/User roles and Claims-based authorization. Movement registration uses database transactions with automatic rollback if stock is insufficient. The admin dashboard shows real-time metrics with Chart.js: total inventory value, top 10 most-moved products, low-stock alerts and category distribution. Includes a complete SQL script to spin up the database with sample data in seconds.",
    proyecto6_desc:
      "REST API built with FastAPI that acts as a wrapper for the TSE (Supreme Electoral Court) official website. Uses Selenium to navigate the Civil Registry form and returns structured JSON: name, ID, date of birth, parent names and children. Exposes two POST endpoints — /cedula and /nombres — with interactive Swagger UI and ReDoc documentation included automatically out of the box.",
    proyecto7_desc:
      "Desktop application in Python (PyQt5) developed for the XperttaLegal law firm. Reads Word documents with python-docx, extracts specific fields and sends the content to the Gemini API to generate legal document drafts in the correct format. Handles multiple entities (clients, case files), stores history persistently and exports reports to Excel. Was used in real production during the internship. Source code is confidential but the project is backed by an official certificate from the company.",
    proyecto8_desc:
      "Automated data pipeline that runs daily on Google Cloud Run. Uses Selenium with selenium-stealth to bypass anti-bot detection when scraping Costa Rica's official Judicial Bulletin. Extracts unstructured data from each auction listing (property ID, base amount, location, dates, creditor, debtor) using advanced regex, sends them to Gemini AI to assess investment potential, and generates a month-organized Excel report. The file syncs automatically to Google Drive. Developed at XperttaLegal, backed by official company certificate.",

    // Experience
    titulo_experiencia: "Experience",
    exp_badge: "Professional Internship",
    exp_cargo: "Software Developer — Process Automation",
    exp_desc1: "During my professional internship at <strong>XperttaLegal</strong>, a well-known law firm, I actively participated in the development and implementation of automation solutions aimed at optimizing internal legal office workflows.",
    exp_desc2: "I designed and developed <strong>Python</strong> tools for automated extraction and processing of information from legal documents and public data sources, significantly reducing document management times. I also integrated AI APIs to assist in the classification and drafting of administrative documents, boosting the team's operational efficiency.",
    exp_desc3: "I implemented an automated monitoring system for judicial publications with scheduled execution on Google Cloud Run, ensuring continuous availability. This experience allowed me to apply software engineering best practices in a real professional environment with high standards of confidentiality and quality.",
    exp_certificado: "Backed by an official certificate issued by the company",

    // Contact
    titulo_contacto: "Contact",
    correo: "Email",
    nombre: "Name",
    tu_nombre: "Your name",
    email: "Email",
    tu_correo: "Your email",
    mensaje: "Message",
    tu_mensaje: "Your message",
    enviar_mensaje: "Send Message",
    ubicacion: "San José — Costa Rica",
    github_titulo: "GitHub",
    github_desc: "The best way to explore my work",
    linkedin_titulo: "LinkedIn",
    linkedin_desc: "For professional opportunities",
    ver_perfil: "View my profile",

    // Footer
    footer_descripcion:
      "Full Stack Developer specialized in Backend · Robust, scalable, production-ready solutions",
    footer_navegacion: "Navigation",
    footer_contacto_titulo: "Contact",
    footer_disponible: "Available on GitHub and LinkedIn",
    footer_ubicacion: "Costa Rica, San José",
    trabajemos_juntos: "Let's work together",
    derechos: "&copy;2025 Michael Barillas Nuñez — Portfolio",
  },
};

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
  const t = traducciones[idioma];

  try {
    // Header - navegación principal
    const navLinks = document.querySelectorAll("header > nav > a");
    if (navLinks.length >= 6) {
      navLinks[0].textContent = t.nav_inicio;
      navLinks[1].textContent = t.nav_sobre_mi;
      navLinks[2].textContent = t.nav_experiencia;
      navLinks[3].textContent = t.nav_lenguajes;
      navLinks[4].textContent = t.nav_proyectos;
      navLinks[5].textContent = t.nav_contacto;
    }

    // Menú móvil
    const menuLinks = document.querySelectorAll("#menu > a");
    if (menuLinks.length >= 6) {
      menuLinks[0].textContent = t.nav_inicio;
      menuLinks[1].textContent = t.nav_sobre_mi;
      menuLinks[2].textContent = t.nav_experiencia;
      menuLinks[3].textContent = t.nav_lenguajes;
      menuLinks[4].textContent = t.nav_proyectos;
      menuLinks[5].textContent = t.nav_contacto;
    }

    const portafolioTitle = document.querySelector("header div h3");
    if (portafolioTitle) portafolioTitle.textContent = t.portafolio;

    // Main - Inicio
    const mainH3 = document.querySelector("main h3");
    if (mainH3) mainH3.textContent = t.desarrollador;

    const mainH4 = document.querySelector("main h4");
    if (mainH4) mainH4.innerHTML = t.descripcion_inicio;

    // Botones del inicio
    const mainBotones = document.querySelectorAll("main > div:last-child a");
    if (mainBotones.length >= 3) {
      const githubBtn = mainBotones[0];
      if (githubBtn && githubBtn.href && githubBtn.href.includes("github")) {
        for (let node of githubBtn.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = " " + t.github_text;
            break;
          }
        }
      }

      const linkedinBtn = mainBotones[1];
      if (linkedinBtn && linkedinBtn.href && linkedinBtn.href.includes("linkedin")) {
        for (let node of linkedinBtn.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = " " + t.linkedin_text;
            break;
          }
        }
      }

      const cvDownloadBtn = document.querySelector("a[download].boton-boing");
      if (cvDownloadBtn) {
        for (let node of cvDownloadBtn.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = " " + t.descargar_cv;
            break;
          }
        }
      }

      const verProyectosBtn = document.querySelector('a[href="#proyectos"]#CV_Proyectos');
      if (verProyectosBtn) {
        for (let node of verProyectosBtn.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            node.textContent = " " + t.ver_proyectos;
            break;
          }
        }
      }
    }

    // Sobre mí
    const sobreMiTitle = document.querySelector("#Sobre_mi");
    if (sobreMiTitle) sobreMiTitle.textContent = t.titulo_sobre_mi;

    const datosH4 = document.querySelector("#datos h4");
    if (datosH4) datosH4.innerHTML = t.descripcion_sobre_mi;

    // Habilidades blandas
    const habilidades = document.querySelectorAll(".Habilidades_blandas p:first-child");
    const habilidadesTextos = [
      t.creatividad, t.trabajo_equipo, t.pensamiento_critico,
      t.adaptibilidad, t.resolucion_problemas, t.proactividad, t.gestion_tiempo,
    ];
    habilidades.forEach((habilidad, index) => {
      if (habilidadesTextos[index]) habilidad.textContent = habilidadesTextos[index];
    });

    // Barras de especialización
    const barrasH4 = document.querySelectorAll("#contenedorBarras h4:nth-child(3)");
    const barrasTextos = [t.backend, t.base_datos, t.desarrollo_web, t.desarrollo_software];
    barrasH4.forEach((barra, index) => {
      if (barrasTextos[index]) barra.textContent = barrasTextos[index];
    });

    // Tarjetas de especialización
    const tarjetas = document.querySelectorAll(".tarjetas_especializaciones");
    if (tarjetas.length >= 4) {
      tarjetas[0].querySelector("h1").textContent = t.especialidad_backend_titulo;
      tarjetas[0].querySelector("h3").textContent = t.especialidad_backend_desc;
      tarjetas[1].querySelector("h1").textContent = t.especialidad_db_titulo;
      tarjetas[1].querySelector("h3").textContent = t.especialidad_db_desc;
      tarjetas[2].querySelector("h1").textContent = t.especialidad_web_titulo;
      tarjetas[2].querySelector("h3").textContent = t.especialidad_web_desc;
      tarjetas[3].querySelector("h1").textContent = t.especialidad_software_titulo;
      tarjetas[3].querySelector("h3").textContent = t.especialidad_software_desc;
    }

    // Botón CV Sobre mí
    const cvSobreMi = document.querySelector("#CV_Sobre_mi");
    if (cvSobreMi) {
      for (let node of cvSobreMi.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = " " + t.descargar_cv;
          break;
        }
      }
    }

    // Lenguajes de programación
    const tituloLenguajes = document.querySelector("#tituloLenguajes, #Lenguajes_Programacion");
    if (tituloLenguajes) tituloLenguajes.textContent = t.titulo_lenguajes;

    const allH1 = document.querySelectorAll("h1");
    allH1.forEach((h1) => {
      if (h1.textContent.includes("Herramientas") || h1.textContent.includes("Tools")) {
        h1.textContent = t.herramientas;
      }
    });

    // ---- Sección de proyectos nueva ----

    // Eyebrow
    const eyebrow = document.querySelector(".proyectos-eyebrow");
    if (eyebrow) eyebrow.textContent = t.proyectos_eyebrow;

    // Título sección
    const proyectosTitle = document.querySelector("#proyectos");
    if (proyectosTitle) proyectosTitle.textContent = t.titulo_proyectos;

    // Filtros
    const filtroTodos = document.querySelector('[data-filtro="todos"]');
    if (filtroTodos) filtroTodos.textContent = t.filtro_todos;
    const filtroPro = document.querySelector('[data-filtro="profesional"]');
    if (filtroPro) filtroPro.textContent = t.filtro_profesional;
    const filtroBack = document.querySelector('[data-filtro="backend"]');
    if (filtroBack) filtroBack.textContent = t.filtro_backend;
    const filtroWeb = document.querySelector('[data-filtro="web"]');
    if (filtroWeb) filtroWeb.textContent = t.filtro_web;
    const filtroDesk = document.querySelector('[data-filtro="desktop"]');
    if (filtroDesk) filtroDesk.textContent = t.filtro_desktop;

    // Tarjetas — nombres y descripciones cortas
    const cardData = [
      // orden en el DOM: P5, P8, P7, P6, P1, P4, P3, P2
      { titulo: t.proyecto5_titulo, desc: t.proyecto5_desc_corta },
      { titulo: t.proyecto8_titulo, desc: t.proyecto8_desc_corta },
      { titulo: t.proyecto7_titulo, desc: t.proyecto7_desc_corta },
      { titulo: t.proyecto6_titulo, desc: t.proyecto6_desc_corta },
      { titulo: t.proyecto1_titulo, desc: t.proyecto1_desc_corta },
      { titulo: t.proyecto4_titulo, desc: t.proyecto4_desc_corta },
      { titulo: t.proyecto3_titulo, desc: t.proyecto3_desc_corta },
      { titulo: t.proyecto2_titulo, desc: t.proyecto2_desc_corta },
    ];

    document.querySelectorAll(".proyecto-card").forEach((card, i) => {
      if (cardData[i]) {
        const nombre = card.querySelector(".proyecto-nombre");
        const desc = card.querySelector(".proyecto-desc");
        if (nombre) nombre.textContent = cardData[i].titulo;
        if (desc) desc.textContent = cardData[i].desc;
      }
    });

    // Badges profesionales
    document.querySelectorAll(".proyecto-img-badge.profesional").forEach(b => {
      b.textContent = t.badge_profesional;
    });
    document.querySelectorAll('[data-i18n="badge_destacado"]').forEach(b => {
      b.textContent = t.badge_destacado;
    });

    // Botones ver código en tarjetas nuevas
    document.querySelectorAll(".proyecto-ver-codigo").forEach(btn => {
      const textNode = [...btn.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (textNode) textNode.textContent = "\n              " + t.ver_codigo + "\n              ";
      // alternativa simple:
      btn.firstChild.textContent = t.ver_codigo + " ";
    });

    // Botón ver todos GitHub
    const btnGithub = document.querySelector(".btn-ver-github");
    if (btnGithub) {
      const textNode = [...btnGithub.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (textNode) textNode.textContent = " " + t.ver_github;
    }

    // Div oculto de compatibilidad
    const proyectosHidden = document.querySelectorAll("#contenedor_Proyectos .Proyectos");
    const proyectosDescFull = [
      { titulo: t.proyecto1_titulo, desc: t.proyecto1_desc },
      { titulo: t.proyecto2_titulo, desc: t.proyecto2_desc },
      { titulo: t.proyecto3_titulo, desc: t.proyecto3_desc },
      { titulo: t.proyecto4_titulo, desc: t.proyecto4_desc },
      { titulo: t.proyecto5_titulo, desc: t.proyecto5_desc },
      { titulo: t.proyecto6_titulo, desc: t.proyecto6_desc },
      { titulo: t.proyecto7_titulo, desc: t.proyecto7_desc },
      { titulo: t.proyecto8_titulo, desc: t.proyecto8_desc },
    ];
    proyectosHidden.forEach((p, i) => {
      if (proyectosDescFull[i]) {
        const h4 = p.querySelector("h4");
        const desc = p.querySelector("p");
        if (h4) h4.textContent = proyectosDescFull[i].titulo;
        if (desc) desc.innerHTML = proyectosDescFull[i].desc;
      }
    });

    // Botones del div oculto
    document.querySelectorAll(".boton_proyecto").forEach(b => { b.textContent = t.ver_codigo; });
    document.querySelectorAll(".cerrar_proyecto").forEach(b => { b.textContent = t.cerrar; });

    // Experiencia
    const tituloExp = document.querySelector("#Experiencia");
    if (tituloExp) tituloExp.textContent = t.titulo_experiencia;

    const expBadge = document.querySelector(".exp_badge");
    if (expBadge) expBadge.textContent = t.exp_badge;

    const expCargo = document.querySelector(".exp_cargo");
    if (expCargo) expCargo.textContent = t.exp_cargo;

    const expDescs = document.querySelectorAll(".exp_descripcion");
    if (expDescs[0]) expDescs[0].innerHTML = t.exp_desc1;
    if (expDescs[1]) expDescs[1].innerHTML = t.exp_desc2;
    if (expDescs[2]) expDescs[2].innerHTML = t.exp_desc3;

    const expCert = document.querySelector(".exp_certificado");
    if (expCert) expCert.innerHTML = `<span class="exp_cert_icon">✔</span> ${t.exp_certificado}`;

    // Contacto
    const contactoTitle = document.querySelector("#Contacto");
    if (contactoTitle) contactoTitle.textContent = t.titulo_contacto;

    const correoH1 = document.querySelector("#correo h1");
    if (correoH1) correoH1.textContent = t.correo;

    const formLabels = document.querySelectorAll("#correo form h4");
    if (formLabels.length >= 3) {
      formLabels[0].textContent = t.nombre;
      formLabels[1].textContent = t.email;
      formLabels[2].textContent = t.mensaje;
    }

    const inputName = document.querySelector('input[name="name"]');
    if (inputName) inputName.placeholder = t.tu_nombre;
    const inputEmail = document.querySelector('input[name="email"]');
    if (inputEmail) inputEmail.placeholder = t.tu_correo;
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) textarea.placeholder = t.tu_mensaje;

    const submitBtn = document.querySelector('#correo button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.enviar_mensaje;

    const ubicacionP = document.querySelector("#correo p:last-child");
    if (ubicacionP) ubicacionP.textContent = t.ubicacion;

    // Tarjetas de contacto
    const tarjetasContacto = document.querySelectorAll(".contenedor_contacto > div:last-child > div");
    if (tarjetasContacto.length >= 2) {
      const githubCard = tarjetasContacto[0];
      const linkedinCard = tarjetasContacto[1];
      if (githubCard) {
        const gh1 = githubCard.querySelector("h1");
        const gp = githubCard.querySelector("p");
        const ga = githubCard.querySelector("a");
        if (gh1) gh1.textContent = t.github_titulo;
        if (gp) gp.textContent = t.github_desc;
        if (ga) ga.textContent = t.ver_perfil;
      }
      if (linkedinCard) {
        const lh1 = linkedinCard.querySelector("h1");
        const lp = linkedinCard.querySelector("p");
        const la = linkedinCard.querySelector("a");
        if (lh1) lh1.textContent = t.linkedin_titulo;
        if (lp) lp.textContent = t.linkedin_desc;
        if (la) la.textContent = t.ver_perfil;
      }
    }

    // CV paths
    const cvPath =
      idioma === "es"
        ? "media/CV Michael Barillas Nuñez ES.pdf"
        : "media/CV Michael Barillas Nuñez EN.pdf";

    const cvInicio = document.querySelector('main a[download][id="CV_Proyectos"]');
    if (cvInicio) cvInicio.setAttribute("href", cvPath);

    const cvSobreMi2 = document.getElementById("CV_Sobre_mi");
    if (cvSobreMi2) cvSobreMi2.setAttribute("href", cvPath);

    // Footer
    const footerP = document.querySelector(".footer_Portafolio p");
    if (footerP) footerP.textContent = t.footer_descripcion;

    const navFooterH2 = document.querySelector(".footer_navegacion h2");
    if (navFooterH2) navFooterH2.textContent = t.footer_navegacion;

    const navFooter = document.querySelectorAll(".footer_navegacion a");
    if (navFooter.length >= 6) {
      navFooter[0].textContent = t.nav_inicio;
      navFooter[1].textContent = t.nav_sobre_mi;
      navFooter[2].textContent = t.nav_experiencia;
      navFooter[3].textContent = t.nav_lenguajes;
      navFooter[4].textContent = t.nav_proyectos;
      navFooter[5].textContent = t.nav_contacto;
    }

    const footerContacto = document.querySelector(".footer_Contacto");
    if (footerContacto) {
      const fch2 = footerContacto.querySelector("h2");
      const fcp = footerContacto.querySelectorAll("p");
      const fca = footerContacto.querySelector("a");
      if (fch2) fch2.textContent = t.footer_contacto_titulo;
      if (fcp.length >= 2) {
        fcp[0].textContent = t.footer_disponible;
        fcp[1].textContent = t.footer_ubicacion;
      }
      if (fca) fca.textContent = t.trabajemos_juntos;
    }

    const footerCopy = document.querySelector("footer > div:last-child h4");
    if (footerCopy) footerCopy.innerHTML = t.derechos;

    // Guardar preferencia
    localStorage.setItem("idioma", idioma);

  } catch (error) {
    console.error("Error al cambiar idioma:", error);
  }
}

// Detectar idioma del navegador
function detectarIdioma() {
  const idiomaGuardado = localStorage.getItem("idioma");
  if (idiomaGuardado) return idiomaGuardado;
  const idiomaNavegador = navigator.language || navigator.userLanguage;
  return idiomaNavegador.startsWith("es") ? "es" : "en";
}

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  const btnIdioma = document.getElementById("btn-idioma");
  if (!btnIdioma) return;

  const idiomaActual = detectarIdioma();
  cambiarIdioma(idiomaActual);
  btnIdioma.textContent = idiomaActual === "es" ? "EN" : "ES";

  btnIdioma.addEventListener("click", () => {
    const nuevoIdioma = btnIdioma.textContent === "EN" ? "en" : "es";
    cambiarIdioma(nuevoIdioma);
    btnIdioma.textContent = nuevoIdioma === "es" ? "EN" : "ES";
  });
});