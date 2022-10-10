'use strict'

console.log( '11111' );
console.log( '22222' );
console.log( '33333' );

let text = "Números: ";

for ( let i = 0; i < 10; i++ ){
    console.log( i )
    text += ", "+ i
}

console.log( text )
console.clear();


/**
 * Tamaño indeterminado -> 6B, 1 GB
 * @param {*} file 
 * @returns 
 */
function readFile( file ){
    let texto = "Lorem impsum";

    let time = Math.random() * 3000 + 500 ;

    setTimeout( ()=>{
        console.log( texto );
        return texto;
    }, time );

}


let archivoLeido = readFile( 'miTexto.txt' );

console.log( archivoLeido );

console.log( "Resto del código" )


// PROMESAS / PROMISES
// No puedo darte un resultado ahora pero prometo avisasrte cuando esté listo
// Te da una referencia -> Promesa

/**
 * 
 * @param {*} file 
 * @returns { Promise }
 */
function readFilePromise( file ){
    // resolve -> callback -> Se ejecuta el código que hay en el then
    // reject  -> callback -> Se ejecuta el código de catch
    return new Promise( ( resolve , reject  ) =>{

        let texto = "Lorem impsum";

        let time = Math.random() * 3000 + 500 ;
        let err = Math.random() > 0.5;
        setTimeout( ()=>{
            if( err ){
                reject( 'Error en el archivo' )
            }else{
                resolve(file + ": "+texto);
            }
        }, time );
    } )
}

function securizaArchivo(){

    return new Promise( ( resolve , reject  ) =>{

        let time = Math.random() * 1000 + 500 ;
        let err = Math.random() > 0.5;
        setTimeout( ()=>{
            if( err ){
                reject( 'Error securizando' )
            }else{
                resolve('Archivo securizado' );
            }
        }, time );
    } )

}


// let promise_contenido = readFilePromise( 'Mi archivo' )
// console.log( promise_contenido );

// promise_contenido.then( ( respuesta )=>{
//     console.log( 'Se viene en texto' );
//     console.log( respuesta );// texto

//     securizaArchivo().then(respuesta=>{
        
//         filtroTextoArchivo().then(repuesta=>{

//             filtroTextoArchivo().then(repuesta=>{

//                 pinto();


//             }).catch(error=>{
                
//             });

//         }).catch(error=>{

//         });

//     }).catch( error=>{

//     } );  

// } ).catch( error=>{
//     console.log( error ) // Error en el archivo
// } );

// let promise_contenido2 = readFilePromise( 'Mi archivo2' );
// promise_contenido2.then( ( respuesta )=>{
//     console.log( 'Se viene en texto' );
//     console.log( respuesta );// texto
// } ).catch( error=>{
//     console.log( error ) // Error en el archivo
// } );




async function getContenido(){
    /*
        Este contenido, cuando se usa await -> DESENVUELVE la promesa DIRECTAMENTE DENTRO DE LA variable.
        Resolve ( datos ) -> contenido = datos
    
    */
    try{
        let contenido =  await readFilePromise( 'File' );
        console.log( contenido );
        let archivoSecurizado = await securizaArchivo();
        console.log( archivoSecurizado );


    }catch( error ){
        console.log( error );

        // logError();
    }
}





getContenido();



