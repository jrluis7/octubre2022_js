import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-pagina-alumnos',
  templateUrl: './pagina-alumnos.component.html',
  styleUrls: ['./pagina-alumnos.component.scss']
})
export class PaginaAlumnosComponent implements OnInit {
  public entradaNombre: string = '';

  // Al no haber puesto el tipo de dato -> Lo determina por asignación
  public alumnos: Alumno[] = [
    { nombre: 'Carlos', apellidos: 'Gómez', fecha: 1999, nota: 7 },
    { nombre: 'María', apellidos: 'Hernández', fecha: 1996, nota: 8 },
    { nombre: 'Marta', apellidos: 'Jiménez', fecha: 1991, nota: 9 },
    { nombre: 'Antonio', apellidos: 'Pérez', fecha: 1998, nota: 9 },
    { nombre: 'Carla', apellidos: 'Pérez', fecha: 1997, nota: 4 },
    { nombre: 'Tomás', apellidos: 'Herranz', fecha: 1994, nota: 3, dni: '123456789-D' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public aprobar(alumno: Alumno) {
    console.log('Click en Aprobar')
    console.log(alumno);
    alumno.nota = 5;
    console.log(this.alumnos);
  }

  public add() {
    console.log('Añado alumno');
    console.log(this.entradaNombre);
    this.alumnos.push({ nombre: this.entradaNombre, apellidos: "H", fecha: 1991, nota: 9 })
    this.entradaNombre = '';
  }

}






let frutas: string[] = ['limon', 'manzana', 'pera'];
let edades: number[] = [12, 23, 54, 30];