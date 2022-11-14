'use strict'

/**
 * -> 'Corrección' de número creciendo
 * 
 *  jQuery -> Parte 1
 */


cont_1 // #cont_1 -> Genera una variable global en JS

for (let i = 0; i < 10; i++) {
    console.log(i);
    cont_1.innerHTML = i;
}



// contador(cont_1, 10); // A
// contador(cont_2, 7); // B 
// contador(cont_3, 4); // B 

// LISTA de elementos
let listaContadores = document.querySelectorAll('.contador');
for (let i = 0; i < listaContadores.length; i++) {
    let nodoHtml = listaContadores[i];// HTML
    let limite = nodoHtml.dataset.limite;
    if (!limite) {
        limite = 10; // Default
    }

    contador(nodoHtml, limite, 5000)
}


function contador(nodoHTML, limite, tiempoTotal) {
    let tiempo = tiempoTotal / limite;

    let contador = 0;
    let ref_interval = setInterval(() => {

        contador++;
        nodoHTML.innerHTML = contador + "%";

        if (contador >= limite) {
            clearInterval(ref_interval)
        }

    }, tiempo);

}


let centesimas = 0;
let segundos = 0;
let minutos = 0;

let ref_interval_cent = setInterval(() => {

    centesimas++;

    if (centesimas >= 100) {
        centesimas = 0;
        segundos++;
    }

}, 10);


// CORE
[
    // Codigo 1

    // Codigo 2


]


// JS nativo - JS Vanilla

// Sólo un nodo HTML
let nodoBtn = document.querySelector('#btnClic');
console.log("Nativo", nodoBtn)
// nodoBtn.addEventListener('click', function () {

//     // LISTA de nodos HTML
// let listaColumna = document.querySelectorAll('.columna')
// console.log(listaColumna);

// for (let i = 0; i < listaColumna.length; i++) {
//     listaColumna[i].style.backgroundColor = 'lightgreen';
// }

// });

// CDN -> Content Delivery Network
// LTS -> Long Term Support

// jQuery -> JavaScript 
// console.log($);
// console.log(jQuery);

// $texto = "";

// Selector de elementos con jQuery
let nodoJquery_btnClick = $('#btnClic');
console.log('Jquery', nodoJquery_btnClick);

// Cambiar de color al botón
// >> JS
nodoBtn.style.color = "red";

// >> JQUERY
// nodoJquery_btnClick.css('color', 'blue');
nodoJquery_btnClick.css({
    'color': 'blue',
    'background-color': 'white'
});

// Cambiar el color de todas las columnas

// >> JS 
let listaColumna = document.querySelectorAll('.columna')
console.log('JS', listaColumna);

// listaColumna.style.color = ""; // Style no es una propiedad de Node list
for (let i = 0; i < listaColumna.length; i++) {
    listaColumna[i].style.backgroundColor = 'lightgreen';
}

// >> JQUERY
// El objeto jquery se parece a una LISTA donde dentro tiene los elementos NATIVOS pero ese objeto, tiene TODAS las herramientas de jQuery disponibles

let columnas_jquery = $('.columna');
console.log('JQUERY', columnas_jquery)

// Que cambie las propiedades de cada elemento de la selección
columnas_jquery.css({
    'background-color': 'darkred',
    'color': 'white'
})


// Eventos en Jquery
$('#btnClic').on({
    click: function () {

    },
    dblclick: function () {

    }
});



// Cuando quiero hacer algo SOBRE TODOS LOS ELEMENTOS DE LA SELECCIÓN -> Jquery OK!
let todas_columnas_jquery = $('.columna');

todas_columnas_jquery.on({
    click: function () {
        console.log("Click en COLUMNA");
        console.log(this); // JS NATIVO

        // this.style.backgroundColor = "blue";

        // Cualquier elemento nativo se puede convertir en Jquery
        // elementoJquery = $( elementoNativo )
        $(this).css({
            'background-color': 'blue'
        })
    }
})

// let pelicula = {
//     nombre:"",
//     fecha:1999,
//     director:"J.F",
//     saluda:function(){

//     },
//     calcula:function(){

//     }
// }


// Métodos de Jquery
// addClass
// removeClass
// toggleClass





