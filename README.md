# 🎯 Ahorcado Interactivo

Un juego del ahorcado moderno e interactivo desarrollado con tecnologías web estándar. Cuenta con múltiples niveles de dificultad, diseño responsivo, modo oscuro, sistema de audio y contador de errores dinámico.

![Ahorcado Game Preview](https://img.shields.io/badge/Status-Live-brightgreen) 
![Responsive](https://img.shields.io/badge/Responsive-Yes-blue) 
![Accessible](https://img.shields.io/badge/Accessible-Yes-green)
![Audio](https://img.shields.io/badge/Audio-Web_API-orange)
![Theme](https://img.shields.io/badge/Theme-Dark%2FLight-purple)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-success)

## 🚀 Demo en Vivo

La aplicación está disponible y completamente funcional. ¡Pruébala ahora!

## ✨ Características Principales

### 🎮 Funcionalidades del Juego
- **3 Niveles de Dificultad**: Principiante (4-5 letras), Profesional (6-8 letras), Experto (palabras complejas)
- **Teclado Virtual Interactivo**: Click en las letras para jugar
- **Sistema de Errores Avanzado**: Contador dinámico con progreso visual y colores adaptativos
- **Audio Interactivo**: Sistema de sonidos con Web Audio API para feedback auditivo
- **Palabras Dinámicas**: Base de datos extensa de palabras en español
- **Reinicio Automático**: Funcionalidad de "Jugar de nuevo"
- **Control de Audio**: Botón de mute/unmute con persistencia de preferencias

### 🎨 Diseño y UX
- **Diseño Moderno**: Interfaz elegante con efectos glassmorphism
- **Modo Oscuro/Claro**: Cambio de tema con persistencia en localStorage
- **Sistema de Progreso Visual**: Barra de progreso de errores con estados dinámicos (verde → amarillo → rojo)
- **Contador de Errores Inteligente**: Indicador visual que cambia de color según la proximidad al límite
- **Animaciones Suaves**: Transiciones y efectos hover elegantes con efectos shimmer
- **Gradientes Modernos**: Fondos con gradientes vibrantes personalizados
- **Layout Responsivo Horizontal**: Error tracker optimizado para aprovechamiento del espacio
- **Select Estilizado**: Dropdown personalizado sin flechas nativas con mejor UX

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
  - Web Audio API para efectos de sonido
  - Dynamic State Management

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

### Sistema de Audio
```javascript
// Web Audio API para sonidos nativos
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
// Generación de tonos sin archivos externos
```

### Sistema de Progreso Dinámico
```javascript
// Estado dinámico del contador de errores
function updateErrorProgress(errores) {
  errorCountElement.className = errores <= 2 ? '' : 
                                errores <= 4 ? 'warning' : 'danger';
}
```

### Sistema de Temas
```javascript
// Persistencia del tema elegido
localStorage.setItem("theme", "dark");
body.setAttribute("data-theme", "dark");
```

### Responsividad Avanzada
```css
/* Layout horizontal optimizado */
.d-flex.gap-6 { gap: 3rem !important; }

/* Mobile First Approach con breakpoints específicos */
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 576px) { /* Móviles */ }
@media (max-width: 400px) { /* Móviles pequeños */ }
```

### Accesibilidad
```html
<!-- ARIA Labels -->
<button aria-label="Cambiar tema">
  <i class="fas fa-moon"></i>
</button>
```

## 🚀 Cómo Ejecutar

1. *Clonar el repositorio**:
   ```bash
   git clone https://github.com/WINDZOV/Ahorcado-
   ```

2. **Navegar al directorio**:
   ```bash
   cd ahorcado
   ```
   Y abrir en un navegador usando el servidor local como Live Server

3. **Abrir en el navegador**:
   - Abrir https://windzov.github.io/Ahorcado-/ directamente en el navegador
  

## 🎮 Cómo Jugar

1. **Selecciona tu nivel**: Principiante, Profesional o Experto
2. **Adivina la palabra**: Click en las letras del teclado virtual
3. **¡Cuidado con los errores!**: Máximo 6 errores permitidos
4. **Gana o pierde**: ¡Intenta adivinar antes de que se complete el ahorcado!

## 🌟 Características Destacadas

### Experiencia de Usuario
- ✅ **Interfaz Intuitiva**: Diseño claro y fácil de usar
- ✅ **Feedback Visual Avanzado**: Sistema de colores dinámico para estados de error
- ✅ **Feedback Auditivo**: Sonidos generados con Web Audio API sin archivos externos
- ✅ **Persistencia Inteligente**: Tema y preferencias de audio se mantienen entre sesiones
- ✅ **Reset Inteligente**: El select se resetea automáticamente al recargar
- ✅ **Layout Optimizado**: Diseño horizontal que aprovecha mejor el espacio en pantalla

### Rendimiento y Optimización
- ✅ **Carga Rápida**: Optimización de recursos y código minificado
- ✅ **Sin Dependencias Pesadas**: Solo librerías esenciales (Bootstrap + Font Awesome)
- ✅ **CSS Optimizado**: Selectores eficientes y código limpio con variables CSS
- ✅ **Audio Nativo**: Web Audio API elimina la necesidad de archivos de sonido externos
- ✅ **Responsive Inteligente**: Breakpoints específicos para cada tipo de dispositivo

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

- [x] ~~Sistema de puntuación~~ ✅ **Implementado**: Contador de errores dinámico con colores
- [x] ~~Sonidos y efectos de audio~~ ✅ **Implementado**: Sistema de audio Web API
- [ ] Categorías de palabras temáticas
- [ ] Animación del ahorcado dibujándose paso a paso
- [ ] Modo multijugador en tiempo real
- [ ] Estadísticas de partidas guardadas
- [ ] Sistema de logros y badges
- [ ] Diccionario de pistas para palabras difíciles
- [ ] Modo de práctica con palabras específicas
- [ ] Integración con API de palabras externas

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
