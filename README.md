# 🎯 Ahorcado Interactivo

Un juego del ahorcado moderno e interactivo desarrollado con tecnologías web estándar. Cuenta con múltiples niveles de dificultad, diseño responsivo y modo oscuro.

![Ahorcado Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Responsive](https://img.shields.io/badge/Responsive-Yes-blue) ![Accessible](https://img.shields.io/badge/Accessible-Yes-green)

## 🚀 Demo en Vivo

La aplicación está disponible y completamente funcional. ¡Pruébala ahora!

## ✨ Características Principales

### 🎮 Funcionalidades del Juego
- **3 Niveles de Dificultad**: Principiante (4-5 letras), Profesional (6-8 letras), Experto (palabras complejas)
- **Teclado Virtual Interactivo**: Click en las letras para jugar
- **Sistema de Errores**: Máximo 6 errores por partida
- **Palabras Dinámicas**: Base de datos extensa de palabras en español
- **Reinicio Automático**: Funcionalidad de "Jugar de nuevo"

### 🎨 Diseño y UX
- **Diseño Moderno**: Interfaz elegante con efectos glassmorphism
- **Modo Oscuro/Claro**: Cambio de tema con persistencia en localStorage
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Gradientes Modernos**: Fondos con gradientes vibrantes personalizados
- **Select Estilizado**: Dropdown personalizado sin flechas nativas

### ♿ Accesibilidad
- **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
- **Navegación por Teclado**: Soporte completo para navegación sin mouse
- **Alto Contraste**: Soporte para modo de alto contraste del sistema
- **Reducción de Movimiento**: Respeto por las preferencias de movimiento reducido
- **Semántica HTML**: Estructura HTML5 semánticamente correcta

### 📱 Responsivo
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints Múltiples**: Adaptación perfecta en móviles, tablets y desktop
- **Teclado Adaptativo**: Botones del teclado virtual se ajustan según el tamaño de pantalla
- **Contenedor Flexible**: Anchos adaptativos con límites máximos inteligentes

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con:
  - Flexbox & CSS Grid
  - Custom Properties (Variables CSS)
  - Media Queries avanzadas
  - Transforms & Transitions
  - Gradients & Backdrop-filter
- **JavaScript ES6+**: Lógica del juego con:
  - Arrow Functions
  - Template Literals
  - Array Methods (filter, includes, etc.)
  - LocalStorage API
  - Event Listeners
  - DOM Manipulation

### Frameworks y Librerías
- **Bootstrap 5.3.3**: Sistema de grid responsivo y componentes UI
- **Font Awesome 6.0.0**: Iconografía moderna y consistente

### Herramientas de Desarrollo
- **CSS Variables**: Para manejo dinámico de temas
- **SVG Icons**: Iconos vectoriales personalizados para el select
- **Data Attributes**: Para manejo de estados del tema

## 📁 Estructura del Proyecto

```
ahorcado/
├── index.html          # Página principal
├── juego.css          # Estilos principales
├── juego.js           # Lógica del juego
└── README.md          # Documentación
```

## 🎯 Funcionalidades Técnicas

### Sistema de Temas
```javascript
// Persistencia del tema elegido
localStorage.setItem("theme", "dark");
body.setAttribute("data-theme", "dark");
```

### Responsividad
```css
/* Mobile First Approach */
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 576px) { /* Móviles */ }
```

### Accesibilidad
```html
<!-- ARIA Labels -->
<button aria-label="Cambiar tema">
  <i class="fas fa-moon"></i>
</button>
```

## 🚀 Cómo Ejecutar

1. **Clonar el repositorio**:
   ```bash
   git clone [url-del-repositorio]
   ```

2. **Navegar al directorio**:
   ```bash
   cd ahorcado
   ```

3. **Abrir en el navegador**:
   - Abrir `index.html` directamente en el navegador
   - O usar un servidor local como Live Server

## 🎮 Cómo Jugar

1. **Selecciona tu nivel**: Principiante, Profesional o Experto
2. **Adivina la palabra**: Click en las letras del teclado virtual
3. **¡Cuidado con los errores!**: Máximo 6 errores permitidos
4. **Gana o pierde**: ¡Intenta adivinar antes de que se complete el ahorcado!

## 🌟 Características Destacadas

### Experiencia de Usuario
- ✅ **Interfaz Intuitiva**: Diseño claro y fácil de usar
- ✅ **Feedback Visual**: Colores distintivos para aciertos y errores
- ✅ **Persistencia**: El tema elegido se mantiene entre sesiones
- ✅ **Reset Inteligente**: El select se resetea automáticamente al recargar

### Rendimiento
- ✅ **Carga Rápida**: Optimización de recursos y código
- ✅ **Sin Dependencias Pesadas**: Solo librerías esenciales
- ✅ **CSS Optimizado**: Selectores eficientes y código limpio

### Compatibilidad
- ✅ **Cross-Browser**: Compatible con navegadores modernos
- ✅ **Progressive Enhancement**: Funciona incluso sin JavaScript
- ✅ **Graceful Degradation**: Experiencia consistente en todos los dispositivos

## 👨‍💻 Desarrollo

### Autor
**Nina K.** - Desarrollo Frontend

### Derechos
**WiNDZOV** © 2025 All Rights Reserved

## 🐛 Reportar Issues

Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un issue en el repositorio.

## 📈 Futuras Mejoras

- [ ] Sistema de puntuación
- [ ] Categorías de palabras
- [ ] Sonidos y efectos de audio
- [ ] Animación del ahorcado dibujándose
- [ ] Modo multijugador
- [ ] Estadísticas de partidas

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
