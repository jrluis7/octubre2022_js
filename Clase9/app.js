'use strict'

// Correcciones

// Precio de producto

// Círculo
/*
    - Cuando clico, Seleccionar el input -> Valor
    - Calcular operaciones
    - Pintar


*/
const PI = 3.141692;

// Gestionar el evento
function recogeEvento() {
    let nodoInput = document.querySelector('#entradaRadio');
    let radio = nodoInput.valueAsNumber; // NUMBER

    let diametro = diametro_circulo(radio);

    let perimetro = perimetro_circulo(radio);

    let area = area_circulo(radio);

    // Pintar
}

function diametro_circulo(parametro_radio) {
    return 2 * parametro_radio;
}

function perimetro_circulo(parametro_radio) {
    return diametro_circulo(parametro_radio) * PI
}

function area_circulo(parametro_radio) {
    return parametro_radio * parametro_radio * PI;
}


function area_cilindro(radio, altura) {
    let base = 2 * area_circulo(radio);
    let cuerpo = perimetro_circulo(radio) * altura;
    return base + cuerpo;
}


let likes_usuario = 0;
function likes(nuevos_likes) {
    likes_usuario = likes_usuario + nuevos_likes;
    return likes_usuario;
}


let get_likes = likes(10);
// Ejercicios





function gestionar_precio() {

    let base = 100 // input

    let iva = calcular_iva(base);

    // let localizacion = get_localizacion(  )

    let gastos_envio = calcula_envio(base);

    let cupon = ""; // Input

    let descuento = calcula_descuento(base, cupon);

    let total = base + iva + gastos_envio;

    // Pintar





}


function calcula_envio(base) {
    // if (base < 50) {
    //     return 10;
    //     console.log('Código no alcanzable')
    // } else {
    //     return 0;
    // }



    if (base < 50) {
        return 10;
        console.log('Código no alcanzable')
    }
    return 0;
}




function auth() {

    if (!autenticado) {
        return "Invalido";
    }
    // Código normal
    // Todo bien



}









