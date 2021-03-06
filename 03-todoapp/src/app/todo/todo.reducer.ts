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

    case fromTodo.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completado: !todo.completado
          }
        } else {
          return todo
        }
      })

    case fromTodo.EDITAR_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            texto: action.texto
          }
        } else {
          return todo
        }
      })

    case fromTodo.BORRAR_TODO:
      return state.filter(todo => todo.id !== action.id)

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todo => ({ ...todo, completado: !todo.completado }))

    case fromTodo.BORRAR_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completado)

    default:
      return state

  }

}
