import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  contador: number = 0;
  url_img : string = 'https://picsum.photos/id/237/200/300';

  constructor() { }

  ngOnInit(): void {
  }

  restar(){
    this.contador--;
  }

  sumar(){
    this.contador++;
  }


}
