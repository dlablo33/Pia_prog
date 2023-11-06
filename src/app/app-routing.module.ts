import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path:'new-comp',
    component: NewCompComponent,
  },
  {
    path:'welcome',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'salir',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path:'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'perro',
    loadChildren: () => import('./pages/perro/perro.module').then( m => m.PerroPageModule)
  },
  {
    path: 'armadura',
    loadChildren: () => import('./pages/armadura/armadura.module').then( m => m.ArmaduraPageModule)
  },
  {
    path: 'pizarron',
    loadChildren: () => import('./pages/pizarron/pizarron.module').then( m => m.PizarronPageModule)
  },
  {
    path: 'piedra',
    loadChildren: () => import('./pages/piedra/piedra.module').then( m => m.PiedraPageModule)
  },
  {
    path: 'computadora',
    loadChildren: () => import('./pages/computadora/computadora.module').then( m => m.ComputadoraPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
