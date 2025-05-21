import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from "../../Task";
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFireBaseService } from '../../services/taskFireBaseService';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent{
  tasks: Task[] = [];
  editingTaskId: number | undefined;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
    this.tasks = this.sortTasks(tasks);
    });
  }

  private sortTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => {
      // Sort by due date (ascending)
      const dateA = new Date(a.day).getTime();
      const dateB = new Date(b.day).getTime();
      if (dateA !== dateB) {
        return dateA - dateB;
      }
      // If dates are equal, sort by priority (descending)
      return (b.priority ?? 0) - (a.priority ?? 0);
    });
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(() => this.sortTasks(this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService
    .updateTask(task)
    .subscribe();
  }

  toggleComplete(task: Task) {
    this.taskService.updateTask(task).subscribe(updatedTask => {
      this.tasks = this.tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
    });
  }

  startEditTask(task: Task) {
    this.editingTaskId = task.id;
  }

  stopEditTask() {
    this.editingTaskId = undefined;
  }
  
  updateTask(task: Task){
    this.taskService
    .updateTask(task)
    .subscribe(updatedTask => {
      // Update the local tasks array
      this.tasks = this.tasks
      .map(t => t.id === updatedTask.id ? updatedTask : t);
      this.tasks = this.sortTasks(this.tasks);
      this.editingTaskId = undefined; // Optionally close the edit form
    });
  }

  // taskService = inject(TaskService);
  // taskFirebaseService = inject(TaskFireBaseService)

  // ngOnInit(): void{
  //   this.taskFirebaseService.getTask().subscribe((tasks) => (this.tasks = tasks));
  // }
}
