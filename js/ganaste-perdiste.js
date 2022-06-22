var imagen = document.getElementById("ahorcado")

//dice cuando gana el usuario
function ganador(){
    if(letrasEncontradas == palabra.length){
        puntaje();
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
            nuevoJuego();
        }, 200)
        
    }
}

//cambia de imagen al ahorcado dependiendo del error
function erroresActuales(){
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
        imagen.alt = "ahorcado perdsite";
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
                  nuevoJuego();
                  
                }
                else{
                    regresarMenu();
                }
              })
        }, 500);
    }
   
}