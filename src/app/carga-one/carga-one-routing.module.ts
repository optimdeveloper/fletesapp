import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaOnePage } from './carga-one.page';

const routes: Routes = [
  {
    path: '',
    component: CargaOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaOnePageRoutingModule {}
