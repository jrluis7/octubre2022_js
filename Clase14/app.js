'use strict'

// Cuando click btn
// - Seleccionar TODOS los cuadrados y cambiarlos de color

// UN SOLO ELEMENTO HTML
let nodoBtn = document.querySelector('#btnChange');

// onclick -> El atributo que responde al evento 'click'
// nodoBtn.onclick = function () {

//     console.log('Click AAAA')

// }

// RECOMENDADO
nodoBtn.addEventListener('click', function () {
    console.log('CCCCC');
});

function evento_DDDD() {
    console.log('DDDDD');
}

console.log(evento_DDDD)

nodoBtn.addEventListener('click', evento_DDDD);// Puedo Eliminar evento 


let nombre = 'Luis';


let totalNombre = nombre;




nodoBtn.addEventListener('click', function () {

    // DEVUELVE -> UNA LISTA
    let listaCuadrados = document.querySelectorAll('.cuadrado');
    console.log(listaCuadrados);
    console.log(listaCuadrados.style)

    for (let i = 0; i < listaCuadrados.length; i++) {
        // NODO INDIVIDUAL
        listaCuadrados[i].style.backgroundColor = 'lightgreen';
    }

});

// Cuando puslo en cuaqluier CUADRADO -> cambio de color a si mismo
// UN EVENTO a CADA CUADRADO

let listaCuadrados = document.querySelectorAll('.cuadrado');

for (let i = 0; i < listaCuadrados.length; i++) {

    console.log(listaCuadrados[i])//<div class="cuadrado"> A </div>
    listaCuadrados[i].addEventListener('click', function () {
        console.log('Clic en el cuadrado');

        // 1. Tengo que RECORRER TODOS LOS CUADRADOS y quitando el color morado
        // let nodoMorado = document.querySelector('.morado');
        // if (nodoMorado) {
        //     nodoMorado.classList.remove('morado');
        // }
        // 2. Poner el color a mi mismo

        // listaCuadrados[i].style.backgroundColor = 'purple';
        // this -> listaCuadrados[i]
        // this.style.backgroundColor = 'purple';
        this.classList.add('morado');
    })

}

