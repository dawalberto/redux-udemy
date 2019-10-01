import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})

export class HijoComponent implements OnInit {

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
      console.log(contador)
    })
  }

  contador:number;

  multiplicar():void {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new MultiplicarAction(9)
    this.store.dispatch(accion)
  }

  dividir():void {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction(2)
    this.store.dispatch(accion)
  }

  // whenContadorCambio(event:number):void {
  //   this.contador = event;
  //   // this.cambioContador.emit(this.contador);
  // }

}
