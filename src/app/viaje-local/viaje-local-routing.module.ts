import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeLocalPage } from './viaje-local.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeLocalPageRoutingModule {}
