import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register8TransportistaPage } from './register8-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register8TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register8TransportistaPageRoutingModule {}
