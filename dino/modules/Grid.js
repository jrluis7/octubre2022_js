

export default class Grid {
    tablero = [];
    color = "red";
    constructor(x, y, element, color) {
        this.x = x;
        this.y = y;
        this.element = element;
        this.color = color ? color : "black";
        console.log(x, y);
        this.tablero = new Array(this.y);
        for (let i = 0; i < this.tablero.length; i++) {
            this.tablero[i] = new Array(this.x).fill("")
        }
        this.casillasDOM = new Array(this.y);
        for (let i = 0; i < this.casillasDOM.length; i++) {
            this.casillasDOM[i] = new Array(this.x)
        }
        this.setGridStyle();
        this.fillTablero();
    }

    fillTablero() {

        for (let f = 0; f < this.casillasDOM.length; f++) {
            for (let c = 0; c < this.x; c++) {
                let square = new Square(this, f, c);
                this.element.appendChild(square.nodo);
            }
        }
    }
    setGridStyle() {
        this.element.style.cssText = `
            grid-template-columns: repeat(${this.x}, 1em);
        `;
    }

    markSquare(color, x, y) {
        this.tablero[y][x] = color;
    }

    setColor(color) {
        this.color = color;
    }

    setSize(x, y) {
        debugger
        this.x = x;
        this.y = y;
        this.element.innerHTML = "";
        this.tablero = new Array(this.y);
        for (let i = 0; i < this.tablero.length; i++) {
            this.tablero[i] = new Array(this.x).fill("")
        }
        this.casillasDOM = new Array(this.y);
        for (let i = 0; i < this.casillasDOM.length; i++) {
            this.casillasDOM[i] = new Array(this.x)
        }
        this.setGridStyle();
        this.fillTablero();
    }


}

class Square {
    nodo;
    grid;
    x; y;
    constructor(grid, x, y) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        const click_ = () => {
            console.log('Ey, click!', this);
            console.log(this.seleccionado)
            let color = (!this.seleccionado ? this.grid.color : '');
            this.nodo.style.cssText = `background-color:${color}`;
            this.seleccionado = !this.seleccionado;
            this.grid.markSquare(this.grid.color, this.y, this.x);

        }
        this.seleccionado = false;
        let span = document.createElement('span')
        span.classList.add('square');

        span.addEventListener('click', click_);
        this.nodo = span;

    }
    get nodo() {
        return this.nodo;
    }



}