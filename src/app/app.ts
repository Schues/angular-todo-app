import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'angular-todo-app';
}
