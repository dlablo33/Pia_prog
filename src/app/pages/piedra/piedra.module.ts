import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiedraPageRoutingModule } from './piedra-routing.module';

import { PiedraPage } from './piedra.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiedraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PiedraPage]
})
export class PiedraPageModule {}
