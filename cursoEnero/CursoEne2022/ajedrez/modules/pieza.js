'use strict'
import { BLANCAS, NEGRAS } from './fichas.js'
import { Exception } from './Exception.js';
class Posicion {
    letra;
    numero;
    constructor(letra, numero) {
        this.letra = letra;
        this.numero = numero;
    }

    letraToIndex() {
        switch (this.letra) {
            case 'A':
            case 'a':
                return 0;
                break;
            case 'B':
            case 'B':
                return 1;
                break;
            case 'c':
            case 'C':
                return 2;
                break;
            case 'D':
            case 'd':
                return 3;
                break;
            case 'E':
            case 'e':
                return 4;
                break;
            case 'F':
            case 'f':
                return 5;
                break;
            case 'G':
            case 'g':
                return 6;
                break;
            case 'H':
            case 'h':
                return 7;
        }


    }

    numeroToIndex() {
        return Number(this.numero) - 1


    }

    setPosicion(numeroFila, numeroColumna) {
        let letra
        switch (numeroColumna) {
            case 0:
                letra = 'A';
                break;
            case 1:
                letra = 'B';
                break;
            case 2:
                letra = 'c';
                break;
            case 3:
                letra = 'D';
                break;
            case 4:
                letra = 'E';
                break;
            case 5:
                letra = 'F';
                break;
            case 6:
                letra = 'G';
                break;
            case 7:
                letra = 'H';
        }


        this.letra = letra;
        this.numero = numeroFila + 1;

    }

    equalsToId(id) {
        let arr = id.split(/[c-]/);
        console.log(arr);
        let f = Number(arr[1]) - 1;
        let c = Number(arr[2]) - 1;
        if (c === this.letraToIndex() && f === this.numeroToIndex()) {
            return true

        } else {
            return false;
        }

    }

}
// abstract
let id = 0;
export class Pieza {
    id;
    equipo;// BLANCAS || NEGRAS;
    posicion;
    imagen;
    finalImagen;
    tablero;
    nodoImg;
    movimientosPosibles = [];
    constructor(letter, number, equipo, tablero) {
        this.posicion = new Posicion(letter, number);
        this.equipo = equipo;
        this.tablero = tablero;
        this.id = id;
        id++;
        if (this.equipo === BLANCAS) {
            this.finalImagen = "_w";
        } else {
            this.finalImagen = "_b";
        }
    }

    isCheck(rey) {

    }
    checkMovimientos() {

    }

    mueve() {

    }

    createImage(nombre) {
        this.imagen = "imgs/" + nombre + this.finalImagen + ".svg";
        this.nodoImg = document.createElement('img');
        this.nodoImg.src = this.imagen;
        // this.ponerFicha('A',1);



    }

    ponerFicha(letra, numero) {
        let num = numero - 1;
        let numLetra = this.convertirLetraAPosicion(letra);
        this.tablero.casillasDOM[num][numLetra].appendChild(this.nodoImg);
        this.tablero.casillas[num][numLetra] = this;
    }

    convertirLetraAPosicion(letra) {
        switch (letra) {
            case 'A':
            case 'a':
                return 0;
                break;
            case 'B':
            case 'B':
                return 1;
                break;
            case 'c':
            case 'C':
                return 2;
                break;
            case 'D':
            case 'd':
                return 3;
                break;
            case 'E':
            case 'e':
                return 4;
                break;
            case 'F':
            case 'f':
                return 5;
                break;
            case 'G':
            case 'g':
                return 6;
                break;
            case 'H':
            case 'h':
                return 7;
        }

    }
    casillaOcupada(f, c) {
        return this.tablero.casillas[f][c] ? true : false


    }

    piezaContraria(f, c) {
        return (this.tablero.casillas[f][c] &&
            (this.tablero.casillas[f][c].equipo !== this.equipo)) ? true : false


    }

}

