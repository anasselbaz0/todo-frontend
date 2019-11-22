import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Task } from '../model/task/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getTasks().subscribe(
      (response) => this.handleSuccsessfulHttpResponse(response)
    );
  }

  handleSuccsessfulHttpResponse(response) {
    console.log(response._embedded.tasks);
    this.tasks = response._embedded.tasks;
  }

  viewAddTask() {
    document.getElementById('add-task').style.display = 'block';
    document.getElementById('add-button').style.display = 'none';
  }
  notViewAddTask() {
    document.getElementById('add-task').style.display = 'none';
    document.getElementById('add-button').style.display = 'block';
  }

  editTask(taskId) {
    console.log(taskId + 'edited');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
