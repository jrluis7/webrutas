import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { PaginaserviciosComponent } from './components/paginaservicios/paginaservicios.component';

const routes: Routes = [
  {path:"",           component: ContadorComponent },
  {path:"servicios" , component: PaginaserviciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
