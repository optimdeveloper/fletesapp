import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFlotillaPage } from './home-flotilla.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFlotillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFlotillaPageRoutingModule {}
