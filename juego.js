
let nivel = document.querySelector('#nivel');
let palabra = '';
let palabraOculta = ''; 
let errores = 0; 
let letrasUsadas = [];
let sonidoHabilitado = true;
let idiomaActual = 'es'; // español por defecto

// Variables para elementos DOM
const modal = document.getElementById("modal");
const aboutButton = document.getElementById("aboutButton");
const closeButton = document.querySelector(".close-button");
const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.getElementById("soundToggle");
const languageToggle = document.getElementById("languageToggle");
const nivel1 = [ "abra", "agua", "aire", "alto", "ancho", "arena", "arbol", "arroz", "azul", "banco",
    "barco", "barro", "barrio", "brazo", "caja", "calor", "calle", "campo", "canto", "carne",
    "casa", "cerca", "cielo", "claro", "cobre", "coco", "coche", "comida", "correr", "corte",
    "cruz", "cuadro", "cuenta", "cuerpo", "cultura", "curva", "dato", "denso", "deber", "dedo",
    "diente", "dibujo", "dinero", "duro", "dulce", "echo", "entrada", "equipo", "error", "escuela",
    "espalda", "espera", "estrella", "estufa", "fila", "fondo", "fuerza", "fuego", "fuente", "ganar",
    "gato", "gente", "guerra", "gusto", "hecho", "huevo", "hielo", "hierro", "imagen", "invierno",
    "isla", "joven", "juego", "junto", "justo", "kilo", "lago", "largo", "lento", "letra", "libro",
    "libre", "limpio", "liso", "lista", "llama", "llave", "luz", "madre", "mango", "marco", "marca",
    "masa", "mayo", "mesa", "mitad", "modelo", "mundo", "musculo", "nacer", "nombre", "noche", "nube",
    "numero", "ocho", "ojo", "ola", "oro", "pagar", "pais", "pan", "papa", "papel", "parque", "parte",
    "patio", "piedra", "piel", "piso", "playa", "plaza", "poder", "pollo", "puerta", "pueblo",
    "punto", "puro", "queso", "rapido", "raro", "razon", "recto", "reloj", "rico", "risa", "roca",
    "rojo", "roto", "rubio", "ruido", "saber", "sabio", "saco", "sala", "sangre", "sabor", "seco",
    "seguro", "silla", "simple", "sitio", "sobre", "sol", "suelo", "sueno", "tabla", "taza", "techo",
    "tela", "granja", "templo", "tierra", "tiempo", "tipo", "tocar", "total", "trabajo", "traje", "trama",
    "tren", "trigo", "triste", "truco", "tubo", "tumba", "unico", "uva", "vaca", "vapor", "vaso",
    "verde", "viaje", "vida", "viento", "viejo", "vino", "vivo", "volar", "vuelta", "yema",
    "zapato", "zona"];

