// O




let alumno = {
    nombre:"Juan",
    apellidos:"Pérez",
    fecha:1982,
    saluda:function(){
        return `${this.nombre} + ${this.apellido}!`
    },
    getEdad:function(){
        //
        let hoy = new Date();
        let year = hoy.getFullYear();
        return year - this.fecha;

    },
    amigos: [ 

    ]
}

let alumno2 = {
    nombre:"Jose",
    apellidos:"Gómez",
    fecha:1996,
    saluda:function(){
        return `${this.nombre} + ${this.apellido}!`
    },
    getEdad:function(){
        let hoy = new Date();
        let year = hoy.getFullYear();
        return year - this.fecha;
    },
    amigos: [ 

    ]
}

let alumno3 = {
    nombre:"Fer",
    apellidos:"Gómez",
    fecha:1999,
    saluda:function(){
        return `${this.nombre} + ${this.apellido}!`
    },
    getEdad:function(){
        let hoy = new Date();
        let year = hoy.getFullYear();
        return year - this.fecha;
    },
    amigos: [   

    ]
}

// Programación funcional | Programación Orientada a Objetos - POO 



let hoy = new Date();// Crear un objeto de la CLASE DATE

// CLASES -> 

// Modelo o PLANTILLA
// GET y SET 

class Alumno{
    _nombre;
    apellido;
    fecha;
    tipo = "ALUMNO";
    
    constructor( param_nombre, param_apellido, param_fecha ){ // realiza la acción de new
        this.nombre     = param_nombre;
        this.apellido   = param_apellido;
        this.fecha      = param_fecha;
    }

    saluda( signo ){
        return `Hola ${this.nombre} ${this.apellido}`+signo;
    }

    getEdad(){
        let hoy = new Date();
        let year = hoy.getFullYear();
        return year - this.fecha;    
    }

    /**
     * @param {any} nombre
     */
    set nombre( nombre ){
        this._nombre = nombre
    }

}

console.log(alumno)
console.log(alumno instanceof Alumno )

let miAlumno_1 = new Alumno( 'María','Muñoz',1980 );// Llama al constructor
let miAlumno_2 = new Alumno( 'Carlos','Muñoz',1970 );// Llama al constructor
console.log( miAlumno_1 );
console.log( miAlumno_2 );

let miSaludo = miAlumno_1.saluda( "!!!!!" );
console.log( miSaludo );

console.log(miAlumno_1 instanceof Alumno )

// miAlumno_1.nombre = "Nuevo nombre" // NO LA QUIERO PERMITIR-> PRIVADO


// miAlumno_1.setNombre("Nuevo nombre");
miAlumno_1.nombre = "Nuevo nombre";

console.log( miAlumno_1 );





// Función CONSTRUCTORA

// function Persona(){

//     return ()

// }


// Array.prototype.amiFuncionPersolaniza = function(){

// }




class Animal{
    nombre;
    constructor( color ){ }

    comer(){

    }

    dormir(){

    }

    respirar(){

    }

}
// CLASE HIJA
class Gato extends Animal{
    constructor(){
        super( "NARANJA" );  // Ejecutar el constructor de la clase PADRE
    }
    ronronear(){

    }
}

class Pez extends Animal{
    constructor(){
        super();// Ejecutar el constructor de la clase PADRE
    }
    nada(){
        
    }
}


let gato = new Gato()

console.log( gato );



