import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';

import { PerroPageRoutingModule } from './perro-routing.module';

import { PerroPage } from './perro.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerroPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PerroPage]
})
export class PerroPageModule {}
