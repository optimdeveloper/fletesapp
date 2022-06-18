import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2FlotillaPage } from './register2-flotilla.page';

const routes: Routes = [
  {
    path: '',
    component: Register2FlotillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register2FlotillaPageRoutingModule {}
