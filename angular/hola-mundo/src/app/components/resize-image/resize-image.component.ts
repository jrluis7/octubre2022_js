import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize-image',
  templateUrl: './resize-image.component.html',
  styleUrls: ['./resize-image.component.scss']
})
export class ResizeImageComponent implements OnInit {

  public ancho: number = 200;
  public alto: number = 300;
  public id: number = 237;

  public url_image: string = 'https://picsum.photos/'
  constructor() { }

  ngOnInit(): void {
  }

  public masAncho() {
    this.ancho += 10;
  }
  public menosAncho() {
    if (this.ancho > 150) {
      this.ancho -= 10;
    }
  }

  public getRandom() {
    this.id++;
  }
  public errorCarga() {
    console.log('Error de carga')
    this.id++;
  }
}
