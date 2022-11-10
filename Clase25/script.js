'use strict'

/**
 * 
 * Repaso:
 * - Math
 * - Random
 * - Crear elementos
 * - Información de los eventos
 * - Temporizadores
 * 
 */



// UN UNICO ELEMENTO HTML
let nodoBody = document.querySelector('body');

let isPainting = false;
let eraser = false;

nodoBody.addEventListener('mousedown', function () {
    isPainting = true;
})

nodoBody.addEventListener('mouseleave', function () {
    isPainting = false;
})

window.addEventListener('mouseup', function () {
    isPainting = false;
})

nodoBody.addEventListener('mousemove', function (info_evento) {
    // nodoBody.addEventListener('click', function (info_evento) {
    if (isPainting) {
        console.log('Click', info_evento);
        // Aleatorio 20 - 120
        // [ 0 , 1 )
        const ancho = 40 + Math.random() * 100;
        let x = info_evento.pageX - (ancho / 2);
        let y = info_evento.pageY - (ancho / 2);
        const pintoCuadrados = info_evento.altKey;
        pinta_circulo(x, y, ancho, pintoCuadrados);
    }
});


function pinta_circulo(pos_x, pos_y, radio, square) {
    let nodoCirculo = document.createElement('div');
    nodoCirculo.classList.add('circulo');
    nodoCirculo.style.top = `${pos_y}px`;
    nodoCirculo.style.left = `${pos_x}px`;
    nodoCirculo.style.width = `${radio}px`;
    nodoCirculo.style.height = `${radio}px`;

    nodoCirculo.style.backgroundColor = getRandomColor();

    if (!square) {
        nodoCirculo.style.borderRadius = "50%";
    }

    nodoBody.append(nodoCirculo);

    // let ref_timer = setTimeout(function () {
    //     nodoCirculo.remove();
    // }, 1000)

}


function getRandomColor() {
    let randomRed = Math.trunc(Math.random() * 256);
    let randomGreen = Math.trunc(Math.random() * 256);
    let randomBlue = Math.trunc(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen} , ${randomBlue})`
}