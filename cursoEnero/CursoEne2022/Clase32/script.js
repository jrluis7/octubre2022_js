// FETCH -> Devuelve una PROMESA

let base_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let next_url = "";
let prev_url = "";
let respuesta = fetch('https://pokeapi.co/api/v2/pokemon/');

console.log( respuesta );
fetch('https://pokeapi.co/api/v2/pokemon/').then( respuesta => { 
    console.log( respuesta );// Body -> json
    return respuesta.json() // Body -> json -> objeto
}).then( datos=>{
    console.log( datos );
    pintaGrid( datos );

    // 22222222 

} ).catch( error=>{

} );


// let primeraPROMESARespueta = fetch('https://pokeapi.co/api/v2/pokemon/').then( respuesta => { 
//     console.log( respuesta );// Body -> json
//     return respuesta.json() // Body -> json -> objeto
// })

// primeraPROMESARespueta.then( datos=>{
//     console.log( datos );
//     pintaGrid( datos );

//     // 22222222 

// } );
// // CODIGO....
// // 1111111





let promesa_1 = fetch( 'https://pokeapi.co/api/v2/pokemon/' );

// async se usa cuando tengo promesas dentro de la función con await
async function getData(){
    // then( respuesta_1 => {  }  )
    try{
        let respuesta_1 = await fetch( 'https://pokeapi.co/api/v2/pokemoasdadasn/' )
        console.log( respuesta_1 );
    
        let respuesta_2 = await respuesta_1.json();// Devuelve una promesa
        console.log( respuesta_2 );
    }
    catch( error ){
        console.log( error );
    }

}


getData();













$('#btnNext').on({
    click:function(){
        //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        
    }
})

$('#btnPrev').on({
    click:function(){
        //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        if( prev_url ){
           
        }

    }
})



function pintaGrid(respuesta){
    $( '#grid' ).empty();
    let count = respuesta.count;
    let listaPokemon = respuesta.results;
    next_url = respuesta.next;
    prev_url = respuesta.previous;
    if ( !prev_url ){
        $( "#btnPrev" ).attr('disabled',true)
    }else{
        $( "#btnPrev" ).attr('disabled',false)
    }


    $( '#numPokemon' ).html( count );

    for( cadaPokemon of listaPokemon ){
        let idPokemon = getID( cadaPokemon.url )

        pintaPokemon( cadaPokemon.name , idPokemon )
    }
}


function getID( url ){
    "https://pokeapi.co/api/v2/pokemon/3/";

    let split_url = url.split("pokemon/");
    return  split_url[1].replace("/","") 
}

function pintaPokemon( nombre , id ){

    let nodoDiv = document.createElement( 'div' );
    $( nodoDiv ).addClass( 'pokemon' ).html( nombre );
    let ref;
    let permission = true;
    let nodoImg = $('<img/>').attr( 'src',`${base_img}${id}.png` ).on({
        load:function(){
            if( !permission ) return;
            ref = setTimeout(()=>{
                if($( this ).attr( 'src').includes('back')  ){
                    $(this).attr( 'src',`${base_img}${id}.png` )
                }else{
                    $( this ).attr( 'src',`${base_img}back/${id}.png` ) 

                }
            },2000* Math.random()+ 500)
        },
        mouseenter:function(){
            clearTimeout(ref)
            permission = false;
            $( this ).attr( 'src',`${base_img}shiny/${id}.png` )
        },
        mouseleave:function(){
            permission = true;
            ref = setTimeout(()=>{
                if($( this ).attr( 'src').includes('back')  ){
                    $(this).attr( 'src',`${base_img}${id}.png` )
                }else{
                    $( this ).attr( 'src',`${base_img}/back/${id}.png` ) 

                }
            },2000* Math.random()+ 500)
        }
    });

    $(nodoDiv).append( nodoImg )

    $( "#grid" ).append( nodoDiv )

}


$.ajax({
    url:"https://www.fishwatch.gov/api/species",
    success:function( datos ){
        console.log( datos );
        d
    },
    error:function( error ){
        console.log( error )
    }
})