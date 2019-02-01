import { Action } from '@ngrx/store';
import { TodoTypes } from '@app/store/todo/todo.action';

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export interface Todos {
  todos: Todo[];
}

export const TodoInitState: Todos = {
  todos: [{ id: '1', name: 'todo pertama', done: false }],
};

export const TodoReducer = (state = TodoInitState, action) => {
  switch (action.type) {
    case TodoTypes.Create:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TodoTypes.Delete:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };

    case TodoTypes.Update:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
            : todo,
        ),
      };

    case TodoTypes.Check:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo,
        ),
      };

    case TodoTypes.Reset:
      return {
        ...TodoInitState,
      };

    default:
      return state;
  }
};
