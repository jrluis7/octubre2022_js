'use strict'

// Siempre que pintemos contenidos dinámicos -> UN padre "vacío"


let today_start = new Date();
console.log(today_start);
console.log('START', today_start.getTime())// miliseconds -> 1/1/1970

let nodoGrid = document.querySelector('#gridTablas');

let str_tabla = ``;

for (let t = 0; t < 1000; t++) {
    str_tabla += getTabla(t);
}

nodoGrid.innerHTML = str_tabla


let today_end = new Date();
console.log(today_end);
console.log('END', today_end.getTime())

let tiempoTotal = today_end.getTime() - today_start.getTime();
console.log('Tiempo de ejecución', tiempoTotal)
function getTabla(numeroTabla) {
    let str_cada_tabla = `
        <div class="tabla">
            <h2>Tabla del ${numeroTabla}</h2>
            <div>`
    for (let i = 0; i < 11; i++) {
        str_cada_tabla += `<div> ${numeroTabla} x ${i}  = ${numeroTabla * i} </div>`
    }
    str_cada_tabla += `</div>
        </div>`

    return str_cada_tabla;
}




let tablero = [
    ['', '-', 'O'],
    ['-', '', 'O'],
    ['', '', ''],
];