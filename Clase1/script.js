// 1. Repaso

// 2. Flex, Animaciones de CSS, y gestión de clases

// Kata de Flex

// 3. Intro de JS


console.log( 'Script cargado' );

console.log( 'Primera línea de JS' );


// EVENTOS -> Responde a ¿Cuándo?



// SELECCIONAR UN ELEMENTO DE LA WEB


let nodoBtnAnimate = document.querySelector( '#btnAnimate' );

console.log( nodoBtnAnimate );




// Trozo de código que tiene un nombre
function animaCuadrado(){
    console.log( 'Click en el cuadrado' )
    // Cambiar el color del botón
    nodoBtnAnimate.style.color = "#ffffff";
    

    // Añadir una clase en JS -> Cuadrado
    
    let nodoCuadrado = document.querySelector('#miCuadrado')
    nodoCuadrado.classList.add( 'animateAppear' );

    let nodoBtnStop = document.querySelector('#btnStop');
    nodoBtnStop.disabled = false;
}   



// Tenemos que parar la animación. Seleccionar el cuadrado y quitar la animación
function paraAnimacion(){

    let nodoCuadrado = document.querySelector('#miCuadrado');

    // Quitar clase
    nodoCuadrado.classList.remove( 'animateAppear' );

}