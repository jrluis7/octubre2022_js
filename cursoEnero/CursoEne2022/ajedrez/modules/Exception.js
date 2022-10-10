export class Exception extends Error {
    constructor(data = {}, ...params) {
      // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
      super(...params)
        this.data = data;
      // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro 
  
    //   this.name = 'CustomError'
    //   // Información de depuración personalizada
    //   this.foo = foo
    //   this.date = new Date()
    }
  }