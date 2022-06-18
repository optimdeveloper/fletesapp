import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register7TransportistaPageRoutingModule } from './register7-transportista-routing.module';

import { Register7TransportistaPage } from './register7-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register7TransportistaPageRoutingModule
  ],
  declarations: [Register7TransportistaPage]
})
export class Register7TransportistaPageModule {}
