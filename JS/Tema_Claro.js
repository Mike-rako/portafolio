function Tema_claro() {
    const root = document.documentElement;
    document.getElementById("Tema").src = "media/Tema_claro.png";;
    document.getElementById("github").src="media/github2.png";
    
    // Aplicar tema claro con variables CSS
    root.style.setProperty('--color-bg-dark', '#ffffff');
    root.style.setProperty('--color-bg-darker', '#f8f9fa');
    root.style.setProperty('--color-bg-light', '#e9ecef');
    root.style.setProperty('--color-border', '#dee2e6');
    root.style.setProperty('--color-text', '#212529');
    root.style.setProperty('--color-text-white', '#212529');
    
    // Cambiar body directamente
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#212529';
    
    // Cambiar todos los backgrounds oscuros a claros
    document.querySelectorAll("*").forEach(elemento => {
        const styles = window.getComputedStyle(elemento);
        const bgColor = styles.backgroundColor;
        
        // Convertir backgrounds oscuros
        if (bgColor === 'rgb(15, 17, 20)' || bgColor === 'rgba(15, 17, 20, 0.95)') {
            elemento.style.backgroundColor = '#ffffff';
        } else if (bgColor === 'rgb(19, 22, 25)') {
            elemento.style.backgroundColor = '#f8f9fa';
        } else if (bgColor === 'rgb(30, 34, 39)') {
            elemento.style.backgroundColor = '#e9ecef';
        } else if (bgColor === 'rgb(39, 44, 51)') {
            elemento.style.backgroundColor = '#dee2e6';
        }
        
        // Cambiar textos (excepto títulos H1 y H2)
        if (elemento.tagName !== 'H1' && elemento.tagName !== 'H2') {
            if (styles.color === 'rgb(206, 206, 206)' || styles.color === 'rgb(248, 250, 252)') {
                elemento.style.color = '#212529';
            }
        } else {
            // Los títulos H1 y H2 en modo claro
            elemento.style.color = '#cc2055';
        }
        
        // Cambiar bordes
        if (styles.borderColor === 'rgb(39, 44, 51)' || styles.borderTopColor === 'rgb(39, 44, 51)') {
            elemento.style.borderColor = '#dee2e6';
        }
        
        // Ajustar header específicamente
        if (elemento.tagName === 'HEADER') {
            elemento.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            elemento.style.borderBottomColor = '#dee2e6';
        }
        
    // Ajustar main
        if (elemento.tagName === 'MAIN') {
            elemento.style.backgroundColor = '#ffffff';
        }
        
        if (elemento.id === 'Nombre') {
            elemento.style.color = '#212529';
            elemento.style.borderRightColor = '#212529';
        }
        if(elemento.tagName=="IMG" && elemento.id!="Tema" && elemento.id!="github"){
            if(document.querySelector("header")?.contains(elemento) || document.querySelector("main")?.contains(elemento) && elemento.id!=="foto" ||
            document.querySelector("#CV_Sobre_mi")?.contains(elemento)){
                elemento.style.filter = "brightness(0)";
            }
        }
        
    });
    
    // Ajustar sombras para tema claro
    document.querySelectorAll('.Proyectos, .tarjetas_especializaciones, .BarrasLenguajes').forEach(el => {
        el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
    
    // Ajustar footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.background = 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)';
    }
    
    // Ajustar modal backdrop si existe
    const style = document.createElement('style');
    style.id = 'tema-claro-styles';
    style.textContent = `
        .tema-claro .modal_Contenedor {
            background-color: rgba(255, 255, 255, 0.95) !important;
        }
        .tema-claro .Proyectos.modal {
            background-color: #ffffff !important;
        }
        .tema-claro #menu {
            background-color: #f8f9fa !important;
        }
    `;
    document.head.appendChild(style);
    
    // Añadir clase al body
    document.body.classList.add('tema-claro');
    
    // Guardar preferencia
    localStorage.setItem('tema', 'claro');
}

function Tema_oscuro() {
    const root = document.documentElement;
    const temaBtn = document.getElementById("Tema");
    
    // Cambiar el icono
    temaBtn.src = "media/Tema_oscuro.png";
    
    // Restaurar variables CSS originales
    root.style.setProperty('--color-bg-dark', '#0f1114');
    root.style.setProperty('--color-bg-darker', '#131619');
    root.style.setProperty('--color-bg-light', '#1e2227');
    root.style.setProperty('--color-border', '#272c33');
    root.style.setProperty('--color-text', '#cecece');
    root.style.setProperty('--color-text-white', '#f8fafc');
    
    // Remover estilos inline
    document.querySelectorAll("*").forEach(elemento => {
        elemento.style.backgroundColor = '';
        elemento.style.color = '';
        elemento.style.filter = '';
        elemento.style.boxShadow = '';
        elemento.style.borderColor = '';
    });
    
    // Remover estilos adicionales
    const extraStyles = document.getElementById('tema-claro-styles');
    if (extraStyles) {
        extraStyles.remove();
    }
    
    document.body.classList.remove('tema-claro');
    localStorage.setItem('tema', 'oscuro');
    
    // Recargar para limpiar completamente
    location.reload();
}

// Event listener para el botón de tema
document.querySelector("#Tema").addEventListener("click", () => {
    const temaActual = localStorage.getItem('tema') || 'oscuro';
    
    if (temaActual === 'oscuro') {
        Tema_claro();
    } else {
        Tema_oscuro();
    }
});

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'claro') {
        Tema_claro();
    }
});