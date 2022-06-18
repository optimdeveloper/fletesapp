import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register8TransportistaPageRoutingModule } from './register8-transportista-routing.module';

import { Register8TransportistaPage } from './register8-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register8TransportistaPageRoutingModule
  ],
  declarations: [Register8TransportistaPage]
})
export class Register8TransportistaPageModule {}
