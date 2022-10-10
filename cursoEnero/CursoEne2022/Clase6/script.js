// Repaso FOR

let lista = [ 'A','B','C','D'];

// Añadir datos al elemento original -> MUTANDO
lista.push('E');
lista.push('F');

console.log( lista.length );


for( let i = 0; i < 10 ; i++  ){

    console.log( i );

}

let nodoLetras = document.querySelector( '#misLetras' );
// Acceder a cada elemento de la lista

let letrasStr = "<div> <h2> ";

for ( let i = 0; i< lista.length; i++ ){

    letrasStr += '<span>'+ lista[i] +" , " + '</span>';

    // if( lista[i] === 'C' ) {
    //     break;// Estamos saliendo FROZOSAMENTE del for
    // }

}
letrasStr += '</div>' 
nodoLetras.innerHTML = letrasStr;

console.log( letrasStr );




// for ( let cadaLetra of lista ){// cadaLetra = letras[i]
//     letrasStr += cadaLetra +" , " ;

// }

let nodoDatos = document.querySelector( '#datos' );

let nombre = "Juanito";

// Template STRING
// nodoDatos.innerHTML = "<div> <h2>"+ nombre +" </h2><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium distinctio odio, suscipit dolores, nesciunt aperiam harum aliquam similique natus laborum, possimus temporibus dolore quos ex placeat quia! Illo, enim? </p></div>"


nodoDatos.innerHTML = `  
<div> 
    <h2> ${ nombre } </h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium distinctio odio, suscipit dolores, nesciunt aperiam harum aliquam similique natus laborum, possimus temporibus dolore quos ex placeat quia! Illo, enim? </p>    
</div>

`

// While y Switch


// Bucle que se repite un número INDETERMINADO DE VECES

// BOOLEAN
let condicion = true;



let quieresSalir = true;



// while( quieresSalir){

//     // SIEMPRE QUE HAGAMOS 
//     quieresSalir = confirm( '¿Estás seguro de que quieres salir?' )

//     // CONDICION DE SALIDA
//     condicion = false;
// }


console.log("Sigo en la werb");





// SWITCH


let edad = 28;

if(edad < 0){

}else if(edad < 2){

}else if( edad < 18 ){

}else{

}

let campamento = '';

let color = 'Rojo';

if( color === "Rojo" || color === "rojo" || color === "ROJO" ){
    campamento = "Águilas"
}else if( color === 'Azul'){
    campamento = "Delfines"
}else if( color === "Verde" ){
    campamento = "Elefantes"
}else{
    campamento = "Monitores"
}
 
switch( color ){
    case 'Rojo' :
    case 'rojo':
    case 'ROJO':
        campamento = "Águilas";
    break;
    case 'Azul':
        campamento = "Delfines";
    break;
    case 'Verde':
        campamento = 'Elefantes';
    break;
    default:
        // ELSE
        campamento = 'Monitores';
    break;


}

let encendido_str = "ENCENDIDO"
let encendido = true;
let moviemento = "R";
let teclaPulsada = "";

        //( //BOOLEAN )

// while( encendido ){
// while( encendido_str ){

//     checkTeclaPulsada();    

//     if( teclaPusalda === "D" ){
//         moviemento = "R";
//         moverDerecha();
//     }else if(teclaPusalda === "A"){
//         moviemento = "L";
//         moverIzquierda();
//     }else if(teclaPusalda === "ESC"){
//         encendido = false;
//     }

// }













