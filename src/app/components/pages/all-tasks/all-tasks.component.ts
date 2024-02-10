import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss',
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
})
export class AllTasksComponent {
  httpService = inject(HttpService);
  stateService = inject(StateService);
  newTask = '';
  initialTaskList: any[] = [];
  taskList: any[] = [];
  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      if (value) {
        console.log(value);

        this.taskList = this.initialTaskList.filter((x) =>
          x.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.taskList = this.initialTaskList;
      }
    });
    this.getAllTasks();
  }
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
      this.initialTaskList = this.taskList = result;
      console.log(result);
    });
  }

  onComplete(task: any) {
    task.completed = true;
    this.httpService.updateTask_http(task).subscribe(() => {});
    console.log('Completed', task);
    this.getAllTasks();
  }
  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask_http(task).subscribe(() => {});
    console.log('Important', task);
    this.getAllTasks();
  }
}
