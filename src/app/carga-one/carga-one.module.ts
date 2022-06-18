import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaOnePageRoutingModule } from './carga-one-routing.module';

import { CargaOnePage } from './carga-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaOnePageRoutingModule
  ],
  declarations: [CargaOnePage]
})
export class CargaOnePageModule {}
