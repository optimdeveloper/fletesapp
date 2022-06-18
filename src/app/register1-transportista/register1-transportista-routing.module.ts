import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register1TransportistaPage } from './register1-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register1TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register1TransportistaPageRoutingModule {}
