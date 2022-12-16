import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaServiciosComponent } from './components/pagina-servicios/pagina-servicios.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';
import { PaginaAlumnosComponent } from './components/pagina-alumnos/pagina-alumnos.component';
import { PaginaRickMortyComponent } from './components/pagina-rick-morty/pagina-rick-morty.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

// Distintas pantallas
const routes: Routes = [
  { path: '', component: PaginaHomeComponent, pathMatch: 'full' },
  { path: 'image', component: ResizeImageComponent, pathMatch: 'full' },
  { path: 'servicios', component: PaginaServiciosComponent, pathMatch: 'full' },
  { path: 'alumnos', component: PaginaAlumnosComponent },
  { path: 'rick-morty', component: PaginaRickMortyComponent },
  { path: 'to-do-list', component: ToDoListComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
