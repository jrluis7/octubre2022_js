'use strict'

/*
    Drag and Drop

    - jQuery UI
    - JS Nativo

*/


// $("#dialog").dialog({
//     autoOpen: false,
//     draggable: false,
//     resizable: true,
//     show: {
//         effect: "blind",
//         duration: 1000
//     },
//     hide: {
//         effect: "explode",
//         duration: 1000
//     }
// });

// $("#opener").on("click", function () {
//     $("#dialog").dialog("open");
// });


// JQUERY UI
// $('.cuadrado').draggable({
//     // containment: ".gridCuadros"
//     opacity: 0.5,
//     cursor: 'move',
//     // grid: [110, 110],
//     revert: true,
//     revertDuration: 2000,
//     // delay: 1000,
//     start: function (evento, ui) {
//         console.log(this)
//         console.log(evento)
//         console.log(ui)
//     },
//     drag: function (evento, ui) {
//         console.log("Drag event")
//         // console.log(evento)
//         // console.log(ui)
//     }
// });

// $('#drop').droppable({
//     accept: ".premium",
//     activeClass: "selected_drag",
//     drop: function (evento, ui) {
//         console.log("Elemento Soltado")
//         console.log(evento)
//         console.log(ui)
//         ui.draggable.draggable({ revert: false })
//     }
// })




// Eventos de JS NATIVO ( Voy a usar Jquery por simplicidad )
// let elementSelected = null;
$('.cuadrado').attr('draggable', true);

let alfaNumeric = ['a', 'b', 'c']

$('.cuadrado').on({
    dragstart: function (evento) {
        console.log(evento)
        if (!this.id) {
            let today = new Date().getTime();// Milisegundos en los que empiezas a hacer drag
            this.id = today + "" + Math.trunc(Math.random() * 10000000);
        }
        evento.originalEvent.dataTransfer.setData('id-drag-element', this.id)
        console.log(evento.originalEvent.dataTransfer)

    },
    drag: function (evento) {
        // console.log("Drag");
        // console.log(evento);
        // elementSelected = evento.target;

    },
    dragend: function (evento) {
        // console.log("End")
    }
})

$('#drop').on({
    dragover: function (evento) {
        evento.preventDefault();
    },
    drop: function (evento) {
        console.log("Drop")
        console.log(evento)
        // $(this).append(elementSelected);

        let dato = evento.originalEvent.dataTransfer.getData('id-drag-element')
        console.log(dato);

        let elemento = $('#' + dato);
        debugger
        $(this).append(elemento);

        elemento.attr('id', null)

    }
})