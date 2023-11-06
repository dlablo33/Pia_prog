import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmaduraPage } from './armadura.page';

const routes: Routes = [
  {
    path: '',
    component: ArmaduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmaduraPageRoutingModule {}
