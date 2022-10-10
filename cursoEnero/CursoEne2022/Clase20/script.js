// Evento - SUBMIT -> Formularios

let nodoFormulario = document.querySelector('#miFormulario');


nodoFormulario.addEventListener( 'submit', (evento)=>{
    this
    console.log( 'Submit de formulario' )


    evento.preventDefault();


} );




// Métodos de array: find, slice, filter, map, reduce



let letras = ['A','B','C','D','E'];

letras.push( 'F' );//['A','B','C','D','E','F']// MUTABLE

letras.pop( 'F' );

// LIFO -> Last IN First OUT

// FIFO -> First IN First OUT

// for( let i=0; i <letras.length; i++ ){
//     console.log( letras[i] )
// }

// for( let cadaLetra of letras ){
//     console.log( cadaLetra )
// }


// Tengo una lista y quiero hacer algo sobre todos los elementos
letras.forEach( ( cadaElemento, index, lista )=> { 
    console.log( "For each: "+cadaElemento )
    console.log( index )
    console.log( lista );

} );


const found = letras.find( ( cadaLetra )=>{
    if( cadaLetra === "A" ){
        return true;
    }else{
        return false;
    }
} );

const found_1 = letras.find( cadaLetra => cadaLetra === "A" ? true : false );



console.log( "found", found )



// const found = array1.find(element =>  element > 10);
// const found_ = array1.find(element => {return element > 10});
// const found = array1.find(function(element){
//     return element > 10
// });

// Filter


let letras_2 = ['A','B','C','D','E'];

const filtrados_vocales = letras_2.filter( ( cadaLetra )=>{

    // if( cadaLetra === 'A' || cadaLetra === 'E' || cadaLetra === 'I' ||cadaLetra === 'O' ||cadaLetra === 'U' ){
    if( ['A','E','I','O','U'].includes( cadaLetra )  ){ // Me sirve para testear varias opciones de una cadena de texto
        return true; // el elemento "original" -> filtrados_vocales
    }
    return false;

} );

console.log( filtrados_vocales );


let posts =[
    { tag:"naturleza", title:"Montaña" }
]


letras_2.splice( 2 , 1 );// Indice 2 -> Borro un elemento MUTABLES
console.log( letras_2 )




// MAP -> Devuelve un array CON LOS MISMOS ELEMENTOS MODIFICADOS 

let numeros = [1,2,3,4,5,6,7,8,9,10];

let numeros_multiplicados = numeros.map( ( cadaElemento )=>{
    return cadaElemento * cadaElemento
} );

console.log( numeros_multiplicados )

let nodosLetras = letras_2.map( ( cadaLetra )=>{
    let nodoDiv = document.createElement( 'div' );
    nodoDiv.classList.add( 'letra'+cadaLetra );
    nodoDiv.innerHTML = cadaLetra;
    return nodoDiv
} )

console.log( nodosLetras );


let letrasDesordenadas = ['p','t','e','d','a','f','A'];
// SORT
let letrasOrdenadas = letrasDesordenadas.sort( );

console.log( letrasOrdenadas )

let paises = [
    {nombre:"España",puntos:1},//a
    {nombre:"Francia",puntos:5},// b
    {nombre:"Italia",puntos:17},
    {nombre:"Holanda",puntos:4},
    {nombre:"Bélgica",puntos:5},// b
]

let paisesOrdenados = paises.sort( ( a , b )=>{
    // if <  0 -> a está antes que b
    // if >  0 -> b está antes que a

    if( a.puntos > b.puntos ){ // Descendente
        return -1 // que a esté antes que b
    }else if(a.puntos < b.puntos){
        return 1;
    }else{
        if( a.nombre > b.nombre ){
            return 1;
        }else{
            return -1;
        }
    }
} );

console.log( paisesOrdenados )




// REDUCE -> A un sólo elemento


let numeros_2 = [1,2,3,4,5,6,7,8,9,10];

const resultado = numeros_2.reduce( (acumulador, actual)=>{ 
    console.log( 'acumulador',acumulador )
    console.log( 'actual',actual )

    return actual + acumulador // acumulador = 3;

 } ,0 );
console.log( resultado )

let letrasDesordenadas_2 = ['p','t','e','d','a','f','A'];


const resultado_letras = letrasDesordenadas_2.reduce( (acc, actual)=>{
    return acc + " " + actual;
}, "Letras: " );
console.log( resultado_letras )


let texto = "Hola mundo JavaScript con reduce y métodos de array!!";







