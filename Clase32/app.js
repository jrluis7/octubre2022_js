'use strict'

/**
 *
 *
 * Corrección del slug
 * Corregir contar letras
 *
 * Formulario -> Form
 *
 * Contador de letras
 *
 *
 */

// Cuando introduzco letras en la entrada -> Evento


$('#entrada').on({
    input: function () {
        console.log("Entrada");

        // let valor = document.querySelector('#entrada').value;
        let valor = $('#entrada').val();

        let slug = get_slug(valor);

        $('#slug').val(slug);

        let numero_letras = get_characters(valor);
        console.log(numero_letras)


    },
    keyup: function () {
        console.log('Key Up');

    },
    keydown: function () {
        console.log('Key Down');
    }
})


function get_slug(texto) {
    let transformacion = texto.trim().toLowerCase();
    let patternDelete = /[\,.\*\+]{1,}/gi;
    let patternStart = /^\-{1,}/gi;
    let patternEnd = /[ \-]{1,}$/gi;
    // transformacion = transformacion.replace(patternDelete, '');
    // transformacion = transformacion.replace(patternStart, '');
    // transformacion = transformacion.replace(patternEnd, '');

    transformacion = transformacion.replace(patternDelete, '').replace(patternStart, '').replace(patternEnd, '');

    let patternSpaces = /[ \-]{1,}/gi;
    transformacion = transformacion.replace(patternSpaces, '-')


    return transformacion;

}


function get_characters(texto) {

    let transformacion = texto.trim().toLowerCase();
    let patternEnd = /[ \,\.]{1,}$/gi;
    transformacion = transformacion.replace(patternEnd, '');
    console.log(transformacion)
    let pattern = /[ \,\.]{1,}/gi

    let splitTransformacion = transformacion.split(pattern);
    console.log(splitTransformacion);
    if (splitTransformacion.length === 1 && splitTransformacion[0] === '') {
        return 0;
    }

    return splitTransformacion.length;
}






// let texto = "Hola  mundo, JS , HTML ,    CSS.  "


// Array Asociativo
let array = new Array();

array["rojo"] = "#ff0000";
array["azul"] = "#0000ff";

console.log(array);
console.log(array.azul);

let obj = {};
obj["rojo"] = "#ff0000";
obj["azul"] = "#0000ff";
console.log(obj)