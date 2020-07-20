import {createReducer, on} from '@ngrx/store';
import {borrar, borrarCompletados, crear, editar, toggle, toggleAll} from "./todo.actions";
import {Todo} from "./models/todo.model";

export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Salvar a thanos'),
  new Todo('Culpar a thanos')
];

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo
      }
    })
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          texto
        }
      } else {
        return todo
      }
    })
  }),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completado}) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  }),
  on(borrarCompletados, state => state.filter(todo => !todo.completado))
)

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
