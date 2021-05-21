import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  profesor  : string = "Luis";
  apellido  : string = "Jiménez";
  isOpen    : boolean = false;
  filtroMatriculados : boolean = true

  listaAlumnos = [
    {
      nombre:"Juan",
      apellido:"Pérez",
      fecha:"10/09/1988",
      matriculado:true
    },
    {
      nombre:"Marcos",
      apellido:"Pérez",
      fecha:"10/09/1988",
      matriculado:true
    },
    {
      nombre:"María",
      apellido:"Gómez",
      fecha:"20/06/1997",
      matriculado:false
    }
  ]

  // alumno    : any     =

  // alumno2    : any     =

  constructor() { }

  ngOnInit(): void {
  }

  openClose(){
    // this.isOpen = true;

    // if( this.isOpen == true ){
    //   this.isOpen = false;
    // }else{
    //   this.isOpen = true;
    // }

    // Operador ternario
    // (condicion) ? Cuando condición es true  : Cuando condición es false
    // (this.isOpen==true) ? this.isOpen = false : this.isOpen = true;

    this.isOpen = !this.isOpen;

  }

  selectMatriculados(){
    this.filtroMatriculados = true;
  }

  selectNOMatriculados(){
    this.filtroMatriculados = false;
  }

}
