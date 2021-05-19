import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title     :string = 'webrutas';
  asteriscos:string = '';

  contador  :number = 0;

  sumaAsteriscos(){
    this.asteriscos += "*";
    
  }


}
