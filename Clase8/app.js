'use strict'

// Repaso de FOR y listas -> Métodos

/*
    - Cuando queremos realizar una operación repetitiva un número determinado de veces
    - Cuando queremos generar un montón de números seguidos
    - Recorrer listas: Cuando quiero hacer algo en TODOS los elementos de la listas
*/

for (let i = 0; i < 10; i++) {

    console.log("Vuelta");
    console.log(i);// 5

}// Final -> i++ -> i = i + 1



let frutas = ['melón', 'plátano', 'sandía', 'fresa', 'pera'];

console.log(frutas[0]);// Primer elemento de la lista


// Saber si existe un elemento dentro de la lista
// 'sandía' -> TRUE
// 'pera' -> FALSE

console.clear(); // Borrar la consola

function encontarFruta(miFruta) {
    for (let i = 0; i < frutas.length; i++) {
        // console.log(i) // i cambia
        console.log(i, frutas[i]) // la i la estoy usando como índice de cada elemento -> posición dentro del array
        if (frutas[i] === miFruta) {
            console.log("ENCONTRADO");
            return true; // 
        } else {
            console.log("No encontrado")
        }
    }
    return false;// Cuando NO entro ninguna vez en return true
}

let melonEncontrado = encontarFruta('sandía');
console.log(melonEncontrado);


// Repaso general

// Template STRING -> Gestionar mejor el pintado en la web mediante los STRING

// Cuando la lista tenga una longitud par  -> Verde
// Cuando la lista tenga una longitud impar  -> Azul

let nodoUl = document.querySelector('#listaCompra');

// TEMPLATE STRING -> ` ${variable} `
// nodoUl.innerHTML = `<ul>
//                         <li>`+ frutas[0] + `</li>
//                         <li> ${frutas[0]}  </li>
//                     </ul> `;


// for (let i = 0; i < frutas.length; i++) {

//     nodoUl.innerHTML = nodoUl.innerHTML + "<li>" + frutas[i] + "</li>"; // Mantener lo que había antes
// }

let color = '';

if (frutas.length % 2 === 0) { // PAR
    color = 'lightgreen';
} else { //Impar
    color = 'lightblue';
}

// Introducir CONTENIDO A LA WEB -> NECESITAMOS HTML completo
// nodoUl.innerHTML = `<ul style="background-color: ${color} ">`;
// debugger;
// for (let i = 0; i < frutas.length; i++) {
//     nodoUl.innerHTML += `<li> ${frutas[i]}  </li>`
// }

// nodoUl.innerHTML += `</ul> `

// RECOMENDACIÓN: Crear una cadena de Texto con el HTML y después pintarlo

// Construyo la cadena de texto que reprenta HTML
let str_html = `<ul style="background-color: ${color} ">`;

for (let i = 0; i < frutas.length; i++) {
    str_html = str_html + `<li> ${frutas[i]} </li>`;
    debugger
}

str_html += `</ul>`;

// Voy a pintar
nodoUl.innerHTML = str_html












