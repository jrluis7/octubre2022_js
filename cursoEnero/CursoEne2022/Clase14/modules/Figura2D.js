import { Posicion } from './Posicion.js';

class Figura2D{
    color;
    forma;// Figura NO PUEDE definir la forma
    posicion;
    constructor( x, y ){
        this.posicion = new Posicion( x,y )
    }

    area(){
        // Método que no puedo implementar
    }
    perimetro(){

    }
}


class Rectangulo extends Figura2D{
    ancho;alto;
    constructor(x,y,ancho,alto){  
        super( x, y );
        this.ancho = ancho;
        this.alto = alto;
    }

    area(){
        return this.ancho * this.alto;
    }

}


export class Circulo extends Figura2D{
    radio;
    /**
     * asdsadadda
     * @param {*} x 
     * @param {*} y 
     * @param {*} radio 
     */
    constructor( x,y, radio ){
        super( x,y );
        this.radio = radio;
    }

    area(){
        return this.radio * this.radio * Math.PI;
    }

    perimetro(){
        return 2 * this.radio * Math.PI;
    }
}

