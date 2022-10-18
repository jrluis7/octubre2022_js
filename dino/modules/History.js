

export default class History {
    length = 0;
    data = [];
    constructor(...args) {
        for (const key in args) {
            this[key] = args[key]
        }
    }

    push(item) {
        debugger
        this.data = [...this.data, item]
        this.length++;
        return this.length;

    }

    pop() {
        this.data = this.data.filter((v, i) => i != this.data.length - 1);
        const tablero = this.data.find((v, i) => i === this.data.length - 1)
        this.length--;
        debugger
        return tablero;
    }

}