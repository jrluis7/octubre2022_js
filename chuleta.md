# Chuleta JS

JS es un elemento BLOQUEANTE. Bloquea la construcción de la web EN ESE PUNTO hasta que termine de ejectar todo el SCRIPT


```js
console.log( 'Hola mundo' ) 
```

## Comandos de Visual


## Variables
Son elementos que nos permiten almacenar datos en un "cajón"
Las variables las vamos a definir siempre con LET

Usar letras minúsculas

## Seleccionar elementos del DOM ( Web )

### Seleccionar un elemento concreto  
NOTA: Selecciona el primer elemento que CUMPLE el selector
```html
<button id="btnAnimate"> Anima cuadrado </button>
```

```js
let nodoBtnAnimate = document.querySelector( '#btnAnimate' );

console.log( nodoBtnAnimate );
```
### Seleccionar un GRUPO de elementos

```html
  <div id="grid">
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
        <div class="cuadrado"></div>
    </div>
```

```js
// LISTA de nodos HTML
 let listaCuadrados = document.querySelectorAll('.cuadrado');
    console.log(listaCuadrados);
```

#### Ejemplo: Cambiar el color de todos los elementos

```js
let listaCuadrados = document.querySelectorAll('.cuadrado');
    console.log(listaCuadrados);


    // Las listas NO TIENEN una propiedad 'style'
    //listaCuadrados.style.backgroundColor = 'lightgreen';

    // Nodo HTML
    // Acceder a todos elementos, uno por uno
    for (let i = 0; i < listaCuadrados.length; i++) {

        listaCuadrados[i].style.backgroundColor = 'purple';
    }
```






## Cambiar propiedades de un NODO HTML

### Cambiar color

Puedo acceder a todas las propiedades CSS de un elemento mediante .style
```html
  <button id="btnAnimate" style="background-color: blue;" > Anima cuadrado </button>
```
```js
nodoBtnAnimate.style.color = "#ffffff";

```

## Pintar en la Web

### innerHTML
Podemos crear nuevo contenido HTML como el conocemos

NOTA: Necesita que la cadena HTML esté COMPLETA. Si detecta que no hay un cierre de una etiqueta, la cierra.
```html
  <div id="contenedorSaludo"> </div>
```

```js
  let nodoContenedorSaludo = document.querySelector('#contenedorSaludo');
  // Lo vamos a usar Cuando queramos SUSTITUIR TODO EL CONTENIDO
  nodoContenedorSaludo.innerHTML = "NUEVO CONTENIDO"
  // Cuando queramos añadir contenido nuevo sin borrar el anterior

  nodoContenedorSaludo.innerHTML = nodoContenedorSaludo.innerHTML + "NUEVO CONTENIDO"

```
### Recomendación
```js
// RECOMENDACIÓN: Crear una cadena de Texto con el HTML y después pintarlo

// Construyo la cadena de texto que reprenta HTML
let str_html = `<ul style="background-color: ${color} ">`;

for (let i = 0; i < frutas.length; i++) {
    str_html = str_html + `<li> ${frutas[i]} </li>`;
    debugger
}

str_html += `</ul>`;

// Voy a pintar
nodoUl.innerHTML = str_html
```

## Crear eventos

### Atributo HTML
Tiene que haber creada una función en JS

```html
<button onclick="pintaWeb()"> Pintar </button>
```
```js
function pintaWeb(){
    console.log( 'Clic' )
}
```

### Atributo HTML con JS
```html
<button id="btnPaint"> Pintar </button>
```
```js
let nodoBtn = document.querySelector( '#btnPaint' );
nodoBtn.onclick = function(){
    console.log( 'Clic' );
}
```

## FOR
Trozo de código que se repite un NÚMERO DETERMINADO de veces.

```js
let str_string = " *"; // GLOBAL

for (let i = 0; i < 10; i++) { /
    console.log("Vuelta: ", i,);
    // Se REPITE pero VARÍA i
    str_string = str_string + " *";
}// Se destruye la i

```

### CASO Especial: Recorrer una lista

```js

let frutas = ['manzana', 'pera', 'melón', 'melocotón', 'piña', 'sandía'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i); // i va cambiando para CADA VUELTA
    console.log(frutas[i]); // Voy a decidir USAR la i de un for para acceder a cada elemento de la lista
}
//
```



