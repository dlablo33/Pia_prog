import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ArmaduraPageRoutingModule } from './armadura-routing.module';

import { ArmaduraPage } from './armadura.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmaduraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArmaduraPage]
})
export class ArmaduraPageModule {}
