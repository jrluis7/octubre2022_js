'use strict'
import Grid from './modules/Grid.js';

// https://medium.com/@emma.pejko/making-gifs-in-javascript-497349bf3cc8



console.log('Ey! aquí estoy');
const d = document;

function query(selector) {
    return d.querySelector(selector);
}

let nodoColor       = query('#color');
let grid            = query('#grid');
let entradaAncho    = query('#ancho');
let entradaAlto     = query('#alto');
let btnCambiarTam   = query('#cambiarTamano');
let btnExport       = query('#export');
let btnExport_svg   = query('#export_svg');

const grid_element = new Grid(20, 30, grid);

btnCambiarTam.addEventListener('click', function () {
    grid_element.setSize(entradaAncho.valueAsNumber, entradaAlto.valueAsNumber);
})
nodoColor.addEventListener('change', function () {
    grid_element.setColor(this.value);
})

btnExport.addEventListener( 'click' , function () {
    preview.innerHTML = "";
    preview.appendChild(grid_element.exportToCss())
})
btnExport_svg.addEventListener( 'click' , function () {
    svgOne.innerHTML = "";
    svgOne.appendChild(grid_element.exportToSVG())
})

color.addEventListener

let testString1 = '0px none rgb(98, 98, 98)'
let testString2 = 'rgba(0, 0, 0, 0.75) 10px 10px 5px 0px'
console.log(testString1.match(/(?:[^\s\(\)]+|\([^\(\)]*\))+/g));
console.log(testString2.match(/(?:[^\s\(\)]+|\([^\(\)]*\))+/g));



// Selector de color de fondo
// Dark mode
// Últimos Colores -> hexadecimal
// Subir una imagen y convertirla a pixel
// Últimas creaciones
// Likes
download_svg.addEventListener('click', downloadSVGAsText)
function downloadSVGAsText() {
    const svg = document.querySelector('svg');
    const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = 'download.svg';
    a.href = 'data:image/svg+xml;base64,' + base64doc;
    a.dispatchEvent(e);
  }