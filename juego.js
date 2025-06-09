
let nivel = document.querySelector('#nivel');
//let btn1 = document.querySelector('#btnIniciar');
let palabra = '';
let palabraOculta = ''; 
let errores = 0; 
let letrasUsadas = [];
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
    "tela", "templo", "tierra", "tiempo", "tipo", "tocar", "total", "trabajo", "traje", "trama",
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
    //let palabras = nivel === '1' ? nivel1 : nivel2 , nivel3; <-> NO FUNCIONA ;))
    let palabras = nivel === '1' ? nivel1 : nivel === '2' ? nivel2 : nivel3;
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
    const mensajeFinal = document.getElementById("mensajeFinal");
    const textoMensaje = document.getElementById("textoMensaje");

    if (!palabraOculta.includes("_")) {
        textoMensaje.textContent = "🎉 ¡Tadam tadam tadaam! La palabra es: " + palabra + ". ¡Bravoo!";
        mensajeFinal.classList.remove("oculto");
    } else if (errores >= 6) {
        textoMensaje.textContent = "😢 Ai ai ai ai aii. La palabra era: " + palabra + ". Intenta de nuevo.";
        mensajeFinal.classList.remove("oculto");
    }
}

    function reiniciarJuego() {
        location.reload();
    }

       //location.href = 'juegofinaleeror.html';
       
      
       
        //location.href='https://curso.test/JavaScript/juego.html';
        //btn1.disabled = false;
    


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
