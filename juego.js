let nivel = document.querySelector('#nivel');
//let btn1 = document.querySelector('#btnIniciar');
let palabra = '';
let palabraOculta = ''; 
let errores = 0; 
let letrasUsadas = [];
const nivel1 = [ "ABUELO", "AGUA", "AIRE", "ALBA", "ALMA", "ALTO", "AMAR", "AMIGO", "ANCHO", "ÁRBOL",  
  "ARENA", "ARROZ", "AVEJA", "BAILE", "BAÑO", "BARCO", "BELLO", "BESAR", "BICHO", "BLUSA",  
  "BOCA", "BOLSA", "BROMA", "BUENO", "BURRO", "CABRA", "CAJA", "CALLE", "CANTO", "CARGA",  
  "CARRO", "CASA", "CIELO", "CINTA", "CLAVE", "COCHE", "COMER", "COPA", "CORAZÓN", "CORO",  
  "COSTA", "CUBO", "CUENTO", "DANZA", "DEDOS", "DÍA", "DIENTE", "DIOS", "DOLOR", "DULCE",  
  "ELEGIR", "ENCIMA", "ENTRAR", "EQUIPO", "ESCUELA", "ESPEJO", "ESPUMA", "ESTRELLA", "EXTRA", "FELIZ",  
  "FERIA", "FIESTA", "FLACO", "FLOR", "FOCO", "FUERTE", "FUEGO", "FUMAR", "GAFAS", "GALLO",  
  "GATO", "GENTE", "GLOBO", "GOLPE", "GRANDE", "GRITO", "GRUPO", "GUERRA", "GUISO", "HABLA",  
  "HIELO", "HIJO", "HOGAR", "HOMBRE", "HONOR", "HORNO", "HUEVO", "HUESO", "IGLESIA", "IGUAL",  
  "IMAGEN", "INVIERNO", "ISLA", "JARDÍN", "JUEGO", "JOVEN", "JUICIO", "JUNTOS", "LÁMPARA", "LARGO",  
  "LECHE", "LENTO", "LIBRO", "LIMÓN", "LISTA", "LLAMA", "LLUVIA", "LUCES", "LUZ", "MADRE",  
  "MAGIA", "MANO", "MAR", "MASCOTA", "MELÓN", "MENSAJE", "MESA", "MIRAR", "MOLINO", "MONEDA",  
  "MONO", "MORADO", "MOTIVO", "MOVER", "MUCHO", "MUJER", "MUNDO", "MUSLO", "NADAR", "NARIZ",  
  "NEGRO", "NIEVE", "NOCHE", "NOMBRE", "NORTE", "NUBE", "NUEVO", "OÍDO", "OJOS", "OLVIDO",  
  "OREJA", "OTOÑO", "PADRE", "PAISAJE", "PALABRA", "PAN", "PARED", "PASEO", "PASTEL", "PATATA",  
  "PATO", "PAZ", "PECHO", "PEDIR", "PELAR", "PELO", "PEQUEÑO", "PERDER", "PERRO", "PIANO",  
  "PIE", "PINTAR", "PISO", "PLATA", "PLAZA", "PLUMA", "POCO", "POLLO", "PORTE", "PREGUNTA",  
  "PRIMAVERA", "PUENTE", "PULPO", "QUESO", "QUIETO", "RÁPIDO", "RAYO", "REBAÑO", "RELOJ", "RETO",  
  "RICO", "RIEGO", "ROJO", "ROMA", "ROSADO", "RUIDO", "SALADO", "SALIDA", "SALTO", "SANO",  
  "SILLA", "SIEMPRE", "SIMPÁTICO", "SOL", "SORPRESA", "SUEÑO", "TALÓN", "TARTA", "TELÉFONO", "TIERRA",  
  "TIJERAS", "TOMATE", "TORTA", "TREN", "TRIGO", "TROMPA", "TROZO", "TURNO", "UVA", "VACA",  
  "VAPOR", "VEINTE", "VELA", "VENTANA", "VERDE", "VIAJE", "VIENTO", "VINO", "VIOLÍN", "VIVIR",  
  "VOLVER", "YATE", "ZAPATO", "ZORRO"
];
const nivel2 = ["ABANICO", "ABEJA", "ABRIGO", "ACUARIO", "AFÁN", "AGUJERO", "ALBERCA", "ALCACHOFA", "ALDABA", "ALERTO",
  "ALFILER", "ALMENDRA", "ALMOHADA", "ALQUILER", "AMAPOLA", "AMULETO", "ANCLA", "ANÉCDOTA", "ANGUSTIA", "ANHELO",
  "ANTORCHA", "AÑORANZA", "APLAUSO", "ARCOIRIS", "ARENA", "ARGUMENTO", "AROMA", "ARTESANO", "ASTRONAUTA", "AVELLANA",
  "AZÚCAR", "BANDERA", "BARRO", "BASTÓN", "BENDECIR", "BIBLIOTECA", "BOLSA", "BOSQUE", "BOTÁNICO", "BÚHO",
  "CABALLERO", "CABEZA", "CÁLIDO", "CAMBIO", "CAMPANARIO", "CANDADO", "CANELA", "CANTANTE", "CARÁCTER", "CARGADOR",
  "CARIÑO", "CARPINTERO", "CASCADA", "CASTAÑA", "CATEDRAL", "CELESTIAL", "CÉLULA", "CEMENTO", "CEREZA", "CICATRIZ",
  "CIELO", "CIFRA", "CIMA", "CINTURÓN", "CIRCO", "CIRUELA", "CIVILIZADO", "CLARIDAD", "CLAVO", "COCINA",
  "COFRE", "COLECCIÓN", "COMEDIA", "COMPOSITOR", "CONCHA", "CONQUISTA", "CONTRATIEMPO", "CORTINA", "COSTURA", "CREPÚSCULO",
  "CUBIERTA", "CUERDA", "CURIOSIDAD", "DÁLMATA", "DANZA", "DEBILIDAD", "DEDAL", "DEFENSA", "DELICADEZA", "DEPÓSITO",
  "DESTINO", "DIAMANTE", "DIARIO", "DIBUJO", "DILUVIO", "DINÁMICO", "DISCURSO", "DIURNO", "DOMINIO", "DRAGÓN",
  "DULZURA", "ECLIPSE", "EDUCACIÓN", "EFECTIVO", "EJÉRCITO", "ELEGANCIA", "EMOCIÓN", "ENCANTO", "ENFOQUE", "ENTUSIASMO",
  "EQUILIBRIO", "ESCALERA", "ESCULTURA", "ESENCIA", "ESMERALDA", "ESPACIO", "ESPEJO", "ESTRATEGIA", "EXPERIENCIA", "FÁBRICA",
  "FAMILIAR", "FANTASÍA", "FARO", "FELICIDAD", "FESTIVAL", "FIRMAMENTO", "FLEXIBLE", "FLORERO", "FORTUNA", "FRESCURA",
  "FRONTERA", "FUEGO", "GALLARDO", "GARGANTA", "GENERACIÓN", "GIGANTE", "GLACIAR", "GRANDIOSO", "GRAVEDAD", "GUARDIÁN",
  "HALLAZGO", "HARMONÍA", "HÉROE", "HIELO", "HORIZONTE", "HUELLA", "HUMILDAD", "IMAGINACIÓN", "IMPACTO", "IMPRESIÓN",
  "INCÓGNITA", "INDOMABLE", "INFINITO", "INSPIRACIÓN", "INTUICIÓN", "INVIERNO", "JARDINERO", "JARRÓN", "JAZMÍN", "JOVIAL",
  "JUBILOSO", "JUGADOR", "JUGUETE", "LABERINTO", "LÁGRIMA", "LAMPARA", "LEGADO", "LIMÓN", "LLAVE", "LUMINOSO",
  "MAESTRO", "MAGIA", "MAJESTUOSO", "MANANTIAL", "MANSIÓN", "MARAVILLA", "MÁSCARA", "MELODÍA", "MENTE", "MISTERIO",
  "MOTIVACIÓN", "MURMULLO", "NÁCAR", "NAVEGANTE", "NIEVE", "NOSTALGIA", "OBELISCO", "OBSERVADOR", "OCEÁNICO", "OMNIPOTENTE",
  "OPTIMISTA", "ORÍGENES", "OSCILACIÓN", "PACIENCIA", "PÁJARO", "PALACIO", "PANORAMA", "PENSAMIENTO", "PERGAMINO", "PESADILLA",
  "PILAR", "PINTOR", "PLENITUD", "PLUMA", "PORTAL", "PRIMAVERA", "PROCESO", "PUNTUAL", "RADAR", "REFLEJO",
  "RÍGIDO", "RÍTMICO", "ROMPECABEZAS", "SABIDURÍA", "SAGRADO", "SALVAJE", "SENSIBILIDAD", "SERENIDAD", "SOMBRA", "SONRISA",
  "TEMBLOR", "TESORO", "TIBURÓN", "TORMENTA", "TRÉBOL", "UNIVERSO", "VALENTÍA", "VÉRTIGO", "VIENTO", "VOLCÁN" ];
  const nivel3 = ["ABSTRACCIÓN", "ACUEDUCTO", "ALABANZA", "ANFITRIÓN", "ANTÍTESIS",
    "ARQUITECTO", "BIBLIOTECA", "BIODEGRADABLE", "CATASTROFISMO", "CIRCUNSTANCIA",
    "COMPLICIDAD", "CONCURRENCIA", "CONSTELACIÓN", "CONTRADICCIÓN", "DECREPITUD",
    "DILIGENCIA", "DISCREPANCIA", "ECLECTICISMO", "EFERVESCENCIA", "ELECTROCUTAR",
    "ELOCUENCIA", "ENIGMÁTICO", "EQUILIBRIO", "ESTRATÉGICO", "EVANESCENTE",
    "EXTRAVAGANTE", "FASCINACIÓN", "FILOSOFÍA", "FORTUITO", "FUGACIDAD",
    "GALVANIZAR", "GARGANTILLA", "GRANDILOCUENTE", "HETEROGÉNEO", "HIPOTÉTICO",
    "IDIOSINCRASIA", "ILUMINACIÓN", "IMPROVISACIÓN", "INCONGRUENCIA", "INEFABLE",
    "INEXORABLE", "INTRÉPIDO", "JERARQUÍA", "JUBILACIÓN", "LABERINTO",
    "LEGITIMIDAD", "LITERATURA", "MAGISTRAL", "MECANISMO", "METÁFORA",
    "MISTICISMO", "MORFOLOGÍA", "NARRATIVO", "NEBULOSA", "NOSTALGIA",
    "OBSOLESCENCIA", "OMNIPOTENTE", "PARADIGMA", "PARADOJA", "PENUMBRA",
    "PERSPECTIVA", "PREDOMINANTE", "PROCRASTINAR", "QUIMERA", "RADICALISMO",
    "REMINISCENCIA", "RETÓRICA", "SARCÁSTICO", "SILUETA", "SIMBIOSIS",
    "SINCRONIZACIÓN", "SINIESTRO", "SOBERANÍA", "SUBLIMINAL", "TANGENCIAL",
    "TÉCNICO", "TENEBROSO", "TIRANÍA", "TRANSGRESIÓN", "TRIVIALIDAD",
    "ULTERIOR", "UNIVERSALIDAD", "UTOPÍA", "VANGUARDIA", "VEHEMENTE",
    "VICISITUD", "VULNERABILIDAD", "ZARZUELA"
];
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
function iniciarJuego(nivel) {
    let palabras = nivel === '1' ? nivel1 : nivel2 , nivel3; //iniciar = nivel1 array, experto = nivel2 array
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraOculta = Array(palabra.length).fill("_"); // para dibujar guillones bajos '_' == numero de letras en palabra
    errores = 0;
    letrasUsadas = [];
    
    document.querySelector("#palabra").textContent = palabraOculta.join(" ");
    document.querySelector("#errores").textContent = errores;
    generarTeclado();
}

