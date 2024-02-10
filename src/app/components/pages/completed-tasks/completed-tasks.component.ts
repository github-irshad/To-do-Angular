import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from "../../page-title/page-title.component";
import { TaskListComponent } from "../../task-list/task-list.component";

@Component({
    selector: 'app-completed-tasks',
    standalone: true,
    templateUrl: './completed-tasks.component.html',
    styleUrl: './completed-tasks.component.scss',
    imports: [PageTitleComponent, TaskListComponent]
})
export class CompletedTasksComponent {
  
  httpService = inject(HttpService);

  newTask = '';
taskList: any[] = [];
ngOnInit(){this.getAllTasks()};


getAllTasks() {
  this.httpService.getAllTasks_http().subscribe((result: any) => {
    this.taskList = result.filter((x:any)=>x.completed==true);
    console.log(this.taskList);
  });
}

onComplete(task:any){
  task.completed = true;
  this.httpService.updateTask_http(task).subscribe(()=>{});
  console.log("Completed",task);
  this.getAllTasks();
}
onImportant(task:any){
  task.important = true;
  this.httpService.updateTask_http(task).subscribe(()=>{});
  console.log("Important",task);
  this.getAllTasks();
}

}
