import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartFlotillaPage } from './start-flotilla.page';

const routes: Routes = [
  {
    path: '',
    component: StartFlotillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartFlotillaPageRoutingModule {}
