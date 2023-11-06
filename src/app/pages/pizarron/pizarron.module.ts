import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizarronPageRoutingModule } from './pizarron-routing.module';

import { PizarronPage } from './pizarron.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizarronPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PizarronPage]
})
export class PizarronPageModule {}