const nivel2 = ["abismo", "acceso", "admirar", "afinar", "agujero", "alarma", "alcance", "aldea", "almohada", "altitud",
    "amplio", "analizar", "anhelo", "anillo", "anotar", "ansioso", "antena", "antiguo", "apetito", "aportar",
    "aprobar", "arquero", "artesano", "asesino", "asombro", "ataque", "atender", "aterrizar", "atletico", "audaz",
    "aumento", "avenida", "aviso", "azucar", "balance", "bandera", "barrera", "beneficio", "billete", "bodega",
    "botella", "braille", "brillante", "brindar", "brujula", "burbuja", "cabello", "cadena", "cansancio", "capilla",
    "capitan", "caridad", "cautela", "cemento", "censura", "cercano", "ceremonia", "ciclista", "cifrado", "circuito",
    "claridad", "cobarde", "cohete", "colonia", "comando", "compas", "concepto", "concurso", "confiar", "confuso",
    "congreso", "consejo", "constante", "contorno", "contrato", "corona", "cosecha", "creacion", "cristal", "cronico",
    "crucial", "cruel", "cueva", "culpable", "curioso", "cursivo", "defensa", "delgado", "delirio", "demonio",
    "dentista", "desafio", "desfile", "desgaste", "desierto", "detalle", "diagrama", "dificil", "dinamico", "dinastia",
    "diploma", "discordia", "disfrute", "distante", "dominio", "dormitorio", "dramatico", "duda", "duplex", "economia",
    "editor", "efectivo", "ejemplar", "elastico", "embargo", "emergente", "emitir", "emocion", "empresa", "encontrar",
    "energia", "enfasis", "enigma", "entusiasmo", "esencia", "espejismo", "espiral", "estacion", "estrecho", "estructura",
    "estudio", "euforia", "evento", "exhibir", "exito", "fabricar", "familiar", "fantasma", "felicidad", "feroz",
    "fibras", "figura", "filosofia", "firmeza", "fluctuar", "fortuna", "fracaso", "fronterizo", "fundador", "furioso",
    "galaxia", "ganancia", "gigante", "glorioso", "gobierno", "gravedad", "habitual", "herencia", "hilarante", "hipotesis",
    "horizontal", "horizonte", "humedad", "hurgar", "identidad", "iluminar", "impacto", "impresion", "increible", "indicio",
    "industria", "influir", "informal", "ingenioso", "iniciativa", "instante", "integridad", "intenso", "invasion", "invisible",
    "ironia", "isotopo", "jornada", "jubilado", "juicio", "justicia", "kilometro", "laboral", "lagrima", "lanzamiento",
    "latente", "levantamiento", "lealtad", "legitimo", "lenguaje", "limite", "llamativo", "logica", "lucido", "luminoso",
    "manjar", "manipular", "mansion", "margen", "marino", "matematico", "medalla", "medicina", "metafora", "meteorito",
    "milagro", "misterio", "moderado", "monarca", "motivacion", "mutante", "narrador", "necesidad", "nobleza", "notable",
    "nuclear", "obstaculo", "ocasion", "olvidar", "operador", "opinion", "optimismo", "orgullo", "orientado", "orquesta",
    "oscuro", "paciencia", "paleta", "panico", "paralelo", "patente", "peligro", "perspectiva", "picante", "plomizo"  
];
  const nivel3 = [ "abominable", "absurdo", "abundancia", "acelerador", "acumulador", "adversidad", "afabilidad", "afiliacion", "agigantar", "ahondar",
    "ajedrecista", "alabastro", "alegorico", "algoritmico", "alquimia", "altisonante", "amortiguador", "analitico", "anatomico", "anhelante",
    "animosidad", "anodino", "antropologo", "apaciguar", "apreciativo", "arqueologico", "arrasador", "arrepentimiento", "ascendencia", "astronomia",
    "autenticidad", "autonomo", "aversivo", "avistamiento", "baladron", "burocracia", "cadencia", "calibracion", "capacitacion", "cartografia",
    "cataclismo", "circunstancia", "colision", "complacencia", "complementario", "concatenacion", "concurrencia", "configuracion", "conservadurismo", "consorcio",
    "constructivo", "contaminacion", "contemporaneo", "contingencia", "contradictorio", "corroborar", "cristalografia", "cronologia", "cuadrante", "cuantificable",
    "debilitamiento", "declaracion", "deontologia", "desalentador", "desembocar", "desesperanza", "detonador", "diagonalizacion", "dinamometria", "dinosaurio",
    "discrepancia", "disruptivo", "distorsion", "diversificacion", "documentacion", "efervescencia", "ejecutividad", "electrodo", "elefantiasis", "embarcadero",
    "encapsulamiento", "encriptacion", "entrecortado", "epidemiologia", "equidistante", "esquematico", "estetica", "eufemismo", "evaporacion", "exacerbacion",
    "extraterrestre", "filantropico", "fotovoltaico", "fragmentacion", "funcionalidad", "galvanoplastia", "gastronomia", "geometrizacion", "germinacion", "heterogeneo",
    "hipotermia", "holografia", "homogeneidad", "horizontalidad", "iluminacion", "impregnacion", "incandescente", "incrementador", "indemnizacion", "inescrutable",
    "inflamabilidad", "inmunologia", "insoslayable", "interconectado", "irreconciliable", "justificativo", "legislacion", "linguistico", "marginalidad", "metalurgico"
];

// Palabras en inglés (English words)
const nivel1_en = ["open", "water", "air", "high", "wide", "sand", "tree", "rice", "blue", "bank",
    "boat", "mud", "area", "arm", "box", "heat", "street", "field", "song", "meat",
    "house", "near", "sky", "clear", "copper", "coconut", "car", "food", "run", "cut",
    "cross", "picture", "count", "body", "culture", "curve", "data", "dense", "duty", "finger",
    "tooth", "drawing", "money", "hard", "sweet", "echo", "entry", "team", "error", "school",
    "back", "wait", "star", "stove", "line", "bottom", "force", "fire", "source", "win",
    "cat", "people", "war", "taste", "fact", "egg", "ice", "iron", "image", "winter",
    "island", "young", "game", "together", "fair", "kilo", "lake", "long", "slow", "letter", "book",
    "free", "clean", "smooth", "list", "flame", "key", "light", "mother", "mango", "frame", "brand",
    "mass", "may", "table", "half", "model", "world", "muscle", "born", "name", "night", "cloud",
    "number", "eight", "eye", "wave", "gold", "pay", "country", "bread", "potato", "paper", "park", "part",
    "yard", "stone", "skin", "floor", "beach", "square", "power", "chicken", "door", "town",
    "point", "pure", "cheese", "fast", "rare", "reason", "straight", "clock", "rich", "laugh", "rock",
    "red", "broken", "blonde", "noise", "know", "wise", "bag", "room", "blood", "flavor", "dry",
    "safe", "chair", "simple", "place", "about", "sun", "ground", "dream", "board", "cup", "roof",
    "fabric", "farm", "temple", "earth", "time", "type", "touch", "total", "work", "suit", "plot",
    "train", "wheat", "sad", "trick", "tube", "tomb", "unique", "grape", "cow", "steam", "glass",
    "green", "trip", "life", "wind", "old", "wine", "alive", "fly", "turn", "yolk",
    "shoe", "zone"];