export class Alfil extends Pieza {
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("alfil");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);
    }

    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        let f = this.posicion.numeroToIndex();
        let c = this.posicion.letraToIndex();

        if (this.checkMovimientoValido(f, c, f_rey, c_rey)) {
            try {
                this.checkPiezaEnLinea(f_rey, c_rey)
                return true;
            } catch (e) {
                console.log(e)
                if (e.data) {
                    return true;
                }
                return false;
            }
        }
        return false;
    }

    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if (this.checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua)) {
            this.checkPiezaEnLinea(f_nueva, c_nueva)
        } else {
            throw new Error("Movimiento inválido")
        }
    }

    checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) {
        let dist_f = Math.abs(f_nueva - f_antigua);
        let dist_c = Math.abs(c_nueva - c_antigua);

        if (dist_f !== dist_c) {
            return false;
        }
        return true;
    }

    /**
     * Checkea la diagonal del alfil en las direcciones que se pasen por parámetro, en función de si crece o no la posición de las filas o de las columnas
     * @param {string} signoFilas - Signo + o -
     * @param {string} signoColumnas Signo string + o -
     * @param {number} dis_abs - Distancia absoulta a medir 
     */
    checkDiagonal(signoFilas, signoColumnas, dis_abs) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        for (let i = 1; i <= dis_abs; i++) {
            if (this.casillaOcupada(operaSigno(f_antigua, signoFilas, i), operaSigno(c_antigua, signoColumnas, i))) {
                if (this.piezaContraria(operaSigno(f_antigua, signoFilas, i), operaSigno(c_antigua, signoColumnas, i)) && i === (dis_abs)) {
                    // Si es pieza contraria y la última de la línea
                    throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: operaSigno(f_antigua, signoFilas, i), c: operaSigno(c_antigua, signoColumnas, i) } }))
                }
                throw new Error("Movimiento inválido");
            }
        }
        function operaSigno(num, signo, i) {
            if (signo === "+") {
                return num + i;
            } else if (signo === "-") {
                return num - i;
            } else {
                throw new Error('Operación inválida')
            }
        }
    }

    checkPiezaEnLinea(f_nueva, c_nueva) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        let dist_f = f_nueva - f_antigua; // > 0  -> Arriba | < 0  -> Abajo 
        let dist_c = c_nueva - c_antigua; // > 0  -> Derecha | < 0  -> Izquierda
        let dis_abs = Math.abs(dist_f)
        let direccion = this.direccionMovimiento(dist_f, dist_c);
        if (direccion === "NW") {
            this.checkDiagonal('+', '+', dis_abs)

        } else if (direccion === "NO") {
            this.checkDiagonal('+', '-', dis_abs)

        } else if (direccion === "SW") {
            this.checkDiagonal('-', '+', dis_abs)

        } else if (direccion === "SO") {
            this.checkDiagonal('-', '-', dis_abs)
        }
    }




    /**
     * Devuelve la dirección cardinal del movimiento
     * @param {number} dist_f 
     * @param {number} dist_c 
     * @returns {string} - Direccion cardinal
     */
    direccionMovimiento(dist_f, dist_c) {
        if (dist_f > 0 && dist_c > 0) { // Arriba a la derecha
            return "NW"
        } else if (dist_f < 0 && dist_c > 0) { //Abajo a la derecha
            return "SW"
        } else if (dist_f > 0 && dist_c < 0) { // Arriba a la izquierda
            return "NO"
        } else if (dist_f < 0 && dist_c < 0) { // Abajo a la izquierda
            return "SO"
        }
    }
}

