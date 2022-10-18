import Square from "./Square.js";
import History from "./History.js";

export default class Grid {
    tablero = [];
    color = "red";
    tool = "";
    history = []
    constructor({ x, y, element, color }) {
        this.size_num = 1;
        this.size = "em";
        this.x = x;
        this.y = y;
        this.element = element;
        this.color = color ? color : "black";
        this.history = new History();
        this.isPainting = false;

        const mouseDown = () => {
            console.log('Ey, click!', this);
            console.log(this.seleccionado)
            this.isPainting = true;
        }
        const mouseUp = () => {
            this.isPainting = false;
        }

        const key_controls = (ev) => {
            if (ev.code === "KeyB") {
                this.tool = 'ERASER';
            }
            console.log(ev)
            if (ev.code === "KeyZ" && ev.ctrlKey) {
                this.popHistory();
            }
        }
        const key_controls_up = (ev) => {
            if (ev.code === "KeyB") {
                this.tool = '';
            }
        }

        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp)
        window.addEventListener('keydown', key_controls)
        window.addEventListener('keyup', key_controls_up)

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
        // this.history.push([...this.tablero])
    }

    static newTablero(tablero, element) {

        let h = tablero.length;
        debugger
        let w = tablero[0].length;
        let g = new Grid({ x: w, y: h, element });

        g.tablero = tablero;
        debugger
        for (let f = 0; f < h; f++) {
            for (let c = 0; c < w; c++) {

                g.casillasDOM[f][c].nodo.style.backgroundColor = tablero[f][c]
                // debugger
            }
        }
        return g;

    }

    fillTablero() {

        for (let f = 0; f < this.casillasDOM.length; f++) {
            for (let c = 0; c < this.x; c++) {
                let square = new Square(this, f, c);
                this.element.appendChild(square.nodo);
                this.casillasDOM[f][c] = square;
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
        // Copia el array
        const t = this.tablero.map( e=>{
            return e.map( i=>i );
        } );
        debugger
        this.history.push(t);
    }

    setColor(color) {
        this.color = color;
    }

    popHistory() {
        const tablero = this.history.pop();
        this.element.innerHTML = "";
        this.tablero = Grid.newTablero(tablero, this.element);
    }

    switchEraser() {
        this.tool = 'ERASER';
    }
    switchPaint() {
        this.tool = '';
    }

    setSize(x, y) {
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

    exportToCss() {
        let str = '';
        for (let y = 0; y < this.y; y++) {
            for (let x = 0; x < this.x; x++) {

                if (this.tablero[y][x] !== "") {
                    str += `${(x + 1) * this.size_num}${this.size} ${(y + 1) * this.size_num}${this.size} ${this.tablero[y][x]},`
                }


            }
        }

        str = str.slice(0, -1);

        let div = document.createElement('div');
        div.style.cssText = `
            height:${this.size_num}${this.size};
            width:${this.size_num}${this.size};
            `;
        div.style.boxShadow = str;
        debugger
        return div
    }

    exportToSVG() {
        const svgns = "http://www.w3.org/2000/svg"
        let g = document.createElementNS(svgns, 'g');
        let size = 10;
        for (let y = 0; y < this.y; y++) {
            for (let x = 0; x < this.x; x++) {
                if (this.tablero[y][x] !== "") {
                    let rect = document.createElementNS(svgns, 'rect');
                    rect.setAttribute('x', (x + 1) * size);
                    rect.setAttribute('y', (y + 1) * size);
                    rect.setAttribute('shape-rendering', 'crispedges');
                    rect.setAttribute('height', size);
                    rect.setAttribute('width', size);
                    rect.setAttribute('fill', this.tablero[y][x]);
                    g.appendChild(rect);
                }
            }
        }
        document.getElementById('svgOne').appendChild(g);

    }

}

