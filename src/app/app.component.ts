import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showCreate = true;
  showEdit = false;

  tasks = ["Learn HTML", "Learn CSS", "Learn Javascript", "Learn Angular"];

  createTask(task) {
    this.tasks.push(task);
  }

  showNewTaskForm() {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }
}
