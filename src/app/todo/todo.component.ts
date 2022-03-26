import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  editMode = false;
  todos: any = [];
  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTasks();
  }
  addTask(task: any) {
    if (task.value.trim() !== '') {
      this.todoService.addNewTask({
        task: task.value,
        id: this.todoService.getTasks()?.length ? this.todoService.getTasks()[length-1].id+1 :1,
        done: false,
        canEdit: false,
      });
      this.todos = this.todoService.getTasks();
      task.value = '';
    }
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id);
    this.todos = this.todoService.getTasks();
  }

  editTask(taskId: number, editTaskInput: any) {
    this.todos[taskId - 1].canEdit = !this.todos[taskId - 1].canEdit;
    this.todos[taskId - 1].done = false;
    if (this.editMode) {
      this.todos[taskId - 1].task = editTaskInput.value;
      this.todoService.EditTask(this.todos);
      this.todos[taskId - 1].canEdit = false;
    }
    this.editMode = false;
  }
  changeDoneStatus(taskId: any) {
    this.todos[taskId - 1].done = !this.todos[taskId - 1].done;
    this.todoService.EditTask(this.todos);
  }
}
