'use strict'

// OBJETOS
/**
 * REPASO
 *  + 1. Pseudocódigo
 *  + 2. Crear Eventos -> onclick /
 *  + 3. Cómo seleccionar elementos -> document.querySelector
 *  + 4. Cómo pintar en la web -> innerHTML
 *
 * ( IF, FOR, FUNCTIONS )
 *
 *
 *
 *
 *
 * - WEB -> DOM
 *
 */


// DOM 
// window = {
//     document: {
//         querySelector: function (selector) {

//         },
//         body,

//     },
//     location: {

//     },
//     history: {

//     }
// }



let circulo = {
    r: 10,
    area: function () { //THIS -> Círculo -> YO MISMO
        // CONTEXTO -> ÁMBITO
        console.log(this) // circulo
        return this.r * this.r * Math.PI
    }
}


let circulo_2 = {
    r: 10,
    area: () => { //THIS -> Círculo -> YO MISMO
        // CONTEXTO -> ÁMBITO
        console.log(this) // circulo
        return this.r * this.r * Math.PI
    }
}


console.log(this) // WINDOW
console.log(window) // WINDOW

console.log(circulo.area()); // Contexto Circulo Porque el método está creado con "function"
console.log(circulo_2.area()); // Contecto es Window porque el método está creado con "arrow"

// HOISTING -> Se almacena en memoria antes de usarse
function aaaa(param) {

}

// NO tiene HOISTING
const bbb = function (param) {
    // Genera CONTEXTO
}

// ARROW function -> JS moderno 

const ccc = (param) => {
    // NO CREAN CONTEXTO
}

ccc("ddd");

// ccc = "hola";


// let asignatura = {
//     nombre: "JS",
//     profesor: {
//         nombre: "",
//         apellido: "",
//         saluda: function () { // This -> profesor

//         },
//         getAsignatura: () => {// This -> Profesor
//             console.log(this)
//         }
//     }
// }

// asignatura.profesor.getAsignatura();


function aa() {
    // -> Ambito local
}

console.log(aa())


let aaaaaaa = "Hola" // this.aaaa = Hola





function change() {
    let nodoH1 = document.querySelector('#main h1');
    console.log(nodoH1);
    nodoH1.style.color = "red";

}

// Quiero cambiar el color de todos los cuadrados cuando hago click

function changeAll() {
    // SIEMPRE devuelve una LISTA de nodos HTML
    let listaCuadrados = document.querySelectorAll('.cuadrado');
    console.log(listaCuadrados);


    // Las listas NO TIENEN una propiedad 'style'
    //listaCuadrados.style.backgroundColor = 'lightgreen';

    // Nodo HTML
    // Acceder a todos elementos, uno por uno
    for (let i = 0; i < listaCuadrados.length; i++) {

        listaCuadrados[i].style.backgroundColor = 'purple';
    }
}



// SEGUNDA Forma de crear eventos

let nodoBtnColor = document.querySelector('#btnColor');
console.log(nodoBtnColor);

let color = 'purple';

nodoBtnColor.style.color = 'green';
nodoBtnColor.style.color = color;


nodoBtnColor.onclick = function () {
    change();
}

nodoBtnColor.onclick = change // NO lleva paréntesis

console.log(change)
console.log(change())






