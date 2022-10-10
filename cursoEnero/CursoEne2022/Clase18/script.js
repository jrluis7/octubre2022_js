// Métodos de STRING


let texto = "     Hoooooola Mundooo       ";
let texto_2 = "Hola Mundo";

console.log( texto );
console.log( texto_2 );


// "Lista" de caracteres

console.log( 'texto.length' );
console.log( texto.length );

console.log( texto[7] );

texto[8] = "F"

texto = texto + "!!!";

console.log( texto );


// indexOf 
console.log( texto.indexOf( "Hola" ) );

// Trim -> Quitar los espacios al principio y al final de la cadena

let texto_sin_espacios = texto.trim();

console.log( 'texto_sin_espacios' );
console.log( texto_sin_espacios );


console.log( 'texto_sin_espacios.startsWith( "H" )' );
console.log( texto_sin_espacios.startsWith( "Hol" ) );


// Tolowercase, touppercase
let texto_mayus = texto_sin_espacios.toUpperCase();
console.log( texto_mayus )

// SPLIT -> Array con posiciones delimitadas por la cadena que le pongas

let arr_split = texto_sin_espacios.split( '' );
console.log( arr_split );

// REPLACE -> Reemplaza la cadena por un caracter
console.clear();
let replace_texto = texto_sin_espacios.replace( "o", "*" );
console.log( replace_texto );
let replace_texto_all = texto_sin_espacios.replaceAll( "o", "" );
console.log( replace_texto_all );






