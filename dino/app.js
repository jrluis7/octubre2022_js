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
let btnExport = query('#export');

const grid_element = new Grid(10, 12, grid);

btnCambiarTam.addEventListener('click', function () {
    grid_element.setSize(entradaAncho.valueAsNumber, entradaAlto.valueAsNumber);
})
nodoColor.addEventListener('change', function () {
    grid_element.setColor(this.value);
})

btnExport.addEventListener( 'click' , function () {
    preview.appendChild(grid_element.exportToCss())
})

color.addEventListener

let testString1 = '0px none rgb(98, 98, 98)'
let testString2 = 'rgba(0, 0, 0, 0.75) 10px 10px 5px 0px'
console.log(testString1.match(/(?:[^\s\(\)]+|\([^\(\)]*\))+/g));
console.log(testString2.match(/(?:[^\s\(\)]+|\([^\(\)]*\))+/g));