function generarTeclado() {
    let qwertyDiv = document.querySelector("#qwerty");
    qwertyDiv.innerHTML = ""; // Limpia el contenido antes de generar teclas nuevas

    // Definir filas del teclado
    const fila1 = "abcdefghi".split("");
    const fila2 = "jklmnñopq".split("");
    const fila3 = "rstuvwxyz".split("");

  function crearFila(letras) {
        let filaDiv = document.createElement("div");
        filaDiv.classList.add("d-flex", "justify-content-center", "mb-2"); // Centrar y añadir margen

        letras.forEach(letra => {
            let btnLetra = document.createElement("button");
            btnLetra.classList.add("btn", "btn-success", "m-1"); // Estilos de Bootstrap
           // btnLetra.style.width = "40px"; // Tamaño fijo para uniformidad
            //btnLetra.style.height = "40px";
            btnLetra.textContent = letra.toUpperCase(); // Letras en mayúscula
            btnLetra.addEventListener("click", function() {
                pulsarLetra(letra, btnLetra);
            });

            filaDiv.appendChild(btnLetra);
        });

        qwertyDiv.appendChild(filaDiv);
    }

    // Crear las tres filas del teclado
    crearFila(fila1);
    crearFila(fila2);
    crearFila(fila3);
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
    }

    verificarFinDelJuego();
}

function verificarFinDelJuego() {
    if (!palabraOculta.includes("_")) {
        alert("Tadam tadam tadaam! Genial!");
       // btn1.disabled = false;
location.reload()
    } else if (errores >= 6) {
        alert("Ai ai ai ai aii. La palabra era: " + palabra+". Intenta de nuevo");
        location.reload(); }
       //location.href = 'juegofinaleeror.html';
       
      
       
        //location.href='https://curso.test/JavaScript/juego.html';
        //btn1.disabled = false;
    }


const modal = document.getElementById("modal");
const aboutButton = document.getElementById("aboutButton");
const closeButton = document.querySelector(".close-button");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

aboutButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
})
