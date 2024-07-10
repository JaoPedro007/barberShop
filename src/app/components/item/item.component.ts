import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {

  @Input()
  type: string = ''

  @Input()
  label: string = ''

  @Input()
  page: string = '#'
  
  constructor() { }

  ngOnInit() {}

}
