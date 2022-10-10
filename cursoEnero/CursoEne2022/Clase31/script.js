// AJAX y peticiones a un servidor API 

// Llamadas Asíncronas a un servidor





// Flujo CLÁSICO


// Flujo Asíncrono o moderno

// API REST -> Servidor

// Endpoints -> Puntos de la api

// CRUD -> Agrupación de endpoints que hacen algo sobre una entidad
// C: CREATE -> POST   -> Tienen Header y Body
// R: READ  -> GET -> Sólo tienen Header
// U: UPDATE -> UPDATE ->   Tiene header y body
// D: DELETE -> DELETE -> Header




// JQUERY

let base_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let next_url = "";
let prev_url = "";

$.ajax({
    method:"GET",// Si no lo ponemos por defecto es GET
    url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
    success:function( respuesta ){

        pintaGrid( respuesta );

        console.log( "Petición Exitosa" );
        console.log( respuesta );
    },
    error:function( error ){
        console.log( "Error" )
        console.log( error )
    }
});

$('#btnNext').on({
    click:function(){
        //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        $.ajax({
            method:"GET",
            url:next_url,
            success:function( respuesta ){
                console.log( respuesta )
                pintaGrid( respuesta )
            },
            error:function( error ){
                console.log( error )
            }
        })

    }
})

$('#btnPrev').on({
    click:function(){
        //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
        if( prev_url ){
            $.ajax({
                method:"GET",
                url:prev_url,
                success:function( respuesta ){
                    console.log( respuesta )
                    pintaGrid( respuesta )
                },
                error:function( error ){
                    console.log( error )
                }
            })
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






// JS NATIVO


// fetch()
