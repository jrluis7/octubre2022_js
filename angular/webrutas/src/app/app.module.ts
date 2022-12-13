import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { PaginaServiciosComponent } from './components/pagina-servicios/pagina-servicios.component';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResizeImageComponent,
    NavegadorComponent,
    PiePaginaComponent,
    PaginaServiciosComponent,
    PaginaHomeComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
