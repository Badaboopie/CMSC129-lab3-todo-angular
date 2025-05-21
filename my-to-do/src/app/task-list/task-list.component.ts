import { Component } from '@angular/core';
import { TasksComponent } from '../components/tasks/tasks.component';

@Component({
  selector: 'app-task-list',
  imports: [TasksComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
