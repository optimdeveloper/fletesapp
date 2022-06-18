import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2TransportistaPage } from './register2-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register2TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register2TransportistaPageRoutingModule {}
