import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { Task } from '../Task';
import { TaskService } from '../services/task.service';
import { TasksComponent } from '../components/tasks/tasks.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, AddTaskComponent, TaskListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeGreetingMessage = signal("Welcome to the Task Tracker App!");
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
    this.tasks = this.sortTasks(this.tasks);
  }

  private sortTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => {
      const dateA = new Date(a.day).getTime();
      const dateB = new Date(b.day).getTime();
      if (dateA !== dateB) {
        return dateA - dateB; // earlier date first
      }
      return (b.priority ?? 0) - (a.priority ?? 0); // higher priority first
    });
  }

}