const nivel2_en = ["abyss", "access", "admire", "tune", "hole", "alarm", "reach", "village", "pillow", "altitude",
    "wide", "analyze", "longing", "ring", "note", "anxious", "antenna", "ancient", "appetite", "contribute",
    "approve", "archer", "artisan", "killer", "wonder", "attack", "attend", "land", "athletic", "bold",
    "increase", "avenue", "notice", "sugar", "balance", "flag", "barrier", "benefit", "ticket", "cellar",
    "bottle", "braille", "bright", "offer", "compass", "bubble", "hair", "chain", "fatigue", "chapel",
    "captain", "charity", "caution", "cement", "censure", "nearby", "ceremony", "cyclist", "cipher", "circuit",
    "clarity", "coward", "rocket", "colony", "command", "compass", "concept", "contest", "trust", "confused",
    "congress", "advice", "constant", "outline", "contract", "crown", "harvest", "creation", "crystal", "chronic",
    "crucial", "cruel", "cave", "guilty", "curious", "cursive", "defense", "thin", "delirium", "demon",
    "dentist", "challenge", "parade", "wear", "desert", "detail", "diagram", "difficult", "dynamic", "dynasty",
    "diploma", "discord", "enjoy", "distant", "domain", "bedroom", "dramatic", "doubt", "duplex", "economy",
    "editor", "effective", "exemplary", "elastic", "embargo", "emerging", "emit", "emotion", "company", "find",
    "energy", "emphasis", "enigma", "enthusiasm", "essence", "mirage", "spiral", "station", "narrow", "structure",
    "study", "euphoria", "event", "exhibit", "success", "make", "familiar", "ghost", "happiness", "fierce",
    "fiber", "figure", "philosophy", "firmness", "fluctuate", "fortune", "failure", "border", "founder", "furious"];

const nivel3_en = ["abominable", "absurd", "abundance", "accelerator", "accumulator", "adversity", "affability", "affiliation", "enlarge", "deepen",
    "chess", "alabaster", "allegorical", "algorithmic", "alchemy", "pompous", "shock", "analytical", "anatomical", "yearning",
    "animosity", "bland", "anthropologist", "appease", "appreciative", "archaeological", "devastating", "regret", "ancestry", "astronomy",
    "authenticity", "autonomous", "aversive", "sighting", "braggart", "bureaucracy", "cadence", "calibration", "training", "cartography",
    "cataclysm", "circumstance", "collision", "complacency", "complementary", "concatenation", "concurrence", "configuration", "conservatism", "consortium",
    "constructive", "contamination", "contemporary", "contingency", "contradictory", "corroborate", "crystallography", "chronology", "quadrant", "quantifiable",
    "weakening", "declaration", "deontology", "discouraging", "flow", "despair", "detonator", "diagonalization", "dynamometry", "dinosaur",
    "discrepancy", "disruptive", "distortion", "diversification", "documentation", "effervescence", "executivity", "electrode", "elephantiasis", "pier",
    "encapsulation", "encryption", "choppy", "epidemiology", "equidistant", "schematic", "aesthetic", "euphemism", "evaporation", "exacerbation",
    "extraterrestrial", "philanthropic", "photovoltaic", "fragmentation", "functionality", "electroplating", "gastronomy", "geometrization", "germination", "heterogeneous",
    "hypothermia", "holography", "homogeneity", "horizontality", "illumination", "impregnation", "incandescent", "incrementer", "indemnification", "inscrutable",
    "flammability", "immunology", "unavoidable", "interconnected", "irreconcilable", "justificative", "legislation", "linguistic", "marginality", "metallurgical"];

