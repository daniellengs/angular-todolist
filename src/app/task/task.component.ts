import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() task : Task;
  @Output() onRemoveTask = new EventEmitter();

  removeTask() {
    this.onRemoveTask.emit();
  }

  startTask() {
    this.task.status = "ongoing";
  }

  finishTask() {
    this.task.status = "completed";
  }

}
