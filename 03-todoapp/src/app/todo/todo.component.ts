import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodosAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAllTodos():void {
    const action = new ToggleAllTodosAction()
    this.store.dispatch(action)
  }

}
