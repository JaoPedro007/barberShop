import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FloatInputComponent } from '../components/float-input/float-input.component';
import { DayTimeComponent } from '../components/day-time/day-time.component';

@NgModule({
  declarations: [
    MenuComponent,
    CustomersComponent,
    ButtonComponent,
    ItemComponent,
    FloatInputComponent,
    DayTimeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    CustomersComponent,
    ButtonComponent,
    ItemComponent,
    FloatInputComponent,
    DayTimeComponent
  ]
})
export class SharedModule { }
