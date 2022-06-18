import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register6CamionetaPage } from './register6-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: Register6CamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register6CamionetaPageRoutingModule {}
