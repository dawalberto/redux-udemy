import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] ✔ Agregar todo'
export const TOGGLE_TODO = '[TODO] 🔄 Toggle todo'
export const EDITAR_TODO = '[TODO] ✏ Editar todo'
export const BORRAR_TODO = '[TODO] ❌ Borrar todo'
export const TOGGLE_ALL_TODO = '[TODO] 🔄 Toggle all todos'
export const BORRAR_ALL_COMPLETED_TODO = '[TODO] ❌ Borrar todos completados todo'

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO

  constructor(public texto:string) { }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO

  constructor(public id:number) { }
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO

  constructor(public id:number, public texto:string) { }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO

  constructor(public id:number) { }
}

export class ToggleAllTodosAction implements Action {
  readonly type = TOGGLE_ALL_TODO
}

export class BorrarAllCompletedTodoAction implements Action {
  readonly type = BORRAR_ALL_COMPLETED_TODO
}

export type Actions = AgregarTodoAction |
                      ToggleTodoAction |
                      EditarTodoAction |
                      BorrarTodoAction |
                      ToggleAllTodosAction |
                      BorrarAllCompletedTodoAction