// Objeto con todos los niveles por idioma
const palabrasPorIdioma = {
    'es': {
        1: nivel1,
        2: nivel2,
        3: nivel3
    },
    'en': {
        1: nivel1_en,
        2: nivel2_en,
        3: nivel3_en
    }
};

// Alfabetos por idioma
const alfabetos = {
    'es': 'abcdefghijklmnñopqrstuvwxyz'.split(''),
    'en': 'abcdefghijklmnopqrstuvwxyz'.split('')
};

// Textos de la interfaz por idioma
const textos = {
    'es': {
        titulo: 'Ahorcado Interactivo',
        seleccionarNivel: '--Elige el Nivel--',
        principiante: 'Principiante',
        profi: 'Profi', 
        experto: 'Experto',
        reiniciar: 'Reiniciar',
        ayuda: 'Ayuda',
        mensajeVictoria: '🎉 ¡Tadam tadam tadaam! La palabra era: ',
        mensajeVictoriaFin: '. ¡Bravoo!',
        mensajeDerrota: '😢 Ai ai ai ai aii. La palabra era: ',
        mensajeDerrotaFin: '. Intenta de nuevo.',
        botonJugarDeNuevo: 'Jugar de nuevo'
    },
    'en': {
        titulo: 'Interactive Hangman',
        seleccionarNivel: '--Choose Level--',
        principiante: 'Beginner',
        profi: 'Pro',
        experto: 'Expert', 
        reiniciar: 'Restart',
        ayuda: 'Help',
        mensajeVictoria: '🎉 Hooray! The word was: ',
        mensajeVictoriaFin: '. Great job!',
        mensajeDerrota: '😢 Oh no! The word was: ',
        mensajeDerrotaFin: '. Try again.',
        botonJugarDeNuevo: 'Play again'
    }
};

// Configuración de errores máximos por nivel
const erroresMaximos = {
    1: 10, // Principiante: 10 errores
    2: 7,  // Pro: 7 errores  
    3: 6   // Experto: 6 errores
};

// Partes del ahorcado en orden de aparición
const partesAhorcado = [
    'base', 'posteVertical', 'posteHorizontal', 'cuerda', 
    'cabeza', 'cuerpo', 'brazoIzq', 'brazoDer', 'piernaIzq', 'piernaDer'
];

// Partes pre-dibujadas por nivel
const partesPreDibujadas = {
    1: [], // Principiante: empieza desde cero
    2: ['base', 'posteVertical', 'posteHorizontal'], // Pro: estructura lista
    3: ['base', 'posteVertical', 'posteHorizontal', 'cuerda'] // Experto: estructura + cuerda
};

const alfabeto = 'abcdefghijklmnñopqrstuvwxyz'.split('');

nivel.addEventListener("change", function() {
    (nivel.value === "0");
    iniciarJuego(nivel.value);
});


//btn1.display.hide

/*btn1.addEventListener("click", function() {
    btn1.disabled = true;
    iniciarJuego(nivel.value);
});
*/
function iniciarJuego(nivelSeleccionado) {
    let palabras = palabrasPorIdioma[idiomaActual][nivelSeleccionado];
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraOculta = Array(palabra.length).fill("_"); // para dibujar guillones bajos '_' == numero de letras en palabra
    errores = 0;
    letrasUsadas = [];
    
    // Mostrar alerta informativa del nivel seleccionado
    const nivelNombres = {
        1: { es: 'Principiante', en: 'Beginner' },
        2: { es: 'Pro', en: 'Pro' },
        3: { es: 'Experto', en: 'Expert' }
    };
    const maxErroresNivel = erroresMaximos[nivelSeleccionado];
    const nombreNivel = nivelNombres[nivelSeleccionado][idiomaActual];
    const tituloNivel = idiomaActual === 'es' ? '¡Juego Iniciado!' : 'Game Started!';
    const mensajeNivel = idiomaActual === 'es' ? 
        `Nivel ${nombreNivel} - Máximo ${maxErroresNivel} errores` : 
        `${nombreNivel} Level - Maximum ${maxErroresNivel} errors`;
    alertaInfo(tituloNivel, mensajeNivel, 3000);
    
    document.querySelector("#palabra").textContent = palabraOculta.join(" ");
    
    // Inicializar dibujo del ahorcado
    inicializarDibujoAhorcado(nivelSeleccionado);
    document.querySelector("#errores").textContent = errores;
    
    // Resetear contador de errores al color verde inicial
    const errorCount = document.getElementById("errores");
    if (errorCount) {
        errorCount.className = "error-count"; // Solo la clase base (verde)
    }
    
    // Resetear barra de progreso de errores
    const progressBar = document.getElementById("errorProgress");
    const maxErrores = erroresMaximos[nivel];
    if (progressBar) {
        progressBar.style.width = "0%";
        progressBar.setAttribute("aria-valuenow", "0");
        progressBar.setAttribute("aria-valuemax", maxErrores);
        const progressText = progressBar.querySelector(".progress-text");
        if (progressText) {
            progressText.textContent = `0/${maxErrores}`;
        } else {
            progressBar.innerHTML = `<span class="progress-text">0/${maxErrores}</span>`;
        }
        progressBar.className = "progress-bar bg-success";
    }
    
    // Actualizar etiquetas de la barra de progreso
    const progressLabels = document.querySelectorAll('.progress-labels small');
    if (progressLabels.length >= 2) {
        progressLabels[1].textContent = `${maxErrores} max`;
    }
    
    generarTeclado();
}

