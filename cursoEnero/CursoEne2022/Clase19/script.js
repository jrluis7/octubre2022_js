// EXPRESIONES REGULARES
let array = new Array ( 7 );
console.log ( array )


// Tipo STRING - Métodos NO MUTABLES, no cambian el objeto original
let texto = "Hola      mundoooooo    Curso    de  JS !!!";

let otroTexto = new String( 'Hola mundo' );
console.log( otroTexto );
console.log( texto );

let text_replace = texto.replaceAll( "o" , "*" );

console.log( text_replace );

let arr_split = texto.split( "o" );

console.log( arr_split );

let arr_texto = texto.replaceAll("!","").split(' ');
console.log( arr_texto );

// let contarPalabras = 

// let pattern_2 = new RegExp();

let texto_prueba = "JS";

console.clear()
console.log( texto_prueba )
// let pattern = /o/g ; // Global -> No se para en el primer acierto 
// let pattern = /o/gi ; // Global, insensitive, -> Mayus / minus
// let pattern = /^H/gi ; // Inicio de cadena
// let pattern = /!$/gi ; // Final de cadena
// let pattern = /o{2}/gi; // Repetición de caracteres
// let pattern = /o{1,2}/gi; // Repetición de caracteres con MIN y MAX
// let pattern = /o{1,}/gi; // Repetición de caracteres con MIN y sin máximo (+)
// let pattern = /o{0,}/gi; // Repetición de caracteres con MIN y sin máximo (*)
// let pattern = /[aeiou]{6}/gi; // Se crean grupos a modo de COMODINES
// let pattern = /(H[aeiou]{6}){1}/gi; // Se crean grupos a modo de COMODINES
// let pattern_url = /^https{0,1}:\//gi; // Escapar caracteres especiales con \
let pattern = /(HTML|JS)/gi; // Escapar caracteres especiales con \

console.log( texto_prueba.replace( pattern , "*" )  );

console.log( 'match' , texto_prueba.match( pattern ) );
console.log( 'search', texto_prueba.search( pattern ) );

console.log( "Test" , pattern.test( texto_prueba ) )
console.log( pattern.exec(  texto_prueba ) )


// URL
/*
    http://dominio.com
    https://dominio.com
    https://www.dominio.com
    https://www.dominio.com.es
    https://www.mi.dominio.com
    https://dominio.es
    https://dominio.sexy
    https://mi-dominio.sexy
    https://mi1212dominio.sexy
*/

// let url = "http://www.dominio.com";
// let url = "https://www.misad123-.guia.dominio.madrid.es";
// console.log( url );
// let pattern_url = /^https{0,1}:\/{2}(w{3}\.){0,1}([a-z0-9\-]{2,}\.){1,}([a-z]{2,6}\/{0,1})$/gi; // Se crean grupos a modo de COMODINES
// console.log( url.replace( pattern_url , "*" )  );

// console.log( 'match' , url.match( pattern_url ) );
// console.log( 'search', url.search( pattern_url ) );

// console.log( "Test" , pattern_url.test( url ) )
// console.log( pattern_url.exec(  url ) )




