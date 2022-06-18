import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaTwoPage } from './carga-two.page';

const routes: Routes = [
  {
    path: '',
    component: CargaTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaTwoPageRoutingModule {}
