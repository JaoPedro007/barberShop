import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent  implements OnInit {

  constructor() { }

  @Input()
  name: string = 'Client Name';
  
  @Input()
  date: string = '09-07-2024';

  @Input()
  service: string = 'Haircut and Beard';
  

  ngOnInit() {}


}
