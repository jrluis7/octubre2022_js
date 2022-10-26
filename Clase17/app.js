'use strict'

// Clase 17: Repaso de Clases  y POO

/*
    Clase 30-35: JS
        Clase 30: jQuery

    Clase 35-40: Proyecto en JS

    Clase 40-50: Intro Angular y React


*/



// Dar responsabilidad limitada
// Creando estructuras o modelos de los datos que vamos a usar

// Figuras 2D

// Clase PADRE -> Clase Abstracta
class Figura2D {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {

    }

    perimetro() {

    }

    log() {
        console.log("Soy la figura: ", this);
    }

}

// Clase HIJAS o subclases
class Rectangulo extends Figura2D {
    base;
    // altura;
    constructor(x, y, base, altura) {
        // Al extender de una clase PADRE también soy de la clase de mi PADRE -> Puedo acceder al constructor de mi PADRE con super
        super(x, y);// 

        // Creo el atributo = doy valor al atributo
        this.base = base;
        this.altura = altura
    }

    area() {
        // Pisar la implementacion del padre
        return this.base * this.altura;
    }
    perimetro() {
        return 2 * this.base + 2 * this.altura
    }
}

class Cuadrado extends Rectangulo {
    constructor(x, y, lado) {
        super(x, y, lado, lado) // Constructor de Rectangulo
    }
}

let cuadrado_1 = new Cuadrado(10, 10, 40);
console.log(cuadrado_1)
console.log(cuadrado_1.area())

let rectangulo = new Rectangulo(10, 20, 20, 40);
console.log(rectangulo);
rectangulo.log();

class Circulo extends Figura2D {
    r;
    constructor(x, y, radio) {
        super(x, y);// Constructor de Figura2d
        this.r = radio;
    }

    area() {
        return Math.PI * this.r * this.r;
    }
}

class Triangulo extends Figura2D {
    constructor(x, y, base, altura) {
        super(x, y);// Constructor de Figura2d
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura / 2;
    }
}


class Cilindro {

    constructor(x, y, z, altura, radio) {
        this.base = new Circulo(x, y, radio);
        let perimetro = this.base.perimetro();
        this.cuerpo = new Rectangulo(y, z, altura, perimetro);

    }

    area() {
        return 2 * this.base.area() + this.cuerpo.area();
    }


}


// let figura2D = figura.area();




