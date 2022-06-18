import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFinalTransportistaPage } from './register-final-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFinalTransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFinalTransportistaPageRoutingModule {}
