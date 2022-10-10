'use strict'

// Repaso

// use strict
// Operadores y sentencias de control
// Pintar en la web
// Eventos

// Ej: Qué edad tienes -> If Else if Else

// Inputs




// let edadUsuario = Number(prompt('¿Qué edad tienes?'));

// let edadUsuario = 3;

// console.log("edadUsuario", edadUsuario, typeof (edadUsuario));

// if (edadUsuario < 0) {
//     console.log('No has nacido');
// } else { // edad >= 0
//     if (edadUsuario < 2) {
//         console.log('Eres un bebé');
//     } else { // edadUsuario >=2

//         if (edadUsuario <= 12) {
//             console.log('Soy un niño');
//         } else {

//             if (edadUsuario <= 18) {
//                 console.log('Soy un adolescente');

//             } else {

//                 if (edadUsuario <= 65) {
//                     console.log('Soy adulto');

//                 } else {
//                     console.log('Eres viejo');
//                 }
//             }
//         }
//     }
// }


const LIMITE_NACIMIENTO = 0;
const LIMITE_BEBE = 2;
const LIMITE_NINO = 12;

let edadUsuario = 17;

// Variables de RANGO, variable continua
if (edadUsuario < LIMITE_NACIMIENTO) {
    pintaMensaje("No has nacido ");

} else if (edadUsuario < LIMITE_BEBE) { // edadUsusario >= 0;
    pintaMensaje("Eres un bebé");
} else if (edadUsuario < LIMITE_NINO) {


    pintaMensaje("Eres un niño");
} else if (edadUsuario < 18) { // Número Mágico "No sabemos de dónde sale"

    let distanciaSiguienteRango = 18 - edadUsuario;
    let mensajeRango = 'Te quedan ' + distanciaSiguienteRango + ' años para ser un adulto';

    pintaMensaje("Eres un adolescente." + mensajeRango);
} else if (edadUsuario <= 65) {
    pintaMensaje("Eres un adulto");
} else {
    pintaMensaje("Eres viejo");
}


/**
 * Pinta en el elemento #mensaje el sting que pasamos por parámetro
 * @param {string} mensaje 
 */
function pintaMensaje(mensaje) {
    let nodoMensaje = document.querySelector('#mensaje');
    nodoMensaje.innerHTML = mensaje;
}

// Copio y pego es CANDIDATO a función y lo que MODIFICO es candidato a PARÁMETRO 


// Cómo acceder a INPUTS


// Necesito acceder al input CUANDO clico en el botón


function recogerDatosInput() {
    console.log('Clic en el botón');
    let nodoInputNombre = document.querySelector('#entradaNombre');
    console.log(nodoInputNombre.value);
    pintaMensaje(nodoInputNombre.value)
    // Borrar el texto del input
    nodoInputNombre.value = '';

}



let pelicula = {
    titulo: 'Toy Story',
    fecha: 1995
}

pelicula.titulo = "Toy Story 2"