function generarTeclado() {
    let qwertyDiv = document.querySelector("#qwerty");
    qwertyDiv.innerHTML = ""; // Limpia el contenido antes de generar teclas nuevas

    // Definir filas del teclado según el idioma
    let fila1, fila2, fila3;
    
    if (idiomaActual === 'es') {
        fila1 = "abcdefghi".split("");
        fila2 = "jklmnñopq".split("");
        fila3 = "rstuvwxyz".split("");
    } else {
        fila1 = "abcdefghi".split("");
        fila2 = "jklmnopqr".split("");
        fila3 = "stuvwxyz".split("");
    }

  function crearFila(letras) {
        let filaDiv = document.createElement("div");
        filaDiv.classList.add("d-flex", "justify-content-center", "mb-2"); // Centrar y añadir margen

        letras.forEach(letra => {
            let btnLetra = document.createElement("button");
            btnLetra.classList.add("btn", "btn-success", "m-1"); // Estilos de Bootstrap
           // btnLetra.style.width = "40px"; // Tamaño fijo para uniformidad
            //btnLetra.style.height = "40px";
            btnLetra.textContent = letra.toUpperCase(); 
            btnLetra.addEventListener("click", function() {
                pulsarLetra(letra, btnLetra);
            });

            filaDiv.appendChild(btnLetra);
        });

        qwertyDiv.appendChild(filaDiv);
    }

    // Creamos las tres filas del teclado
    crearFila(fila1);
    crearFila(fila2);
    crearFila(fila3);
}

// ============================================
// FUNCIONES DEL DIBUJO DEL AHORCADO
// ============================================

function inicializarDibujoAhorcado(nivel) {
    // Ocultar todas las partes
    partesAhorcado.forEach(parte => {
        const elemento = document.getElementById(parte);
        if (elemento) {
            elemento.style.opacity = '0';
        }
    });
    
    // Mostrar partes pre-dibujadas según el nivel
    const partesIniciales = partesPreDibujadas[nivel] || [];
    partesIniciales.forEach(parte => {
        const elemento = document.getElementById(parte);
        if (elemento) {
            elemento.style.opacity = '1';
        }
    });
}

function dibujarSiguienteParte(nivel) {
    const partesIniciales = partesPreDibujadas[nivel] || [];
    const partesDibujadas = partesIniciales.length + errores - 1;
    
    if (partesDibujadas < partesAhorcado.length) {
        const siguienteParte = partesAhorcado[partesDibujadas];
        const elemento = document.getElementById(siguienteParte);
        if (elemento) {
            elemento.style.opacity = '1';
        }
    }
}

function pulsarLetra(letra, boton) {
    if (letrasUsadas.includes(letra)) return;
    letrasUsadas.push(letra);
    boton.disabled = true;
    let acertado = false;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) {
            palabraOculta[i] = letra;
            acertado = true;
        }
    }

    document.querySelector("#palabra").textContent = palabraOculta.join(" ");

    if (!acertado) {
        errores++;
        document.querySelector("#errores").textContent = errores;
        boton.classList.replace("btn-success", "btn-danger");
        
        // Dibujar siguiente parte del ahorcado
        dibujarSiguienteParte(nivel.value);
        
        updateErrorProgress();
        playSound('error');
    } else {
        playSound('success');
    }

    verificarFinDelJuego();
}

