import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register3TransportistaPage } from './register3-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register3TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register3TransportistaPageRoutingModule {}
