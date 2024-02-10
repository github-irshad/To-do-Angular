import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from "../../page-title/page-title.component";
import { TaskListComponent } from "../../task-list/task-list.component";

@Component({
    selector: 'app-all-tasks',
    standalone: true,
    templateUrl: './all-tasks.component.html',
    styleUrl: './all-tasks.component.scss',
    imports: [FormsModule, PageTitleComponent, TaskListComponent]
})
export class AllTasksComponent {
  httpService = inject(HttpService);
  newTask = '';
  taskList: any[] = [];
  ngOnInit(){this.getAllTasks()};
  addTask() {
    console.log('addTask', this.newTask);
    this.httpService.addTask_http(this.newTask).subscribe(() => {
      console.log(this.newTask);
      this.newTask = '';
      this.getAllTasks();
    });
  }

  getAllTasks() {
    this.httpService.getAllTasks_http().subscribe((result: any) => {
      this.taskList = result;
      console.log(result);
    });
  }
}
