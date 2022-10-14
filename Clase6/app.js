/*
    **** REPASO ****
    - Pseudocódigo
    - Eventos ( CUANDO )
    - Seleccionar elementos ( DÓNDE )
    - Pintar en la web -> innerHTML
    
    - Funciones
        - Devuelven Cosas
        - "Hacen Cosas"

    

    - Ejercicios   
    - Configurar Github Desktop
    - For
*/


console.log('For');


/* 
    Un trozo de código QUE SE EJECUTA UN NÚMERO de veces DETERMINADO
    Ejecuciones REPETITIVAS
     - 
*/

//( incialización ; condición de entrada ; actualización )
// Puntero o contador 
for (let i = 0; i < 1000; i++) {
    console.log('Vuelta: ', i);
}// i = i + 1;


// let str_asteriscos = " * * * * * * * * * *";
// str_asteriscos = str_asteriscos + " * * * * * * * * * * ";
// str_asteriscos = str_asteriscos + " * * * * * * * * * * ";
// str_asteriscos = str_asteriscos + " * * * * * * * * * * ";
// str_asteriscos = str_asteriscos + " * * * * * * * * * * ";
// str_asteriscos = str_asteriscos + " * * * * * * * * * * ";
// str_asteriscos = str_asteriscos + " *";



function pintarAsteriscos() {


    let str_asteriscos = "";
    for (let i = 0; i < 10; i++) {
        str_asteriscos = str_asteriscos + "* ";
    }


    let nodoAsteriscos = document.querySelector('#asteriscos');

    // nodoAsteriscos.innerHTML = str_asteriscos;
    nodoAsteriscos.innerHTML = nodoAsteriscos.innerHTML + str_asteriscos;

}









