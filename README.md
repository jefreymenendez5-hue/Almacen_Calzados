# 🥾 Almacén de Calzado - El Buen Paso

Proyecto escolar de un sitio web estático para un almacén de calzado, integrado con datos de **MongoDB** mediante archivos JSON.

## 📌 Descripción

Sitio web 100% estático (HTML, CSS y JavaScript puro) que presenta el catálogo de un almacén de calzado, así como las evidencias de las consultas realizadas a la base de datos MongoDB del proyecto.

## ✅ Funcionalidades implementadas

1. **Encabezado con menú de navegación** (Inicio, Productos, Contacto, Evidencias)
2. **Banner principal** con título, subtítulo y botón de acción
3. **Catálogo dinámico** que carga los productos desde `productos.json` mediante `fetch()` (sin datos hardcodeados)
4. **Sección de Evidencias** con 8 capturas de consultas de MongoDB en formato de galería/grid
5. **Sección de Contacto** con teléfono, dirección, correo y horario
6. **Footer** con nombre del proyecto y año
7. **Diseño responsive** con tarjetas modernas, sombras suaves y efectos hover
8. **Scroll suave** entre secciones

## 📁 Estructura del proyecto

```
/
├── index.html          # Página principal
├── styles.css          # Estilos del sitio
├── script.js           # Carga dinámica de productos
├── productos.json      # Datos de productos (fuente)
├── ventas.json         # Datos de ventas
├── clientes.json       # Datos de clientes
├── images/
│   ├── evidencia1.png  # Productos con stock < 5
│   ├── evidencia2.png  # Productos marca Nike
│   ├── evidencia3.png  # Detalle stock bajo
│   ├── evidencia4.png  # Búsqueda venta V001
│   ├── evidencia5.png  # Detalle de venta
│   ├── evidencia6.png  # Listado de clientes
│   ├── evidencia7.png  # Catálogo completo
│   └── evidencia8.png  # Registro de ventas
└── README.md
```

## 🌐 Rutas / Anclas funcionales

| Ruta | Descripción |
|------|-------------|
| `index.html` | Página principal del sitio |
| `#inicio` | Banner principal |
| `#productos` | Catálogo dinámico de productos |
| `#evidencias` | Galería de capturas de MongoDB |
| `#contacto` | Información de contacto |
| `productos.json` | Fuente de datos del catálogo |

## 🗄️ Modelo de datos (productos.json)

```json
{
  "codigo": "P001",
  "nombre": "Tenis Deportivos",
  "marca": "Nike",
  "talla": 42,
  "color": "Negro",
  "precio": 60,
  "stock": 10
}
```

## 🚀 Cómo ejecutar

> ⚠️ Debido al uso de `fetch()` para cargar el JSON, es necesario abrir el proyecto mediante un servidor local (no abriendo el archivo `index.html` directamente con doble clic).

**Opciones:**

- **VS Code**: instalar extensión *Live Server* y abrir `index.html` con "Open with Live Server"
- **Python**: en la carpeta del proyecto ejecutar `python -m http.server 8000` y abrir `http://localhost:8000`
- **Publicar online**: usar la pestaña *Publish*

## 🛠️ Tecnologías utilizadas

- HTML5 (semántico)
- CSS3 (Grid, Flexbox, variables)
- JavaScript (ES6+, async/await, fetch API)
- Font Awesome 6 (iconos)
- Google Fonts (Poppins)

## 📅 Información del proyecto

- **Nombre**: Almacén de Calzado "El Buen Paso"
- **Año**: 2026
- **Tipo**: Proyecto escolar
- **Base de datos**: MongoDB Atlas (Cluster 0 → Almacén_Calzado)
- **Colecciones**: Productos (10), Ventas (5), Clientes (5)

## 🔮 Próximos pasos sugeridos

- Agregar filtros por marca, color o talla en el catálogo
- Implementar buscador de productos
- Añadir modal con detalle ampliado del producto
- Sección de visualizaciones (gráficas) con Chart.js usando ventas.json
- Modo oscuro
