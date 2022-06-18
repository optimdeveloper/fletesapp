import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register1UserPage } from './register1-user.page';

const routes: Routes = [
  {
    path: '',
    component: Register1UserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register1UserPageRoutingModule {}
