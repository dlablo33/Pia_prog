import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [HeaderComponent,FooterComponent,MenuComponent]
})
export class ComponentsModule { }
