import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register4TransportistaPageRoutingModule } from './register4-transportista-routing.module';

import { Register4TransportistaPage } from './register4-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register4TransportistaPageRoutingModule
  ],
  declarations: [Register4TransportistaPage]
})
export class Register4TransportistaPageModule {}
