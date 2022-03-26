import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  myTasks = [];
  constructor() {}
  addNewTask(task: object) {
    let tasksArray = []; // Array to push new data

    /* If there is data saved already in local storage, add the new data to old data*/
    let oldData: any = localStorage.getItem('tasks');
    oldData = JSON.parse(oldData);
    if (oldData !== null) {
      oldData.push(task);
      localStorage.setItem('tasks', JSON.stringify(oldData));
    } else {
      /* If local storage is empty, Push new data to the empty array */
      tasksArray.push(task); //Push object of data to the array
      /* set stringified data in local storage */
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
  }
  // *************************
  getTasks() {
    let tasks: any = localStorage.getItem('tasks');
    return JSON.parse(tasks);
  }

  deleteTask( taskId:number){
    let tasks = this.getTasks();
    tasks = tasks.filter((item: any) => item.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  EditTask(tasks:any){
     localStorage.setItem('tasks', JSON.stringify(tasks));

  }
}
