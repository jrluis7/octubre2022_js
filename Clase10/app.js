'use strict'
/*
    - Repaso if else if
    - objetos Date

    - While y Switch

*/



let edad = 10;



if (edad < 0) {

} else { // edad>=0

    if (edad < 2) { //edad>=0 && edad < 2

    }

}

// Variable CONTINUA
if (edad < 0) {

} else if (edad < 2) {

} else if (edad < 5) {

} else if (edad < 18) {

} else {

}
let equipo;
let color = "ROJO";
// Variable DISCRETA
if (color === "ROJO" || color === "Rojo" || color === "rojo") {
    equipo = "águilas";
} else if (color === "AZUL") {
    equipo = "Delfines";
} else if (color === "VERDE") {
    equipo = "leones";
} else {
    equipo = "Monitores"
}

switch (color) {
    case 'ROJO':
    case 'Rojo':
    case 'rojo':
        equipo = 'Águilas';
        break; // NECESARIO al final de caso 
        console.log('No se ejecuta');
    case 'AZUL':
        equipo = 'Delfines';
        break;
    case 'VERDE':
        equipo = 'Leones';
        break;
    default:
        // Else -> Recoge todo por lo que no hemos preguntado
        equipo = 'Monitores';
        break;
}

// Constructor
let today = new Date(); // Trae la fecha exacta de hoy
console.log(today);

let year = today.getFullYear();
console.log(year);

let date = today.getDate();
console.log(date);

let day = today.getDay();
console.log(day);// 0 - 6


// For -> Código que se ejecuta un número de veces DETERMINADO

// While -> Código que se ejecuta un número de veces INDETERMINADO

let indice = 0;
let condicionEntrada = true;

while (indice < 10) {

    console.log(indice)
    indice++;
}


let encendido = false;

while (encendido === true) {
    let request = getPeticiones();
    if (request) {
        atenderPeticion(request)
    }
}



let encendido_game = false;
let tecla = 'W';

while (encendido_game) { // NO SE ESPERAN
    switch (tecla) {
        case 'W':
            go_top();
            break;
        case 'A':
            go_left();
            break;
        case 'D':
            go_right();
            break
        case 'S':
            go_down();
            break;
        case 'ESC':
            encendido_game = false;
            break;
    }
}



// let confirmado = true;

// while (confirmado === true) {
//     confirmado = confirm('¿Quieres salir de la página?');
// }

















