// Clase 7






// Suma de números impares

// let suma = 0;

// for( let i = 1; i< 100; i++ ){

//     suma = suma + i;

// }


// for( let i = 1; i< 100; i=i+2 ){

//     suma = suma + i;

// }


let suma = 0;
let min = 200;
let max = 100;
let numero = 0;
/**
 * Función PURA -> Función que con las mismas entradas genera la misma salida
 * @param {*} numero 
 * @returns 
 */

function isPar( numero ){
    // if( numero % 2 === 0  ){
    //     return true; // Break;

    //     console.log( "Esta línea NUNCA SE EJECUTA" );
    // }else{
    //     return false;
    // }

    // Claúsula de guarda
    if( numero % 2 === 0  ){
        return true; // Break;     
    }
    return false;
}


for ( let i = min; i<max; i++ ){
    // numero = i;
    if( !isPar( i ) ){
        suma = suma + i;
    }
}

console.log( "suma" );
console.log( suma );



// FACTORIAL -> FOR

// Numero 6 : 6*5*4*3...
// 



// Solución RECURSIVA

/*
    6! = 6 x 5 x 4 x 3 x 2 x 1 =>   6! = 6 * 5!; 6 * factorial(5);

    5! = 5 x 4 x 3 x 2 x 1 =>       5 * 4!  

    4! = ...                        4 * 3!  4 * 6 = 24

    3! = ...                        3 * 2!; 3 * 2 = 6

    2! = ...                        2 * 1!; 2 * 1 = 2

    1! = ...                        1 * 0!; -> 1 * 1 = 1

    0! = 1;
    
*/


/**
 * 
 * @param {*} numero 
 * @returns 
 */
function factorial( numero ){
    // if( numero === 0 ) return 1;
    // return numero * factorial( numero - 1 );
    return ( numero === 0 ) ? 1 : numero * factorial( numero - 1 );
}

let fact_5 = factorial( 5 );
console.log( fact_5 );



// Operador TERNARIO: IF ESLE, con dos acciones 
let texto = "Eres ";
let macho = true;

// if ( macho === true ){
//     texto = "un macho";
// }else{
//     texto = "una hembra";
// }

// condicion ? "Acción cuando es TRUE" : "Acción cuando es FALSE"

( macho === true ) ? texto += "un macho" : texto += "una hembra";

texto += ( macho === true ) ? "un macho" : "una hembra";

console.log( texto );



let nodoInput = document.querySelector('#miEntrada');


nodoInput.style.color = "red";

nodoInput.classList.add( 'miClase' );



// DATE -> Fechas y tiempos

let hoy = new Date(); // Constructor
console.log( hoy );

let time = hoy.getTime();
console.log( time );

let diaSemana = hoy.getDay();
console.log( diaSemana );





let fecha = new Date( 1632077135746 ) 

console.log( fecha );




