// AJAX -> Más adelante 


// CLASE 28 


let alumnos = ["Alba","Pablo","Miguel","Sergio"]
// JSON -> JavaScript Object Notation
// Transmitir información por la red -> DTO
// String que muestra la información del objeto

let alumnos_json = '["Alba","Pablo","Miguel","Sergio"]'

let alumno = {
    nombre:"Pepe",
    apellido: "Gómez"
}

let alumno_json = `{
    "nombre":"Pepe",
    "apellido": "Gómez"
}`

// JSON. -> 

// Objeto -> JSON
let json_alumno = JSON.stringify( alumno );
console.log( json_alumno )
console.log( alumno )

// JSON -> Objeto

console.log( JSON.parse( json_alumno ) )


class Alumno{
    constructor( obj ){

    }

    saludo(){

    }
}
// FRONT






// Local Storage -> Almacenamiento como "BBDD"

// Guardar datos
// localStorage.setItem( 'coche' , 'Mercedes' );

// Pedir datos
// let miCoche = localStorage.getItem( 'coche' )
// console.log( miCoche )


// Borrar datos


// >>>>EJEMPLO SIMPLE

// Consultar a Local Storage el color -> BBDD

// let colorFav = localStorage.getItem('colorFav');
// console.log( 'colorFav',colorFav );

// pintarColor( colorFav );

// $('#btnSave').on({
//     click:function(){
//         let valor = $('#entradaColor').val();
//         console.log( valor );    
//         pintarColor( valor );    
//         localStorage.setItem( 'colorFav', valor );
//     }
// })


// function pintarColor( color ){
//     $( 'body' ).css({
//         'background-color':color
//     })
// }


// >>>>EJEMPLO "COMPLEJO"

//  ESTADO
let colores = [

];

let tareas;


// Pintado inicial?

let json_colores = localStorage.getItem( 'lista_colores' )
console.log( json_colores )

colores = JSON.parse( json_colores );

for( let i = 0; i < colores.length; i++ ){
    pintaDivColor( colores[i].color,colores[i].texto )
}


$('#btnSave').on({
    click:function(){
        let valor_color = $('#entradaColor').val();
        console.log( valor_color );    
        let valor_texto = $( '#entradaTexto' ).val();   
        
        
        pintaDivColor ( valor_color, valor_texto );
        
        colores.push( { color:valor_color, texto:valor_texto } )

        let json_colores = JSON.stringify( colores )
        localStorage.setItem( "lista_colores",json_colores );
      
    }
})

function pintaDivColor( color,texto ){
      
    let nodo = $('<div class="colores"></div> ').html( texto ).css({
        "background-color":color
    });
    
    $( "#grid" ).append( nodo );
}



