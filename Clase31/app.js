'use strict'

/*

+ Métodos de Array

    - Push
    - Pop
    - Splice

    - For each

    - Find
    - Filter
    - Map
    - Sort
    - Reduce


    35 -> Proyecto
    - Ajax
    - Promesas
    ...



*/

let lista = ['manzana', 'pera', 'melocotón', 'melón'];
lista.sort();

console.log(lista);

// >>> Métodos que MUTAN el objeto

lista.push('sandía'); // Añadir un elemento al final

lista.pop(); // Sacar el último elemento ;

// LIFO -> Last In First Out

// FIFO -> Firt In First Out

// lista.splice(1, 1); // Elimina un elemento de la lista
lista.splice(1, 1, 'tomate'); // Elimina un elemento de la lista


console.log(lista)

let lista_frutas = ['manzana', 'pera', 'melocotón', 'melón'];
lista_frutas.sort();

console.log(lista_frutas)

let clasificacion = [
    { nombre: "España", puntos: 21, goles_favor: 20 }, // pais_a
    { nombre: "Polonia", puntos: 10, goles_favor: 10 }, // pais_b
    { nombre: "Francia", puntos: 10, goles_favor: 12 }, // pais_b
    { nombre: "Alemania", puntos: 10, goles_favor: 3 }, // pais_b
    { nombre: "Portugal", puntos: 37, goles_favor: 15 },
    { nombre: "Italia", puntos: 12, goles_favor: 30 },
]

let clasifiacion_ordenada = clasificacion.sort((pais_a, pais_b) => {
    if (pais_a.puntos > pais_b.puntos) {
        return -1 // pais_a ANTES que pais_b
    } else if (pais_a.puntos < pais_b.puntos) {
        return 1; // pais_a DESPUÉS que pais_b 
    } else {  // 
        // return 0; // Se quedan en la posición original
        if (pais_a.goles_favor > pais_b.goles_favor) {
            return -1;
        } else if (pais_a.goles_favor < pais_b.goles_favor) {
            return 1
        } else {
            return 0;
        }
    }
});
console.log(clasificacion)//
console.log(clasifiacion_ordenada)// Es el "mismo" objeto




// >>>>> Métodos que NO MUTAN el objeto


for (let i = 0; i < lista.length; i++) {
    console.log("posición " + i, lista[i]);
}

for (let cadaFruta of lista) {
    console.log("Valor de cada elemento", cadaFruta)
}


// Alternativa al For en listas
lista.forEach(function (cadaElemento, indice) {
    console.log("Dentro del foreach " + indice, cadaElemento)
});





// Métodos que tene sobre listas

const found = lista.find(
    function (cadaElemento) { // Iterar en todos los elementos
        console.log(cadaElemento)
        if (cadaElemento === 'tomate') {
            return true;
            // Devuelvo en found el elmento que ha dado TRUE -> cadaElemento concreto
        }
        return false;
    }
)

console.log("Elemento encontrado", found);

let alumnos = [
    { nombre: "A", apellidos: "B", fecha: 1990, nota: 6 }, // FALSe
    { nombre: "E", apellidos: "C", fecha: 1996, nota: 3 }, // TRUE
    { nombre: "I", apellidos: "D", fecha: 1999, nota: 10 }, // TRUE
    { nombre: "O", apellidos: "F", fecha: 1991, nota: 2 },  // FALSE
    { nombre: "U", apellidos: "G", fecha: 1991, nota: 7 }, // TRUE
]

// Find -> Devuelve SOLO un elemento
let alumno_found = alumnos.find((cadaAlumno, indice) => {
    console.log(cadaAlumno)
    if (cadaAlumno.fecha === 1999) {
        return true; // Devolviendo TODO el alumno
    } else {
        return false;
    }
})

console.log('Alumno', alumno_found);
// Filter

let alumnos_encontrados = alumnos.filter((cadaAlumno, indice) => {
    if (cadaAlumno.nota > 6) {
        return true; // Incluye el elemetno en el array final
    }
    return false; // No incluir este elemento en el array final
});

console.log(alumnos)
console.log(alumnos_encontrados)


// MAP -> Devuelve una lista con los "mismos" datos TRANSFORMADOS 
let numeros = [1, 2, 3, 4, 5, 6, 7];

let lista_numeros = numeros.map((cadaElemento, indice) => {

    return cadaElemento * cadaElemento * 100;

})
console.log(numeros);
console.log(lista_numeros);


let lista_div_alumnos = alumnos.map((cadaAlumno) => {
    let div = document.createElement('div');
    if (cadaAlumno.nota >= 5) {
        div.classList.add('aprobado');
    } else {
        div.classList.add('suspenso');
    }
    div.innerHTML = cadaAlumno.nombre;

    return div;

})

let listaNombres = alumnos.map(cadaAlumno => {
    return cadaAlumno.nombre;
})

console.log(alumnos)
console.log(lista_div_alumnos);
console.log(listaNombres);



let numeros_aleatorios = [10, 12, 31, 13, 17, 69, 71];

// REDUCE -> Convierte un array -> un solo elemento
let sumaTotal = numeros_aleatorios.reduce((acumulador, actual) => {
    console.log('acumulador', acumulador);
    console.log('actual', actual);
    debugger
    return acumulador + actual; // Acumulador que pasa al siguientte elemento es 7
}, 0);
console.log(sumaTotal);


let alumnos_2 = [
    { nombre: "A", apellidos: "B", fecha: 1990, nota: 6 }, // FALSe
    { nombre: "E", apellidos: "C", fecha: 1996, nota: 3 }, // TRUE
    { nombre: "I", apellidos: "D", fecha: 1999, nota: 10 }, // TRUE
    { nombre: "O", apellidos: "F", fecha: 1991, nota: 2 },  // FALSE
    { nombre: "U", apellidos: "G", fecha: 1991, nota: 7 }, // TRUE
]

let texto = alumnos_2.reduce((acumulador, actual) => {
    return acumulador + actual.nombre + ","
}, "Alumnos: ")


console.log(texto);


// Prueba de Trabajo



