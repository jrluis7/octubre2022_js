'use strict'


// contador de letras version 1

let str = 'curso de JS, HTML, CSS y muchos ejercicios de programacion';
let letterCount = str.replace(/\s+/g, '').length;

console.log(letterCount);

let Resultado_1 = document.querySelector('#primer_resultado');
Resultado_1.innerHTML = `<div>` + `El numero total de letras es: ${letterCount}` + `</div>`




// contador de letras version 2

let nodoBtnMostrar = document.querySelector('#show');
nodoBtnMostrar.addEventListener('click', function () {
    console.log('click en mostrar array')
    let texto = "curso de JS, HTML, CSS y muchos ejercicios de programacion";

    let cuentaLetras = mostrarResultado(texto);
    console.log(cuentaLetras)
    let listaResultado = document.querySelector('#resultado');
    listaResultado.innerHTML = `<div>` + `${pintaTodos}` + `</div>`

    pintaTodos(cuentaLetras);
})

function mostrarResultado(texto) {
    // O( 7N )
    let letterAmount = [];
    for (let i = 0; i < texto.length; i++) {
        let letter = texto[i]; // o
        if (letterAmount[letter] == undefined) {
            letterAmount[letter] = 1
        }
        else {
            letterAmount[letter]++
        }

    }
    console.log(letterAmount);
    return letterAmount;
}


function pintaTodos(array) {

    for (const key in array) {
        console.log(key);
        console.log(array[key])
    }


}
// pensar en crear funcion

// let miTextoCharArr = 

// function cuentaLetra (letra, dic){
//     if(dic[letra]== undefined){
//         dic[letra] = 1
//     }
//     else
//     {
//         dic[letra]++
//     }
// }






// let frutas = ['pera', 'manzana', 'melón']


// for (let i = 0; i < frutas.length; i++) {
//     console.log(i)// indice
//     console.log(frutas[i]) // valor
// }

// for (const key in frutas) { // Itrar los indices
//     console.log(key)// indice
//     console.log(frutas[key])//valor
// }

// for (let cadaFruta of frutas) {
//     console.log(cadaFruta);// valor
// }