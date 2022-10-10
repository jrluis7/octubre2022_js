'use strict'


console.log ( $ );
console.log ( jQuery );


// JS nativo - Vanilla JS
let nodoBtn = document.querySelector( '#btnClic' );
nodoBtn.style.backgroundColor = "lightblue";
console.log( nodoBtn );


let nodoBtn_jquery = $( '#btnClic' ); 
console.log( nodoBtn_jquery );

console.log( nodoBtn_jquery[0] );


// nodoBtn_jquery.css( 'color', 'purple' );
// nodoBtn_jquery.css( {
$( '#btnClic' ).css( {
    'color':'purple',
    'padding':'20px',
 } );

 console.log( "$('#btnClic' ).css( 'color' ) ")
 console.log( $('#btnClic' ).css( 'color' ) )


// JS nativo
// let listacuadrados = document.querySelectorAll('.cuadrado');
// for( let i=0; i<listacuadrados.length; i++ ){
//     listacuadrados[i].classList.add( 'selected' );
// }

// jquery

let nodoCuadrados_jquery = $( '.cuadrado' );

// nodoCuadrados_jquery.addClass( 'selected' );

// Eventos

$('#btnClic').click( function(){
    console.log( 'Clic' )
    // $('.cuadrado').addClass('selected');
    $('.cuadrado').toggleClass('selected');
} );

$('#btnClic').dblclick( function(){
    console.log( 'DblClick' )
} );


$( '#btnClic' ).on( {
    click:function(){
        console.log( 'Click con on' )

    },
    dblclick:function(){
        console.log( 'DblClick con on' )

    },
    mousedown:function(){
        console.log( 'mousedown con on' )

    }
} );


$('.cuadrado').on({
    click:function(){
        console.log( 'Clic en cada elemento' );
        console.log( this ) // nodo NATIVO de JS

        this.classList.toggle('selected');

        // Todo elemento NATIVO puede convertirse a Jquery
        // $( nodoNativo ) => elemento_jquery
        
        // this.toggleClass( 'selected' );
        $( this ).toggleClass( 'selected' );

    }
});

$( document ).on( {
    mousemove:function( evento ){
        console.log( evento );

        $( '#datos' ).html( `<h1>X:${evento.pageX}, Y:${evento.pageY}</h1>` );
    }
} )












