import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { PaginaserviciosComponent } from './components/paginaservicios/paginaservicios.component';
import { PaginacontactoComponent } from './components/paginacontacto/paginacontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    PaginaserviciosComponent,
    PaginacontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
