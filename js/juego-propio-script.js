function juegoPropio(){
    swal.fire({
        customClass: {
            popup: 'disenho-alerta'
        },
        icon: 'warning',
        title: 'Advertencia',
        text: 'Antes de empezar debe Agregar sus palabras en "Agregar palabras" ¿Desea Continuar?',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Regresar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false      
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector("#area-de-juego").classList.remove("invisible");
            document.querySelector("#area-botones-inicio").classList.add("invisible");  
            document.querySelector(".titulo-principal").classList.add("invisible"); 
            nuevoJuegoPropio();
        }
      })
}


function palabraJuegoPropio(){
    var random = Math.floor(Math.random()*palabrasPropias.length);
    palabra = palabrasPropias[random];
    return palabra;
}

function nuevoJuegoPropio(){
    palabra = palabraJuegoPropio();
    reiniciar(palabra);
}

//dice cuando gana el usuario
function ganadorJuegoPropio(){
    if(letrasEncontradas == palabra.length){
        puntaje()
        setTimeout(function(){
            Swal.fire({
                customClass: {
                    popup: 'disenho-alerta'
                },
                title: 'Ganaste',
                icon: 'success',
                confirmButtonText: 'Continuar'       
              });
        }, 100);
        setTimeout(function(){
            nuevoJuegoPropio();
        }, 200)
        
    }
}

//cambia de imagen al ahorcado dependiendo del error
function erroresActualesJuegoPropio(){
    if(erroresPermitidos === 5){
        imagen.src = "imagenes/ahorcado-error1.png";
        imagen.alt = "ahorcado error 1";
    }
    if(erroresPermitidos === 4){
        imagen.src = "imagenes/ahorcado-error2.png";
        imagen.alt = "ahorcado error 2";
    }
    if(erroresPermitidos === 3){
        imagen.src = "imagenes/ahorcado-error3.png";
        imagen.alt = "ahorcado error 3";
    }
    if(erroresPermitidos === 2){
        imagen.src = "imagenes/ahorcado-error4.png";
        imagen.alt = "ahorcado error 4";
    }
    if(erroresPermitidos === 1){
        imagen.src = "imagenes/ahorcado-error5.png";
        imagen.alt = "ahorcado error 5";
    }
    if(erroresPermitidos === 0){
        imagen.src = "imagenes/ahorcado-Perdio.png";
        imagen.alt = "ahorcado perdiste";
        activarTeclas = false;
        setTimeout(function(){
            reiniciarPuntaje();
            Swal.fire({
                customClass: {
                    popup: 'disenho-alerta'
                },
                title: 'Perdiste',
                text: "La palabra era: " + palabra,
                icon: 'error',
                background: '#f5f5f5',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonText: 'Nuevo Juego',
                cancelButtonText: 'Regresar al Menu',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false
              }).then((result) => {
                if (result.isConfirmed) {
                  nuevoJuegoPropio();
                  
                }
                else{
                    regresarMenu();
                }
              })
        }, 500);
    }
   
}