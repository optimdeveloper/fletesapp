import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register5TransportistaPageRoutingModule } from './register5-transportista-routing.module';

import { Register5TransportistaPage } from './register5-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register5TransportistaPageRoutingModule
  ],
  declarations: [Register5TransportistaPage]
})
export class Register5TransportistaPageModule {}
