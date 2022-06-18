import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pre-login/pre-login.module').then(m => m.PreLoginPageModule),

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home-user',
    loadChildren: () => import('./home-user/home-user.module').then( m => m.HomeUserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
   
  },
  {
    path: 'new-user',
    loadChildren: () => import('./new-user/new-user.module').then( m => m.NewUserPageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pre-login',
    loadChildren: () => import('./pre-login/pre-login.module').then( m => m.PreLoginPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'start-transportista',
    loadChildren: () => import('./start-transportista/start-transportista.module').then( m => m.StartTransportistaPageModule)
  },
  {
    path: 'register1-transportista',
    loadChildren: () => import('./register1-transportista/register1-transportista.module').then( m => m.Register1TransportistaPageModule)
  },
  {
    path: 'register2-transportista',
    loadChildren: () => import('./register2-transportista/register2-transportista.module').then( m => m.Register2TransportistaPageModule)
  },
  {
    path: 'register3-transportista',
    loadChildren: () => import('./register3-transportista/register3-transportista.module').then( m => m.Register3TransportistaPageModule)
  },
  {
    path: 'register4-transportista',
    loadChildren: () => import('./register4-transportista/register4-transportista.module').then( m => m.Register4TransportistaPageModule)
  },
  {
    path: 'register5-transportista',
    loadChildren: () => import('./register5-transportista/register5-transportista.module').then( m => m.Register5TransportistaPageModule)
  },
  {
    path: 'register6-transportista',
    loadChildren: () => import('./register6-transportista/register6-transportista.module').then( m => m.Register6TransportistaPageModule)
  },
  {
    path: 'register7-transportista',
    loadChildren: () => import('./register7-transportista/register7-transportista.module').then( m => m.Register7TransportistaPageModule)
  },
  {
    path: 'register8-transportista',
    loadChildren: () => import('./register8-transportista/register8-transportista.module').then( m => m.Register8TransportistaPageModule)
  },
  {
    path: 'register9-transportista',
    loadChildren: () => import('./register9-transportista/register9-transportista.module').then( m => m.Register9TransportistaPageModule)
  },
  {
    path: 'register-final-transportista',
    loadChildren: () => import('./register-final-transportista/register-final-transportista.module').then( m => m.RegisterFinalTransportistaPageModule)
  },
  {
    path: 'start-flotilla',
    loadChildren: () => import('./start-flotilla/start-flotilla.module').then( m => m.StartFlotillaPageModule)
  },
  {
    path: 'register1-flotilla',
    loadChildren: () => import('./register1-flotilla/register1-flotilla.module').then( m => m.Register1FlotillaPageModule)
  },
  {
    path: 'register2-flotilla',
    loadChildren: () => import('./register2-flotilla/register2-flotilla.module').then( m => m.Register2FlotillaPageModule)
  },
  {
    path: 'home-flotilla',
    loadChildren: () => import('./home-flotilla/home-flotilla.module').then( m => m.HomeFlotillaPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'start-camioneta',
    loadChildren: () => import('./start-camioneta/start-camioneta.module').then( m => m.StartCamionetaPageModule)
  },
  {
    path: 'register1-camioneta',
    loadChildren: () => import('./register1-camioneta/register1-camioneta.module').then( m => m.Register1CamionetaPageModule)
  },
  {
    path: 'register2-camioneta',
    loadChildren: () => import('./register2-camioneta/register2-camioneta.module').then( m => m.Register2CamionetaPageModule)
  },
  {
    path: 'register3-camioneta',
    loadChildren: () => import('./register3-camioneta/register3-camioneta.module').then( m => m.Register3CamionetaPageModule)
  },
  {
    path: 'register4-camioneta',
    loadChildren: () => import('./register4-camioneta/register4-camioneta.module').then( m => m.Register4CamionetaPageModule)
  },
  {
    path: 'register5-camioneta',
    loadChildren: () => import('./register5-camioneta/register5-camioneta.module').then( m => m.Register5CamionetaPageModule)
  },
  {
    path: 'register6-camioneta',
    loadChildren: () => import('./register6-camioneta/register6-camioneta.module').then( m => m.Register6CamionetaPageModule)
  },
  {
    path: 'register7-camioneta',
    loadChildren: () => import('./register7-camioneta/register7-camioneta.module').then( m => m.Register7CamionetaPageModule)
  },

  {
    path: 'start-user',
    loadChildren: () => import('./start-user/start-user.module').then( m => m.StartUserPageModule)
  },
  {
    path: 'viaje-local',
    loadChildren: () => import('./viaje-local/viaje-local.module').then( m => m.ViajeLocalPageModule)
  },
  {
    path: 'register1-user',
    loadChildren: () => import('./register1-user/register1-user.module').then( m => m.Register1UserPageModule)
  },  {
    path: 'carga-one',
    loadChildren: () => import('./carga-one/carga-one.module').then( m => m.CargaOnePageModule)
  },
  {
    path: 'carga-two',
    loadChildren: () => import('./carga-two/carga-two.module').then( m => m.CargaTwoPageModule)
  },
  {
    path: 'carga-three',
    loadChildren: () => import('./carga-three/carga-three.module').then( m => m.CargaThreePageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
