'use strict'
/*
- Prueba de entrevista

    - Complejidad algoritmica


    - JSON
    - Almacenamiento en el navegador
    - Local Storage

*/

// // Complejidad algrotimica

// // Medir el rendimiento de un algoritmo indepependientemente del sistema que lo ejecute



// // N -> length
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 4, 65, 3, 12, 90];

// // O( 1 ) -> Constante
// function getNumber(indice) {
//     return numeros[indice];
// }

// let numeor_3 = getNumber(3);
// let numeor_7 = getNumber(7);


// // O( 2 ) -> Constante
// // O( K )
// function sumaNumeroAnterior(indice) {
//     let anterior = numeros[indice - 1]
//     return numeros[indice] + anterior;
// }


// // O( 2N + 2 ) -> Lineal
// function sumaTodosNumeros(array) {
//     let suma = 0;

//     for (let i = 0; i < array.length; i++) {
//         suma += array[i]
//     }

//     return suma;

// }

// let sumaTotal = sumaTodosNumeros(numeros);



// // O( 3N * N + 2N ) = O( 3N^2 + 2N  )
// function loquesea() {

//     for (let i = 0; i < numeros.length; i++) {

//         console.log("Cambio de i")
//         for (let n = 0; n < numeros.length; n++) {

//             console.log("Dentro");
//             console.log(i, n);

//         }
//     }

// }



// let objeto_letras = {};

// let texto = "Hola mundo"
// for (let i = 0; i < texto.length; i++) {
//     let letter = texto[i]; // o
//     if (objeto_letras[letter] == undefined) {
//         objeto_letras[letter] = 1
//     }
//     else {
//         objeto_letras[letter]++
//     }

// }
// console.log(objeto_letras);



// JSON -> JavaScript Object Notation

let pelicula = {
    nombre: "Titanic",
    director: {
        nombre: "James",
        apellido: "Cameron"
    },
    reparto: [
        {
            nombre: "AAa",
            fecha: 1998
        },
        {
            nombre: "BB",
            fecha: 1998
        }
    ]
}

console.log(pelicula)

let json_pelicula = `{
    "nombre": "Titanic",
    "director": {
        "nombre": "James",
        "apellido": "Cameron"
    }
}
`
console.log(json_pelicula);


// Stringify -> Convertir un objeto CUALQUIERA a JSON
let json_pelicula_2 = JSON.stringify(pelicula);

console.log(json_pelicula_2);
// Parte -> Convierte un JSON a objeto

let pelicula_recover = JSON.parse(json_pelicula_2);
console.log(pelicula_recover);


// EJEMPLO SIMPLE
// Almacenamiento en el NAVEGADOR -> STRING

// Crear Información

localStorage.setItem('miClave', 'rojo');

// Traer información

let colorFav = localStorage.getItem('miClave');

console.log(colorFav);

let color_guardado = localStorage.getItem('colorFavorito');
console.log('Color Guardado', color_guardado)

if (color_guardado) {
    $('body').css({
        'background-color': color_guardado
    })
}

$('#btnSave').on({
    click: function () {

        let color = $('#color').val();

        localStorage.setItem('colorFavorito', color);

        $('body').css({
            'background-color': color
        })

    }
})





console.log('%c hello world ', 'background: #222; color: #bada55; font-size:2em');

console.group("Agrupado")
console.log("AAA")
console.log("BBB")
console.groupEnd();


console.log("END")




console.warn(" 🏁 Warning")

console.error("ey loco!")
console.trace();


console.dir(['A', 'B', 'C'])
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();
console.log('\x1B[31mhello\x1B[34m world');
console.log('\x1b[43mhighlighted');
