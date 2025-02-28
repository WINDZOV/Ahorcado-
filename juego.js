let nivel = document.querySelector('#nivel');
//let btn1 = document.querySelector('#btnIniciar');
let palabra = '';
let palabraOculta = ''; 
let errores = 0; 
let letrasUsadas = [];
const nivel1 = ['casa', 'coche', 'perro', 'agua', 'lapiz', 'pelota', 'parque'];
const nivel2 = ['escuela', 'bomberos', 'extraordinario', 'diferenciales', 'maquinista', 'matematicas'];
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
    let palabras = nivel === '1' ? nivel1 : nivel2; //iniciar = nivel1 array, experto = nivel2 array
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

    // Función auxiliar para crear filas
    function crearFila(letras) {
        let filaDiv = document.createElement("div");
        filaDiv.classList.add("d-flex", "justify-content-center", "mb-2"); // Centrar y añadir margen

        letras.forEach(letra => {
            let btnLetra = document.createElement("button");
            btnLetra.classList.add("btn", "btn-success", "m-1");
            btnLetra.style.width = "40px";
            btnLetra.style.height = "40px";
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
    } else if (errores >= 6) {
        alert("Ai ai ai ai aii. La palabra era: " + palabra+". Intenta de nuevo");
        location.reload(); 
       //location.href = 'juegofinaleeror.html';
       
      
       
        //location.href='https://curso.test/JavaScript/juego.html';
        btn1.disabled = false;
    }
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


//var btn = document.querySelector('porerror')

btn.addEventListener('click', () => {
    location.href= "https://google.com";
})


