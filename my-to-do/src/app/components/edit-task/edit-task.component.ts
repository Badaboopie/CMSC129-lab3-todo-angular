import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent{
  @Input() isEditing: boolean = false;
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter(); 
  priority: number = 1;
  name: string = "";
  day: string = "";
  time: string = "";
  reminder: boolean = false;
  completed: boolean = false;

  onEdit(){
    if(!this.name){
      alert('Please enter something');
      return;
    }

    if(!this.day && !this.time){
      alert('Please Dont Leave Date and Time Fields Empty');
      return;
    }
    
    const editTask: Task = {
      ...this.task,
      priority: this.priority,
      name: this.name,
      day: this.day,
      time: this.time,
      reminder: this.reminder,
      completed: this.completed
    };

    this.onEditTask.emit(editTask);
  } 

}
