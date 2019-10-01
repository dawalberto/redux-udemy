import { Action } from '@ngrx/store';


export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador Hijo] Multiplicar';
export const DIVIDIR = '[Contador Hijo] Dividir';

export class IncrementarAction implements Action {
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
  readonly type = MULTIPLICAR;

  constructor(public payload:number) { }
}

export class DividirAction implements Action {
  readonly type = DIVIDIR;

  constructor(public payload:number) { }
}

export type actions = IncrementarAction |
                      DecrementarAction |
                      MultiplicarAction |
                      DividirAction;
