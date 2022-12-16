import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfoOptions, RequestGroup } from 'src/app/models/request.model';

@Component({
  selector: 'app-pagina-rick-morty',
  templateUrl: './pagina-rick-morty.component.html',
  styleUrls: ['./pagina-rick-morty.component.scss']
})
export class PaginaRickMortyComponent implements OnInit {
  private url_api = 'https://rickandmortyapi.com/api//character'


  // any-> Cambiarlo por Personaje
  public characters: any[] = [];
  public info: InfoOptions = {
    next: '',
    prev: '',
    count: 0,
    pages: 0
  };

  // Cuando se construye el componente CARGA todo lo necesario de HttpClient en un atributo de clase llamado http
  constructor(
    private http_api: HttpClient
  ) { }

  ngOnInit(): void {
    // Fetch -> JS 
    // THEN porque devuelve una PROMESA

    // fetch(this.url_api).then(response => {
    //   return response.json();
    // }).then(data => {
    //   console.log(data)
    // }).catch( error=> console.log(error) )

    // OBSERVABLE
    let observable = this.http_api.get<RequestGroup>(this.url_api);
    console.log(observable);
    // Un elemento que puede ser observado por varios elementos

    // observable.subscribe((respuesta) => {
    //   console.log("respuesta");
    //   console.log(respuesta);
    // }, error => {
    //   console.log(error)
    // })

    observable.subscribe({
      next: (data) => {
        console.log("data con next ");
        console.log(data);
        this.characters = data.results
        this.info = data.info;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('Completada')
      }
    })
  }

  next() {
    this.http_api.get<RequestGroup>(this.info.next).subscribe({
      next: (data) => {
        console.log("data con next ");
        console.log(data);
        this.characters = data.results
        this.info = data.info;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('Completada')
      }
    })
  }

}
