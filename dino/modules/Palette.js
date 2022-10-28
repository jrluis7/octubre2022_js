
import { rgbStringToHex } from '../utils/utils.js'
export class Palette {
    history
    recomendedColors

    constructor({ grid, history, recomendedColors, id, id_input_color }) {
        this.history = history ? history : [];
        this.recomendedColors = recomendedColors ? recomendedColors : [];
        this.id = id;
        this.grid = grid;

        const that = this;
        this.input = document.querySelector("#" + id_input_color)
        this.input.addEventListener('change', function () {
            that.grid.setColor(this.value);
            that.addColor(this.value)
        })


    }

    addColor(color) {

        const found = this.history.find(e => e === color);
        if (found) {
            return
        }
        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('color');
        nodoDiv.style.backgroundColor = color;
        document.querySelector('#lastColors').append(nodoDiv);
        this.history = [...this.history, color];

        nodoDiv.addEventListener('click', () => {
            const color = nodoDiv.style.backgroundColor;
            window.dispatchEvent(new CustomEvent('colorSeleccionado', { detail: { color: color } }))


            this.input.value = rgbStringToHex(color);
        })

    }

    getMainColors(tablero) {
        console.log(tablero);
    }
}