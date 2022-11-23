'use strict'

/* 
    EJEMPLO SIMPLE
*/
/*
let colorFav = localStorage.getItem('miClave');

console.log(colorFav);

let color_guardado = localStorage.getItem('colorFavorito');
console.log('Color Guardado', color_guardado)

if (color_guardado) {
    $('body').css({
        'background-color': color_guardado
    })
}

$('#btnSave').on({
    click: function () {

        let color = $('#color').val();

        localStorage.setItem('colorFavorito', color);

        $('body').css({
            'background-color': color
        })

    }
})
*/



// COMPLEJO
// >>> Máster <<<
// SIEMPRE actualizada


let listaColores = [];
// Estamnos usando Local Storage como BBDD 
// Al inicio tenemos que pedir los datos de la BBDD

let lista_json = localStorage.getItem('listaColores');

if (lista_json) {
    listaColores = JSON.parse(lista_json);
}
console.log(listaColores)

// Pintado inicial de los datos que vienen 
for (let i = 0; i < listaColores.length; i++) {
    console.log(listaColores[i]);
    pintaWeb(listaColores[i].nombre, listaColores[i].color);
}


$('#btnSave').on({
    click: function () {
        let valorColor = $('#color').val();
        let valorTexto = $('#texto').val();

        pintaWeb(valorTexto, valorColor);

        listaColores.push({ nombre: valorTexto, color: valorColor })
        console.log(listaColores);

        let json_lista = JSON.stringify(listaColores)
        localStorage.setItem('listaColores', json_lista);
    }
})


function pintaWeb(nombre, colorPintado) {

    // let nodoDiv = document.createElement('div');
    // nodoDiv.classList.add( 'color' );
    // $(nodoDiv).addClass('color');

    let nodoDiv_jq = $('<div class="color"> </div>');
    console.log(nodoDiv_jq);
    nodoDiv_jq.addClass('otraClase')
    nodoDiv_jq.html(nombre)
    nodoDiv_jq.css({
        'background-color': colorPintado
    })
    // nodoDiv_jq.text()

    $('#gridElementos').append(nodoDiv_jq);



}




// let tareas = [

// ];

// let tareas = {
//     porHacer: [],
//     comletadas: []
// }




/* 

btnAdd ->




*/



