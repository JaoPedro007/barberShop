import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortesPage } from './cortes.page';

const routes: Routes = [
  {
    path: '',
    component: CortesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortesPageRoutingModule {}
