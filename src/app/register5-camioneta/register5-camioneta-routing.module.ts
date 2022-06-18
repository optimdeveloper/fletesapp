import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register5CamionetaPage } from './register5-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register5CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register5CamionetaPageRoutingModule {}
