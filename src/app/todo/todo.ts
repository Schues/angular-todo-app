import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}