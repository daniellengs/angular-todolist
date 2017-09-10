import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks = [];
  @Output() showNewTask = new EventEmitter();
  @Output() onRemoveTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showNewTaskForm() {
    this.showNewTask.emit()
  }

  removeTask(task) {
    if (confirm("Are you sure?")) {
      let index = this.tasks.findIndex(t => {
        return (t.title === task.title);
      });
      this.tasks.splice(index, 1);
      this.onRemoveTask.emit();
    }
  }

}
