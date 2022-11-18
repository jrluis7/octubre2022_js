'use strict'
/*
    Pantalla
    Scroll y wheel
    Posición de los elementos en la web
    Overflow


*/



console.log(window);
console.log(window.innerHeight);
console.log($(window).height());
let altoBody = $('body').height();
console.log('Body', altoBody);

// Offset : Posición Siempre con respecto a BODY o html o document
let offset_hijoSegundo = $('#hijoSegundo').offset();
console.log("Offset Hijo Segundo", offset_hijoSegundo)

// Position: Posición con respecto al primer padre con posicionamiento distinto de static
let position_hijoSegundo = $('#hijoSegundo').position();
console.log("Posición Hijo Segundo", position_hijoSegundo)


// JS nativo
let nodoNativo = document.querySelector('#hijoSegundo');
console.log(nodoNativo.getBoundingClientRect());




// SCROLL -> Evento JS
// El dato del scroll

$(window).on({
    wheel: function (evento) {

        // console.log('Wheel');
        // Evita el comportamiento por dsefecto
        // evento.preventDefault();

    },
    scroll: function () {
        let scrollTop = $(window).scrollTop();
        let offset_hijoSegundo = $('#hijoSegundo').offset();
        let altoWindow = $(window).height();
        console.clear();
        console.log(" Scroll", scrollTop);
        console.log("Scroll + window ", scrollTop + altoWindow)
        console.log("Offset Hijo Segundo", offset_hijoSegundo)
        // console.log(" Body", altoBody);

        // if (scrollTop > offset_hijoSegundo.top) {// Si la ventana ha hecho suficiente scroll para que el elemento SALGA por arriba
        if (scrollTop + 2 * altoWindow / 3 > offset_hijoSegundo.top) {// 
            $('#hijoSegundo').addClass('appear');
        } else {
            $('#hijoSegundo').removeClass('appear');

        }
    }
})

$('#go_to_tercero').on({
    click: function () {
        let offset_tercero = $('#tercero').offset();

        // ME permite cambiar el scroll 
        $(window).scrollTop(offset_tercero.top - 50);



    }
})






