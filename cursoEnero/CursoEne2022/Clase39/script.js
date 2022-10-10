





// class Logger{
//     log(){
        
//     }
// }

// class FactoryLogger{
//     create(){
//         if( dev ){
//             logger = new DevLogger();
//         }else if (web) {
//             logger = new WebLogger();
//         }else{
//             logger = new ProdLogger( 'url' );
//         }
        
//     }
// }

// class DevLogger extends Logger{
//     constructor(){

//     }

//     log(error){
//         console.log( error )
//     }
// }

// class WebLogger extends Logger{
//     constructor(){

//     }
//     log( error ){
//         console.log( 'Escribir en el archivo' )
//     }
// }

// class ProdLogger extends Logger{
    
//     constructor( urlBDD ){
//         this.url = urlBDD
//     }
//     log( error ){
//         console.log( 'Escribir en el archivo' )
//     }
// }



// dev = true;
// web = true;
// let logger;

// logger = FactoryLogger.create( {  } );
// loggger.log( 'ERROR' );


class Observable{
    constructor(){
        this.texto = "";
        this.subscribers = [];// FUNCIONES SIN EJECUTAR
    }
    subscribe( codigo ){
        this.subscribers.push( codigo );
    }
    notify(){
        this.subscribers.forEach( cadaCodigo =>{
            cadaCodigo( this.texto )
        });
    }

    next( value ){
        this.texto += value
        this.notify(  );
    }


}

let conversacion = new Observable();
conversacion.subscribe( function( texto ){
    console.log( 'Me he suscrito' )
    persona1.innerHTML = texto
} )

conversacion.subscribe( function(texto){
    console.log( 'Me he suscrito 2222' )
    persona2.innerHTML = texto;
} )
conversacion.subscribe( function(texto){
    console.log( 'Me he suscrito 2222' )
    persona3.innerHTML = texto.length;
} )


setInterval( 
    ()=>{
    conversacion.next("Hola mundo <br>");
},2000 )



