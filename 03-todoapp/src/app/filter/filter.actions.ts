import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] ✔ Set filter'
export type filtrosValidos = 'All' | 'Active' | 'Completed'


export class SetFilterAction implements Action {
  readonly type = SET_FILTER

  constructor(public filter:filtrosValidos) { }
}


export type actions = SetFilterAction
