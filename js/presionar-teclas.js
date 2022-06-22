var letraCorrecta = [];
var letraErronea = [];
var teclasValidas = new RegExp("^[A-Z\u00d1]$","i");
var activarTeclas = false;


document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    
    if(activarTeclas == true){      //solo deja apretar las teclas si ya se apreto iniciar juego
        if(teclasValidas.test(letra)){ //revisa si la tecla presionada es valida
            if(palabra.indexOf(letra) === -1){ //Si la letra no esta en la palabra empieza a llamar a todo para ponerla en errores
                if(letraErronea.indexOf(letra) === -1){ //revisa si la letra aun no a sido presionada
                    if(erroresPermitidos != 0){ //revisa si aun tiene erorres para continuar
                        if(palabras.includes(palabra)){ //revisa si la palabra esta en el array
                            letraErronea.push(letra); //agrega la letra la array
                            dibujarLetraErronea(letra); //dibuja la letra erronea
                            erroresActuales(); //cambia la imagen dependiendo del error que lleve le usuario
                        }  

                        else if(palabrasPropias.includes(palabra)){ //revisa si la palabra esta en el array del juego Propio
                            letraErronea.push(letra); //agrega la letra la array del juego propio
                            dibujarLetraErronea(letra); //dibuja la letra erronea
                            erroresActualesJuegoPropio(); //cambia la imagen dependiendo del error que lleve le usuario en el jeug propio
                        }   
                       //cuantos errores le quedan a la persona
                    }
                     
                }
                //aqui puede ir una alerta de letra repetida
            }
            
            else{ //si la letra esta en la palabra se pintara
                if(palabrasPropias.includes(palabra)){ // revis si la palabra esta en juego propio
                    if(letraCorrecta.indexOf(letra) === -1){ // revisa si la letra correcta aun no esta puesta
                        letraCorrecta.push(letra); 
                        dibujarLetraCorrecta(letra);
                        ganadorJuegoPropio();    
                    }
                    //aca puede ir una alera de que ya se repitio letra
                }
                else if(palabras.includes(palabra)){ //revisa si la palabra esta
                    if(letraCorrecta.indexOf(letra) === -1){ //revisa si la letra correcta aun no esta puesta
                        letraCorrecta.push(letra); 
                        dibujarLetraCorrecta(letra);
                        ganador();    
                    }
                    //aca puede ir una alera de que ya se repitio letra
                }
  
            }
        }

        else{ // no es tecla valida
            alert("no es una letra");
        }
    }
}