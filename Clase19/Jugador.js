
const step = 10;

export class Posicion {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class ConfiguracionTeclado {
    constructor(izquierda, derecha, arriba, abajo) {
        this.izquierda = izquierda;
        this.derecha = derecha;
        this.arriba = arriba;
        this.abajo = abajo;
    }
}


export class Jugador {
    color;
    nodoHtml;
    posicion;
    configuracion;
    width;
    height;
    constructor(color, id_tablero, posicion, configuracion) {
        this.posicion = posicion;
        this.creaJugador(color, id_tablero, posicion.x, posicion.y, configuracion);
        this.configuracion = configuracion
    }

    creaJugador(color, id_tablero, x, y) {
        let div = document.createElement('div');
        div.classList.add('jugador');
        div.style.backgroundColor = color;
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        this.nodoHtml = div;
        let nodoTablero = document.querySelector("#" + id_tablero);
        nodoTablero.append(div);
        window.addEventListener('keydown', (evento) => {
            console.log(evento)

            switch (evento.code) {
                case this.configuracion.derecha:
                    this.mueveDerecha();
                    break;
                case this.configuracion.izquierda:
                    this.mueveIzquierda();
                    break;
                case this.configuracion.abajo:
                    this.mueveAbajo();
                    break;
                case this.configuracion.arriba:
                    this.mueveArriba();
                    break;
            }

        });
    }

    mueveDerecha() {
        const left = this.posicion.x + step;
        this.posicion.set(left, this.posicion.y);
        this.nodoHtml.style.left = left + "px"
    }
    mueveIzquierda() {
        const left = this.posicion.x - step;
        this.posicion.set(left, this.posicion.y);
        this.nodoHtml.style.left = left + "px"
    }
    mueveArriba() {
        const top = this.posicion.y - step;
        this.posicion.set(this.posicion.x, top);
        this.nodoHtml.style.top = top + "px"
    }
    mueveAbajo() {
        const top = this.posicion.y + step;
        this.posicion.set(this.posicion.x, top);
        this.nodoHtml.style.top = top + "px"
    }
}

