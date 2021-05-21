import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { PaginaserviciosComponent } from './components/paginaservicios/paginaservicios.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component'

const routes: Routes = [
  {path:"",           component: ContadorComponent },
  {path:"contador",   component: ContadorComponent },
  {path:"servicios" , component: PaginaserviciosComponent },
  {path:"alumnos" ,   component: AlumnosComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
