import { Component, OnInit } from '@angular/core';
import { Estado, Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public entradaTarea: string = '';

  public tareas: Tarea[] = [
    // { nombre: "HTML", estado: Estado.DONE },
    // { nombre: "CSS", estado: Estado.TO_DO }
  ];

  public tareas_ = {
    toDo: [],
    done: []
  }


  constructor() { }

  ngOnInit(): void {
    let json_tareas = localStorage.getItem('to-do-list');
    if (json_tareas) {
      this.tareas = JSON.parse(json_tareas);
    }
  }

  public add_task() {
    let tarea: Tarea = { nombre: this.entradaTarea, estado: Estado.TO_DO };
    this.tareas.push(tarea);
    this.entradaTarea = '';
    this.save();
  }

  public get_to_do(): Tarea[] {
    const list_to_do = this.tareas.filter((cadaTarea) => {
      return cadaTarea.estado === Estado.TO_DO;
    })
    return list_to_do;
  }

  public get_done(): Tarea[] {
    const list_done = this.tareas.filter((cadaTarea) => {
      return cadaTarea.estado === Estado.DONE
    })
    return list_done;
  }

  public complete(tarea: Tarea) {
    tarea.estado = Estado.DONE;
    this.save();
  }

  public uncomplete(tarea: Tarea) {
    tarea.estado = Estado.TO_DO;
    this.save();
  }

  public save() {
    let json_tareas = JSON.stringify(this.tareas);
    localStorage.setItem('to-do-list', json_tareas);
  }

}
