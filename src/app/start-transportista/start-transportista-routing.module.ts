import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartTransportistaPage } from './start-transportista.page';

const routes: Routes = [
  {
    path: '',
    component: StartTransportistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartTransportistaPageRoutingModule {}
