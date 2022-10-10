'use strict'

let miEdad = 13;

// miedad = 60; // JS
// Modo estricto

// Tipos de datos Básicos

// Funciones 

// Sentencias de control


// Pintar en la web con innerHTML


// 1. Variables y operadores 



function pintaWeb(){
    console.log( 'Clic' );
    // Selecciono en elemento
    let nodoDatos = document.querySelector('#datos');

    // Acceder a una propiedad para cambiarla
    // nodoDatos.innerHTML = "<h3> Hola JS </h3>";

    nodoDatos.innerHTML = nodoDatos.innerHTML + "<h3> Contenido Nuevo</h3>"

    // nodoDatos.style.backgroundColor = "lightgreen";

    // Accediendo a una propiedad para leerla
    console.log( nodoDatos.innerHTML )
    console.log( nodoDatos.style.backgroundColor )

    // Si el color es verde -> Lo pinto de azul
    // Y si no lo pongo en verde

    if( nodoDatos.style.backgroundColor === 'lightgreen' ){
        nodoDatos.style.backgroundColor = 'lightblue';
    }else{
        nodoDatos.style.backgroundColor = 'lightgreen';
    }

}

let nombrePersona = 'Marcos';

nombrePersona = nombrePersona + ' Gómez';





let texto = "AAAA";


texto = "BBBB"; // REASIGNO Valor

texto = texto + "CCCC"; // REASIGNO Valor

// No queremos que el valor cambie a lo largo de la ejecución
// Constantes son variables QUE NO PUEDEN SER REASIGNADAS


// Tipos de Variables BÁSICOS

const PI = 3.1416;   // NUMBER

let textoCadena = '50'; // STRING

console.log( textoCadena );
console.log( PI );

let mayorDeEdad = true;

console.log( mayorDeEdad );

// Comprobar el tipo de dato -> typeof
console.log( typeof( mayorDeEdad ) );
console.log( typeof( PI ) );


mayorDeEdad = 'true' // STRING


// TIPOS DE DATOS COMPLEJOS

// ARRAYS []

let frutas = [ 'manzana','pera','plátano','fresa','melón' ];

console.log( frutas );

console.log( 'frutas.length' );
console.log( frutas.length );

// Acceder a casa uno de los elementos

console.log( frutas[ 0 ] ) // 'manzana'

// OBJECT
// Un objeto TIENE ATRIBUTOS o PROPIEDADES
let pelicula = {
    titulo:'Toy Story',
    director: 'Pixar',
    estreno: 1995
}

console.log( pelicula.titulo );
pelicula.estreno = 2000;

console.log( pelicula );



let nombrePersona1 = 'Pepe';
let apellidoPersona1 = 'Jiménez';

let nombrePersona2 = 'María';
let apellidoPersona2 = 'Gómez';

let persona1 = {
    nombre:'Pepe',
    apellidos:'Jiménez'
}




// OPERADORES

// Realizan transformaciones entre VALORES

// OPERADOR DE ASIGNACIÓN =
let x = 100;
let y = 20;

let total = x + y; // 120

x = 200;

let z = x; 


let likes = 0;

// Equivalentes para 1
likes = likes + 1; // likes = 0 + 1; likes = 1
likes = likes + 1; // likes = 1 + 1; likes = 2
likes = likes + 1; // likes = 2 + 1; likes = 3

likes++; // ++ -> Incrementar en 1 la variable

likes += 1

// Equivalentes


likes += 5;
likes = likes + 5;

let multi = 10;
multi *= 2;
multi = multi * 2;


//

let division = 7/2 // 3.5
console.log( division );

// RESTO
let resto = 7 % 2; // 1

let resto_4    = 7 % 4; // 3
let resto_8_4  = 8 % 4; // 0
let resto_9_4  = 9 % 4; // 1
let resto_10_4 = 10 % 4; // 2
let resto_11_4 = 11 % 4; // 3




// OPERADORES RELACIONALES -> SIEMPRE devuelven un BOOLEAN

// Equivalencia  ->   === 
// Distinto ->        !== 

if( miEdad > 18 ){ // IF siempre va un boolean

}else{

}

let texto_2 ='aaa';
let texto_1 ='bbbb';

console.log( texto_1 > texto_2 );



// OPERADORES LÓGICOS

let genero = 'Hombre';

if( miEdad >= 18 && genero === 'Hombre'  ){
    //
}

if( miEdad < 18 || genero === 'Mujer' ){
    // Al bote salvavidas
}


let colorFavorito = '';
if (( colorFavorito === 'rojo' || colorFavorito === 'verde') && miEdad > 18 ){

}else{
    // Siempre recoge lo que no cumpla el IF

}



// Sobrecarga de operadores

let num_str = "50"; // STRING

let numero = 10; // NUMBER


let total_num = numero + 100 //  110


//              STRING + NUMBER
let datoTotal = num_str + numero //

console.log( 'datoTotal' );
console.log( datoTotal );

// Convertir el STRING a NUMBER; Number(  )

let datoNumero = Number( num_str ) + numero;
// let datoNumero_ = ( +num_str ) + numero; // Equivalente
console.log( 'datoNumero' );
console.log( datoNumero );


if( miEdad >= 18 ){
    // Siempre se cumple la condión


}else{ // miEdad < 18
    // 

}



let edadUsuario;

let estudias = true;
let trabajas = false;



if( edad >= 18    &&     ( estudias === true || trabajas === true ) ){
    // Eres una persona de provecho

}else{
    // !( edad >= 18    &&     ( estudias === true || trabajas === true )  )
    // edad < 18 || ( estudias === false && trabajas === false )

}

if( edad >= 18    ){ 
    if( estudias === true || trabajas === true ) { // >=18
        // Eres una persona de provecho
    }

}else{
    // !( edad >= 18    &&     ( estudias === true || trabajas === true )  )
    // edad < 18 || ( estudias === false && trabajas === false )

}





if( edad = 18 ){ //



}





