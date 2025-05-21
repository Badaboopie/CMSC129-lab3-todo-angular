import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  priority: number = 1; 
  name: string = "";
  day: string = "";
  time: string = "";
  reminder: boolean = false;
  completed: boolean = false;

  onSubmit(){
    if(!this.name){
      alert('Please add a Task');
      return;
    }

    if(!this.day && !this.time){
      alert('Please Dont Leave Date and Time Fields Empty');
      return;
    }
    
    const newTask: Task = {
      priority: this.priority,
      name: this.name,
      day: this.day,
      time: this.time,
      reminder: this.reminder,
      completed: this.completed
    };

    this.onAddTask.emit(newTask);

    this.name = '';
    this.day = '';
    this.time = ''
    this.reminder = false;
  } 
}
