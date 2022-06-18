import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartUserPage } from './start-user.page';

const routes: Routes = [
  {
    path: '',
    component: StartUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartUserPageRoutingModule {}
