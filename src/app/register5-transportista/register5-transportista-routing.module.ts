import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register5TransportistaPage } from './register5-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register5TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register5TransportistaPageRoutingModule {}
