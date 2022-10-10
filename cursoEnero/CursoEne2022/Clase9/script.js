// Tabla multiplicar

let d = document;
// NODO HTML -> Propiedades de un elemento HTML
let nodoTablas = d.querySelector('#tablas');
console.log( nodoTablas );

function getTabla( numero ){
    let cadaTabla = `
    <div class="tabla">
        <h2> Tabla del ${numero} </h2>
        <div>`;
        for( let j = 0; j <10;j++){
            cadaTabla+=` 
                <div> ${numero}x${j}=${numero*j} </div>
            `;
        }
    cadaTabla += `</div></div>`;
    return cadaTabla;
}


function getAll( limite ){
    let strTablas = ``;
    for( let i = 0; i <limite; i++ ){
        strTablas += getTabla( i );
    } 
    return strTablas;
}

// nodoTablas.innerHTML = getAll( 10 );

// getAll(10);

// Repaso THIS - Objetos parte 2


let pelicula = {
    nombre: "Toy Story",
    director:"Pixar",
    reparto:[
        {
            nombre:"Buuz",
            year: "infinite"
        },
        {
            nombre:"Woody",
            year: "infinite"
        },
        {
            nombre:"Mr Potato",
            year: "infinite"
        }        
    ],
    saluda:function(){
        // THIS -> Pelicula
        return "Hola "+ this.director;
    },

    //saludo: this.director
}


let refereciaObjeto = "1223ija71265jzaw120";
console.log( pelicula.nombre );
console.log( pelicula['nombre'] );// NOTACION ARRAY

pelicula.refereciaObjeto
pelicula[refereciaObjeto]="XXX";

pelicula.fecha = "12/12/2020";
console.log( pelicula );

// GLOBAL
var a_miTexto = "Hola variable"

function a_miFuncion(){

    

}


// WINDOW -> this.a_miFuncion


// Todos los tipos de selectores

//

let nodoBtn = document.querySelector('#btnChange');

nodoBtn.onclick = function (){
    // SOLO devuelve UN ELEMENTO HTML
    let nodoCuadrado = document.querySelector( '.cuadrado' );
    // let nodoCuadrado = document.getElementById( 'c_1' );
    // nodoCuadrado.style.backgroundColor = "lightgreen";

    // TODOS LOS ELEMENTOS
    let listaCuadrados = document.querySelectorAll('.cuadrado');

    console.log( listaCuadrados )

    // listaCuadrados.style.backgroundColor = 'lightblue';
    
    for( let i =0; i< listaCuadrados.length ; i++ ){
        listaCuadrados[i].style.backgroundColor = 'lightblue';
    }


}

let nodoSecundario = document.querySelector('#secundario');

let listaCuadradosSecundario = document.querySelectorAll( '#secundario .cuadrado' );

console.log( listaCuadradosSecundario )

let listaCuadrados_2 = nodoSecundario.querySelectorAll( '.cuadrado' );

console.log( listaCuadrados_2 )


// Eventos de la forma RECOMENDADA

//
nodoBtn.addEventListener( 'click' , function(){ 
    // CODIGO DEL EVENTO
    console.log("111111 - Enviar");
});


nodoBtn.addEventListener( 'click' , function(){ 
    // CODIGO DEL EVENTO
    console.log("2222 - Medición");
    accion_del_evento();
});


function accion_del_evento(){
    console.log("333333");
}


nodoBtn.addEventListener( 'click' , accion_del_evento );





let fruta1 = "Melón";

let lista = [ fruta1 ];






