import { cloneTablero } from "../utils/utils.js"

export default class Controls {

    redoPaint
    undoPaint

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
            console.log(ev)
            // ev.preventDefault()
            if (ev.altKey) {

                if (ev.wheelDelta > 0) {
                    this.scalePaint += 0.1;
                } else if (ev.wheelDelta < 0) {
                    this.scalePaint -= 0.1;
                }

                ev.stopPropagation();
                this.grid.element.style.transform = `scale(${this.scalePaint})`;
            }
        }

        const mouseMove = (ev) => {
            if (ev.altKey) {
                console.log(ev);
                // this.grid.element.style.cursor = 'move'

            } else {

            }
        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mousedown', mouseDown)
        window.addEventListener('mouseup', mouseUp_)
        window.addEventListener('keydown', key_controls)
        window.addEventListener('keyup', key_controls_up)
        window.addEventListener('wheel', wheel_zoom)

        window.addEventListener('colorSeleccionado', (e) => {
            this.grid.color = e.detail.color
        })
    }


    eraser() {

    }


}