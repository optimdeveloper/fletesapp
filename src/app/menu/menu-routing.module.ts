import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home-flotilla',
        loadChildren: () => import('../home-flotilla/home-flotilla.module').then(m => m.HomeFlotillaPageModule)
      },
      {
        path: 'new-user',
        loadChildren: () => import('../new-user/new-user.module').then(m => m.NewUserPageModule)
      },
      {
        path: 'home-user',
        loadChildren: () => import('../home-user/home-user.module').then(m => m.HomeUserPageModule)
      },
      {
        path: 'edit-user',
        loadChildren: () => import('../edit-user/edit-user.module').then(m => m.EditUserPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'viaje-local',
        loadChildren: () => import('../viaje-local/viaje-local.module').then(m => m.ViajeLocalPageModule)
      },
      {
        path: 'carga-three',
        loadChildren: () => import('../carga-three/carga-three.module').then(m => m.CargaThreePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
