'use strict'

import Persona from './modules/Persona.js';
import { factorial, cubo } from './modules/utils.js';


// import * as utils from './modules/utils.js';
// console.log(utils)
/**
 * - Programación funcional 
 * 
 * - Programación orientada a objetos ( POO )
 * 
 */

let alumno = {
    nombre: "Juan",
    apellido: "Gómez",
    fecha: 2000,
    edad: function () {
        let year = new Date().getFullYear();
        let edad = year - this.fecha;
        return edad;
    }
}

let alumno_2 = {
    nombre: 'María',
    apellido: 'Herranz',
    fecha: 1990,
    edad: function () {
        let year = new Date().getFullYear();
        let edad = year - this.fecha;
        return edad;
    }
}

let alumno_3 = {
    nombre: 'Marta',
    apellido: 'Herranz',
    fecha: 1995,
    edad: function () {
        return calculaEdad(this.fecha);
    }
}

let alumno_4 = {
    nombre: 'Marta',
    apellido: 'Herranz',
    fecha: 1995,
    edad: function () {
        return calculaEdad(this.fecha);
    }
}

let edadConcreta = alumno_3.edad();

// Función no pura
function calculaEdad(fecha) {
    let year = new Date().getFullYear();
    let edad = year - fecha;
    return edad;
}


// Funciones PURAS -> SIEMPRE devuelven lo mismo, con las mismas entradas
// function calculaEdad(start_date, current_date) {
//     let year = start_date.getFullYear() - current_date.getFullYear();
//     return year
// }

// let contador = 0;

// function suma(a, b) {
//     contador++; // Efecto lateral
//     return a + b;
// }


// function suma_pura(contador, a, b) {
//     contador++;
//     return { contador, resusltado: a + b };
// }

// contador = suma_pura(contador, 2, 5).contador;

// console.log(contador)




// POO -> Clases
/**
 * Modelos CONCUPTUALES que traducen una idea del mundo real al mundo digital PARA TU código
 * Plantillas de objetos
 */

let alumno_5 = {
    nombre: 'María',
    apellido: 'Herranz',
    fecha: 1990,
    edad: function () {
        let year = new Date().getFullYear();
        let edad = year - this.fecha;
        return edad;
    }
}



let poo_alumno = new Persona('Juan', 'Pérez', 1998); // USAR el constructor de PERSONA

console.log(poo_alumno)
console.log(alumno_2)


