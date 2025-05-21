import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, HomeComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task Tracker';
}
