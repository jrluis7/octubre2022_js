import { Alfil, Caballo, Peon, Reina, Rey, Torre } from './pieza.js'
import { BLANCAS, NEGRAS } from './fichas.js'


export class Jugador {
    equipo;
    fichas = [];
    piezaSeleccionada;
    tablero;
    constructor(equipo, tablero) {
        this.equipo = equipo;
        this.tablero = tablero;
    }

    crearPiezas() {
        if (this.equipo === BLANCAS) {
            this.fichas.push(new Peon("A", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("B", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("C", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("D", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("E", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("F", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("G", 2, BLANCAS, this.tablero))
            this.fichas.push(new Peon("H", 2, BLANCAS, this.tablero))
            this.fichas.push(new Torre("A", 1, BLANCAS, this.tablero))
            this.fichas.push(new Torre("H", 1, BLANCAS, this.tablero))
            this.fichas.push(new Caballo("B", 1, BLANCAS, this.tablero))
            this.fichas.push(new Caballo("G", 1, BLANCAS, this.tablero))
            this.fichas.push(new Alfil("C", 1, BLANCAS, this.tablero))
            this.fichas.push(new Alfil("F", 1, BLANCAS, this.tablero))
            this.fichas.push(new Rey("E", 1, BLANCAS, this.tablero))
            this.fichas.push(new Reina("D", 1, BLANCAS, this.tablero))



        } else if (this.equipo === NEGRAS) {
            this.fichas.push(new Peon("A", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("B", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("C", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("D", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("E", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("F", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("G", 7, NEGRAS, this.tablero))
            this.fichas.push(new Peon("H", 7, NEGRAS, this.tablero))
            this.fichas.push(new Torre("A", 8, NEGRAS, this.tablero))
            this.fichas.push(new Torre("H", 8, NEGRAS, this.tablero))
            this.fichas.push(new Caballo("B", 8, NEGRAS, this.tablero))
            this.fichas.push(new Caballo("G", 8, NEGRAS, this.tablero))
            this.fichas.push(new Alfil("C", 8, NEGRAS, this.tablero))
            this.fichas.push(new Alfil("F", 8, NEGRAS, this.tablero))
            this.fichas.push(new Rey("E", 8, NEGRAS, this.tablero))
            this.fichas.push(new Reina("D", 8, NEGRAS, this.tablero))

        }
    }

    muevePieza(pieza, e, isCheck) {

        console.log(e);
        let idCasilla = e.dataTransfer.getData('id-casilla');
        let nodoImg = document.querySelector("#" + idCasilla + " img");
        let idCasillaFinal = e.target.closest('.casilla').id
        let isSame = pieza.posicion.equalsToId(idCasillaFinal);
        let nodoCasilla = e.target.closest('.casilla');
        if (isSame) {
            throw new Error("Misma casilla")
        }
        try {

            let idNuevo = e.target.closest('.casilla').id
            this.tablero.muevePieza(pieza, idNuevo, isCheck);
            nodoCasilla.appendChild(nodoImg);


            // E aquí cuando come una ficha es una imagen que ha sido borrada justo antes, por lo que no existe

        } catch (exception) {

            if (exception.data) { // Ficha comida
                console.log("Dentro de jugador")
                console.log(exception)
                console.log(exception.data)
                console.log(exception.text)
                console.log(nodoCasilla)
                console.log(nodoImg)
                // .remove();
                let nodoComidas = document.querySelector('#comidas_blancas');
                nodoComidas.appendChild(nodoCasilla.querySelector('img'))
                nodoCasilla.appendChild(nodoImg);
                this
                // MIRAR este punto me falta cambiar la posición del PEON negro por el blanco cuando le come, si no, no lo puedo coger.

            }
            throw (exception);
        }

        // si se come ficha lanzar una excepcion


    }

    checkMovimientos(juego) {
        console.log(this);
        this.fichas.forEach(cadaPieza => cadaPieza.checkMovimientos(juego));
    }

    borrarPieza(id) {
        this.fichas = this.fichas.filter(cadaPieza.id !== id);
    }

}