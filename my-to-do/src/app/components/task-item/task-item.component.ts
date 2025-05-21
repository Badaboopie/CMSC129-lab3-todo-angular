import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule, DatePipe } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, ButtonComponent, EditTaskComponent],
  providers: [DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Input() isEditing: boolean = false;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter(); 
  @Output() onCompleteToggleTask = new EventEmitter<Task>();
  @Output() onEditTask = new EventEmitter<Task>();
  @Output() onEditCancelTask = new EventEmitter<void>();
  @Output() onEditTaskEvent = new EventEmitter<Task>();

  constructor(public datePipe: DatePipe) {}


  convertDate(day: string): string {
    return this.datePipe.transform(day, 'longDate') ?? '';
  }

  formatTime(time: string): string {
    if (!time) return '';
    const [hourStr, minuteStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;;
  }

  onDelete(task: Task) {  
    console.log('Delete task:', task.name);
    alert(task.name + ' Deleted');
    this.onDeleteTask.emit(task);
  }

  //Reminder
  onToggle(task: Task){
    console.log("Toggled Reminder");
    this.onToggleReminder.emit(task);
  }

  onCompleteToggle(task: Task, event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  const updatedTask = { ...task, completed: checked };
  this.onCompleteToggleTask.emit(updatedTask);
}
  
  onEdit(task: Task) {
    console.log('Edit task:', task.name);
    this.onEditTask.emit(task);
  }

  EditTaskEvent(editedTask: Task){
    this.onEditTaskEvent.emit(editedTask);
  }

  onCancelEdit() {
    this.onEditCancelTask.emit();
  }
}
