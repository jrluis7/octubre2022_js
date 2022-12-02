'use strict'

/*

    Funcionamiento Web
        - Clásico, siempre un solo HTML
        - Moderno, AJAX

    Peticiones a una API
*/

/*

    Por cada petición el servidor devuelve UN HTML COMPLETO -> por ejemplo PHP - Hiper text Pre Procesor



    AJAX ->
        Carga inicial y después pido información al servidor y mediante JS repinto una zona de la web
        Normalmente la información es JSON

        ¡Cuidado con el SEO!


    SPA -> Llevar al extremo el modelo de AJAX
    Single Page Aplication -> UN solo HTML y repinto toda la información
    ¡Mucho cuidado con el SEO!


*/


// AJAX 


// BACK Y FRONT

/* 

    Servidor que nos da datos
    API -> Aplication Point Interface
    Algo que no hemos creado que tiene una documentación para usar como por ejemplo Jquery o Google Maps


    API REST
        - Estado único 
        - Las operaciones que se hacen son independientes

        Hacer operaciones con un servidor en una BBDD
            - CREAR datos       -> CREATE   C
            - LEER datos        -> READ     R
            - MODIFICAR datos   -> UPDATE   U
            - BORRAR datos      -> DELETE   D


        Cada elemento de la API se llama ENDPOINT

        1. El Back cree el CRUD de publicaciones
        2. El Front Usa la API del CRUD de publicaciones para crear las interfaces



*/

const url_base = "https://pokeapi.co/api/v2/";
let url_next = '';
let url_img_base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// Petición AJAX en JQUERY


$.ajax({
    method: "GET", // default
    url: url_base + "pokemon/",
    success: function (datos) {
        // ASINCRONO
        console.log("TODO OK")
        console.log(datos) // Jquery me devuelve TODOS los datos de la respuesta me ha convertido JSON a Object
        url_next = datos.next;// Actualizando la varibale GLOBAL para que desde cualquier punto sepa cual la siguiente url
        pintaGrid(datos);

    }, error: function (error) {
        console.warn("ERROR")
        console.warn(error);
    }
});


$('#btnNext').on({
    click: function () {

        $.ajax({
            method: "GET", // default
            url: url_next,
            success: function (datos) {
                console.log("TODO OK")
                console.log(datos) // Jquery me devuelve TODOS los datos de la respuesta me ha convertido JSON a Object
                url_next = datos.next;// Actualizando la varibale GLOBAL para que desde cualquier punto sepa cual la siguiente url

                pintaGrid(datos);

            }, error: function (error) {
                console.warn("ERROR")
                console.warn(error);
            }
        });




    }
})







function pintaGrid(datos) {
    $('#count').html(datos.count);
    // $('#grid').html('');
    $('#grid').empty();
    for (let i = 0; i < datos.results.length; i++) {
        // console.log(datos.results[i]);
        pintaPokemon(datos.results[i]);
    }
}

function pintaPokemon(pokemon) {

    let split_pokemon = pokemon.url.split('https://pokeapi.co/api/v2/pokemon/');
    console.log(split_pokemon);
    let id = split_pokemon[1].replace("/", ".png")
    console.log(id)


    let nodoDiv = document.createElement('div');
    nodoDiv.classList.add('pokemon');
    nodoDiv.innerHTML = pokemon.name;
    let img = document.createElement('img');
    img.src = url_img_base + id;

    nodoDiv.append(img)
    let ref_interval = setInterval(function () {
        if (img.src.includes('back')) {
            img.src = url_img_base + id
        } else {
            img.src = url_img_base + 'back/' + id
        }

    }, 1000 * Math.random() + 500)

    nodoDiv.addEventListener('mouseenter', function () {
        clearInterval(ref_interval);
    })

    nodoDiv.addEventListener('mouseleave', function () {
        ref_interval = setInterval(function () {
            if (img.src.includes('back')) {
                img.src = url_img_base + id
            } else {
                img.src = url_img_base + 'back/' + id
            }

        }, 1000 * Math.random() + 500)
    })




    // let nodoDiv_jquery = $('<div class="pokemon"></div>')
    // nodoDiv_jquery.html(  )

    $('#grid').append(nodoDiv);


}


