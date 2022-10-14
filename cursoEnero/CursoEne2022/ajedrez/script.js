'use strict'
import { BLANCAS, NEGRAS } from './modules/fichas.js'
import { Jugador } from './modules/Jugador.js'
import { Rey } from './modules/pieza.js';

let d = document;

class Tablero {
    casillasDOM = [];
    casillas = [];
    constructor(x) {
        this.x = x;
        this.casillas = new Array(this.x);

        for (let i = 0; i < this.casillas.length; i++) {
            this.casillas[i] = new Array(this.x)
        }
        this.casillasDOM = new Array(this.x);
        for (let i = 0; i < this.casillasDOM.length; i++) {
            this.casillasDOM[i] = new Array(this.x)
        }
        this.creaTablero();
    }

    getRey(equipo) {
        let rey_encontrado;
        this.casillas.forEach(cadaFila => {
            const rey = cadaFila.filter(cadaPieza => {
                // debugger
                return cadaPieza && cadaPieza.equipo === equipo && cadaPieza instanceof Rey
            })
            if (rey.length !== 0) {
                rey_encontrado = rey[0];
                return;
            }
        })
        return rey_encontrado;

    }

    creaTablero() {
        let element = d.querySelector('#tablero');
        let nodoCasillas = d.createElement('div');
        nodoCasillas.id = "casillas";
        element.appendChild(nodoCasillas);


        for (let f = 0; f < this.casillasDOM.length; f++) {
            for (let c = 0; c < this.x; c++) {
                let nodoCasilla = this.creaCasilla(((c + f) % 2 == 0) ? "negra" : "")
                this.casillasDOM[f][c] = nodoCasilla;
                nodoCasillas.prepend(nodoCasilla);
                nodoCasilla.alt = "c" + (f + 1) + '-' + (c + 1)
                nodoCasilla.id = "c" + (f + 1) + '-' + (c + 1)
                // nodoCasilla.style.color  = 'red';
            }
        }
    }

    creaCasilla(clase) {
        let nodoCadaCasilla = d.createElement('span');
        nodoCadaCasilla.classList.add('casilla');
        if (clase) nodoCadaCasilla.classList.add(clase);
        return nodoCadaCasilla;
    }

    buscaPieza(identificador) {

        console.log("identificador")
        console.log(identificador);

        let arr = identificador.split(/[c-]/);
        console.log(arr);
        let f = Number(arr[1]) - 1;
        let c = Number(arr[2]) - 1;
        this.casillas[f][c]
        return this.casillas[f][c];

    }

    idToPosition(identificador) {
        let arr = identificador.split(/[c-]/);
        console.log(arr);

        let f = Number(arr[1]) - 1;
        let c = Number(arr[2]) - 1;

        return { f, c }
    }

    muevePieza(pieza, idCasilla, isCheck) {
        console.log(pieza);
        console.log(this);
        console.log(idCasilla)
        let { f, c } = this.idToPosition(idCasilla);
        let c_antigua = pieza.posicion.letraToIndex();
        let f_antigua = pieza.posicion.numeroToIndex();
        try {
            pieza.mueve(f, c);
            let fichaAntigua = this.casillas[f_antigua][c_antigua];
            this.casillas[f_antigua][c_antigua] = undefined;
            pieza.posicion.setPosicion(f, c);
            if (this.casillas[f][c]) {
                this.casillasDOM[f][c].querySelector('img').remove();
            }
            this.casillas[f][c] = pieza

            if (isCheck().length !== 0) {
                debugger
                // Devolver a las piezas a su posición original
                pieza.posicion.setPosicion(f_antigua, c_antigua);

                this.casillas[f][c] = undefined;
                this.casillas[f_antigua][c_antigua] = fichaAntigua;
                throw ('Movimiento inválido por jaque')

            }
            // let rey_opuesto = this.getRey( pieza.equipo==="BLANCAS"?"NEGRAS":"BLANCAS" );
            // let jaque = pieza.isCheck( rey_opuesto );
            // console.log( "JAQUE",jaque )
            // if( jaque ){
            //     alert("JAQUE")
            // }
        } catch (e) {
            console.log(e)
            if (e.data) { // Ficha comida
                console.log(e.data)
                // this
                // debugger
                e.data.id = this.casillas[e.data.posicionFichaComida.f][e.data.posicionFichaComida.c]['id']

                let ficha_comida = this.casillas[e.data.posicionFichaComida.f][e.data.posicionFichaComida.c]
                this.casillas[e.data.posicionFichaComida.f][e.data.posicionFichaComida.c] = pieza
                pieza.posicion.setPosicion(f, c);

                // throw( e )
                // let rey_opuesto = this.getRey( pieza.equipo==="BLANCAS"?"NEGRAS":"BLANCAS" );

                // let jaque  = pieza.isCheck(rey_opuesto)
                // if( jaque ){
                //     alert("JAQUE")
                // }
                let fichaQueCome = this.casillas[f_antigua][c_antigua];
                this.casillas[f_antigua][c_antigua] = undefined;



                if (isCheck(e.data.id).length !== 0) {
                    debugger
                    this.casillas[e.data.posicionFichaComida.f][e.data.posicionFichaComida.c] = ficha_comida;
                    this.casillas[f_antigua][c_antigua] = fichaQueCome;
                    pieza.posicion.setPosicion(f_antigua, c_antigua);
                    // Devolver a las piezas a su posición original
                    throw ('Movimiento inválido por jaque')

                }


            }


            // this.casillas[]
            throw (e)
        }

    }


