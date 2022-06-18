import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register7CamionetaPage } from './register7-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register7CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register7CamionetaPageRoutingModule {}
