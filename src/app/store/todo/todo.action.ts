import { Action } from '@ngrx/store';
import _ from 'lodash';
import { TodoReducer } from '@app/store/todo/todo.reducer';

// export const CREATE_TODO = '[TODO] Create';
export enum TodoTypes {
  Create = '[TODO] Create',
  Delete = '[TODO] Delete',
  Reset = '[TODO] Reset',
  Update = '[TODO] Update',
  Check = '[TODO] Check',
}

// nama aksinya '[TODO] Create'
// var create = '[Todo] Create'
// TodoTypes

// TodoTypes.create === '[Todo] Create'

// export class CreateTodo implements Action {
//   readonly type = TodoTypes.Create;
//   constructor(public payload: { todo: string }) {}
// }

// export class DeleteTodo implements Action {
//   readonly type = TodoTypes.Delete;
//   constructor(public payload: { id: number }) {}
// }

// export class ResetTodo implements Action {
//   readonly type = TodoTypes.Reset;
// }

// todo = {
//   name: 'ariiq'
// }

// todo.name === 'ariiq'

export const CreateTodo = (todo: any) => ({
  type: TodoTypes.Create, // '[Todo] Create'.
  payload: {
    name: todo.name,
    id: _.uniqueId('todo_'),
    done: false,
  },
});

export const DeleteTodo = (todoId: any) => ({
  type: TodoTypes.Delete, // '[Todo] Delete'.
  payload: {
    id: todoId,
  }
});

export const ResetTodo = () => ({
  type: TodoTypes.Reset,
});

export const UpdateTodo = (todo: any) => ({
  type: TodoTypes.Update,
  payload: {
    name: todo.name,
    id: todo.id,
  },
});

export const CheckTodo = (todoId: any) => ({
  type: TodoTypes.Check,
  payload: {
    id: todoId
  }
});

// export type TodoAction = CreateTodo | DeleteTodo | ResetTodo;
