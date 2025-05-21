import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showEditTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleEditTask(): void{
    console.log("Testing 123");
    this.showEditTask = !this.showEditTask;
    this.subject.next(this.showEditTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
