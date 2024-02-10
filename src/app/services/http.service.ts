import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
httpClient = inject(HttpClient)
  constructor() { }
  addTask_http(task:string){
    return this.httpClient.post("http://localhost:3000/tasks",{
      title:task
    })
  }

  getAllTasks_http(){
    return this.httpClient.get("http://localhost:3000/tasks");
  }
}