function verificarFinDelJuego() {
    const mensajeFinal = document.getElementById("mensajeFinal");
    const textoMensaje = document.getElementById("textoMensaje");
    const maxErrores = erroresMaximos[nivel.value];

    if (!palabraOculta.includes("_")) {
        // Victoria - usar alerta de éxito
        const tituloVictoria = idiomaActual === 'es' ? '¡Felicidades!' : 'Congratulations!';
        const mensajeVictoria = textos[idiomaActual].mensajeVictoria + palabra.toUpperCase() + textos[idiomaActual].mensajeVictoriaFin;
        
        // Mostrar mensaje original también
        textoMensaje.textContent = mensajeVictoria;
        mensajeFinal.classList.remove("oculto");
        
        // Mostrar alerta moderna
        alertaExito(tituloVictoria, mensajeVictoria, 6000);
        
        playSound('win');
    } else if (errores >= maxErrores) {
        // Derrota - usar alerta de error
        const tituloDerrota = idiomaActual === 'es' ? '¡Juego Terminado!' : 'Game Over!';
        const mensajeDerrota = textos[idiomaActual].mensajeDerrota + palabra.toUpperCase() + textos[idiomaActual].mensajeDerrotaFin;
        
        // Mostrar mensaje original también
        textoMensaje.textContent = mensajeDerrota;
        mensajeFinal.classList.remove("oculto");
        
        // Mostrar alerta moderna
        alertaError(tituloDerrota, mensajeDerrota, 6000);
        
        playSound('lose');
    }
}

// Función para actualizar la barra de progreso de errores
function updateErrorProgress() {
    const progressBar = document.getElementById("errorProgress");
    const progressText = progressBar ? progressBar.querySelector(".progress-text") : null;
    const errorCount = document.getElementById("errores");
    const maxErrores = erroresMaximos[nivel.value];
    
    if (progressBar) {
        const porcentaje = (errores / maxErrores) * 100;
        progressBar.style.width = porcentaje + "%";
        progressBar.setAttribute("aria-valuenow", errores);
        
        if (progressText) {
            progressText.textContent = errores + "/" + maxErrores;
        } else {
            progressBar.innerHTML = `<span class="progress-text">${errores}/${maxErrores}</span>`;
        }
        
        // Cambiar color según proximidad al límite (dinámico por nivel)
        const tercio = Math.ceil(maxErrores / 3);
        if (errores >= maxErrores - tercio) {
            progressBar.className = "progress-bar bg-danger";
        } else if (errores >= tercio) {
            progressBar.className = "progress-bar bg-warning";
        } else {
            progressBar.className = "progress-bar bg-success";
        }
    }
    
    // Cambiar color del contador de errores dinámicamente
    if (errorCount) {
        const tercio = Math.ceil(maxErrores / 3);
        errorCount.className = "error-count";
        if (errores >= maxErrores - tercio) {
            errorCount.classList.add("danger");
        } else if (errores >= tercio) {
            errorCount.classList.add("warning");
        }
        // Si errores < tercio, mantiene la clase base (verde)
    }
}

// Funciones de audio
function playSound(type) {
    if (!sonidoHabilitado) return;
    
    try {
        // Crear contexto de audio solo cuando se necesite (para evitar problemas de autoplay)
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        let frequency;
        let duration;
        
        switch(type) {
            case 'success':
                frequency = 523.25; // Do mayor
                duration = 200;
                break;
            case 'error':
                frequency = 146.83; // Re bemol bajo
                duration = 300;
                break;
            case 'win':
                // Secuencia de victoria: Do-Mi-Sol
                playTone(audioContext, 523.25, 150);
                setTimeout(() => playTone(audioContext, 659.25, 150), 150);
                setTimeout(() => playTone(audioContext, 783.99, 300), 300);
                return;
            case 'lose':
                // Secuencia de derrota: Sol-Fa-Mi-Re
                playTone(audioContext, 392.00, 200);
                setTimeout(() => playTone(audioContext, 349.23, 200), 200);
                setTimeout(() => playTone(audioContext, 329.63, 200), 400);
                setTimeout(() => playTone(audioContext, 293.66, 400), 600);
                return;
        }
        
        playTone(audioContext, frequency, duration);
    } catch (error) {
        console.log('Audio no disponible:', error);
    }
}

