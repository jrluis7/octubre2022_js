

let nodoDatos = document.querySelector( '#datos' );


let strHTML = `<div>
        <h2> Texto </h2>
        <p>
            
        </p>
    </div>
    `;


nodoDatos.innerHTML += "strHTML"


let nodoDiv = document.createElement( 'div' );

let nodoH2 = document.querySelector( 'h2' )

nodoDiv.append ( nodoH2 );


let nodoOpen = document.querySelector( '#open' );

let nodoModal = document.querySelector( '#modal' );
nodoOpen.addEventListener( 'click', function(){

    console.log( 'CLICK en el botón' );

    nodoModal.classList.add( 'activo' );

} );


let nodoClose = document.querySelector( '#close' );

nodoClose.addEventListener( 'click', function(){

    console.log( 'CLICK en el botón' );
    let nodoModal = document.querySelector( '#modal' );

    // nodoModal.classList.remove( 'activo' );

    nodoModal.style.display = "none";

} );

nodoModal.addEventListener( 'click', function( evento ){
    console.log( "Clic en Modal" )

    console.log( evento );

    // nodoModal.classList.remove( 'activo' );

} );

let nodoContenido = nodoModal.querySelector('.contenido');

nodoContenido.addEventListener( 'click' , function( evento ){

    console.log( "Clic en Contenido" )
    console.log( evento );

    evento.stopPropagation(); // Elimina la propagación del EVENTO a partir de el

} );



let nodoEnlace = document.querySelector( '#miEnlace' )

nodoEnlace.addEventListener( 'click', function(evento){


    evento.preventDefault();

    console.log( evento )

} );




// PSEUDOCODIGO 

// -> ESTADOS





