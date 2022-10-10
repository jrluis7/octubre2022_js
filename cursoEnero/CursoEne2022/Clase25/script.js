// Get client computed css

// Posicion de los elementos

// get bound rect

// Evento de wheel

// Evento de scroll

// Evento resize

// VANILLA JS
let body = document.querySelector( 'body' );

console.log( body );

console.log( 'body.style.backgroundColor' )
console.log( body.style.backgroundColor )

let style = getComputedStyle(body);
console.log( style );

let background  = style.getPropertyValue( 'background-color' );
console.log( background );

// function css ( property ){

// }

let nodoSecondary = document.querySelector('#secondary');
let dom_rect_bound = nodoSecondary.getBoundingClientRect();
console.log( dom_rect_bound );

console.clear();

// JQUERY
console.log( $('body').css( 'background-color' ) );

let offset_second = $('#secondary h2').offset();
console.log( offset_second )

let position_second = $('#secondary h2').position();
console.log( position_second )


let saturacion = 100;
let luminosidad = 74;

$('#primary').on({
    wheel:function( evento ){
        // console.log( "Wheel" );
        // console.log( evento );
        // console.log( evento.originalEvent.deltaY )
        evento.preventDefault();

        if(evento.originalEvent.deltaY > 0 && saturacion<100  ){
            saturacion+=5
        }else if(evento.originalEvent.deltaY < 0&& saturacion>0){
            saturacion-=5
        }
        if(evento.originalEvent.deltaX > 0 && luminosidad<100  ){
            luminosidad+=5
        }else if(evento.originalEvent.deltaX < 0&& luminosidad>0){
            luminosidad-=5
        }

        let style = getComputedStyle(this);
        // console.log(style.getPropertyValue('background-color'))
        // console.log( `hsl(17, ${saturacion}%, ${luminosidad}%)` )
        $(this).css({
            'background-color':`hsl(17, ${saturacion}%, ${luminosidad}%)`
        }) 


    }
})


// Evento de SCROLL -> Lo genera quien es DESBORDADO

// html, window 

$( window ).on({
    scroll:function( evento ){
        // console.log( "scroll" );
        // console.log( evento );
        // La cantidad de píxeles que han sido desbordados por arriba
        console.clear();
        let top_scroll = $( window ).scrollTop();
        console.log( top_scroll );
        console.log( "$('body').height()" );
        console.log( $('body').height() );


        let tam_window = $(window).height()/2;
        console.log( "window" ,tam_window )

        // document -> Html
        let pos_secondary = $('#secondary').offset();
        console.log( 'pos_secondary' );
        console.log( pos_secondary );

        if( tam_window + top_scroll > pos_secondary.top ){
            console.log( "ENTRANDO" );
            $( '#secondary' ).addClass('animate');
        }else{
            $( '#secondary' ).removeClass('animate');

        }

        

    }
}) 


$(function(){

    $( window ).scrollTop(500);
})











