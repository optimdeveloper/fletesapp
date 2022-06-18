import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaThreePageRoutingModule } from './carga-three-routing.module';

import { CargaThreePage } from './carga-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaThreePageRoutingModule
  ],
  declarations: [CargaThreePage]
})
export class CargaThreePageModule {}
