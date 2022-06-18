import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register3CamionetaPage } from './register3-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register3CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register3CamionetaPageRoutingModule {}
