
import {cloneTablero} from "../utils/utils.js"

export default class History {
    length = 0;
    counter = -1; // puntero del último elemento que estamos viendo
    data = [];

    constructor(...args) {
        for (const key in args) {
            this[key] = args[key]
        }
    }

    async push(item) {

        if (await this.#checkItemIsLast(item)) return;
        const old_data = this.data.slice(0, this.counter + 1)
        this.data = [...old_data, item]
        console.group('Push Item');
        console.log('Elemento cogido', this.counter);
        console.log(this.data);
        console.groupEnd();
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
        console.log('Data', this.data)
        console.log('CheckItemIsLast', this.counter, item);
        console.log('ChecItemIsLAst', (JSON.stringify(item) === JSON.stringify(this.data[this.counter])))
        console.log('Counter:', this.counter)
        console.log("item que entra", JSON.stringify(item));
        console.log("Elemento apuntado por counter", JSON.stringify(this.data[this.counter]));
        console.groupEnd();
        if (JSON.stringify(item) === JSON.stringify(this.data[this.counter])) return true;
        return false;
    }

    back() {
        // this.data = this.data.filter((v, i) => i != this.data.length - 1);
        // ey
        if( this.counter>0 ){

            const penultimo = this.counter - 1;
            const tablero = this.data.find((v, i) => (i === (penultimo)));
    
            const t  = cloneTablero( tablero );
            this.counter--;
            console.group('Back');
            console.log(this.data);
            console.log('Counter ', this.counter);
            console.groupEnd('Back');
            return t;
        }
        throw new Error("No hay más movimientos")
    }

    undo_back(){
        const siguiente = this.counter + 1;
        const tablero = this.data.find((v, i) => (i === (siguiente)));
        const t  = cloneTablero( tablero );
        
        this.counter++;

        return t;
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

