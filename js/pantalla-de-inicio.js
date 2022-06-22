function iniciar(){
    document.querySelector("#area-de-juego").classList.remove("invisible");
    document.querySelector("#area-botones-inicio").classList.add("invisible");  
    document.querySelector(".titulo-principal").classList.add("invisible"); 
    nuevoJuego();
}

var btnInicio = document.querySelector("#btnInicio");
btnInicio.onclick = iniciar;

function iniciarJuegoPropio(){
    juegoPropio();
}


var btnIniciarJuegoPropio = document.querySelector("#btnJuegoPropio");
btnIniciarJuegoPropio.onclick = iniciarJuegoPropio;


//agregar palabras a juego propio
function agregarPalabra(){
   palabraNueva();
}

var btnAgregarPalabra = document.querySelector("#btnAgregarPalabra");
btnAgregarPalabra.onclick = agregarPalabra;

function limpiarPalabras(){
    limpiar();
}


var btnLimpiarPalabras = document.querySelector("#btnLimpiarPalabras");
btnLimpiarPalabras.onclick = limpiarPalabras;