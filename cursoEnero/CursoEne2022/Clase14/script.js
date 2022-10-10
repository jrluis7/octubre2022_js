// Módulos en JS
import { Circulo } from './modules/Figura2D.js'

// Archivo Principal

let miCirculo = new Circulo( 10, 10, 100  )
console.log( miCirculo )



// Data Set en elementos HTML

let nodoMain = document.querySelector('#main');

console.log( nodoMain.dataset.color )

// Temporizadores


// TIMEOUT -> 

let nodoBtnTimeOut = document.querySelector( '#btnTimeOut' );

nodoBtnTimeOut.addEventListener( 'click' , function(){

    let refTimeOut = setTimeout( function(){
    // setTimeout( function(){
        // Vamos a ejecutar SOLO UNA VEZ CUANDO haya pasado el tiempo del segundo parámetro

        datos.innerHTML = "HOLA! Timeout!";

    }, 1000 );

});


let nodoBtnInterval = document.querySelector( '#btnInterval' );
let refInterval;


let contador = 0;
nodoBtnInterval.addEventListener( 'click' , function(){
    contador ++;
    // if( refInterval &&
    //     refInterval != undefined &&
    //     refInterval != null &&
    //     refInterval != "" &&
    //     refInterval != 0 ){ 
    if( !refInterval ){// Si existe y tiene un "valor útil"
        let contadorDentro = contador;
        refInterval = setInterval( function(){
            datos.innerHTML += " "+contadorDentro + " ";
           
    
        }, 1000 );
    }
    // let refInterval_2 = setInterval( function(){
   
    //     datos.innerHTML += " & "
       

    // }, 300 );

});

let nodoBtnClear = document.querySelector( '#btnClear' );

nodoBtnClear.addEventListener( 'click' , function(){

    clearInterval( refInterval );

} ); 


// for( let i = 0; i<10; i++ ){

//     setTimeout( ()=>{
//         console.log( "i",i );
//     }, 3000 );

// }












