import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';


import { PaginaServiciosComponent } from './components/pagina-servicios/pagina-servicios.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';

// Distintas pantallas
const routes: Routes = [
  { path: '', component: PaginaHomeComponent, pathMatch: 'full' },
  { path: 'image', component: ResizeImageComponent, pathMatch: 'full' },
  { path: 'servicios', component: PaginaServiciosComponent, pathMatch: 'full' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
