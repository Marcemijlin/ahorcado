function nuevoJuego(){
    palabra = palabraRandom();
    reiniciar(palabra);
}

var btnNuevoJuego = document.querySelector(".nuevo-juego");

//Regresar al menu
function regresarMenu(){
    document.querySelector("#area-de-juego").classList.add("invisible");
    document.querySelector("#area-botones-inicio").classList.remove("invisible");
    document.querySelector(".titulo-principal").classList.remove("invisible"); 
    reiniciarPuntaje();

    return activarTeclas = false;
}

var btnRegresarMenu = document.querySelector(".regresar");

function rendirse(){
   erroresPermitidos = 0;
   reiniciarPuntaje()
   if(palabra = palabraRandom()){
        erroresActuales();
   }
   if(palabra = palabraJuegoPropio()){
        erroresActualesJuegoPropio();
   }
 
}

var btnRendirse = document.querySelector("#rendirse");
btnRendirse.onclick = rendirse;


//limpia la zona de juego
function reiniciar(palabra){
    letraCorrecta = [];
    letraErronea = [];
    erroresPermitidos = 6;
    espacio = 10;
    letrasEncontradas = 0;
    activarTeclas = true;
    imagen.src = "imagenes/ahorcado-plataforma.png"
    pincel.clearRect(0, 0, 1200, 600);
    dibujarGuiones();
}
