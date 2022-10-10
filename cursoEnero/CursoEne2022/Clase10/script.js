'use strict'


// SELECTORES

// - Devuelve un NODO HTML
let nodoBtn = document.querySelector('#btnAdd');
// let nodoBtn = document.getElementById( '' );

// - Lista de nodos 



function handler_Evento( evento ){
    console.log( evento );
    console.log("Estoy manejando el evento");
    // hazCosas( miParametro );
}

nodoBtn.addEventListener( 'click' , handler_Evento );


// RECOMENDADA
nodoBtn.addEventListener( 'click' ,function( evento ){

    // Quiero Añadir una clase a todos los cuadrados

    // LISTA de elementos
    let listaCuadrados = document.querySelectorAll( '.cuadrado' );
    console.log( listaCuadrados )

    for( let i = 0; i < listaCuadrados.length; i++ ){
        listaCuadrados[i].classList.toggle( 'selected' );
    }


} );

// Quiero que cuando clique en cada cuadrado se seleccione el mismo cuadrado

let listaCuadrados = document.querySelectorAll( '.cuadrado' );

for(let i=0; i <listaCuadrados.length; i++){

    listaCuadrados[i].addEventListener( 'click', function(){ // THIS -> listaCuadrados[i]

        console.log( "click en el cuadtado" );
        console.log( listaCuadrados[i] );  
        
        console.log( this );
        this.classList.toggle( 'selected' );

    } );

}




// let listaCuadrados_2 = document.querySelectorAll( '.cuadrado' );

// for(let i=0; i <listaCuadrados_2.length; i++){

//     listaCuadrados_2[i].addEventListener( 'click', ( evento )=>{ // No generando contexto -> This es el contexto del padre // 

//         console.log( "click en el cuadtado" );
//         console.log( listaCuadrados_2[i] );  
//         console.log( this );


//     } );
// }




// ESCRIBIR EN EL DOM

// nodo HTML
btnAddCircle.addEventListener( 'click', function(){
    let nodoGridCirculos = document.querySelector( '#gridCirculos' );


    //INNER HTML
    // let strHtmlCirculos = "<div class='circulo' > </div>";
    
    // // nodoGridCirculos.innerHTML += strHtmlCirculos; 
    // nodoGridCirculos.innerHTML = nodoGridCirculos.innerHTML + strHtmlCirculos; 
        

    // Crear Nodos por JS

    let nodoCirculo = document.createElement( 'div' );
    nodoCirculo.classList.add( 'circulo' );

    let nodoP= document.createElement('p');
    nodoP.innerHTML = "TEXTO";
    nodoCirculo.append(nodoP)

    let nodoSpan = document.createElement( 'span' );
    nodoSpan.innerHTML = ". X";
    nodoSpan.addEventListener( 'click', function(){
        // 
        console.log("CLICK");
        console.log(nodoCirculo);
       
    } )     
    nodoP.prepend( nodoSpan );
    console.log( nodoCirculo );

    // "Pintar"
    nodoGridCirculos.append( nodoCirculo );



} );    



let texto1 = "AAAAA";


let textoTotal = "AAAAA" + "BBBBB";











