'use strict'

let letras = 'abcdefghijklmnñopqrstuvwxyz'
let array_letras = new String(letras)

$('.text_area').keyup(function () {

    let array_texto = new String($('.text_area').val())

    let arrayLetrasTesteadas = []
    let div = document.querySelector('.contador_texto')

    let string = ''


    // O ( 3KN + 3K   ) =

    for (let i = 0; i < array_letras.length; i++) {
        // a

        let count = 0

        for (let a = 0; a < array_texto.length; a++) {

            if (array_letras[i] === array_texto[a]) {
                count++;
            }
        }



        console.log(array_letras[i], ' : ', count)

        string += `<div> ${array_letras[i]} -> ${count}</div>`

        div.innerHTML = string

        arrayLetrasTesteadas.push({ letra: array_letras[i], contador: count });

    }

    console.log(arrayLetrasTesteadas)


})

