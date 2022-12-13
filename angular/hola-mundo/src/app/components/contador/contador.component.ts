import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  // Atributo GLOBAL -> "variable global"
  public contador: number = 0;
  public nacimiento: number = 1990;
  public edad: number = 0;
  constructor() {
    // Se ejecuta al construirse
    console.log("Contador Construido");
  }

  ngOnInit(): void {
    // Un método que se ejecuta SIEMPRE al principio del componente
    console.log("Contador iniciado");
    this.edad = this.getEdad();
  }

  public decrece(): void {
    this.contador--;
  }

  public crece(): void {
    this.contador++;
  }

  public getEdad(): number {
    let hoy = new Date();
    let edad = hoy.getFullYear() - this.nacimiento;
    console.log("Edad")
    return edad;
  }


  public isPar(): boolean {
    if (this.contador % 2 === 0) {
      return true;
    }
    return false;
  }

}
