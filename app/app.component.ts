import { Component } from '@angular/core';

//dynamically display the data here in the view
@Component ({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="editTask(currentTask)"*ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask()">Edit!</button></li>
    </ul>
    <hr>
    <div>
    <div *ngIf="selectedTask">
     <h3>{{selectedTask.description}}</h3>
     <p>Task Complete? {{selectedTask.done}}</p>
    <h3>Edit Task</h3>
    <label>Enter Task Description:</label>
    <input [(ngModel)]="selectedTask.description"><br>
     <label>Enter Task Priority (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
     <button (click)="finishedEditing()">Done</button>
     </div>
    </div>
  </div>
  `
})

//stores instances of model here
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [new Task("Finish weekend Angular homework for Epicodus course", 2),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 1)
  ];
  selectedTask: null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("this task is not done. Better get to work!")
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger"
    } else if (currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  finishedEditing() {
    this.selectedTask = null;
  }
}

//this is a model. defines data
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
