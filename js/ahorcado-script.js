var palabras = ["PIZZA","PERRO","GATO","CARRO","AVION","MOTO","PASTEL","LECHE","CHOCOLATE","CASA","MONTAÑA","MANZANA","PIÑA","LIBRO","CANCION","TELEFONO","COMPUTADORA","CIUDAD","ACTOR","LAMPARA","COCINA",
"COCINERO","POLICIA","PALMERA","COCO","TELEVISION","PELICULA","PANADERO","EDIFICIO","PELOTA","JUGO","TECLADO","RATON","CAMA","TECHO","SUELO","CABLE","INTERNET","FOTO","PLANTA","MUÑECA","ZAPATO","VENTILADOR","CORTINA","CUADRO","PUERTA","ESPEJO","ESTATUA","BARCO","CAJA","ARAÑA","CUCHARA","LICUADORA","HORNO","ORNITORRINCO","ORANGUTAN","RELOJ","OSO","VASO","PLATO","TAZON","AVENA","BAÑO","PLAYA","SOL","LUNA","CANELA","FRESA","CEREZA","CORAZON"];
var palabrasPropias = [];
var areaDeAhorcado = document.querySelector(".canvas");
var pincel = areaDeAhorcado.getContext("2d");
var palabra; 
var erroresPermitidos = 6;
var espacio = 60;
var letrasEncontradas = 0;
var guionInicio = 0;
var guionFinal = 50;
var posicionLetra = 0;
var score = 0;

pincel.font = "bold 52px 'Potta One'";


//escoje cual sera la palabra a descubrir
function palabraRandom(){
    var random = Math.floor(Math.random()*palabras.length);
    palabra = palabras[random];

    return palabra;
}


//dibuja los guiones 
function dibujarGuiones(){
    var alturaGuiones = 100;
    var ancho = 1200/palabra.length;
    alinearGuiones();

    pincel. lineWidth= 6;
    pincel.fillStyle = "black";
    pincel.beginPath();  
    for(var i = 0; i < palabra.length; i++){
        pincel.moveTo(guionInicio+(ancho*i), alturaGuiones);
        pincel.lineTo(guionFinal+(ancho*i), alturaGuiones);   
    }
    
   pincel.stroke();
   pincel.closePath();
}

 //alinea mejor los guiones si las palabras son muy cortas
function alinearGuiones(){
        if (palabra.length >= 9){
            guionInicio = 50;
            guionFinal = 100;
        }
        else if(palabra.length >= 7){
            guionInicio = 70;
            guionFinal = 110;
        }
        else if(palabra.length >= 5){
            guionInicio = 90;
            guionFinal = 140;
        }
        else if(palabra.length >= 4){
            guionInicio = 120;
            guionFinal = 170;
        }
        
        else{
            guionInicio = 160;
            guionFinal = 210;
        }
}



//dibuja las letras que estan correctas
function dibujarLetraCorrecta(letra){
    var alturaLetras = 90;
    var ancho = 1195/palabra.length;
    alinearLetras();
    
        for(var i = 0; i < palabra.length; i++){
            if (palabra[i] == letra){
                pincel.fillText(palabra[i], posicionLetra +(ancho*i), alturaLetras);
                letrasEncontradas = letrasEncontradas + 1;
            }
        }
    return letrasEncontradas;
}

function alinearLetras(){
    if (palabra.length >= 9){
        posicionLetra = 60;
    }
    else if(palabra.length >= 7){
        posicionLetra = 75;
    }
    else if(palabra.length >= 5){
        posicionLetra = 100;
    }
    else if(palabra.length >= 4){
        posicionLetra = 130;
    }
    else{
        posicionLetra = 170;
    }
}

//dibuja las letras erroneas
function dibujarLetraErronea(letra){
    var alturaLetras = 180;   
    
    if (palabra.indexOf(letra) == -1){
        pincel.fillText(letra,espacio + 390, alturaLetras);   
        erroresPermitidos = erroresPermitidos - 1;
    }
        return espacio = espacio + 70; 
        
}


function puntaje(){
    score = score + 1;
    document.querySelector("#score").innerHTML = "Score " + score + "   "; 
    return score;
}

function reiniciarPuntaje(){
    score = 0;
    document.querySelector("#score").innerHTML = "Score " + score + "   "; 
    return score;
}