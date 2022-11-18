'use strict'


$('#btnChange').on({
    click: function () {

        $('.cuadro').html('<h2> Hola </h2>')
        $('.cuadro').css({
            'color': 'blue'
        })

    }
})

let nodoJqueryClose = $('#btnClose')
nodoJqueryClose.on({
    click: function () {

        // $('#contenido').hide(1500, function () {
        //     alert('Cerrado')
        // });
        // $('#contenido').slideUp(1500);
        $('#contenido').fadeOut(1500);

    },
    mousemove: function () {

    }
});


$('#btnOpen').on({
    click: function () {
        // $('#contenido').show(2000)
        // $('#contenido').slideDown(1500);
        // $('#contenido').slideToggle(2000)
        $('#contenido').fadeTo(2000, 0.6)


    }
})

$('#btnToggle').on({
    click: function () {
        // $('#contenido').toggle(2000)
        // $('#contenido').slideToggle(2000)
        $('#contenido').fadeToggle(2000)
    }
})


$('#btnMove').on({
    click: function () {
        // $('#cuadrado').css({
        //     'left': '200px'
        // })

        $('#cuadrado').animate({
            'left': '200px',
            'height': '200px'
        }, 2000).animate({
            'left': '300px',
            'width': '200px',
            'background-color': 'blue'
        }, 1000)
    }
})




// function timeToMessage(callback) {

//     let ref_time = setInterval(function () {

//         callback()

//     }, 5000)

// }


// timeToMessage(function () { console.log("OK") })


class Jquery {
    constructor() {

    }

    slideUp() {
        // Hago la animación

        return this;
    }

    slideDown() {
        // Hago la animación
        return this;
    }
    animate() {
        // Hago la animación

        return this;
    }

}







