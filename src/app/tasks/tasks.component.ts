import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService :TasksService) { }

  loading = false;

  ngOnInit() {
    this.loading = true;
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.loading = false;
    });
  }

  tasks: Task[];

  showGreenAlert = false;
  showRedAlert = false;
  alertText = "";

  showCreate = false;
  showEdit = false;

  createTask(title) {
    let t:Task = new Task(title);
    this.showCreate = false;

    this.tasksService.saveTask(t).subscribe(task => {
      this.tasks.push(task);
      this.showGreenNotification("Task created!");
    }, err => {
      this.showRedNotification("Error creating the Task");
    });
  }

  removeTask(task) {
    if (confirm("Are you sure?")) {
      let index = this.tasks.findIndex(t => {
        return (t._id === task._id);
      });
      this.tasks.splice(index, 1);

      //Remove task from backend
      this.tasksService.deleteTask(task)
        .subscribe(success => {
            this.showGreenNotification("Task deleted!");
          }, err => {
            this.showRedNotification("Error deleting the Task");
            // Revert the view back to its original state
            this.tasks.splice(index, 0, task);
          });
    }
  }

  showNewTaskForm() {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  showGreenNotification(text) {
    this.alertText = text;
    this.showGreenAlert = true;
    setTimeout(()=>{
      this.showGreenAlert = false;
    }, 1000);
  }

  showRedNotification(text) {
    this.alertText = text;
    this.showRedAlert = true;
    setTimeout(()=>{
      this.showRedAlert = false;
    }, 1000);
  }

}
