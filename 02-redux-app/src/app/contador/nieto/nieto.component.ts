import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() contador:number;
  @Output() contadorCambio = new EventEmitter<number>();

  reset():void {
    this.contador = 0;
    this.contadorCambio.emit(this.contador);
  }

}