    // moverPieza( letra, numero ){

    // }


}


export class Juego {
    tablero;
    player1;
    player2;
    jugadorActivo;
    piezaSeleccionada = null;
    jaque = false;
    constructor() {
        this.tablero = new Tablero(8, 8);
        this.player1 = new Jugador(BLANCAS, this.tablero);
        this.player2 = new Jugador(NEGRAS, this.tablero);

        this.jugadorActivo = this.player1;
        this.iniciaEquipos();
        this.eventos();
        this.pintaTurno();

    }

    start() { }

    cambiaJugadorActivo() {

        this.isCheck(this.jugadorActivo.equipo);

        if (this.jugadorActivo.equipo === BLANCAS) {
            this.jugadorActivo = this.player2;
        } else {
            this.jugadorActivo = this.player1;

        }
        console.log(">>>CAMBIO JUGADOR")
        console.log(this.jugadorActivo)
        debugger
        this.jugadorActivo.checkMovimientos(this);


        this.pintaTurno();
    }

    pintaTurno() {
        turno.innerHTML = this.jugadorActivo.equipo === BLANCAS ? BLANCAS : NEGRAS
    }

    iniciaEquipos() {
        this.player1.crearPiezas();
        this.player2.crearPiezas();
    }

    creaPieza(letra, numero, equipo) {
        return new Peon(letra, numero, equipo, this.tablero);
    }

    isCheck(equipo = "AMBOS",) {
        let resultado = [];
        if (equipo === "NEGRAS" || equipo === "AMBOS") {
            let reyNegro = this.tablero.getRey('NEGRAS');
            this.player1.fichas.forEach((cadaPiezaBlanca) => {
                if (cadaPiezaBlanca.isCheck(reyNegro)) {
                    resultado.push(cadaPiezaBlanca);
                }
            })
        }
        if (equipo === "BLANCAS" || equipo === "AMBOS") {
            let reyBlanco = this.tablero.getRey('BLANCAS');
            this.player2.fichas.forEach((cadaPiezaNegra) => {
                if (cadaPiezaNegra.isCheck(reyBlanco)) {
                    resultado.push(cadaPiezaNegra);

                }
            })
        }
        return resultado;

    };




    eventos() {
        let nodoCasillas = d.querySelector('#casillas')
        nodoCasillas.addEventListener('dragstart', (e) => {
            // console.log( e );
            // console.log( e.target.closest( '.casilla' ) );

            e.dataTransfer.setData("id-casilla", e.target.closest('.casilla').id);

            this.piezaSeleccionada = this.tablero.buscaPieza(e.target.closest('.casilla').id);
            console.log(this.piezaSeleccionada)
            // console.log(this.jugadorActivo)
            if (this.piezaSeleccionada && this.piezaSeleccionada.equipo === this.jugadorActivo.equipo) {
                console.log(this.piezaSeleccionada)
                // this.jugadorActivo.checkMovimientos(e, this.piezaSeleccionada);
                // console.log(this.jugadorActivo)
                // if (this.jugadorActivo.equipo === BLANCAS) {
                //     this.player2.checkMovimientos();
                // } else {
                //     this.player2.checkMovimientos();
                // }
            } else {
                console.log(this.piezaSeleccionada)
                e.preventDefault(this.jugadorActivo.equipo);
            }
        });

        nodoCasillas.addEventListener('dragover', (e) => {

            e.preventDefault();

        });

        nodoCasillas.addEventListener('drop', (e) => {
            // console.log( e );
            // console.log( e.target.closest( '.casilla' ) );
            // console.log( e.dataTransfer.getData( 'id-casilla' ) );
            e.preventDefault();
            try {
                this.jugadorActivo.muevePieza(this.piezaSeleccionada, e, (idPiezaComida) => {

                    if (idPiezaComida) {
                        this.eliminarPiezaDeJugador(idPiezaComida)
                    }

                    return this.isCheck(this.jugadorActivo.equipo)
                });
                this.cambiaJugadorActivo();

            } catch (e) {
                console.log(e)
                if (e.data) {
                    // let jugador = this.jugadorActivo.equipo === "BLANCAS" ? this.player2 : this.player1;
                    this.eliminarPiezaDeJugador(e.data.id);
                    // Borrar la pieza del array de jugador
                    // Conseguir el id de la pieza comida, y pasarlo en la excepcion
                    this.cambiaJugadorActivo();

                }
                debugger


            }

            this.jaque = false;

            let check = this.isCheck();
            if (check.length != 0) {
                console.log(this)
                alert('Jaque ');
                this.jaque = true;
            } else {
            };

        })
    }

    eliminarPiezaDeJugador(id) {
        let jugador = this.jugadorActivo.equipo === "BLANCAS" ? this.player2 : this.player1;

        jugador.fichas = jugador.fichas.filter(cadaFicha => cadaFicha.id != id)
    }



}




