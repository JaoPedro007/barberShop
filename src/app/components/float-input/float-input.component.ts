import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-input',
  templateUrl: './float-input.component.html',
  styleUrls: ['./float-input.component.scss'],
})
export class FloatInputComponent implements OnInit {

  
  constructor() { }

  @Input()
  labelName: string= '';

  @Input()
  placeHolder: string = '';
  
  ngOnInit() {}
  
}
