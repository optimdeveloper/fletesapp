import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaThreePage } from './carga-three.page';

const routes: Routes = [
  {
    path: '',
    component: CargaThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaThreePageRoutingModule {}
