import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-time',
  templateUrl: './day-time.component.html',
})
export class DayTimeComponent {
  @Input() day: string='';
  endDate: string='';
  startDate: string='';
  isChecked: boolean = false;

  toggleCheckbox(event: CustomEvent) {
    this.isChecked = event.detail.checked;
  }

  ngOnInit() {
    this.startDate = `startDate-${this.day}`;
    this.endDate = `endDate-${this.day}`;
  }
}
