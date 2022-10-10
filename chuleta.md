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
```html
<button id="btnAnimate"> Anima cuadrado </button>
```

```js
let nodoBtnAnimate = document.querySelector( '#btnAnimate' );

console.log( nodoBtnAnimate );
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
