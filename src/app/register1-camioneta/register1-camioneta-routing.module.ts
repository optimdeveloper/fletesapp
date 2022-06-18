import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register1CamionetaPage } from './register1-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register1CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register1CamionetaPageRoutingModule {}
