'use strict'



/*
    - Number
    - String
    - Boolean
    - Arrays
    - Object

*/


let numeroDecimal = 1.9822312346;
// Métodos del prototipo Number
console.log(numeroDecimal.toFixed(2));

// Método estático -> Porque no necesita crear un objeto número
console.log(Number.isInteger(numeroDecimal))
console.log(9, Number.isInteger(9))

// Métodos STRING
// No modifican el objeto original -> Mutabilidad


let texto = 'Hola mundo';

console.log(texto);

console.log('Longitud', texto.length)
class Utils {

    static getData() {

    }
}

Utils.getData();
// Texto -> Notación array para acceder a sus caracteres
console.log(texto[0]);// H
console.log(texto[1]);// o

let cadena = new String('Otra cadena de texto')
console.log(cadena)


// Si la cadena termina con una subcadena dada
console.log(texto.endsWith('undo'));
console.log(texto.startsWith(' H'));


// Eliminar espacios al principio y al final
let email = ' micorreo@domin@io.es  ';
console.log(email);
console.log(email.trim());

// Preguntar si la cadena tiene dentro otra subcadena
console.log('Tiene @?', email.includes('@'));
console.log('Tiene @?', email.search('s@'));
console.log('Tiene @?', email.match('@'));


console.log(email.replace('@', '****'));
console.log(email)


let frutas = ['pera', 'mandarina', 'fresa'];

frutas.push('sandía'); // Push -> Es un método que MUTA el elemento original

console.log(frutas);





// 

let persona = {
    nombre: 'Luis',
    apellido: 'JR'
}


// Estoy creando una copia
let otraPersona = persona; // JS -> Crea un alias para la misma variable

otraPersona.nombre = 'Manu';

console.log('otraPersona', otraPersona)
console.log('persona', persona)


let todasImagenes

let imagenesAgua

let imagenesFuego



