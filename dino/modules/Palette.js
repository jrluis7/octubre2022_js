
import { rgbStringToHex } from '../utils/utils.js'
export class Palette {
    history
    recomendedColors

    constructor({ grid, history, recomendedColors, id, id_input_color, tablero }) {
        this.history = history ? history : [];
        this.recomendedColors = recomendedColors ? recomendedColors : [];
        this.id = id;
        this.grid = grid;
        this.tablero = tablero;
        const that = this;
        this.input = document.querySelector("#" + id_input_color)
        this.input.addEventListener('change', function () {
            that.grid.setColor(this.value);
            that.addColor({ color: this.value, recomended: false, initial: false })
        })


        // function onlyUnique(value, index, self) {
        //     return self.indexOf(value) === index;
        //   }


        //   var unique = a.filter(onlyUnique);
        // tablero.foreach( fila =>{
        // var unique = fila.filter(onlyUnique);


        // } )

        // }

    }

    getColors(t) {
        this.tablero = t;
        let totalColors = []
        this.tablero.forEach(fila => {

            const arr = [...new Set(fila)];

            totalColors = [...arr, ...totalColors];
        })

        this.recomendedColors = [...new Set(totalColors)].filter(e => e != '')

        this.recomendedColors.forEach(cadacolor => {
            this.addColor({ color: cadacolor, recomended: true, initial: true })
        })

    }

    addColor({ color, recomended, initial }) {
        let id = recomended ? "#recomendedColors" : '#lastColors'
        let arr = recomended ? this.recomendedColors : this.history
        if (!initial) {
            const found = arr.find(e => e === color);
            if (found) {
                return
            }
        }


        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('color');
        nodoDiv.style.backgroundColor = color;



        document.querySelector(id).append(nodoDiv);
        arr = [...arr, color];

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