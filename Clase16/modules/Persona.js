export default class Persona {
    // CREAR objetos de este modelo
    // nombre
    // apellido
    // fecha_nacimiento
    constructor(nombre_param, apellido_param, fecha_param) { // Función CONSTRUCTORA de clase
        // Crear todas las propiedades del objeto
        this.nombre = nombre_param; // this.nombre = 'Juan'
        this.apellido = apellido_param;
        this.fecha_nacimiento = fecha_param;
    }

    edad() {
        let year = new Date().getFullYear();
        let edad = year - this.fecha_nacimiento;
        return edad;
    }

}