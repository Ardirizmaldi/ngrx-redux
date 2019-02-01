import { createSelector } from '@ngrx/store';

export const TodoStoreSelector = state => state.todoStore;
// ambl semua store yang di global state
// terus ambil todoStorenya

export const TodosSelector = createSelector(
  TodoStoreSelector,
  // {
  //   todoStore: {
  //     todos: []
  //   }
  // }
  state => state.todos
  // todos:[]
);
