import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CreateTodo,
  DeleteTodo,
  ResetTodo,
  UpdateTodo,
  CheckTodo,
} from '@app/store/todo/todo.action';
import { TodosSelector } from '@app/store/todo/todo.selector';
import { Observable } from 'rxjs';
import { Todo } from '@app/store/todo/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  name: string;
  todos$: Observable<Todo[]>;
  todoAsync$: Observable<Todo[]>;

  constructor(public store: Store<any>) {
    // Cara panggil state dari store
    // Di define dulu bentuk selectornya baru di subscribe ke value
    this.store.select(TodosSelector).subscribe(value => (this.todos$ = value));
  }

  ngOnInit() {
    // Cara panggil state dari store
    // Butuh pipe async di .html-nya
    this.todoAsync$ = this.store.select(TodosSelector);
  }

  createTodo(value: string) {
    this.store.dispatch(CreateTodo(value));

    console.log('ini keluaran dari tag input html : ');
    console.log(value);
  }

  deleteTodo(id: number) {
    this.store.dispatch(DeleteTodo(id));
  }

  resetTodo() {
    this.store.dispatch(ResetTodo());
  }

  updateTodo(value: any) {
    this.store.dispatch(UpdateTodo(value));
  }

  checkTodo(id: number) {
    this.store.dispatch(CheckTodo(id));
  }

  // Test Update id: todo_1,
  testUpdateTodo(value: any) {
    this.store.dispatch(UpdateTodo(value));
  }
}
