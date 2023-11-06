import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputadoraPage } from './computadora.page';

const routes: Routes = [
  {
    path: '',
    component: ComputadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputadoraPageRoutingModule {}
