import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HaircutPageRoutingModule } from './haircut-routing.module';

import { HaircutPage } from './haircut.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaircutPageRoutingModule,
    SharedModule
  ],
  declarations: [HaircutPage]
})
export class HaircutPageModule {}
