// OBJETOS

// NUMBER
let edad = 10;
// STRING
let texto = "";
// UNDEFINED
let noDefinido;
// BOOLEAN
let isMAyor = false;



// LISTAS - ARAYS

let frutas = [ 'melón' , 'sandía', 'pera', 'plátano' ];


// OBJETOS


// let pelicula = "Titanic";
// let director = "James Cameron";


// let pelicula_2 = "Toy Story";
// let director_2 = "Pixar";


let pelicula = { // El objeto NO TIENE CONCIENCIA DE COMO LE HAN LLAMADO DESDE FUERA
    titulo:"Titanic", // Propiedad o atributo
    director: { // THIS -> YO MISMO
        nombre:"James",
        apellido:"Cameron",
        saluda:function(){ // Método -> Operar cosas sobre el mismo objeto
            // THIS -> Director
            
            // console.log( 'Hola director: ' + pelicula.director.nombre + " " + pelicula.director.apellido   );
            console.log( 'Hola director: ' + this.nombre + " " + this.apellido   );



        }
    },
}

pelicula.director.saluda();

pelicula.tituloo = "Este título es el bueno"

console.log( pelicula );


let pelicula_2 = {
    titulo:"Toy Story",
    director: "Pixar"
}

console.log( pelicula_2 );


pelicula.titulo = "Titanic 2";

console.log( pelicula.director.nombre )


let nodoDatos = document.querySelector( '#datos' );

nodoDatos.innerHTML = "<h1> Hola mundo </h1>"


function unNombre(){

}

const otroNombre = function(){

}

// const document = {
//     querySelector:function( selector ){

//     }
// }



let nodoBoton = document.querySelector( '#boton' );

nodoBoton.onclick = function(){
    
}


