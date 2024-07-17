import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {

  @Input() buttonName: string = 'Button';
  @Output() buttonClick = new EventEmitter<void>();

  handleClick(){
    this.buttonClick.emit();
  }
  constructor() { }

  ngOnInit() {}

}
