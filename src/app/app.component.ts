import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateTodo } from '@app/store/todo/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public store: Store<any>) {}

  title = 'todo';

  createTodo(value: string) {
    this.store.dispatch(CreateTodo(value));
  }
}
