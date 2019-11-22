import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTasks() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    const url = 'http://localhost:9090/tasks';
    return this.httpClient.get<Task[]>(url, {headers});
  }

}
