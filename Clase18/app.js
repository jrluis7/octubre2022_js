'use strict'

/* 
    - Repaso Clases

    - REPASO General: 
        - Eventos
        - Inputs
        -> Pintar en la web

*/


// Seleccionar un elemento -> QuerySelector
// Cuando en HTML tenemos un identificador -> Automáticamente se crea una variable global con el nombre del identificador


// Object
// Node
// ElementNode
// InputNode
console.log(entrada);

console.log(btnCreate);


btnCreate.addEventListener('click', function () {

    console.log(entrada);
    let texto = entrada.value;
    console.log(texto)

    // pintarGrid(texto);

    pintar_creando_elementos(texto);
});


// PINTAR con elements
// - Cuando tenga que crear una animación de entrada
// - Cuando el elemento que entra TENGA UN EVENTO ASOCIADO

function pintar_creando_elementos(texto) {

    // Crear el contenido mediante ELEMENTOS JS

    let nodoPost = document.createElement('div');
    nodoPost.classList.add('post');
    nodoPost.classList.add('appear');
    console.log(nodoPost);

    let nodoSpan = document.createElement('span');
    nodoSpan.classList.add('changeColor');
    nodoSpan.innerHTML = "X";
    console.log(nodoSpan);

    nodoSpan.addEventListener('click', function () {
        // const parent = this.parentNode;
        const parent = nodoPost;
        if (parent.style.backgroundColor === "coral") {
            parent.style.backgroundColor = "white"
        } else {
            parent.style.backgroundColor = "coral"
        }
    });

    let nodoH2 = document.createElement('h2');
    nodoH2.innerHTML = texto

    let nodoP = document.createElement('p')
    nodoP.innerHTML = "TEXTO DEL ELEMENTO"


    nodoPost.append(nodoSpan);
    nodoPost.append(nodoH2);
    nodoPost.append(nodoP);
    // nodoPost.append('<h3>Last</h3>');

    console.log(nodoPost);

    // Añadirlo al DOM -> Añadir nuevo contenido a un elemento del dom
    grid.append(nodoPost);







}




// PINTAR CON innerHTML 
function pintarGrid(texto) {
    let str_html = `
    <div class="post appear">
            <span class="changeColor"> X </span>
            <h2> ${texto} </h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime explicabo accusamus et fugit maiores
                itaque unde. Rem quos ipsum, optio non nulla, consequatur repudiandae quae assumenda quod expedita
                molestiae amet.
            </p>
        </div> 
    `;

    // grid.innerHTML += str_html;
    grid.innerHTML = grid.innerHTML + str_html;


    // let listaElementos = document.querySelectorAll('.changeColor');
    // console.log('listaElementos', listaElementos)

    // for (let i = 0; i < listaElementos.length; i++) {
    //     listaElementos[i].addEventListener('click', function () {
    //         const parent = this.parentNode;
    //         console.log('Elemento Clicado', parent);
    //         if (parent.style.backgroundColor === "coral") {
    //             parent.style.backgroundColor = "white"
    //         } else {
    //             parent.style.backgroundColor = "coral"
    //         }

    //     })
    // }


    // grid.innerHTML = grid.innerHTML + str_html;
}

// LO ejecutamos AL PRINCIPIO
// CUANDO TENGO CONTENIDO EN EL HTML
let listaElementos = document.querySelectorAll('.changeColor');

console.log('listaElementos', listaElementos)

for (let i = 0; i < listaElementos.length; i++) {
    listaElementos[i].addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.style.backgroundColor === "coral") {
            parent.style.backgroundColor = "white"
        } else {
            parent.style.backgroundColor = "coral"
        }

    })
}


