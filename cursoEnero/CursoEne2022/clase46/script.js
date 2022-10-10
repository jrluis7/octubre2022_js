'use strict';
// Funciones de Flecha

function miFuncionCreaContexto(){

}
// Arrow Function
const miFunctionArrow = (nombre) => {
    console.log( "Hola " + nombre );
    return "Hola "+ nombre;
}
// const nombre = miFunctionArrow( 'Paco' );
const miFunctionArrowReturn = (nombre) =>  "Hola "+ nombre; // return 

// If ternario

let condicion = true;
let texto = "Hola "
if( condicion ){
    texto += "Señor";
}else{
    texto += "Señora";
}

let texto_ternario = "Hola " + ( condicion ? "Señor" : "Señora" );

console.log( texto_ternario );


// Map y Filter // Array -> Array DISTINTO
let alumnos = [ 
    {nombre:"AAA",apellido:"BBBB", edad:15},
    {nombre:"EEE",apellido:"CCCC", edad:20},
    {nombre:"III",apellido:"DDDD", edad:30},
 ]

 let alumnos_filtrados = alumnos.filter( (cadaElemento)=>{
    // return true => Lo mete en el array
    // return false => Lo filtra¡
    if( cadaElemento.edad > 18 ){
        return true;
    }else{
        return false;
    }
 } );

 console.log( alumnos_filtrados );


 let alumnos_transformados = alumnos.map( cadaElemento => {
    let div = document.createElement( 'div' );
    div.innerHTML = cadaElemento.nombre;

    return div;// cadaElemento => <div>
 } )

 console.log( alumnos_transformados )


// Destructuring

let pelicula = {
    nombre:"Toy Story",
    director:"Pixar",
    reparto:[
        "Buzz",
        "Woody",
        "Mr Potato"
    ],
    fecha:1993,
    sinopsis:"Juguetes haciendo cosas"
}


let miNombrePelicula = pelicula.nombre;
let miDirector = pelicula.director;

// CREAR una variable por cada atributo de la pelicula que coincida
let { nombre:a ,director } = pelicula;
 
// console.log( nombre )
console.log( director );
console.log( a );



// Operador Spread

let alumno = {
    nombre:"Luis"
}

console.log( alumno );

let alumno2 = alumno; // Asigna un ALIAS a la referencia

alumno2.nombre = "Pepe";

console.log( alumno2 );
console.log( alumno );

let alumno3 = { ...alumno };

alumno3.nombre = "Jose";
console.log( alumno3 );


let letras = ['A','E','I','O','U'];

let consonantes = [ 'B', 'C', 'D' ];


let todas_letras = [ ...letras , ...consonantes ];
todas_letras = [ ...todas_letras, 'E' ]; // PUSH


console.log( todas_letras )

let contenido =   <div className="App">
<h1> Hola mundo React </h1>
</div>

// NO USAR MÉTODOS MUTABLES
/**
 *  PROHIBIDO
    push
    splice
 */


// REACT -> Librería 

// 2 MANERAS
// - Mediante Librería y CDN
// - Cli React 






// const alumno_1 = {
//     nombre:"Pepe",
//     apellido:"G"
// }


// alumno_1.nombre = "Silvia";

// alumno_1 = {};

