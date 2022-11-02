'use strict'

// Repaso de Alumnos con POO

// Repaso Eventos
// Pop Up -> Información

// Temporizadores






class Asignatura {
    alumnos = []
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
    }
    addAlumno(alumno) {
        this.alumnos.push(alumno)
    }
}

class Persona {
    constructor(nombre, apellidos, fecha) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha = fecha;
    }

    edad() {
        let hoy = new Date();
        let year = hoy.getFullYear();
        return year - this.fecha;
    }

}

class Profesor extends Persona {
    constructor(nombre, apellidos, fecha, dni) {
        super(nombre, apellidos, fecha);
        this.dni = dni;
    }
}

class Alumno extends Persona {
    constructor(nombre, apellidos, fecha, nota) {
        super(nombre, apellidos, fecha);
        this.nota = nota;
    }

    pintaAlumno(id_selector) {
        let str_html = `<div class="alumno">
                            <h2> ${this.nombre} ${this.apellidos}</h2>
                            <div>
                                Edad: ${this.edad()}
                            </div>
                        </div>`;

        let nodoPintar = document.querySelector(id_selector);
        nodoPintar.innerHTML += str_html;
    }

}

let profesor = new Profesor('Luis', 'Jiménez', 1990, '0123456789S');
console.log(profesor)

console.log(profesor.edad());

let javascript = new Asignatura('JS', profesor);


let alumno1 = new Alumno('AA', 'BB', 1990);
let alumno2 = new Alumno('EE', 'CC', 1990);

javascript.addAlumno(alumno1)
javascript.addAlumno(alumno2)

alumno2.pintaAlumno('#gridAlumnos');

console.log(javascript);




let nodoBtn = document.querySelector('#btnPopUp');
let nodoModal = document.querySelector('#modal');
let nodoContainerModal = nodoModal.querySelector('.container')

nodoBtn.addEventListener('click', function () {
    nodoModal.classList.add('open');
    nodoContainerModal.classList.add('aparecer');


})

let nodoBtnClose = document.querySelector('#btnClose')

nodoBtnClose.addEventListener('click', closeModal)

nodoModal.addEventListener('click', closeModal)

// let nodoContainerModal = document.querySelector('#modal .container')

nodoContainerModal.addEventListener('click', function (evento) {
    console.log('Evento de click en CONTAINER')
    console.log(evento)
    evento.stopPropagation(); // A partir de mí no propago el evento a mis padres
})

function closeModal(evento) {
    console.log('Clic en ', this);
    console.log(evento)
    let nodoModal = document.querySelector('#modal');
    nodoContainerModal.classList.remove('aparecer');

    nodoContainerModal.classList.add('desaparecer');


    let ref_timer = setTimeout(function () {
        // El código que hay aquí se ejecuta DESPUÉS de 1000 mseg
        nodoModal.classList.remove('open');
        nodoContainerModal.classList.remove('desaparecer');
    }, 1000); // 1000 mseg

}


let listaEnlaces = document.querySelectorAll('a');

for (let i = 0; i < listaEnlaces.length; i++) {
    listaEnlaces[i].addEventListener('click', function (evento) {

        evento.preventDefault();// Eliminar el comportamiento por defecto del elemento

        console.log("Clic en los enlaces")
        // debugger
    });
}


// ESTADO CERRADO
// - Container sin clases y modal sin clases

// ESTADO ABIERTO
// - modal -> clase open y container sin clases


// Temporizadores


let refTemporizador = setTimeout(function () {
    console.log('Han pasado 5 seg');
}, 5000);








