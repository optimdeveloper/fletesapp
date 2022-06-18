import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register6TransportistaPage } from './register6-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register6TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register6TransportistaPageRoutingModule {}
