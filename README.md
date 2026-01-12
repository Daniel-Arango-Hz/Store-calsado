# 👟 Tienda de Zapatos Premium

Aplicación web moderna para gestión de inventario y venta de calzado premium. Construida con **Astro**, **Tailwind CSS** y **JavaScript vanilla**.

## 🎯 Características principales

### Para Clientes
- 📱 Catálogo de productos con filtrado
- 🖼️ Galería de imágenes por producto
- 📋 Vista detallada de productos
- 🛒 Interfaz responsiva y moderna

### Para Administradores
- 🔐 Autenticación segura
- ➕ Crear productos con múltiples imágenes
- ✏️ Editar productos existentes
- 🗑️ Eliminar productos
- 📦 Gestión de inventario
- 📊 Módulos de Pedidos, Salidas y Caja (en desarrollo)

## 🚀 Tecnologías utilizadas

- **Astro** - Framework web moderno y rápido
- **Tailwind CSS** - Framework de estilos utilitarios
- **JavaScript ES6+** - Lógica del cliente
- **LocalStorage** - Persistencia de datos de sesión

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes Astro reutilizables
│   ├── Header.astro
│   ├── ProductGrid.astro
│   ├── ProductModal.astro
│   ├── AddProductModal.astro
│   ├── EditProductModal.astro
│   ├── DeleteProductModal.astro
│   ├── Login.astro
│   └── ...otros componentes
├── pages/
│   └── index.astro      # Página principal
├── scripts/             # Lógica JavaScript
│   ├── header.js
│   ├── loginDialog.js
│   ├── productGrid.js
│   ├── productModal.js
│   └── pageNavigation.js
└── style/
    └── global.css
```

## 🔐 Autenticación

### Credenciales de prueba
```
Usuario: admin
Contraseña: admin123
```

El sistema usa `localStorage` para mantener la sesión del administrador.

## 📋 Guía de uso

### Como Cliente
1. Navega por el catálogo de productos
2. Haz click en cualquier producto para ver detalles
3. Visualiza la galería de imágenes del producto

### Como Administrador
1. Haz click en el icono de usuario (esquina superior derecha)
2. Selecciona "Iniciar Sesión"
3. Ingresa las credenciales: `admin` / `admin123`
4. Accede al Panel de Administración

#### Operaciones disponibles:

**Crear Producto**
- Haz click en "+ Agregar Producto"
- Completa todos los campos
- Carga múltiples imágenes
- Haz click en "Crear Producto"

**Editar Producto**
- Haz click en el icono ✏️ en cualquier tarjeta
- Modifica los datos necesarios
- Puedes actualizar las imágenes
- Haz click en "Guardar cambios"

**Eliminar Producto**
- Haz click en el icono 🗑️ en cualquier tarjeta
- Confirma la eliminación en el diálogo

## 🎨 Características de diseño

- ✅ Interfaz responsiva (mobile, tablet, desktop)
- ✅ Modo oscuro compatible
- ✅ Transiciones suaves
- ✅ Modales bien diseñados
- ✅ Preview de imágenes en tiempo real
- ✅ Validación de formularios

## 📦 Modales disponibles

### ProductModal
- Visualización detallada de productos
- Galería de imágenes interactiva
- Información completa del producto

### AddProductModal
- Crear nuevos productos
- Carga múltiple de imágenes
- Preview dinámico
- Contador de archivos

### EditProductModal
- Editar datos de productos
- Actualizar imágenes
- Eliminar imágenes individuales
- Preview actualizado

### DeleteProductModal
- Confirmación antes de eliminar
- Prevención de eliminaciones accidentales

## 🔄 Navegación del Admin

- **📦 Inventario** - Gestión de productos
- **📋 Pedidos / Entradas** - Registro de pedidos (en desarrollo)
- **📉 Salidas** - Movimientos de salida (en desarrollo)
- **💰 Caja** - Gestión de caja (en desarrollo)

## 💾 Gestión de datos

Los datos de productos se almacenan en el componente `ProductGrid.astro`. Para persistencia completa, integra con una API backend.

## 🛠️ Scripts principales

### `header.js`
- Manejo del login/logout
- Sincronización del estado admin
- Dropdown del usuario

### `productGrid.js`
- Lógica de tarjetas de productos
- Mostrar/ocultar botones admin
- Abrir modales de editar/eliminar

### `productModal.js`
- Visualización de detalles
- Galería de imágenes
- Agregar al carrito (placeholder)

### `pageNavigation.js`
- Navegación entre vistas del admin
- Sincronización de menú

### `loginDialog.js`
- Autenticación de usuario
- Validación de credenciales
- Gestión de sesión

## 🚀 Próximas características

- [ ] Backend API para persistencia de datos
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Carrito de compras funcional
- [ ] Sistema de pagos
- [ ] Reportes y análiticas
- [ ] Email de confirmación
- [ ] Múltiples usuarios admin
- [ ] Historial de cambios

## 📝 Notas de desarrollo

- El proyecto sigue **buenas prácticas de JavaScript**
- La lógica está separada en archivos modulares
- Los estilos usan **Tailwind CSS** sin duplicación
- Los componentes son **reutilizables y escalables**

## 👨‍💻 Autor

Desarrollado como aplicación web moderna para gestión de tienda de zapatos.

## 📄 Licencia

Este proyecto es de uso privado.

---

**Última actualización:** 2024
**Versión:** 1.0.0
