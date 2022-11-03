import Square from "./Square.js";
import History from "./History.js";

import { cloneTablero } from "../utils/utils.js"
import { Palette } from "./Palette.js";

export default class Grid {
    tablero = [];
    color = "red";
    tool = "";
    history = []
    palette;
    sizeSvg = 10;
    btnEraser;
    btnPaint;

    constructor({ x, y, element, color }) {
        this.size_num = 1;
        this.size = "em";
        this.x = x;
        this.y = y;
        this.element = element;
        this.color = color ? color : "black";
        this.history = new History();
        this.isPainting = false;

        this.init_events();
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

        const t = cloneTablero(this.tablero);
        this.history.push(t)
        // debugger
        this.palette = new Palette({ grid: this, id: "lastColors", id_input_color: 'color', tablero: this.tablero });

        this.setSize(x, y)

        window.addEventListener('colorSeleccionado', (e) => {
            this.color = e.detail.color
        })
        this.btnEraser = document.querySelector('#btnEraser');
        this.btnPaint = document.querySelector('#btnPaint');

    }

    static newTablero(tablero, element) {

        let h = tablero.length;

        let w = tablero[0].length;
        let g = new Grid({ x: w, y: h, element });

        g.tablero = tablero;

        for (let f = 0; f < h; f++) {
            for (let c = 0; c < w; c++) {

                g.casillasDOM[f][c].nodo.style.backgroundColor = tablero[f][c]
                // debugger
            }
        }
        const t = cloneTablero(g.tablero);
        g.history.push(t)
        debugger
        g.palette.getColors(t);

        return g;

    }

    init_events() {
        const mouseDown = (ev) => {
            if (ev.which === 1) this.isPainting = true;
        }
        const mouseUp = () => {
            this.isPainting = false;
            const t = cloneTablero(this.tablero);
            this.history.push(t);
            this.exportToSVG();
            this.exportToCss();
        }

        const key_controls = (ev) => {
            if (ev.code === "KeyB") {
                this.tool = 'ERASER';
            }
            if (ev.code === "KeyZ" && ev.ctrlKey && !ev.shiftKey) {
                this.popHistory();
                this.exportToSVG();
                this.exportToCss();
            }
            if (ev.code === "KeyZ" && ev.ctrlKey && ev.shiftKey) {
                this.undoPopHistory();
                this.exportToSVG();
                this.exportToCss();
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

    }

    paintTablero(tablero) {
        let h = tablero.length;

        let w = tablero[0].length;
        this.tablero = tablero;
        for (let f = 0; f < h; f++) {
            for (let c = 0; c < w; c++) {

                this.casillasDOM[f][c].nodo.style.backgroundColor = tablero[f][c]
                // debugger
            }
        }
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
        if (this.tablero[y][x] === color) {
            return
        }

        this.tablero[y][x] = color;
        // Copia el array
        this.history.data;
        // const t = cloneTablero( this.tablero );
        console.log('Mismo tablero', t === this.history.data)
        // this.history.push(t);
    }

    setColor(color) {
        this.color = color;
    }

    popHistory() {
        try {
            const tablero = this.history.back();
            // this.element.innerHTML = "";
            this.paintTablero(tablero);

        } catch (e) {

        }
    }

    undoPopHistory() {
        try {
            const tablero = this.history.undo_back();
            // this.element.innerHTML = "";
            // debugger
            this.paintTablero(tablero);

        } catch (e) {

        }
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
        const svgElement = document.getElementById('svgOne');
        svgElement.setAttribute("viewBox", `0,0,${(this.x * this.sizeSvg)} ,${(this.y * this.sizeSvg)}`)
    }

    exportFullCSS() {
        let str = '';
        for (let y = 0; y < this.y; y++) {
            for (let x = 0; x < this.x; x++) {

                if (this.tablero[y][x] !== "") {
                    str += `${(x + 1) * this.size_num}${this.size} ${(y + 1) * this.size_num}${this.size} ${this.tablero[y][x]},`
                }


            }
        }

        str = str.slice(0, -1);
        return str;
    }

    exportToCss() {

        let str = this.exportFullCSS();
        this.paintCssCode(str);

        let div = document.createElement('div');
        div.style.cssText = `
            height:${this.size_num}${this.size};
            width:${this.size_num}${this.size};
            `;
        div.style.boxShadow = str;
        // debugger
        return div
    }
    paintCssCode(str) {

        document.querySelector('#code_css').innerHTML = `
        height: 1em;
        width: 1em;
        box-shadow: ${str}`
    }

    exportToSVG() {
        const svgns = "http://www.w3.org/2000/svg"
        let g = document.createElementNS(svgns, 'g');
        for (let y = 0; y < this.y; y++) {
            for (let x = 0; x < this.x; x++) {
                if (this.tablero[y][x] !== "") {
                    let rect = document.createElementNS(svgns, 'rect');
                    rect.setAttribute('x', (x) * this.sizeSvg);
                    rect.setAttribute('y', (y) * this.sizeSvg);
                    rect.setAttribute('shape-rendering', 'crispedges');
                    rect.setAttribute('height', this.sizeSvg);
                    rect.setAttribute('width', this.sizeSvg);
                    rect.setAttribute('fill', this.tablero[y][x]);
                    g.appendChild(rect);
                }
            }
        }
        document.getElementById('svgOne').innerHTML = ""
        document.getElementById('svgOne').appendChild(g);

    }

}





// [
//     [ "X","X","X" ]
//     [ "X","X","X" ]
//     [ "X","X","X" ]
// ]
