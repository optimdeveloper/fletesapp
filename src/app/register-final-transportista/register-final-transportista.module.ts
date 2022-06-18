import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFinalTransportistaPageRoutingModule } from './register-final-transportista-routing.module';

import { RegisterFinalTransportistaPage } from './register-final-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFinalTransportistaPageRoutingModule
  ],
  declarations: [RegisterFinalTransportistaPage]
})
export class RegisterFinalTransportistaPageModule {}
