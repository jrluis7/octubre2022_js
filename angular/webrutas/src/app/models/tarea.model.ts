export interface Tarea {
    nombre: string;
    estado: Estado;
    categoria?: string;
    time?: Date;

}

export enum Estado {
    DONE = "DONE",
    TO_DO = "TO_DO"
}

