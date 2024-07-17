import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-time',
  templateUrl: './day-time.component.html',
})
export class DayTimeComponent {
  @Input() day: string='';
  isChecked: boolean = false;
  
  constructor(){}

  async ngOnInit() {}
}
