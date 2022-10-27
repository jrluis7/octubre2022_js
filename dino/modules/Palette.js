

export class Palette {
    history
    recomendedColors

    constructor({ grid, history, recomendedColors, id, id_input_color }) {
        this.history = history ? history : [];
        this.recomendedColors = recomendedColors ? recomendedColors : [];
        this.id = id;
        this.grid = grid;
        debugger
        const that = this;
        document.querySelector("#" + id_input_color).addEventListener('change', function () {
            that.grid.setColor(this.value);
            debugger
        })
    }

    getMainColors(tablero) {
        console.log(tablero);
    }
}