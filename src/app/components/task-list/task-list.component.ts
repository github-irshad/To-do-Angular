import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() _taskList: any[] = [];
  @Output() _important = new EventEmitter<any>();
  @Output() _completed = new EventEmitter<any>();

  markCompleted(task: any) {
    this._completed.emit(task);
  }
  markImportant(task: any) {
    this._important.emit(task);
  }
}
