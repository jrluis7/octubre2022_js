import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.scss']
})
export class PaginaHomeComponent implements OnInit {

  public elementoSeleccionado: boolean = false;
  public estilo = {
    'font-size.em': 3
  }
  ss: NodeJS.Timer;

  constructor() {

    this.ss = setInterval(() => {

    })
  }

  ngOnInit(): void {
  }

  public select() {
    this.elementoSeleccionado = !this.elementoSeleccionado;
  }

  public aumenta() {
    this.estilo['font-size.em']++;
  }

}