function playTone(audioContext, frequency, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

function toggleSound() {
    sonidoHabilitado = !sonidoHabilitado;
    const soundIcon = soundToggle.querySelector("i");
    
    if (sonidoHabilitado) {
        soundIcon.className = "fas fa-volume-up";
        soundToggle.classList.remove("muted");
        localStorage.setItem("sound", "enabled");
    } else {
        soundIcon.className = "fas fa-volume-mute";
        soundToggle.classList.add("muted");
        localStorage.setItem("sound", "disabled");
    }
}

    function reiniciarJuego() {
        // Resetear variables del juego
        palabra = '';
        palabraOculta = '';
        errores = 0;
        letrasUsadas = [];
        
        // Resetear elementos de la interfaz
        document.querySelector("#nivel").value = "0";
        document.querySelector("#palabra").textContent = "";
        document.querySelector("#errores").textContent = "0";
        document.querySelector("#qwerty").innerHTML = "";
        
        // Resetear contador de errores al color verde inicial
        const errorCount = document.getElementById("errores");
        if (errorCount) {
            errorCount.className = "error-count"; // Solo la clase base (verde)
        }
        
        // Resetear barra de progreso de errores
        const progressBar = document.getElementById("errorProgress");
        if (progressBar) {
            progressBar.style.width = "0%";
            progressBar.setAttribute("aria-valuenow", "0");
            const progressText = progressBar.querySelector(".progress-text");
            if (progressText) {
                progressText.textContent = "0/6";
            } else {
                progressBar.innerHTML = '<span class="progress-text">0/6</span>';
            }
            progressBar.className = "progress-bar bg-success";
        }
        
        // Ocultar mensaje final
        const mensajeFinal = document.getElementById("mensajeFinal");
        if (mensajeFinal) {
            mensajeFinal.classList.add("oculto");
        }
    }

       //location.href = 'juegofinaleeror.html';
       
      
       
        //location.href='https://curso.test/JavaScript/juego.html';
        //btn1.disabled = false;
    


function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = themeToggle.querySelector("i");
  
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  }
}

// Cargar tema guardado al iniciar
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;
  
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  } else {
    body.removeAttribute("data-theme");
    if (themeIcon) themeIcon.className = "fas fa-moon";
  }
}

// Cargar configuración de sonido guardada
function loadSavedSound() {
  const savedSound = localStorage.getItem("sound");
  const soundIcon = soundToggle ? soundToggle.querySelector("i") : null;
  
  if (savedSound === "disabled") {
    sonidoHabilitado = false;
    if (soundIcon) soundIcon.className = "fas fa-volume-mute";
    if (soundToggle) soundToggle.classList.add("muted");
  } else {
    sonidoHabilitado = true;
    if (soundIcon) soundIcon.className = "fas fa-volume-up";
    if (soundToggle) soundToggle.classList.remove("muted");
  }
}

// Event listeners
aboutButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}
if (soundToggle) {
  soundToggle.addEventListener("click", toggleSound);
}

// Cargar tema y resetear interfaz al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
  // Cargar configuraciones guardadas
  loadSavedTheme();
  loadSavedSound();
  
  // Resetear select al cargar/refrescar la página
  const nivelSelect = document.querySelector("#nivel");
  if (nivelSelect) {
    nivelSelect.value = "0";
  }
  
  // Limpiar el área de palabra y teclado
  const palabraDiv = document.querySelector("#palabra");
  const qwertyDiv = document.querySelector("#qwerty");
  const erroresSpan = document.querySelector("#errores");
  
  if (palabraDiv) palabraDiv.textContent = "";
  if (qwertyDiv) qwertyDiv.innerHTML = "";
  if (erroresSpan) erroresSpan.textContent = "0";
  
  // Resetear contador de errores al color verde inicial
  const errorCount = document.getElementById("errores");
  if (errorCount) {
    errorCount.className = "error-count"; // Solo la clase base (verde)
  }
  
  // Resetear barra de progreso de errores
  const progressBar = document.getElementById("errorProgress");
  if (progressBar) {
    progressBar.style.width = "0%";
    progressBar.setAttribute("aria-valuenow", "0");
    const progressText = progressBar.querySelector(".progress-text");
    if (progressText) {
        progressText.textContent = "0/6";
    } else {
        progressBar.innerHTML = '<span class="progress-text">0/6</span>';
    }
    progressBar.className = "progress-bar bg-success";
  }
  
  // Asegurar que el mensaje final esté oculto
  const mensajeFinal = document.getElementById("mensajeFinal");
  if (mensajeFinal) {
    mensajeFinal.classList.add("oculto");
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Función para cambiar idioma
function cambiarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    
    // Mostrar alerta informativa del cambio de idioma
    const tituloInfo = idiomaActual === 'es' ? 'Idioma Cambiado' : 'Language Changed';
    const mensajeInfo = idiomaActual === 'es' ? 'El juego ahora está en español' : 'The game is now in English';
    alertaInfo(tituloInfo, mensajeInfo, 2500);
    
    actualizarInterfazIdioma();
    
    // Reiniciar el juego si hay uno en progreso
    if (nivel.value !== "0") {
        iniciarJuego(nivel.value);
    }
    
    // Guardar preferencia de idioma
    localStorage.setItem('idioma', idiomaActual);
}

