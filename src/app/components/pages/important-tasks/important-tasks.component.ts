import { Component, inject } from '@angular/core';
import { PageTitleComponent } from "../../page-title/page-title.component";
import { TaskListComponent } from "../../task-list/task-list.component";
import { HttpService } from '../../../services/http.service';

@Component({
    selector: 'app-important-tasks',
    standalone: true,
    templateUrl: './important-tasks.component.html',
    styleUrl: './important-tasks.component.scss',
    imports: [PageTitleComponent, TaskListComponent]
})
export class ImportantTasksComponent {
    httpService = inject(HttpService);

    newTask = '';
  taskList: any[] = [];
  ngOnInit(){this.getAllTasks()};
  

  getAllTasks() {
    this.httpService.getAllTasks_http().subscribe((result: any) => {
      this.taskList = result.filter((x:any)=>x.important==true);
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
