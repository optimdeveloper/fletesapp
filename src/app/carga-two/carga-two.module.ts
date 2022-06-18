import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaTwoPageRoutingModule } from './carga-two-routing.module';

import { CargaTwoPage } from './carga-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaTwoPageRoutingModule
  ],
  declarations: [CargaTwoPage]
})
export class CargaTwoPageModule {}
