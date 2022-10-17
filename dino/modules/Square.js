export default class Square {
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
            this.paint(color);


        }
        const mouse_move = () => {
            console.log('Ey, click!', this);
            console.log(this.seleccionado)
            this.paint(this.grid.color);
            console.log(this.grid)
        }
        this.seleccionado = false;
        let span = document.createElement('span')
        span.classList.add('square');

        span.addEventListener('click', click_);
        span.addEventListener('mousemove', mouse_move);
        this.nodo = span;

    }
    get nodo() {
        return this.nodo;
    }


    paint(color) {
        if (this.grid.isPainting) {
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