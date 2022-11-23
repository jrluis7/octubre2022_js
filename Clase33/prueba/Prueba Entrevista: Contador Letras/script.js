// Prueba Entrevista: Contador Letras


'use strict'
// Modo Estricto


let listaChar = document.querySelectorAll('.char');
let nodoCount = document.querySelectorAll('.count');
let nodoLetra = document.querySelectorAll('.letra');
let texto = [];
let letras = [];
let charLetra;
let charCount;


textArea.addEventListener('input', function (ev) {

    texto = textArea.value.split('');

    contadorLetras(ev)

    console.log('Caracteres Totales: ', texto.length)


})



function paintChar(letra, count) {

    // charDisplay.innerHTML += `<div class="char" id="${letra}">
    // <div class="letra">${letra}</div>
    // <div class="count">Count: ${count}</div>
    // </div>`
    let div;
    let divCount;
    div = document.createElement('div')
    div.className = 'char';
    div.id = `${letra}`;
    div.innerHTML = `<div class="letra">${letra}</div>`;
    divCount = document.createElement('div')
    divCount.className = 'char';
    divCount.innerHTML = `Count: ${charLetra.length}`;
    div.appendChild(divCount);
    charDisplay.appendChild(div);
    return div;
}




function contadorLetras(ev) {
    // ev.data = 'c'

    charLetra = texto.filter(function (char, indice) {
        if (char === ev.data) {
            return true
        }
        return false
    })
    if (letras[ev.data]) {
        letras[ev.data].elemento.querySelector('.letra').innerHTML = ev.data;
        letras[ev.data].elemento.querySelector('.char').innerHTML = 'Count: ' + charLetra.length;


        letras[ev.data].count = charLetra.length;
        return
    } else {

        letras[ev.data] = { count: 1, elemento: paintChar(ev.data) }
    }

    console.log(letras);

    // charLetra.forEach(element => {
    //     if(charDisplay.children[element]){
    //         debugger
    //         return
    //     }else{
    //         console.log('else')
    //     }


    //     console.log('Letra ', element)
    // });

    if (charLetra[0] === undefined) {
        return
    } else {
        console.log('Count letra ' + charLetra[0].toUpperCase() + ':', charLetra.length)

    }

}





