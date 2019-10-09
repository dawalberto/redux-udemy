import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltro from '../filter/filter.actions';


@Pipe({
  name: 'filterTodo'
})


export class FilterPipe implements PipeTransform {

  transform(todos:Todo[], filter:fromFiltro.filtrosValidos): Todo[] {

    switch(filter) {

      case 'Active':
        return todos.filter(todo => !todo.completado)

      case 'Completed':
        return todos.filter(todo => todo.completado)

      default:
        return todos

    }

  }

}
