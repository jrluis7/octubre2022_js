'use strict'


/**
 * Timeout -> Poner un tiempo antes de que se ejecute un código
 * 
 * Interval -> Lo mismo que el timeout pero se ejecuta de forma cíclica hasta que se pare
 * 
 */

let ref_timeout = setTimeout(function () {
    console.log('Ha pasado un segundo')
    // SE EJECUTA una vez
}, 1000);


let asteriscos = "";

for (let i = 0; i < 10; i++) {
    asteriscos = asteriscos + " * ";
    console.log(asteriscos);
}


console.log(asteriscos);
let ref_interval;// NO LO VOY A INICILIZAR
console.log(ref_interval)
let asteriscos_2 = "";
// UN NODO HTML
let nodoBtnStart = document.querySelector('#btnStart');
nodoBtnStart.addEventListener('click', function () {

    clearInterval(ref_interval)
    ref_interval = setInterval(function () {

        console.log('Interval');
        asteriscos_2 = asteriscos_2 + " * ";
        console.log(asteriscos_2);
        console.log('^^^^^^^');

        let nodoAsteriscos = document.querySelector('#gridAsteriscos');
        nodoAsteriscos.innerHTML = asteriscos_2;

    }, 100);

});

let nodoBtnStop = document.querySelector('#btnStop');

nodoBtnStop.addEventListener('click', function () {

    // Parar un temporizador o un interval
    // clearTimeout();

    clearInterval(ref_interval);


})









