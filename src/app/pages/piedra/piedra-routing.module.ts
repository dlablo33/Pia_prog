import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiedraPage } from './piedra.page';

const routes: Routes = [
  {
    path: '',
    component: PiedraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiedraPageRoutingModule {}
