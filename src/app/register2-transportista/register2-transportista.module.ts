import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register2TransportistaPageRoutingModule } from './register2-transportista-routing.module';

import { Register2TransportistaPage } from './register2-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register2TransportistaPageRoutingModule
  ],
  declarations: [Register2TransportistaPage]
})
export class Register2TransportistaPageModule {}