export class Torre extends Pieza {
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("torre");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);
    }

    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        let f = this.posicion.numeroToIndex();
        let c = this.posicion.letraToIndex();

        if ((c === c_rey || f === f_rey)) {
            try {
                this.checkPiezaEnLinea(f_rey, c_rey)
                return true;
            } catch (e) {
                if (e.data) {
                    return true;
                }
                return false;
            }

        }

        return false;
    }

    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if ((c_nueva === c_antigua || f_antigua === f_nueva)) {
            this.checkPiezaEnLinea(f_nueva, c_nueva)
        } else {
            throw new Error("Movimiento inválido")
        }
    }

    checkPiezaEnLinea(f_nueva, c_nueva) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        if (f_nueva - f_antigua != 0) {// Movimiento hacia arriba o abajo
            let f_limit = 0;
            let f_change = 0;
            if ((f_nueva > f_antigua)) {
                f_change = f_antigua;
                f_limit = f_nueva;
            } else {
                f_change = f_nueva;
                f_limit = f_antigua;
            }

            for (let i = f_change; i <= f_limit; i++) {
                if (this.casillaOcupada(i, c_antigua) && (f_antigua !== i)) {
                    if (f_nueva === i && this.piezaContraria(i, c_antigua)) {
                        throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: i, c: c_antigua } }))
                    }
                    throw ("Movimiento inválido")
                    break;
                }
            }
        } else if (c_nueva - c_antigua != 0) {// Movimiento hacia los lados
            let c_limit = 0;
            let c_change = 0;
            if ((c_nueva > c_antigua)) {
                c_change = c_antigua;
                c_limit = c_nueva;
            } else {
                c_change = c_nueva;
                c_limit = c_antigua;
            }

            for (let i = c_change; i <= c_limit; i++) {
                if (this.casillaOcupada(f_antigua, i) && (c_antigua !== i)) {
                    if (c_nueva === i && this.piezaContraria(f_antigua, i)) {
                        throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_antigua, c: i } }))
                    }
                    throw ("Movimiento inválido")
                    break;
                }
            }
        }
    }


    checkLine(f_nueva, c_nueva, f_antigua, c_antigua) {

        let c_interior = (c_nueva === c_antigua) ? c_nueva : ((c_antigua > c_nueva) ? c_nueva : c_antigua)

        for (let i = f_nueva; i < f_antigua; i++) {
            this.casillaOcupada[i][c_antigua]
        }
    }

}
export class Caballo extends Pieza {
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("caballo");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);

    }
    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        let f = this.posicion.numeroToIndex();
        let c = this.posicion.letraToIndex();

        if (this.checkMovimientoValido(f, c, f_rey, c_rey)) {
            return true
        }

        return false;
    }

    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if (this.checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua)) {

            if (this.casillaOcupada(f_nueva, c_nueva)) {
                if (this.piezaContraria(f_nueva, c_nueva)) {
                    throw new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_nueva, c: c_nueva } })
                } else {

                    throw new Error("Movimiento inválido")
                }
            }
        } else {
            throw new Error("Movimiento inválido")
        }
    }

    checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) {
        let dist_f = Math.abs(f_nueva - f_antigua)
        let dist_c = Math.abs(c_nueva - c_antigua)
        if (dist_f === 2 && dist_c === 1 || dist_f === 1 && dist_c === 2) {
            return true;
        }
        return false;
    }




}

export class Peon extends Pieza {
    isPositionInitial = true;
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("peon");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);

    }
    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        let f = this.posicion.numeroToIndex();
        let c = this.posicion.letraToIndex();
        if (this.equipo === BLANCAS) {
            if (f + 1 === f_rey) {
                if (c + 1 == c_rey) {
                    return true;
                } else if (c - 1 == c_rey) {
                    return true;
                }
            }
        } else if (this.equipo === NEGRAS) {
            if (f - 1 === f_rey) {
                if (c + 1 == c_rey) {
                    return true;
                } else if (c - 1 == c_rey) {
                    return true;
                }
            }
        }
        return false;
    }
    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if (this.equipo === BLANCAS) {

            if ((
                (
                    this.#distanciaApieza(f_nueva) > 0 &&
                    this.#distanciaApieza(f_nueva) < 2 &&
                    c_antigua === c_nueva
                ) ||
                (
                    this.#distanciaApieza(f_nueva) === 2 &&
                    c_antigua === c_nueva &&
                    this.isPositionInitial &&
                    !this.casillaOcupada(f_nueva, c_nueva) &&
                    !this.casillaOcupada(f_nueva - 1, c_nueva)
                )
            ) && !this.casillaOcupada(f_nueva, c_nueva)) {
                // Movimiento normal Peón avanza 1 o 2 posiciones
                // Comprobar si en alguna de las dos hay una ficha
                this.isPositionInitial = false;
            } else if (this.#distanciaApieza(f_nueva) === 1 &&
                (c_nueva - c_antigua === 1 || c_nueva - c_antigua === -1) &&
                (this.casillaOcupada(f_nueva, c_nueva) && this.piezaContraria(f_nueva, c_nueva))) {

                console.log("COMER PIEZA");

                throw new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_nueva, c: c_nueva } })

            }

            else {
                throw new Error({ text: "Movimiento inválido" })
            }

        } if (this.equipo === NEGRAS) {
            if ((
                (
                    this.#distanciaApieza(f_nueva) < 0 &&
                    this.#distanciaApieza(f_nueva) > -2 &&
                    c_antigua === c_nueva
                ) ||
                (
                    this.#distanciaApieza(f_nueva) === -2 &&
                    c_antigua === c_nueva &&
                    this.isPositionInitial &&
                    !this.casillaOcupada(f_nueva, c_nueva) &&
                    !this.casillaOcupada(f_nueva + 1, c_nueva)
                ))
                && !this.casillaOcupada(f_nueva, c_nueva)) {
                // Movimiento normal Peón avanza 1 o 2 posiciones

                // Comprobar si en alguna de las dos hay una ficha

                this.isPositionInitial = false;

            } else if (this.#distanciaApieza(f_nueva) === -1 &&
                (c_nueva - c_antigua === 1 || c_nueva - c_antigua === -1) &&
                (this.casillaOcupada(f_nueva, c_nueva) && this.piezaContraria(f_nueva, c_nueva))) {

                console.log("COMER PIEZA");

                throw new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_nueva, c: c_nueva } })
            }

            else {
                throw new Error("Movimiento inválido")
            }
        }

    }

    #distanciaApieza(f_nueva) {
        let f_antigua = this.posicion.numeroToIndex();
        return f_nueva - f_antigua;
    }


    checkMovimientos(tablero) {
        this
        debugger
    }

}

