import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { PaginaServiciosComponent } from './components/pagina-servicios/pagina-servicios.component';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { PaginaAlumnosComponent } from './components/pagina-alumnos/pagina-alumnos.component';
import { PaginaRickMortyComponent } from './components/pagina-rick-morty/pagina-rick-morty.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ResizeImageComponent,
    NavegadorComponent,
    PiePaginaComponent,
    PaginaServiciosComponent,
    PaginaHomeComponent,
    FormatTimePipe,
    PaginaAlumnosComponent,
    PaginaRickMortyComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
