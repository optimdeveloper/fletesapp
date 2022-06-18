import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register7TransportistaPage } from './register7-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register7TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register7TransportistaPageRoutingModule {}
