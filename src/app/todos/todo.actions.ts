import {createAction, props} from '@ngrx/store';


export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
)

export const toggle = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
)
export const editar = createAction(
  '[TODO] edita Todo',
  props<{ id: number, texto: string }>()
)

export const borrar = createAction(
  '[TODO] borrar Todo',
  props<{ id: number }>()
)

export const toggleAll = createAction(
  '[TODO] toogle All',
  props<{ completado: boolean }>()
)

export const  borrarCompletados = createAction(
  '[TODO] borrae completados',
)
