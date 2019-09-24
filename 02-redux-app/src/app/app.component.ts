import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    this.contador = 10;
  }

  title:string = 'redux-app';
  contador:number;

  incrementar():void {
    this.contador++
  }

  decrementar():void {
    this.contador--
  }

}
