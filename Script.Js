/* =====================================================
   ALMACÉN DE CALZADO - EL BUEN PASO
   Carga dinámica del catálogo desde productos.json
   ===================================================== */

// Iconos por tipo de producto (asignación según nombre)
function obtenerIcono(nombreProducto) {
    const nombre = nombreProducto.toLowerCase();
    if (nombre.includes('tenis') || nombre.includes('running')) return 'fa-person-running';
    if (nombre.includes('botas')) return 'fa-boot';
    if (nombre.includes('botines')) return 'fa-socks';
    if (nombre.includes('sandalias')) return 'fa-person-walking';
    if (nombre.includes('formales')) return 'fa-briefcase';
    if (nombre.includes('escolares')) return 'fa-graduation-cap';
    if (nombre.includes('deportiv')) return 'fa-dumbbell';
    if (nombre.includes('tacones') || nombre.includes('tacon')) return 'fa-star';
    return 'fa-shoe-prints';
}

// Función principal: cargar productos desde JSON
async function cargarProductos() {
    const contenedor = document.getElementById('catalogo-productos');
    
    try {
        const respuesta = await fetch('productos.json');
        
        if (!respuesta.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        
        const productos = await respuesta.json();
        mostrarProductos(productos, contenedor);
        
    } catch (error) {
        console.error('Error:', error);
        contenedor.innerHTML = `
            <p class="cargando" style="color: #e74c3c;">
                <i class="fas fa-exclamation-triangle"></i>
                No se pudieron cargar los productos. 
                Asegúrate de abrir este sitio mediante un servidor local 
                (o usa Live Server en VS Code).
            </p>
        `;
    }
}

// Mostrar productos en el DOM
function mostrarProductos(productos, contenedor) {
    contenedor.innerHTML = '';
    
    if (!productos || productos.length === 0) {
        contenedor.innerHTML = '<p class="cargando">No hay productos disponibles.</p>';
        return;
    }
    
    productos.forEach(producto => {
        const card = document.createElement('article');
        card.className = 'producto-card';
        
        const icono = obtenerIcono(producto.nombre);
        
        card.innerHTML = `
            <span class="producto-codigo">${producto.codigo}</span>
            <div class="producto-icono">
                <i class="fas ${icono}"></i>
            </div>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-marca">${producto.marca}</p>
            <p class="producto-precio">$${producto.precio}.00</p>
        `;
        
        contenedor.appendChild(card);
    });
}

// Scroll suave para los enlaces de navegación
function configurarScrollSuave() {
    document.querySelectorAll('.nav-link, .banner-btn').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const seccion = document.querySelector(href);
                if (seccion) {
                    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    configurarScrollSuave();
    console.log('👟 Almacén de Calzado "Paso Firme" - Sistema cargado');
});
