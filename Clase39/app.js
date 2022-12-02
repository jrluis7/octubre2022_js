'use strict'
/* 

    APIS de navegador


    Avance de Peticiones AJAX 
        - Autenticación
        - GET y POST



*/

// fetch('https://rickandmortyapi.com/api/character').then(respuesta => respuesta.json()).then(
//     data => {
//         console.log(data);
//     }
// )

// Identifica a la persona que está accediendo
let key = '9f2dec9d-e89f-48f0-82e4-19c975582a74';

let imgSeleccionada;

fetch('https://api.thecatapi.com/v1/images/search?api_key=' + key).then(respuesta => respuesta.json()).then(
    data => {
        console.log(data[0]);
        imgSeleccionada = data[0];
        pintoImagen(data[0])
    }
)


function pintoImagen(imagen) {

    $('#image img').attr('src', imagen.url)

}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append('x-api-key', key)
$('#like').on({
    click: function () {
        console.log(imgSeleccionada)
        fetch('https://api.thecatapi.com/v1/votes?', {
            method: 'POST',
            body: JSON.stringify({ "image_id": imgSeleccionada.id, value: 1 }),
            headers: myHeaders
        })

    }
})



let url = 'http://api.weatherstack.com/current?access_key=' + '5e561dc67f531cf6c5e9e94b2beb770e' + '&query=New York'
fetch(url).then(r => r.json()).then(data => {
    console.log("data")
    console.log(data)
})
