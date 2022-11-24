'use strict'


let tareas_ = [
    { nombre: "", estado: "TO_DO" },
    { nombre: "", estado: "DONE" },
];

let tareas = {
    porHacer: [],
    completas: [],
}

/* 

// Pensar en qué ocurre al inicio cuando tenga Local Storage

    addTarea => {
        - Evento Click en el botón -> Evento de teclado para ENTER
        - Recoger la información del input
            -> Trim , No coger el input si es vacío
        - Guardar en tareas POR HACER
            - añadir en tareas.porHacer
            - añadri con el estado TO_DO
        - Guardar en Local Storage
        - Pintar en la web en zona de Tareas POR HACER
        - Vaciar el valor del input -> value = ""

    }


    completar =>{
        - Opcion:1 ->   Eliminar de tareas.porHacer
                        Añadir en tareas.completadas
        - Opcion:2 -> Encontrar la tarea y cambiar el estado

        - Guardar Local Storage
        - Se elimina visualemnte de la zona de por hacer
        - Pinta tarea en la zona de completadas
    }

    descompletar =>{
        - Opcion:1 ->   Eliminar en tareas.completadas
                        Añadir de tareas.porHacer     
        - Opcion:2 -> Encontrar la tarea y cambiar el estado a POR HACER

        - Guardar Local Storage
        - Se elimina visualemnte de la zona de completadas
        - Pinta tarea en la zona de por hacer

    }


*/



function pintaTarea(nombre,) {

}


function guardarLocalStorage() {

}