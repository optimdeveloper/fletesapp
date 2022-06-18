import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2CamionetaPage } from './register2-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register2CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register2CamionetaPageRoutingModule {}
