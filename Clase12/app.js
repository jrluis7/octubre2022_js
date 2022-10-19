'use strict'



// Tipos de datos

// -> Herramientas -> Métodos

/**
 * Array -> push, pop , slice, filter, find
 * Number -> fixed, isNan, toString
 * String -> slice,substring, split, replace
 * 
 * 
 */


let multi = "-" * 10; // NaN -> Not a Number

console.log(multi);


let pelicula = {
    nombre: "",
    estreno: 2020,
    saludo: function () {
        // método-> Actuar sobre el propio objeto
    }
}


// let document = {
//     querySelector: function (selector) {

//     }
// }



function areaCirculo(radio) {
    return Math.PI * radio * radio;
}




// Pintar en la web -> 2D
let circulo = {
    x: 100,
    y: 100,
    r: 5,
    diametro: function () {
        return 2 * this.r;
    },
    area: function () {
        return Math.PI * this.r * this.r;
    },
    perimetro: function () {
        return Math.PI * this.diametro();
    }
}

console.log(circulo);

let area_pintar = circulo.area();

console.log(area_pintar);









