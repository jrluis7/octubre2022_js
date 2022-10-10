'use strict'

//
// Repaso corregir el quiz


// let nombreUsuario = prompt( 'Nombre: ' );
let nombreUsuario = 'Juan';
let numeroErrores = 0; // ESTADO de los errores del ususario en la aplicación

const LIMITE_ERRORES = 3;

// quiz();
function quiz() {
    let respuesta_1 = prompt(nombreUsuario + ', ¿Capital de España?');

    if (respuesta_1 === 'Madrid') {

        let respuesta_2 = prompt(nombreUsuario + '¿Capital de Francia?');

        if (respuesta_2 === 'París') {

            let respuesta_3 = prompt(nombreUsuario + '¿Capital de Italia?');

            if (respuesta_3 === 'Roma') {

                console.log('Éxito')
            } else {
                console.log('Casi');
                checkErrors();
            }

        } else {

            console.log('Sólo una. Intentalo otra vez');
            numeroErrores++;
            if (numeroErrores >= LIMITE_ERRORES) {
                console.log('Has perdido');
            } else {
                quiz();
            }
        }

    } else {
        numeroErrores++;
        if (numeroErrores >= LIMITE_ERRORES) {

            console.log('Has perdido');
        } else {
            console.log('No has estudiado. Recarga la página')
            quiz();
        }

    }

}

// Definión de la función
// Hoisting -> Podemos definir las funciones en cualquier punto
function checkErrors() {
    numeroErrores++;
    if (numeroErrores >= LIMITE_ERRORES) {
        console.log('Has perdido');
    } else {
        quiz();
    }
}


let estado = "";
// Funciones




function elevaAlCubo(numero) {

    let resultado = numero * numero * numero;
    return resultado;

}



let tres_cubo = elevaAlCubo(3); //numero = 3
let cinco_cubo = elevaAlCubo(5); //numero = 5


function saludar(nombre, apellidos, edad, genero, padre, madre, hijos, dni) {

}

saludar('Juan', 'Gómez', 23, 'H');



// GLOBAL
let texto = 'AAAAAA';

function escribeEnLaWeb(mensaje) {
    // Ámbito nuevo -> Ámbito LOCAL
    let texto = "BBBB" + otraFuncion();


    //texto = 'BBBBB'; // Cambiar el valor de una variable GLOBAL
    console.log(texto);

    function otraFuncion() {
        return "ZZZ;"
    }
}

escribeEnLaWeb();
escribeEnLaWeb();
escribeEnLaWeb();
escribeEnLaWeb();
escribeEnLaWeb();

console.log(texto); // AAAA





let otraManeraFunciones = function () {

}


otraManeraFunciones();

