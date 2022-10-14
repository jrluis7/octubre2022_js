'use strict'
import Grid from './modules/Grid.js';


console.log('Ey! aquí estoy');
const d = document;

function query(selector) {
    return d.querySelector(selector);
}

let nodoColor = query('#color');
let grid = query('#grid');
let entradaAncho = query('#ancho');
let entradaAlto = query('#alto');
let btnCambiarTam = query('#cambiarTamano');

const grid_element = new Grid(10, 12, grid);

btnCambiarTam.addEventListener('click', function () {
    grid_element.setSize(entradaAncho.valueAsNumber, entradaAlto.valueAsNumber);
})
nodoColor.addEventListener('change', function () {
    grid_element.setColor(this.value);
})



color.addEventListener