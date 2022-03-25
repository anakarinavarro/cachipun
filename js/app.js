var numeroJugadas = parseInt(prompt("Cúantas veces quieres jugar?: Ingrese un numero"));

var triunfosUsuario = 0;
var triunfosComputador = 0;

for (var cantidadDeJugadas = 1; cantidadDeJugadas <= numeroJugadas; cantidadDeJugadas++){
   

function getRandomArbitrary(min,max){
     return Math.floor(Math.random() * (max - min) + min);
}

var piedra = 0;
var tijera =  1;
var papel = 2;

var opcionUsuario = parseInt(prompt("Elige: \npiedra: 0\ntijera: 1\npapel: 2"));

if(opcionUsuario === 0){
    alert("Elegiste piedra !!!");
} else if (opcionUsuario === 1){
    alert("Elegiste tijera !!!");
} else if (opcionUsuario === 2){
    alert("Elegiste papel !!!")
} else {
    alert("Ingrese un número dentro del rango!");
    if(opciones != opcionUsuario){
    } else if (opciones != opcionComputador){
        break;
    }
    } 


var opcionComputador = getRandomArbitrary(0,2);

if(opcionComputador === 0){
    alert("El computador eligio piedra !!!");
} else if (opcionComputador === 1){
    alert("El computador eligio tijera !!!");
} else if (opcionComputador === 2){
    alert("El computador eligio papel !!!");
} else {
    alert("Ingrese un número dentro del rango!" + getRandomArbitrary);

}


if (opcionUsuario === opcionComputador){
    alert("Empate!!!")
} else if (opcionUsuario === piedra && opcionComputador === tijera ){
    alert("Ganaste!!!");
    triunfosUsuario++;
} else if( opcionUsuario === piedra && opcionComputador === papel){
    alert("Perdiste!!!");
    triunfosComputador++;
} else if(opcionUsuario === tijera && opcionComputador === piedra){
    alert("Perdiste!!!");
    triunfosComputador++;
}else if(opcionUsuario === tijera && opcionComputador === papel){
    alert("Ganaste!!!");
    triunfosUsuario++;
}else if(opcionUsuario === papel && opcionComputador === piedra){
    alert("Perdiste!!!");
    triunfosComputador++;
}else if(opcionUsuario === papel && opcionComputador === tijera){
    alert("Perdiste!!!");
    triunfosComputador++;
}

}

if(triunfosUsuario === triunfosComputador){
    alert("Es un empate!!!");
} else if(triunfosUsuario < triunfosComputador){
    alert("El computador ganó, perdiste!!!");
} else if(triunfosUsuario > triunfosComputador){
    alert("Felicitaciones, le haz ganadado al computador!!!");
} 


