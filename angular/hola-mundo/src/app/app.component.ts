import { Component } from '@angular/core';

// DECORADOR - Parte burocrática del componente
@Component({
  // Tag personalizada de HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Atributo "global" -> "variable global"
  public contador: number = 0;
  public curso: string = 'Angular';
  public asteriscos: string = '';
  public ref: any;
  // Public por defecto
  public title: string = 'hola-mundo';
  constructor() {
    // document.querySelector('').addEventListener();
  }

  // Public es que se puede acceder a este método FUERA de este archivo
  public crece(): void {
    console.log('Click en el Botón');
    this.contador++;
    // Nosotros no estamos REPINTANDO -> Lo hace angular por nosotros
    // this.contador += 1;
  }

  public decrece(): void {
    this.contador--;
  }

  public autoCrece(): void {
    this.ref = setInterval(() => {
      // console.log(this)
      this.contador++;
      this.asteriscos = this.asteriscos + " * ";

    }, 1000);
  }

  public stop() {
    clearInterval(this.ref);
  }

  // No puede accederse fuera de este archivo
  private name() {

  }


  mueve(evento: Event) {
    console.log('Mueve')
    console.log(evento)
  }


  isUrlContador(){
    
  }


}




// class Alumno{
//   public nombre:string;
//   constructor( nombre:string ){
//     this.nombre = nombre
//   }
//   saluda(){

//   }


// }