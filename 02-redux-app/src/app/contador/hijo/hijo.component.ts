import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})

export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() contador:number;
  @Output() cambioContador = new EventEmitter<number>();

  multiplicar():void {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir():void {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  whenContadorCambio(event:number):void {
    this.contador = event;
    this.cambioContador.emit(this.contador);
  }

}
