import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaircutPage } from './haircut.page';

const routes: Routes = [
  {
    path: '',
    component: HaircutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaircutPageRoutingModule {}
