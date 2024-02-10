import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
 newTask = "";
 addTask(){console.log("addTask",this.newTask);
 }
}
