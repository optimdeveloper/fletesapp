import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeLocalPageRoutingModule } from './viaje-local-routing.module';

import { ViajeLocalPage } from './viaje-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeLocalPageRoutingModule
  ],
  declarations: [ViajeLocalPage]
})
export class ViajeLocalPageModule {}
