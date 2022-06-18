import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register4TransportistaPage } from './register4-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register4TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register4TransportistaPageRoutingModule {}
