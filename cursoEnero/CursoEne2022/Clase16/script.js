'use strict'




let nodoCont1 = document.querySelector( '#cont1 .number' );


// let cont1 = 0;
// let ref_cont1 = setInterval( ()=>{ 
//     cont1++
//     nodoCont1.innerHTML = cont1;
//     if( cont1 >= 100 ){
//         clearInterval( ref_cont1 )
//     }
    
// } , 10 )



// let nodoCont2 = document.querySelector( '#cont2 .number' );
// let cont2 = 0;
// let ref_cont2 = setInterval( ()=>{ 
//     cont1++
//     nodoCont2.innerHTML = cont1;
//     if( cont1 >= 50 ){
//         clearInterval( ref_cont2 )
//     }
    
// } , 50 )



function getTimer( options , nodoHTML ){
    let limite = options.limite ? options.limite : 100 ;
    let time = options.time ? options.time : 100 ;
    let lapTime = time / limite;

    let cont = 0;
    let ref_cont = setInterval( ()=>{ 
        cont++
        nodoHTML.innerHTML = cont;
        if( cont >= limite ){
            clearInterval( ref_cont )
        }
    } , lapTime )

}

let listaContador = document.querySelectorAll(  '.contador'  );

for( let i = 0; i< listaContador.length; i ++ ){

    let nodoCadaContador = listaContador [ i ];
    let nodoNumber = nodoCadaContador.querySelector( '.number' ) ;
    let time = +nodoCadaContador.dataset.time;
    let limite = +nodoCadaContador.dataset.limite;

    getTimer( { limite:limite, time:time }, nodoNumber )


}

// let hoy = new Date();

// let r = setInterval( ()=>{

//     let despues = new Date();

//     console.log( despues - hoy );

//     hoy = despues;

//     // clearInterval( r );

// },1 )


let numeros = [109, 18, 10, 87]

let maximo = Math.max( ...numeros );

console.log( maximo );


let decimal = 10.569123392384;

console.log( Math.round( decimal ) );

console.log( Math.trunc( decimal ) );


console.log( decimal.toFixed( 2 ) );



// [0 , 1) 
let aleatorio = Math.random();

console.log( aleatorio );
let aleat_100 = Math.random() * 100 ;
console.log( aleat_100 ) 

                //[0 , 1) 
let aleat_30 = Math.random() * 30 ;
console.log( aleat_30 );

let aleat_50_120 = 50 + Math.random() * 70 
console.log( aleat_50_120 );     









