// -- Old School --
// import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, actions, RESET } from './contador.actions';
// -- New School --
import * as importsAction from './contador.actions'

export function contadorReducer(state:number = 10, action:importsAction.actions) {

  switch(action.type) {

    case importsAction.INCREMENTAR:
      return state + 1

    case importsAction.DECREMENTAR:
      return state - 1

    case importsAction.MULTIPLICAR:
      return state * action.payload

    case importsAction.DIVIDIR:
      return state / action.payload

    case importsAction.RESET:
      return state - state

    default:
      return state

  }

}
