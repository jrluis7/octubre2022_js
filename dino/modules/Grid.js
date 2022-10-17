

export default class Grid {
    tablero = [];
    color = "red";
    constructor(x, y, element, color) {
        this.size_num = 1;
        this.size = "em";
        this.x = x;
        this.y = y;
        this.element = element;
        this.color = color ? color : "black";

        this.isPainting = false;

        const mouseDown = () => {
            console.log('Ey, click!', this);
            console.log(this.seleccionado)
            this.isPainting = true;
        }
        const mouseUp = () => {
            this.isPainting = false;
        }

        window.addEventListener( 'mousedown' , mouseDown)
        window.addEventListener( 'mouseup' , mouseUp )


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

    exportToCss(){
        let str = '';
        for( let y = 0; y < this.y; y++ ){
            for( let x = 0; x<this.x; x++){

                if( this.tablero[y][x]!== "" ){
                    str += `${(x+1)*this.size_num}${this.size} ${(y+1)*this.size_num}${this.size} ${this.tablero[y][x]},`
                }


            }
        }   

        str=str.slice(0, -1);

        let div = document.createElement('div');
        div.style.cssText = `
            height:${this.size_num}${this.size};
            width:${this.size_num}${this.size};
            `;
           div.style.boxShadow = str;
        debugger
        return div
    }

    exportToSVG(){
        const svgns = "http://www.w3.org/2000/svg"
        let g = document.createElementNS(svgns, 'g');
        let size = 5;
        for( let y = 0; y < this.y; y++ ){
            for( let x = 0; x<this.x; x++){
                if( this.tablero[y][x]!== "" ){
                    let rect = document.createElementNS(svgns, 'rect');
                    rect.setAttribute('x', (x+1)*size);
                    rect.setAttribute('y', (y+1)*size);
                    rect.setAttribute('height', size);
                    rect.setAttribute('width', size);
                    rect.setAttribute('fill', this.tablero[y][x]);
                    g.appendChild( rect );
                }
            }
        }
        document.getElementById('svgOne').appendChild(g);
                
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
            this.paint( color);


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


    paint( color ){
        if(this.grid.isPainting){

            this.nodo.style.cssText = `background-color:${color}`;
            this.seleccionado = !this.seleccionado;
            this.grid.markSquare(color, this.y, this.x);
        }
    }


}