import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private tasksService :TasksService) { }

  ngOnInit() {
  }

  @Input() task : Task;
  @Output() onRemoveTask = new EventEmitter();

  removeTask() {
    this.onRemoveTask.emit();
  }

  startTask() {
    this.task.status = "ongoing";
    this.updateTask();
  }

  finishTask() {
    this.task.status = "completed";
    this.updateTask();
  }

  updateTask() {
    this.tasksService.updateTask(this.task).subscribe();
  }

}
