import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register9TransportistaPage } from './register9-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: Register9TransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register9TransportistaPageRoutingModule {}
