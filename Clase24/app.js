'use strict'


// STRING


let texto_original = "Hola mundo";

let texto_mayus = texto_original.toUpperCase();

console.log(texto_original);
console.log(texto_mayus);


// Math -> Cualquier operación matemática





// class Math{
//     PI = 3.141692
//     static sqrt(){

//     }

// }



console.log('PI', Math.PI);


console.log(Math.pow(2, 5)); //2^3



let arr = [1, 209, 12, 43, 88, 21, 23]


function calculaMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


// let maximo = Math.max(100, 2, 12, 43, 88, 21, 23);
let maximo = Math.max(...arr); // ... SPREAD 
console.log("Array", arr);
console.log("...arr", ...arr);
console.log(maximo)




let decimal = 9.981238071230;
let decimal_2 = 9.481238071230;

console.log('Trunc', Math.trunc(decimal));
console.log('Round', Math.round(decimal));

console.log('Trunc', Math.trunc(decimal_2));
console.log('Round', Math.round(decimal_2));



// Número entre 0 y 1 per NUNCA llega al 1 -> [ 0 , 1 )  
let numero_random = Math.random();
console.log(numero_random);
console.log(numero_random * 10);
// [ 0 , 1)
let aleatorio_0_75 = Math.random() * 75 // [0, 75)
console.log('aleatorio_0_75', aleatorio_0_75)

// [ 0 , 1 )
let aleatorio_25_100 = 25 + Math.random() * 75 // [25,100)
console.log('aleatorio_25_100', aleatorio_25_100);

// [0, 10) -> Enteros 0,1,2,3,4,5,6,7,8,9,
let numero_aleatorio = Math.random() * 10
let aleatorio_0_10_enteros = Math.round(numero_aleatorio);
let aleatorio_0_10_enteros_trunc = Math.trunc(numero_aleatorio);
console.log('Round', numero_aleatorio, aleatorio_0_10_enteros);
console.log('Trunc', numero_aleatorio, aleatorio_0_10_enteros_trunc);


/**
 *          0   |  1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | 10 |
 * Trunc    0.1 |  0.1  | 0.1   | 0.1   | 0.1   | 0.1   | 0.1   | 0.1 | | 0.1 | | 0.1   | 0 |
 * Round    0.05|  0.1  | 0.1   | 0.1   | 0.1   | 0.1   | 0.1   | 0.1 | | 0.1 | | 0.1   | 0.05 |
 *        (0-0.5) [0.5-1.5)| . ....                                                     [9.5-10]
 */



let nodoBody = document.querySelector('body');

nodoBody.style.backgroundColor = getRandomColor();

// Función que devuelva un string con un color aleatorio

function getRandomColor() {
    let randomRed = Math.trunc(Math.random() * 256);
    let randomGreen = Math.trunc(Math.random() * 256);
    let randomBlue = Math.trunc(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen} , ${randomBlue})`
}


// let ref_interval = setInterval(function () {

//     nodoBody.style.backgroundColor = getRandomColor();

// }, 1000)


let cerrojo = false;

window.addEventListener('mousemove', function () {
    console.log('Move')

    if (cerrojo === false) {
        nodoBody.style.backgroundColor = getRandomColor();
        cerrojo = true;
        let ref_time = setTimeout(function () {
            cerrojo = false;
        }, 500)
    }

})








