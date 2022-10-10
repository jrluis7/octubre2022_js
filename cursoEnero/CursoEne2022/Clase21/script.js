'use strict'


let texto = "Hola mundo JavaScript con reduce y métodos de array!!";


// console.log( texto );
// console.log( texto[0] );
// console.log( texto.length );


// function cuentaLetra( letra ){
//     let num_letra = 0;
//     for ( let i=0; i < texto.length; i++ ){
    
//         // console.log( texto[i] );
//         if( texto[i] === letra ){
//             num_letra++;
//         }
//     }
//     return num_letra
// }
// let resultado_letras = [
   
// ];


// let obj_resultado = { };
// for ( let i=0; i < texto.length; i++ ){
//     let arr_texto = texto.split('') //Array de cada una de las textos

//     let filtro_letra = resultado_letras.filter( cadaLetra => {
//         return cadaLetra.letra === texto[i] // Si dentro de letras hay una H
//     });
  
//     if( filtro_letra.length === 0) {// Si existe esa letra en el array
//         obj_resultado[ texto[i] ] = cuentaLetra( texto[i] )

//         // resultado_letras.push ( {letra:texto[i], num:cuentaLetra( texto[i] ) } )
//     }

// }
// console.log(obj_resultado)
// console.log(obj_resultado['a'])




// let resultado_letras = [
   
// ];

// let arr_texto = texto.split('');
// let obj_resultado = {  }
// for( let i = 0; i<texto.length ; i++  ){
//     let letra = texto[i]; 
//     if( obj_resultado[ letra ] ){
//         obj_resultado[letra] += 1;
//     }else{ // undefined
//         obj_resultado[letra] = 1;
//     }

// }
// console.log( obj_resultado )
// let letrasDesordenadas_2 = ['p','t','e','d','a','f','A'];
// const resultado_letras = letrasDesordenadas_2.reduce( (acc, actual)=>{
//     debugger
//     return acc + " " + actual;
// }, "Letras: " );
// console.log( resultado_letras )

// let arr_texto = texto.split('');

// const resultado = arr_texto.reduce( ( acumulador, actual )=>{
//     if( acumulador[actual] ){
//         acumulador[actual] +=1;
//     }else{
//         acumulador[actual] = 1
//     }
//     return acumulador
// }, {} );
// console.log( resultado );






// 



function mandaCorreo(){
    try{
        checkTexto( '' );
        checkEmail();
        checkpass();
        sendDatos();
    }catch(excepcion){
        console.log( excepcion  )

    }finally{
      console.log( 'Final' );  
    }
}

function checkTexto(texto){
    if(  texto == "" ){
        throw ( 'Texto vacío' )
        // throw ( new Error( 'Texto Vacío' ) )
    }
}

function checkEmail(){

}
function checkpass(){

}

function sendDatos(){
    
    let resultado = get();
    if( true || resultado.status == 404  ){
        // popUp( "404", "No se encuentra" );
        throw( '404' );
    }
}
function popUp( title, texto ){

}
function get(){}


mandaCorreo();









