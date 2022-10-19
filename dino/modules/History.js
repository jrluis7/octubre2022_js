

export default class History {
    length = 0;
    counter = -1; // puntero del último elemento que estamos viendo
    data = [];

    constructor(...args) {
        for (const key in args) {
            this[key] = args[key]
        }
    }

    push(item) {

        if (this.#checkItemIsLast(item)) return;
        const old_data = this.data.slice(0, this.counter + 1);
        debugger
        this.data = [...old_data, item]
        debugger

        this.counter++;
        console.log(this.counter);
        console.log(this.data);
        return this.length;

    }

    /**
     * Checkea si el último item introducido es igual al que se va a introducir
     * @param {*} item 
     * @returns boolean - True si el item a introducir es el último introdoucido
     */
    #checkItemIsLast(item) {
        if (JSON.stringify(item) === JSON.stringify(this.data[this.counter])) return true;
        return false;
    }

    back() {
        // this.data = this.data.filter((v, i) => i != this.data.length - 1);
        // ey
        const tablero = this.data.find((v, i) => (i === (this.counter - 1)))
        debugger
        this.counter--;

        console.log(this.data);
        console.log(this.counter)

        // debugger
        return tablero;
    }

}





/**
 * [ A ]
 * [ B ]
 * [ C ]
 * [ D ]
 * [ E ]
 * [ F ]
 * [ G ]
 * [ H ] ->COUNTER
 * 
 * 
 * 
 * 
 * 
 */

