import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register4CamionetaPage } from './register4-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register4CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register4CamionetaPageRoutingModule {}
