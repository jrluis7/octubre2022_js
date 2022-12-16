'use strict'

/* 
    - Arrow Function
    - Operador ternario
    - Spread Operator
    - Destructuring
    - Mutabilidad




    - Map
    - Filter

*/



saluda('Marta');

function saluda(nombre) {
    console.log("Hola " + nombre);
}

// Se tiene que definir ANTES de usarse
const otro_saludo = function (nombre) {
    console.log('Hola otra vez ' + nombre)
}

const arrow_saludo = (nombre) => {
    // NUNCA genera contexto
    console.log("Hola arrow " + nombre);
    // THIS es siempre el contexto superior
}

// Const -> Una variable que NO puede ser reasignada

const pelicula = {
    nombre: "Toy story",
    fecha: 1995
}


pelicula.nombre = "Otro título"
console.log(pelicula);

// pelicula = "";// Esto No se puede hacer en una constante


// Operador ternario;
let edad = 17;

if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres un adulto");
}

// SOLO en el caso de que haga una opción binaria y además SOLO haga una cosa -> Operador ternario

// condicion ? "Lo que pasa si es true" : "Lo que pasa si es false"

(edad > 18) ? console.log("Eres mayor de edad") : console.log("No eres un adulto")


let mensaje = (edad > 18) ? "Eres mayor de edad" : "No eres un adulto";

console.log(mensaje);

// SPREAD operator -> Sacar el "valor" de un objeto


let frutas = ['manzana', 'pera', 'melón', 'mandarina']
console.log(frutas);
console.log(...frutas);

let bebida = ['cerveza', 'vino', 'agua']


// let compra = [frutas, bebida];
let compra = [...frutas, ...bebida];

console.log(compra)


const otra_pelicula = {
    nombre: "Toy story",
    fecha: 1995
}

const clon_spread_pelicula = {
    ...otra_pelicula
}

// NO crea otro OBJETO -> CREAR un ALIAS -> Apunta a la refencia del objeto principal
let otro_clon_pelicula = otra_pelicula;

otro_clon_pelicula.nombre = "AAAAA";

console.clear();

console.log("otra_pelicula", otra_pelicula);
console.log("clon_spread_pelicula", clon_spread_pelicula);
console.log("otro_clon_pelicula", otro_clon_pelicula);

const update_pelicula = {
    ...otra_pelicula,
    nombre: "BBBB"
}



const empresa = {
    nombre: "Empresa de servicios Empresariales para empresas S.A.",
    cif: "B1234456",
    ceo: "Pepe",
    empleados: [

    ],
    departamentos: []
}

// if( nombre in empresa )


// let nombre = empresa.nombre;
// let ceo = empresa.ceo;

// Destructuring
// Creo una variable nombre -> empresa.nombre
// Creo una varibale ceo -> empresa.ceo
let { nombre: otro_nombre, ceo } = empresa;

console.log(otro_nombre)
console.log(ceo);





let alumnos = [
    { nombre: "Marta", edad: 20, nota: 5 },
    { nombre: "Maria", edad: 21, nota: 5 },
    { nombre: "Carlos", edad: 22, nota: 7 },
    { nombre: "Mario", edad: 22, nota: 4 },
    { nombre: "Marcos", edad: 23, nota: 10 },
]

// FILTER -> CREA un nuevo array a partir del anterior

let filtered_alumnos = alumnos.filter(cadaAlumno => {
    if (cadaAlumno.nota > 5) {
        return true;
    }
    return false;
})

let filtered_alumnos_ = alumnos.filter(cadaAlumno => {
    return (cadaAlumno.nota > 5) ? true : false;
})

// Si no ponemos llaves -> Estamos haciendo el return en la arrow function
let filtered_alumnos__ = alumnos.filter(cadaAlumno => (cadaAlumno.nota > 5) ? true : false);

console.log(filtered_alumnos__);


// MAP  transforma un array de N valores en otro array distinto de N valores

let arrayNotas = alumnos.map(cadaAlumno => {
    return cadaAlumno.nota;
})

console.log(arrayNotas);
