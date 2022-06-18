import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartCamionetaPage } from './start-camioneta.page';

const routes: Routes = [
  {
    path: '',
    component: StartCamionetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartCamionetaPageRoutingModule {}
