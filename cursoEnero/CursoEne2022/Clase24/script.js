'use strict'

$( '#btn1' ).on( {
    click:function(){
        $( 'h1' ).css({
            'color':'blue'
        })
    }
} )

$( '#btnHide' ).on({
    click:function(){
        // $( 'h1' ).hide( 3000 , ()=>{
        //     $( 'h1' ).show(1000);
        // } );

        // $('h1').hide({
        //     duration:3000,
        //     easing:'linear'
        // })

        // $( 'h1' ).slideUp( 3000 );
        // $( 'h1' ).fadeOut( 3000 );
        $( 'h1' ).fadeTo( 3000, 0.4 );

    }
});

$( '#btnShow' ).on({
    click:function(){
        // $( 'h1' ).show( 3000 );
        // $( 'h1' ).slideDown( 3000 );
        $( 'h1' ).fadeIn( 3000 );
    }
});

$( '#btnToggle' ).on({
    click:function(){
        // $( 'h1' ).toggle( 3000 );
        $( 'h1' ).fadeToggle( 3000 );
    }
});



$("#cuadrado").on({
    click:function(){
        console.log( this );

        // elemento  =  $( '#cuadrado' )
        const elemento = $( this ).animate({
            'width':'200px',
            'height':'120px',
            'left':'100px',
            'background-color':'blue'
        }, 1000).animate({
            'width':'150px',
            'top':'100px',
            'background-color':'#00ffff'
        },100)

        console.log("elemento");
        console.log(elemento);


    }
})


// $ = {
//     animate:function( callback ){
        
//         let queue = [  ];

//         queue.push( callback );


//         return this
//     }
// }


$("#btnChange").on({
    click:function(){
        
        let oldSrc = $( 'img' ).attr( 'src' );
        console.log( oldSrc );
        // let randomImg = Math.trunc(Math.random() * 100 + 200)
        let randomImg = 226;
        let nuevoValor = `https://picsum.photos/id/${randomImg}/200/300`
        $( 'img' ).attr( 'src' , nuevoValor );
    }
})


$('img').on({
    error:function( evento ){
        console.log( evento )
        console.log( this )
        $( this ).attr( 'src', 'https://picsum.photos/id/237/200/300' )
        console.log( "ERROR" )
    }
})


