import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Task } from './task.model';

@Injectable()
export class TasksService {

  url = "https://nodejs-todolist-api.herokuapp.com/tasks/fhsf";

  constructor(private http: Http) { }

  //GET
  getTasks() {
    return this.http.get(this.url)
      .map(response => response.json());
  }

  //POST
  saveTask(task){
    //Set header to send content-type application/json
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(task), options)
      .map(res => res.json());
  }

  //PUT
  updateTask(task){
    //Set header to send content-type application/json
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.getTaskUrl(task._id), JSON.stringify(task), options)
      .map(res => res.json());
  }

  //DELETE
  deleteTask(task){
    return this.http.delete(this.getTaskUrl(task._id))
      .map(res => res.json());
  }

  getTaskUrl(id) {
    return `${this.url}/${id}`;
  }

}
