import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { CustomersComponent } from 'src/app/components/customers/customers.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { FloatInputComponent } from '../components/float-input/float-input.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';



@NgModule({
  declarations: [MenuComponent, CustomersComponent, ButtonComponent, ItemComponent, FloatInputComponent, CheckboxComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuComponent, CustomersComponent, ButtonComponent, ItemComponent, FloatInputComponent, CheckboxComponent]
})
export class SharedModule { }
