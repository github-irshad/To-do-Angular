import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
markCompleted(task: any) {
console.log("completed");

}
markImportant(task: any) {
console.log("Important");

}
  @Input() _taskList:any[] = []
}
