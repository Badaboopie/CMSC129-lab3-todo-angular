import { Component, signal } from '@angular/core';
import { sign } from 'crypto';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal('Task Tracker');
}
