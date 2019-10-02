import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    })
  }

  contador:number;

  reset(): void {
    const accion = new ResetAction()
    this.store.dispatch(accion)
  }

}
