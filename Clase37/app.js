'use strict'

/* 
    Petición HTTP: 
        - Headers 
        - Body


        GET: No hay BODY
        POST: Sí hay body porque va la información que envías
        UPDATE: Modifica una información con body
        DELETE: Tampoco tiene body

*/

let url_img_base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


const url_base = "https://pokeapi.co/api/v2/";

// GET por defecto
// Promesa -> Ahora no puedo darte los datos pero PROMETO avisarte cuando los tenga
// const promesaDatos = fetch(url_base + "pokemon/");
// console.log(promesaDatos);

// // Then y Catch
// let promesaRespuesta = promesaDatos.then((respuesta) => {
//     console.log(respuesta);
//     return respuesta.json(); // Convertir la respuesta en JSON -> Devolver una promesa
// })

// console.log(promesaRespuesta);

// promesaRespuesta.then((info) => {
//     console.log(info);
// })

// // fetch(url_base + "pokemon/").then(response => {
// //     return response.json();
// // }).then(datos => {
// //     console.log(datos);
// //     pintaGrid(datos);
// // })



// function pintaGrid(datos) {
//     // $('#count').html(datos.count);
//     // $('#grid').html('');
//     grid.innerHTML = '';
//     for (let i = 0; i < datos.results.length; i++) {
//         // console.log(datos.results[i]);
//         pintaPokemon(datos.results[i]);
//     }
// }

// function pintaPokemon(pokemon) {

//     let split_pokemon = pokemon.url.split('https://pokeapi.co/api/v2/pokemon/');
//     console.log(split_pokemon);
//     let id = split_pokemon[1].replace("/", ".png")
//     console.log(id)


//     let nodoDiv = document.createElement('div');
//     nodoDiv.classList.add('pokemon');
//     nodoDiv.innerHTML = pokemon.name;
//     let img = document.createElement('img');
//     img.src = url_img_base + id;

//     nodoDiv.append(img)
//     let ref_interval = setInterval(function () {
//         if (img.src.includes('back')) {
//             img.src = url_img_base + id
//         } else {
//             img.src = url_img_base + 'back/' + id
//         }

//     }, 1000 * Math.random() + 500)

//     nodoDiv.addEventListener('mouseenter', function () {
//         clearInterval(ref_interval);
//     })

//     nodoDiv.addEventListener('mouseleave', function () {
//         ref_interval = setInterval(function () {
//             if (img.src.includes('back')) {
//                 img.src = url_img_base + id
//             } else {
//                 img.src = url_img_base + 'back/' + id
//             }

//         }, 1000 * Math.random() + 500)
//     })




//     // let nodoDiv_jquery = $('<div class="pokemon"></div>')
//     // nodoDiv_jquery.html(  )

//     grid.append(nodoDiv);


// }




/* 
    PROMESAS
*/





let url = 'miArchivo.txt';


let archivo_promesa = readFile(); // Promise
// console.log(archivo_promesa);
archivo_promesa.then((datos) => {
    // Cuando la promesa interamente devuelva RESOLVE
    // console.log(datos)
    checkArchivo(datos).then(() => {

    }).catch(() => {

    })


}).catch(error => {
    // Cuando la promesa devuelva REJECT
    // console.log(error)
})


paint(archivo_promesa);


function readFile() {

    return new Promise((resolve, reject) => {
        // console.log('Leyendo el archivo');

        setTimeout(function () {
            if (Math.random() > 0.7) {
                reject('Error en el archivo');
                // El trozo de códifo del CATCH
            }

            // Resolver la promesa -> Le da valor a quien está esperando
            // A quién está esperando se ejecuta el THEN 
            // Resolve es el desencadenante de THEN
            resolve('En un lugar de la mancha...')
        }, Math.random() * 3000 + 500) //NO se lo que tardará

    });

}

function checkArchivo(archivo) {
    return new Promise((resolve) => {
        resolve('Checkeado')
    })
}


function paint(datos) {
    // console.log(datos)
}



/* OPCION 2 de promesas async-await 

    Await -> Esperar que la promesa termine y DEVUELVE los datos del RESOLVE en la variable ( otroArchivo )
        -> SOLO se puede usar en funciones ASYNC

*/


async function getData() {
    try {
        let otroArchivo = await readFile();
        // Checkea depende de otroArchvio y espera a que termine
        let checkea = await checkArchivo(otroArchivo);
        // console.log(otroArchivo)
        // console.log(checkea)
        // console.log('Más código')

    } catch (error) {
        // console.log(error)
        // Gestionaria CADA error de todas las promesas
    }

}

getData();
// console.log("Sigo ejecutando")







/* 

    Try Catch
        - Asegurar un trozo de código
        - Determinar errores de código
        - Determianr errores de usuario

*/








function suma(a, b) {
    if (!a || !b) {
        throw (new Error('La función esperaba dos parámetros'));
    }

    return a + b;
}

function division(dividendo, divisor) {
    if (!dividendo || divisor === undefined) {
        throw (new Error('La función esperaba dos parámetros'));
    }
    if (divisor === 0) {
        throw ('La división no admite cero como divisor');
    }

    return dividendo / divisor;
}

function multiplicar(a, b) {
    if (!a || !b) {
        throw (new Error('La función esperaba dos parámetros'));
    }
    return a * b;
}


try {
    let suma_2_5 = suma(2);

    console.log(suma_2_5);

    let division_datos = division(suma_2_5, 0)

    console.log(division_datos)

} catch (error) {
    console.log(error)
    console.trace();
}

