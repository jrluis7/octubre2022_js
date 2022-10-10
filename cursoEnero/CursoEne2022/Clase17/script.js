'use strict'

let d = document;

let nodoBtnCirculo = d.querySelector( '#btnCirculo' );
let isPainting = false;
let teclaPulsada = "";

let callback_activo = crearCirculo;



function crearCirculo( x=0, y=0 ){
    let nodoCirculo = d.createElement( 'div' );
    nodoCirculo.classList.add( 'circulo' );

    let diametro = 30 + Math.random() * 50 ;
    let distancia = diametro / 2;
    let top = (y - distancia);
    let left = (x - distancia);
    nodoCirculo.style.width = diametro + 'px';
    nodoCirculo.style.top =  top + 'px';
    nodoCirculo.style.left = left + 'px';
    nodoCirculo.style.backgroundColor = getRandomColor();

    let nodoMain = d .querySelector( '#main' );
    nodoMain.appendChild( nodoCirculo );

    // setTimeout( ()=>{

    //     nodoCirculo.remove();

    // }, Math.random() * 2000 + 1000 )

    let derecha = (Math.random()>0.5)? true: false;
    let arriba = (Math.random()>0.5)? true: false;



    setInterval( ()=>{
        top += (arriba)? 1: -1;
        left += (derecha)? 1: -1;
        nodoCirculo.style.top = top + 'px';
        nodoCirculo.style.left = left + 'px';
    },100 );

}

function crearElipse( x=0, y=0 ){
    let nodoCirculo = d.createElement( 'div' );
    nodoCirculo.classList.add( 'circulo' );


    let diametro = 30 + Math.random() * 50 ;
    let distancia = diametro / 2;

    nodoCirculo.style.width = diametro + 'px';
    nodoCirculo.style.top = (y - distancia) + 'px';
    nodoCirculo.style.left = (x - distancia) + 'px';
    nodoCirculo.style.backgroundColor = getRandomColor();
    nodoCirculo.style.aspectRatio = '1/2' ;

    let nodoMain = d .querySelector( '#main' );
    nodoMain.appendChild( nodoCirculo );

    // setTimeout( ()=>{

    //     nodoCirculo.remove();

    // }, Math.random() * 2000 + 1000 )


}


function crearCuadrado( x=0, y=0 ){
    let nodoCuadrado = d.createElement( 'div' );
    nodoCuadrado.classList.add( 'cuadrado' );

    let diametro = 30 + Math.random() * 50 ;
    let distancia = diametro / 2;

    nodoCuadrado.style.width = diametro + 'px';
    nodoCuadrado.style.top = (y - distancia) + 'px';
    nodoCuadrado.style.left = (x - distancia) + 'px';
    nodoCuadrado.style.backgroundColor = getRandomColor();

    let nodoMain = d .querySelector( '#main' );
    nodoMain.appendChild( nodoCuadrado );

    // setTimeout( ()=>{

    //     nodoCirculo.remove();

    // }, Math.random() * 2000 + 1000 )


}

function getRandomColor(){

    let red = Math.trunc(Math.random() * 256) ;
    let green = Math.trunc(Math.random() * 256);
    let blue = Math.trunc(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}


nodoBtnCirculo.addEventListener( 'click', function( evento ){

    console.log( evento )
    evento.stopPropagation();
    // crearCirculo();
    
} );

let nodoBody = document.querySelector( 'body' )
nodoBody.addEventListener( 'mousemove' , function( evento ){
    if( isPainting ){
        // console.log( evento );
        // console.log( evento.pageX, evento.pageY );

        callback_activo( evento.pageX, evento.pageY  );
      
    }

} );

nodoBody.addEventListener( 'mousedown', function(){

    isPainting = true;    

}  );

nodoBody.addEventListener( 'mouseup', function(){

    isPainting = false;    

}  );

nodoBody.addEventListener( 'keydown' , function( evento ){
    
    console.log( evento )
    teclaPulsada = evento.key;
    switch( evento.key ){
        case 's':
        case 'S':
            callback_activo = crearCuadrado;
        break;
        case 'e':
            callback_activo = crearElipse;
        break;
        default:
            callback_activo = crearCirculo;
        break;

    }


} );

nodoBody.addEventListener( 'keyup' , function( evento ){
    
    console.log( evento )
    teclaPulsada = "";
    callback_activo = crearCirculo;
    

} );



// Que se muevan SOLOS