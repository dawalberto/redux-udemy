import * as fromTodo from './todo.actions'
import { Todo } from './model/todo.model'

const todo1 = new Todo('Aprender Ionic')
const todo2 = new Todo('Comprar iMac')
const todo3 = new Todo('Construir escritorio')

const estadoInicial:Todo[] = [todo1, todo2, todo3]

export function todoReducer(state = estadoInicial, action:fromTodo.Actions): Todo[] {

  switch(action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto)
      return [...state, todo]

    default:
      return state

  }

}
