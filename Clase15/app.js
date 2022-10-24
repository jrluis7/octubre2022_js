'use strict'



let listaCuadrados = document.querySelectorAll('.cuadrado');

console.log('.cuadrado');
console.log(listaCuadrados);

for (let i = 0; i < listaCuadrados.length; i++) {

    console.log(listaCuadrados[i])// Cada uno de los NODOS

    listaCuadrados[i].addEventListener('click', function () {

        console.log("Clic");
        console.log(listaCuadrados[i]);
        console.log(this) // NODO listaCuadrados[i]

        // this.style.backgroundColor = 'lightgreen';
        this.classList.toggle('activo');

    });

}


let nodoBtn = document.querySelector('#btnChange');

nodoBtn.addEventListener('click', function () {

    // Seleccionar los elementos cuadrado de #secundario

    // let listaCuadrados_secundario = document.querySelectorAll('#secundario .cuadrado');

    let nodoSecundario = document.querySelector('#secundario');
    // Búsqueda FOCALIZADA EN UN NODO HTML
    let listaCuadrados_secundario = nodoSecundario.querySelectorAll('.cuadrado');



    console.log(listaCuadrados_secundario)



});


