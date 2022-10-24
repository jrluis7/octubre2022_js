'use strict'
import Grid from './modules/Grid.js';

t = [
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#ffffff",
        "#f90e09",
        "#000000",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#ffffff",
        "#f90e09",
        "#ffffff",
        "#000000",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#ffcf8f",
        "#000000",
        "#ffcf8f",
        "#000000",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "#ffcf8f",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#ffcf8f",
        "#000000",
        "#000000",
        "#000000",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#000000",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#ffcf8f",
        "#000000",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        "#000000",
        "#000000",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "",
        "",
        "#000000",
        ""
    ],
    [
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "#000000",
        "#1741fc",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "#000000",
        "",
        "#000000",
        ""
    ],
    [
        "",
        "",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#000000",
        "",
        "",
        "",
        "#000000",
        "#1741fc",
        "#000000",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#f90e09",
        "#000000",
        "",
        "#000000",
        ""
    ],
    [
        "",
        "",
        "#000000",
        "#f90e09",
        "black",
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#1741fc",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "#000000",
        "black",
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#ffe655",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#ffe655",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "black",
        "#000000",
        "",
        "",
        "",
        "#000000",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "black",
        "#1741fc",
        "#000000",
        "#000000",
        "#000000",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "#000000",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "black",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "#8b4e21",
        "#8b4e21",
        "#000000",
        ""
    ],
    [
        "",
        "",
        "",
        "",
        "black",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "#8b4e21",
        "#8b4e21",
        "#8b4e21",
        "#000000",
        ""
    ],
    [
        "",
        "",
        "black",
        "black",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "#8b4e21",
        "#8b4e21",
        "#8b4e21",
        "#000000",
        ""
    ],
    [
        "",
        "black",
        "#8b4e21",
        "black",
        "black",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#1741fc",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#8b4e21",
        "#8b4e21",
        "#8b4e21",
        "#000000",
        ""
    ],
    [
        "",
        "black",
        "#8b4e21",
        "#8b4e21",
        "black",
        "#1741fc",
        "black",
        "black",
        "black",
        "#000000",
        "",
        "",
        "",
        "",
        "#000000",
        "#8b4e21",
        "#8b4e21",
        "#000000",
        "#000000",
        ""
    ],
    [
        "",
        "black",
        "#8b4e21",
        "#8b4e21",
        "black",
        "black",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "#000000",
        "#000000",
        "#000000",
        "",
        ""
    ],
    [
        "",
        "black",
        "#8b4e21",
        "#8b4e21",
        "#8b4e21",
        "black",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "",
        "",
        "black",
        "black",
        "black",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
]

// https://medium.com/@emma.pejko/making-gifs-in-javascript-497349bf3cc8



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
let btnExport_svg = query('#export_svg');
let btnEraser = query('#eraser');
let btnPaint = query('#paint');

// const grid_element = new Grid({ x: 2, y: 3, element: grid });

const grid_element = Grid.newTablero(t, grid);
// grid_element.history.push([...grid_element.tablero])
btnCambiarTam.addEventListener('click', function () {
    grid_element.setSize(entradaAncho.valueAsNumber, entradaAlto.valueAsNumber);
})
nodoColor.addEventListener('change', function () {
    grid_element.setColor(this.value);
})

btnExport.addEventListener('click', function () {
    preview.innerHTML = "";
    preview.appendChild(grid_element.exportToCss())
})

btnExport_svg.addEventListener('click', function () {
    svgOne.innerHTML = "";
    svgOne.appendChild(grid_element.exportToSVG())
})

btnEraser.addEventListener('click', function () {
    grid_element.switchEraser();
})

btnPaint.addEventListener('click', function () {
    grid_element.switchPaint();
})

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

