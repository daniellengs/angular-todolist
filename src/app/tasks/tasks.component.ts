import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showConfirmAlert = false;
  alertText = "";

  showCreate = false;
  showEdit = false;

  t1:Task = new Task("Learn HTML");
  t2:Task = new Task("Learn CSS");
  t3:Task = new Task("Learn Javascript");
  t4:Task = new Task("Learn Angular");

  tasks = [this.t1, this.t2, this.t3, this.t4];

  createTask(title) {
    let t:Task = new Task(title);
    this.tasks.push(t);
    this.showCreate = false;
    this.showGreenAlert("Task created!");
  }

  removeTask() {
    this.showGreenAlert("Task deleted!");
  }

  showNewTaskForm() {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  showGreenAlert(text) {
    this.alertText = text;
    this.showConfirmAlert = true;
    setTimeout(()=>{
      this.showConfirmAlert = false;
    }, 1000);
  }

}
