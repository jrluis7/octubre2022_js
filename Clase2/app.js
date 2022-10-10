// Repaso Flex Animaciones 

// Repaso Evento, seleccionar elemento, cambiar estilo


function cambiaGrid(){
    console.log( 'Clic' );
    let nodoGrid = document.querySelector('#grid');
    console.log( nodoGrid );
    // Cambiar el color del texto de grid
    nodoGrid.style.color = '#ffffff';
    // Cambiar el fondo
    nodoGrid.style.backgroundColor = 'lightgreen';

}


// Intro JS -> Visión general


// EJECUCIÓN DIRECTA
let nodoGrid = document.querySelector('#grid');
console.log( nodoGrid );

// VARIABLES 

let nombrePersona = 'Luis Jiménez'; // STRING

console.log( nombrePersona );

let edad = 31; // NUMBER

console.log( edad );

nombrePersona = "Pedro";
// debugger; // Para el código en este punto

// nombrePersona = 42;

console.log( nombrePersona )

// edad = 31 + 1 ;
edad = edad + 1;

nombrePersona = nombrePersona + " Jiménez";
// debugger
console.log( nombrePersona );


let Persona = "Marcos"; // DEFINIR variables e INICIALIZARLAS

// CAMELL CASE
let mayorDeEdad; // DEFINIR VARIABLE

// SNAKE CASE
let mayor_edad = true; // BOOLEAN -> true y false


console.log( mayorDeEdad );

// String, Number, Boolean, undefined


let operacion = edad * 100 / 40;


// Funciones 
// Trozo de código que tiene un nombre -> 
// -> Semánticamente describir un código 
// -> Reusar el código
// -> Podemos parametrizar algunos de los aspectos de la función para obtener un resultado ligeramente distinto

// DEFINICIÓN de una función

/**
 * Pinta por consola el nombre y la edad de cualquier persona
 * @param { string } nombre_persona 
 * @param { number } edad 
 */
function saluda( nombre_persona, edad ){ // parametros -> comodines

    console.log( 'Hola ' + nombre_persona + '! Tienes '+ edad + ' años' );

    // Pintar en la web el saludo
    let nodoContenedorSaludo = document.querySelector('#contenedorSaludo');
    nodoContenedorSaludo.innerHTML = "<h2> Hola " + nombre_persona + '! Tienes '+ edad + ' años </h2>';

    // Haciendo algo en el sistema
}
// Ejecutar la función
saluda( 'Marta' , 50 ); // nombre_persona = 'Marta'
// debugger
saluda( 'Julio', 20 );
// debugger
saluda( 'Pepe', 34 );
// debugger
let saludoMaria = saluda( 'María', 23 ); // undefined porque no tiene return
// debugger
saluda( 'Roberto', -40 );

/**
 * 
 * @param {string} nombre_persona 
 * @param {number} edad 
 * @returns saludoCompleto en formato String
 */
function devuelve_saludo( nombre_persona, edad, genero ){
    let saludoCompleto = 'Hola ';
    if( genero === 'H' ){ // === SIEMPRE ES una pregunta -> Siempre devuelve TRUE o FALSE
        saludoCompleto = saludoCompleto + 'señor ';
    }else{ // 
        saludoCompleto = saludoCompleto + 'señora ';
    }
    saludoCompleto = saludoCompleto + nombre_persona + '! Tienes '+ edad + ' años';
    return saludoCompleto;
}

let saludo_marcos = devuelve_saludo( 'Marcos', 22 , 'H');
console.log( saludo_marcos );
console.log( saludoMaria );
let saludo_marta = devuelve_saludo( 'Marta', 21, 'M' );
console.log( saludo_marta );
// Sentencias de control
/**
 * Nos permite ejecutar un código en función de que se cumpla una condición
 */


let edadUsuario = 18;

if( edadUsuario >= 18 ){
    // Si la condición se evalua como true
    console.log( 'Eres un adulto' );
}else{ // edadUsuario < 18
    // Si NO se cumple la condición
    console.log( 'NO eres adulto' );
}




// Entrada de datos  -> prompt 

let introduceNombre = prompt( '¿Cómo te llamas?' );
// Bloquea la página
console.log( introduceNombre );



alert( 'Hola ' + introduceNombre );




