export class Rey extends Pieza {
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("rey");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);

    }

    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        let f = this.posicion.numeroToIndex();
        let c = this.posicion.letraToIndex();
        if (this.checkMovimientoValido(f_rey, c_rey, f, c)) {
            return true
        }

        return false;
    }

    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if (this.checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua)) {
            if (this.casillaOcupada(f_nueva, c_nueva)) {
                if (this.piezaContraria(f_nueva, c_nueva)) {
                    throw new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_nueva, c: c_nueva } })
                } else {
                    throw new Error("Movimiento inválido")
                }
            }
        } else {
            throw new Error("Movimiento inválido")
        }
    }
    checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) {
        let dist_f = Math.abs(f_nueva - f_antigua); // > 0  -> Arriba | < 0  -> Abajo 
        let dist_c = Math.abs(c_nueva - c_antigua);
        if (dist_f + dist_c === 1 || dist_f === 1 && dist_c === 1) {
            return true
        }
        return false;
    }
}

export class Reina extends Pieza {
    constructor(letter, number, equipo, tablero) {
        super(letter, number, equipo, tablero);
        this.createImage("reina");
        this.ponerFicha(this.posicion.letra, this.posicion.numero);

    }

    isCheck(rey) {
        let f_rey = rey.posicion.numeroToIndex();
        let c_rey = rey.posicion.letraToIndex();
        try {
            this.mueve(f_rey, c_rey);
            return false;
        } catch (e) {
            console.log(e)
            if (e.data) {
                return true
            }
        }

    }

