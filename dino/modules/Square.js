import { isMouseDown } from './../utils/utils.js'

export default class Square {
    nodo;
    grid;
    x; y;
    constructor(grid, x, y) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        const click_ = () => {

            let color = (!this.seleccionado ? this.grid.color : '');
            this.paint(color, ev);


        }
        const mouse_move = (ev) => {
            console.log(ev)
            this.paint(this.grid.color, ev);

        }
        this.seleccionado = false;
        let span = document.createElement('span')
        span.classList.add('square');

        span.addEventListener('mousedown', mouse_move);
        span.addEventListener('mouseenter', mouse_move);
        this.nodo = span;

    }
    get nodo() {
        return this.nodo;
    }


    paint(color, ev) {
        console.log(ev)
        console.log("->>", this)
        if (this.grid.isPainting || isMouseDown(ev)) {
            if (this.grid.tool === 'ERASER') {

                this.nodo.style.cssText = `background-color:white`;
                this.grid.markSquare('', this.y, this.x);

            } else {
                this.nodo.style.cssText = `background-color:${color}`;
                this.seleccionado = !this.seleccionado;
                this.grid.markSquare(color, this.y, this.x);
            }

        }

    }


}