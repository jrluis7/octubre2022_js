'use strict'

/* 
Corrección Ejercicios 
    - Conversor
    - Par, múltiplos de 3 y de 7

    
For, Arrays 
    
Ejercicios


*/


/*
 * Cuando pulso al botón convertir las monedas 
 * - Traer el valor del input. OK
 * - Realizar la conversión
 * - Pintar en la web
 * 
 */
const FACTOR_LIBRAS = 0.88;
const FACTOR_YENES = 141;
// Función que recoge un EVENTO
function conversor() {
    // NODO HTML
    let nodoEuros = document.querySelector('#euros');

    // let euros = nodoEuros.value; // STRING
    let euros = nodoEuros.valueAsNumber; // NUMBER
    console.log(euros);


    let libras_valor_total = transformar_libras_euros(euros);
    // parametro_euros = euros -> Nos devuelve un valor
    let opericion_intermedia_no_pintar = transformar_libras_euros(100);

    let nodoTotalLibras = document.querySelector('#totalLibras');
    nodoTotalLibras.innerHTML = libras_valor_total;

    let yenes = euros * FACTOR_YENES;

}



function transformar_libras_euros(parametro_euros) { //100
    let libras = parametro_euros * FACTOR_LIBRAS;
    // Consultar un servicio de internet que me de el valor de las libras 

    console.log(libras);
    return libras; // SACAR FUERA el valor de la variable
}




let pelicula = {
    titulo: "Avatar",
    fecha: 1997,
    director: "J.C."
}

console.log('pelicula', pelicula);

pelicula.titulo = "Nuevo Valor";



// let resp_1 = prompt('')

// if (resp_1 === '') {


// }


// PAR o IMPAR

// MULTIPLO DE 3

// MULTIPLO DE 7


// FOR y de ARRAYS


// For -> Trozo de código que se REPITE UN NÚMERO DETERMINADO DE VECES


// let  i -> Definiendo UNA VARIABLE LOCAL -> SÓLO va a estar presente DENTRO DEL FOR
let str_string = " *"; // GLOBAL

for (var i = 0; i < 10; i++) { // NO USAR VAR porque define la variable en el CONTEXTO GLOBAL -> "Perdemos el control" -> Usar let
    console.log("Vuelta: ", i,);
    // Se REPITE pero VARÍA i
    str_string = str_string + " *";
}// Se destruye la i

console.log("Indice del for", i);



// ARRAYS 


let frutas = ['manzana', 'pera', 'melón', 'melocotón', 'piña', 'sandía', 'tomate', 'limón', 'plátano'];

let numeros = [1, 2, 3, 5, 7, 11, 13]

console.log(frutas);

console.log('Tamaño de la lista: ', frutas.length);

console.log('Primer elemento de la lista', frutas[0]);
console.log('Segundo elemento de la lista', frutas[1]);





for (let i = 0; i < frutas.length; i++) {
    console.log(i); // i va cambiando para CADA VUELTA
    console.log(frutas[i]); // Voy a decidir USAR la i de un for para acceder a cada elemento de la lista
}

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[3]);
// console.log(frutas[4]);
// console.log(frutas[5]);


// Pintar TODOS los elementos de la lista en La web
/*
    - Seleccion
    - Pintar
    - For de la lista
    - Pintar tods los elementos del for

*/

let nodoLista = document.querySelector('#lista');
console.log(frutas[0]);


for (let i = 0; i < frutas.length; i++) {
    nodoLista.innerHTML = nodoLista.innerHTML + "<li>" + frutas[i] + "</li>";
}































