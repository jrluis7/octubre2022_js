


// 


class Persona {
    #nombre;// PRIVADOS
    #apellidos;
    nombreCompleto;
    constructor( nombre, apellidos){
        this.#nombre = nombre;
        this.#apellidos = apellidos;

        this.nombreCompleto = nombre + " " + apellidos ;//`${nombre} ${apellidos}`
    }

    /**
     * Esto es un setter de nombre
     * @param {any} nuevoNombre
     */
    set nombre( nuevoNombre ){
        this.#nombre = nuevoNombre;
        this.nombreCompleto = `${nuevoNombre} ${this.#apellidos}`
    }

    get nombre(){
        this.#nombre;
    }
}


let persona_1 = new Persona( 'Juan', 'Pérez' );

console.log( persona_1 );


// console.log(persona_1.#nombre);
// persona_1.#nombre = "Nuevo Nombre";
persona_1.nombre = "Pepe";

console.log( persona_1.nombre );




class Posicion{
    x;y;
    constructor( x, y ){
        this.x = x;
        this.y = y;
    }

}
// Clase Padre o SUPERCLASE

class Cilindro {
    base; // Circulo
    altura;
    constructor( x,y, radio, altura ){
        this.base = new Circulo( x, y , radio )
        this.altura = altura;
    }

    area(){
        return 2 * this.base.area() + this.altura * this.base.perimetro() ;
    }

}





let hoy = new Date(); // Clase instanciada ->

console.log( hoy.getFullYear() );
// console.log( hoy.now() );

console.log ( Date.now() );

console.log( Math.PI ); // CLASE ESTATICA

console.log( Math.sqrt( 19 ) );



class API{
    url_base = "trazos.net/"

    static get( url ){
        console.log( 'Hola' )
        console.log( url_base+ url )

    }

}





API.get( 'formacion' );
