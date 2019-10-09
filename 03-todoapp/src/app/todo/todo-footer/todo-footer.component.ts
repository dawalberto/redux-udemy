import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromFilter from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})

export class TodoFooterComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countActives(state.todos)
      this.filterSelected = state.filter
    })
  }


  filtrosValidos:fromFilter.filtrosValidos[] = ['All', 'Completed', 'Active']
  filterSelected:fromFilter.filtrosValidos
  actives:number


  changeFilter(filter:fromFilter.filtrosValidos) {
    this.filterSelected = filter

    const action = new fromFilter.SetFilterAction(filter)
    this.store.dispatch(action)
  }

  countActives(todos:Todo[]): void {
    this.actives = todos.filter(todo => !todo.completado).length
  }

}
