import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})

export class TodoFooterComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filterSelected = state.filter
    })
  }

  filtrosValidos:fromFilter.filtrosValidos[] = ['All', 'Completed', 'Active']
  filterSelected:fromFilter.filtrosValidos

  changeFilter(filter:fromFilter.filtrosValidos) {
    this.filterSelected = filter

    const action = new fromFilter.SetFilterAction(filter)
    this.store.dispatch(action)
  }

}