// Función para actualizar textos de la interfaz
function actualizarInterfazIdioma() {
    const langText = document.getElementById('langText');
    const gameTitle = document.querySelector('.game-title');
    const levelSelect = document.getElementById('nivel');
    const reiniciarBtn = document.getElementById('reiniciarBtn');
    const aboutButton = document.getElementById('aboutButton');
    const botonJugarDeNuevo = document.getElementById('botonJugarDeNuevo');
    const langButton = document.querySelector('.btn-language');
    
    // Actualizar botón de idioma
    langText.textContent = idiomaActual.toUpperCase();
    
    // Cambiar color del botón según el idioma
    if (langButton) {
        if (idiomaActual === 'es') {
            langButton.classList.add('spanish');
        } else {
            langButton.classList.remove('spanish');
        }
    }
    
    // Actualizar título
    gameTitle.innerHTML = `<i class="fas fa-skull-crossbones"></i> ${textos[idiomaActual].titulo}`;
    
    // Actualizar opciones del select
    levelSelect.innerHTML = `
        <option value="0">${textos[idiomaActual].seleccionarNivel}</option>
        <option value="1">${textos[idiomaActual].principiante}</option>
        <option value="2">${textos[idiomaActual].profi}</option>
        <option value="3">${textos[idiomaActual].experto}</option>
    `;
    
    // Actualizar botones
    reiniciarBtn.innerHTML = `<i class="fas fa-redo"></i> ${textos[idiomaActual].reiniciar}`;
    aboutButton.innerHTML = `<i class="fas fa-info-circle"></i> ${textos[idiomaActual].ayuda}`;
    
    // Actualizar botón del mensaje final
    if (botonJugarDeNuevo) {
        botonJugarDeNuevo.textContent = textos[idiomaActual].botonJugarDeNuevo;
    }
}

// ============================================
// SISTEMA DE ALERTAS MODERNAS
// ============================================

function mostrarAlerta(tipo, titulo, mensaje, duracion = 4000) {
    const container = document.getElementById('alertContainer');
    if (!container) return;
    
    // Crear elemento de alerta
    const alertElement = document.createElement('div');
    alertElement.className = `custom-alert ${tipo}`;
    
    // Iconos según el tipo
    const iconos = {
        success: 'fas fa-check-circle',
        error: 'fas fa-times-circle', 
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    alertElement.innerHTML = `
        <div class="alert-icon">
            <i class="${iconos[tipo] || iconos.info}"></i>
        </div>
        <div class="alert-content">
            <div class="alert-title">${titulo}</div>
            <div class="alert-message">${mensaje}</div>
        </div>
        <button class="alert-close" onclick="cerrarAlerta(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Agregar al container
    container.appendChild(alertElement);
    
    // Mostrar con animación
    setTimeout(() => {
        alertElement.classList.add('show');
    }, 10);
    
    // Auto-cerrar si se especifica duración
    if (duracion > 0) {
        setTimeout(() => {
            cerrarAlerta(alertElement);
        }, duracion);
    }
    
    // Cerrar al hacer click
    alertElement.addEventListener('click', (e) => {
        if (!e.target.closest('.alert-close')) {
            cerrarAlerta(alertElement);
        }
    });
    
    return alertElement;
}

function cerrarAlerta(elemento) {
    // Si se pasó el botón, buscar el elemento padre
    if (elemento.classList.contains('alert-close')) {
        elemento = elemento.closest('.custom-alert');
    }
    
    if (elemento && elemento.classList.contains('custom-alert')) {
        elemento.classList.add('hide');
        setTimeout(() => {
            if (elemento.parentNode) {
                elemento.parentNode.removeChild(elemento);
            }
        }, 400);
    }
}

// Alias para diferentes tipos de alertas
function alertaExito(titulo, mensaje, duracion = 4000) {
    return mostrarAlerta('success', titulo, mensaje, duracion);
}

function alertaError(titulo, mensaje, duracion = 5000) {
    return mostrarAlerta('error', titulo, mensaje, duracion);
}

function alertaAdvertencia(titulo, mensaje, duracion = 4000) {
    return mostrarAlerta('warning', titulo, mensaje, duracion);
}

function alertaInfo(titulo, mensaje, duracion = 3000) {
    return mostrarAlerta('info', titulo, mensaje, duracion);
}

// Event listener para el botón de cambio de idioma
if (languageToggle) {
    languageToggle.addEventListener("click", cambiarIdioma);
}

// Cargar idioma guardado al inicializar
document.addEventListener('DOMContentLoaded', function() {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (idiomaGuardado && idiomaGuardado !== idiomaActual) {
        idiomaActual = idiomaGuardado;
        actualizarInterfazIdioma();
    }
});

