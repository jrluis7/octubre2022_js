import { cloneTablero } from "../utils/utils.js"

export default class Controls {

    redoPaint
    undoPaint
    translate_x = 0;
    translate_y = 0;
    scalePaint = 1;

    constructor({ grid, redoPaint, undoPaint, eraserKey, mouseUp }) {
        this.grid = grid;
        this.redoPaint = redoPaint;
        this.undoPaint = undoPaint;
        this.eraserKey = eraserKey;

        this.init();



    }

    init() {
        const mouseDown = (ev) => {
            if (ev.which === 1) this.grid.isPainting = true;
        }
        const mouseUp_ = () => {
            this.grid.isPainting = false;
            const t = cloneTablero(this.grid.tablero);
            this.grid.history.push(t);
            this.grid.exportToSVG();
            this.grid.exportToCss();
        }

        const key_controls = (ev) => {
            if (ev.code === "KeyB") {
                this.grid.switchEraser();
            }
            if (ev.code === "KeyZ" && ev.ctrlKey && !ev.shiftKey) {
                this.grid.popHistory();
                this.grid.exportToSVG();
                this.grid.exportToCss();
            }
            if (ev.code === "KeyZ" && ev.ctrlKey && ev.shiftKey) {
                this.grid.undoPopHistory();
                this.grid.exportToSVG();
                this.grid.exportToCss();
            }
        }

        const key_controls_up = (ev) => {
            if (ev.code === "KeyB") {
                this.grid.tool = '';
                this.grid.switchPaint();
            }
        }

        const wheel_zoom = (ev) => {
            // console.log(ev)
            // ev.preventDefault()
            if (ev.altKey) {
                const position_main = mainContent.getBoundingClientRect();
                // console.log(position_main);
                const c_x = position_main.x + position_main.width / 2
                const c_y = position_main.y + position_main.height / 2
                console.log('CX', c_x, 'CY', c_y);

                const x = ev.pageX;
                const y = ev.pageY;

                const dist_x = c_x - x;
                const dist_y = c_y - y;

                console.log('Dist_x :', dist_x, 'Dist_y:', dist_y);

                if (ev.wheelDelta > 0) {
                    this.scalePaint += 0.1;
                    this.translate_x += (dist_x / 10)
                    this.translate_y += (dist_y / 10)
                } else if (ev.wheelDelta < 0) {
                    this.scalePaint -= 0.1;
                    this.translate_x -= (dist_x / 10)
                    this.translate_y -= (dist_y / 10)
                }
                console.log("X: " + ev.layerX, "Y: " + ev.layerY)
                console.log("Xoff: " + ev.offsetX, "Y: " + ev.offsetY)
                ev.stopPropagation();






                this.grid.element.style.transform = `scale(${this.scalePaint}) translate( ${this.translate_x}px,${this.translate_y}px  )`;

            }
        }

        const mouseMove = (ev) => {
            const position_main = mainContent.getBoundingClientRect();
            // console.log(position_main);
            const c_x = position_main.x + position_main.width / 2
            const c_y = position_main.y + position_main.height / 2
            console.log('CX', c_x, 'CY', c_y);

            const x = ev.pageX;



            position_mouse.innerHTML = `
            Page X: ${ev.pageX} Y: ${ev.pageY}<br>
            Offset X: ${ev.offsetX} Y: ${ev.offsetY}<br>
            
            `;
            if (ev.altKey) {
                // console.log(ev);
                // this.grid.element.style.cursor = 'move'

            } else {

            }
        }

        mainContent.addEventListener('mousemove', mouseMove)
        // window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp_)
        window.addEventListener('keydown', key_controls)
        window.addEventListener('keyup', key_controls_up)
        mainContent.addEventListener('wheel', wheel_zoom)

        window.addEventListener('colorSeleccionado', (e) => {
            this.grid.color = e.detail.color
        })
    }


    eraser() {

    }


}