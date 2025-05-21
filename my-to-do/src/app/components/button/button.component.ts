import { Component, Input, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text = input('');
  @Input() color! : string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    console.log('Button clicked');
    this.btnClick.emit();
  }
}