    mueve(f_nueva, c_nueva) {
        // f = numero
        // c = letra
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();

        if (this.checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) === "DIAGONAL") {

            this.checkPiezaEnLineaDiagonal(f_nueva, c_nueva)
        } else if (this.checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) === "LINEA") {
            this.checkPiezaEnLinea(f_nueva, c_nueva)




        }
        else {
            throw new Error("Movimiento inválido")
        }
    }

    checkMovimientoValido(f_nueva, c_nueva, f_antigua, c_antigua) {
        let dist_f = Math.abs(f_nueva - f_antigua);
        let dist_c = Math.abs(c_nueva - c_antigua);

        if (dist_f === dist_c && (c_nueva !== c_antigua && f_antigua !== f_nueva)) { // Checkeo las diagonales
            return "DIAGONAL";
        } else if ((c_nueva === c_antigua || f_antigua === f_nueva)) {
            return "LINEA";
        }
        return ""
    }

    /**
     * Checkea la diagonal del alfil en las direcciones que se pasen por parámetro, en función de si crece o no la posición de las filas o de las columnas
     * @param {string} signoFilas - Signo + o -
     * @param {string} signoColumnas Signo string + o -
     * @param {number} dis_abs - Distancia absoulta a medir 
     */
    checkDiagonal(signoFilas, signoColumnas, dis_abs) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        for (let i = 1; i <= dis_abs; i++) {
            if (this.casillaOcupada(operaSigno(f_antigua, signoFilas, i), operaSigno(c_antigua, signoColumnas, i))) {
                if (this.piezaContraria(operaSigno(f_antigua, signoFilas, i), operaSigno(c_antigua, signoColumnas, i)) && i === (dis_abs)) {
                    // Si es pieza contraria y la última de la línea
                    throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: operaSigno(f_antigua, signoFilas, i), c: operaSigno(c_antigua, signoColumnas, i) } }))
                }
                throw new Error("Movimiento inválido");
            }
        }
        function operaSigno(num, signo, i) {
            if (signo === "+") {
                return num + i;
            } else if (signo === "-") {
                return num - i;
            } else {
                throw new Error('Operación inválida')
            }
        }
    }

    checkPiezaEnLineaDiagonal(f_nueva, c_nueva) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        let dist_f = f_nueva - f_antigua; // > 0  -> Arriba | < 0  -> Abajo 
        let dist_c = c_nueva - c_antigua; // > 0  -> Derecha | < 0  -> Izquierda
        let dis_abs = Math.abs(dist_f)
        let direccion = this.direccionMovimiento(dist_f, dist_c);
        if (direccion === "NW") {
            this.checkDiagonal('+', '+', dis_abs)

        } else if (direccion === "NO") {
            this.checkDiagonal('+', '-', dis_abs)

        } else if (direccion === "SW") {
            this.checkDiagonal('-', '+', dis_abs)

        } else if (direccion === "SO") {
            this.checkDiagonal('-', '-', dis_abs)
        }
    }




    /**
     * Devuelve la dirección cardinal del movimiento
     * @param {number} dist_f 
     * @param {number} dist_c 
     * @returns {string} - Direccion cardinal
     */
    direccionMovimiento(dist_f, dist_c) {
        if (dist_f > 0 && dist_c > 0) { // Arriba a la derecha
            return "NW"
        } else if (dist_f < 0 && dist_c > 0) { //Abajo a la derecha
            return "SW"
        } else if (dist_f > 0 && dist_c < 0) { // Arriba a la izquierda
            return "NO"
        } else if (dist_f < 0 && dist_c < 0) { // Abajo a la izquierda
            return "SO"
        }
    }


    checkPiezaEnLinea(f_nueva, c_nueva) {
        let c_antigua = this.posicion.letraToIndex();
        let f_antigua = this.posicion.numeroToIndex();
        if (f_nueva - f_antigua != 0) {// Movimiento hacia arriba o abajo
            let f_limit = 0;
            let f_change = 0;
            if ((f_nueva > f_antigua)) {
                f_change = f_antigua;
                f_limit = f_nueva;
            } else {
                f_change = f_nueva;
                f_limit = f_antigua;
            }

            for (let i = f_change; i <= f_limit; i++) {
                if (this.casillaOcupada(i, c_antigua) && (f_antigua !== i)) {
                    if (f_nueva === i && this.piezaContraria(i, c_antigua)) {
                        throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: i, c: c_antigua } }))
                    }
                    throw ("Movimiento inválido")
                    break;
                }
            }
        } else if (c_nueva - c_antigua != 0) {// Movimiento hacia los lados
            let c_limit = 0;
            let c_change = 0;
            if ((c_nueva > c_antigua)) {
                c_change = c_antigua;
                c_limit = c_nueva;
            } else {
                c_change = c_nueva;
                c_limit = c_antigua;
            }

            for (let i = c_change; i <= c_limit; i++) {
                if (this.casillaOcupada(f_antigua, i) && (c_antigua !== i)) {
                    if (c_nueva === i && this.piezaContraria(f_antigua, i)) {
                        throw (new Exception({ text: "Comer Pieza", posicionFichaComida: { f: f_antigua, c: i } }))
                    }
                    throw ("Movimiento inválido")
                    break;
                }
            }
        }
    }

}




