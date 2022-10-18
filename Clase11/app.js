'use strict'

/* 
    Tipos Básicos: Repaso
    - String
    - Boolean
    - Number
    - Undefined, null

    - Date

    - Arrays
    - Objetos

*/



let texto = 'Hola mundo';
let edad = 10;


let one_January_1999 = new Date("1-1-1999");
console.log(one_January_1999)

let day = one_January_1999.getDay();
console.log(day);

console.log(one_January_1999.getTime())

console.log(new Date().getTime());

let frutas = ['fresas', 'plátano', 'melón'];

console.log(frutas);

frutas.push('sandía');

console.log(frutas);

frutas.pop();

frutas.sort(); // Ordenar el array

console.log(frutas);



let nombre = 'Luis';
let apellido = 'Jiménez';

let nombre_2 = 'Marta';
let apellido_2 = 'Gómez';


let persona = {
    nombre: 'Luis', // Una variable "dentro de otra" -> Propiedad o atributo
    apellido: 'Jiménez'
}

console.log(persona);


let pelicula = {
    titulo: 'Avatar',
    director: {
        nombre: 'James',
        apellido: 'Cameron',
        fecha: 1960
    },
    reparto: [
        // 'Brad Pitt',
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
    ],
    estreno: 2005
}


pelicula.titulo = 'Avatar 2';

pelicula.fecha = 2023;

console.log(pelicula);

pelicula.director.nombre = "James Carlos"

// nodoWeb.innerHTML = 
// nodoWeb.innerHtml = 

console.log(pelicula['director']['nombre']);


let nombrePropiedad = 'verano';

pelicula[nombrePropiedad] = 'ESTRENO';



let nodoGrid = document.querySelector('#grid'); // Método de document

// document = {
//     ...,
//     querySelector:function( selector ){
//         // ...
//         let nodoHTML = '';
//         return nodoHTML;
//     }
// }

// Método -> Función dentro de un objeto

// El objeto no es consciente del nombre que le ponen "FUERA"
let pelicula_2 = {
    titulo: 'Avatar',
    director: {
        nombre: 'James',
        apellido: 'Cameron',
        fecha: 1960,
        saluda: function () {// THIS -> Director
            // Método dentor de director;
            // Actúa sobre el propio objeto
            console.log(this)// director
            console.log('Hola ' + this.nombre + " " + this.apellido);
        }
    },
    reparto: [
        // 'Brad Pitt',
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
        { nombre: ' ', apellido: '' },
    ],
    estreno: 2005,
    texto_estreno: function () { // THIS -> Película -> Sólo están dentro del método
        console.log(`${this.titulo} se estrenó en ${this.estreno}.`)
    }
}


pelicula_2.director.saluda();