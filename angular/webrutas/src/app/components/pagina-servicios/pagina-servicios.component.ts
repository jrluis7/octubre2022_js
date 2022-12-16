import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-servicios',
  templateUrl: './pagina-servicios.component.html',
  styleUrls: ['./pagina-servicios.component.scss']
})
export class PaginaServiciosComponent implements OnInit {
  public contador: number = 0;
  constructor() { }

  ngOnInit(): void {

    let ref = setInterval(() => {
      // THIS me está ocultando 
      this.contador++;
    }, 1000)

  }

}
