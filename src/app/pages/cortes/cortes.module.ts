import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortesPageRoutingModule } from './cortes-routing.module';

import { CortesPage } from './cortes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CortesPageRoutingModule
  ],
  declarations: [CortesPage]
})
export class CortesPageModule {}
