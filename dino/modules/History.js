

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
        // debugger
        console.log('Elemento cogido', this.counter);
        console.log(this.data);

        this.counter++;
        console.log('Counter: ', this.counter)
        return this.length;

    }

    /**
     * Checkea si el último item introducido es igual al que se va a introducir
     * @param {*} item 
     * @returns boolean - True si el item a introducir es el último introdoucido
     */
    #checkItemIsLast(item) {
        console.group('CheckList')
        console.log('CheckItemIsLast', this.counter, item);
        console.log('ChecItemIsLAst', (JSON.stringify(item) === JSON.stringify(this.data[this.counter])))
        console.groupEnd();
        if (JSON.stringify(item) === JSON.stringify(this.data[this.counter])) return true;
        return false;
    }

    back() {
        // this.data = this.data.filter((v, i) => i != this.data.length - 1);
        // ey

        const penultimo = this.counter - 1;
        const tablero = this.data.find((v, i) => (i === (penultimo)))
        // debugger
        this.counter--;

        console.log(this.data);
        console.log('Counter ', this.counter);

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

