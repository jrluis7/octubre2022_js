import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ResizeImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
