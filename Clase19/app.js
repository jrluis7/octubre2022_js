'use strict'
import { Jugador, Posicion, ConfiguracionTeclado } from './Jugador.js'

/**
 * - Eventos
 *  -> desencadenantes de acción
 * 
 * 
 */

const d = document;

let nodoBtn = document.querySelector('#btn');

nodoBtn.addEventListener('click', function (info_evento) {
    // console.log('Clic en el botón');
    // console.log(info_evento);

});


let nodoEntrada = d.querySelector('#entrada');
nodoEntrada.addEventListener('keyup', function (evento) {
    // console.log('evento')
    // console.log(evento)
});


window.addEventListener('keyup', function (evento) {
    // console.log('evento Window');
    // console.log(evento)
});


let nododata = d.querySelector('#data');

window.addEventListener('mousemove', function (evento) {
    // console.log('[evento Window] Move');
    // console.log(evento)

    nododata.innerHTML = `X:${evento.pageX} ,Y:${evento.pageY}`;
});




class Juego {
    jugadores = [];
    constructor() {


        this.creaJugador(0, 0, 'blue', 'KeyA', 'KeyD', 'KeyW', 'KeyS');
        this.creaJugador(100, 20, 'green', 'KeyJ', 'KeyL', 'KeyI', 'KeyK');
        this.creaJugador(300, 20, 'red', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');

    }

    creaJugador(x, y, color, izq, der, arr, abj) {
        let posicion = new Posicion(x, y);
        let config = new ConfiguracionTeclado(izq, der, arr, abj)

        let jugador = new Jugador(color, 'tablero', posicion, config);

        this.jugadores.push(jugador);
    }

}






let juego = new Juego();

console.log(juego)






