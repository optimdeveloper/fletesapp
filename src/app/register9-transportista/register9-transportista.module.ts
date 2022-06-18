import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register9TransportistaPageRoutingModule } from './register9-transportista-routing.module';

import { Register9TransportistaPage } from './register9-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register9TransportistaPageRoutingModule
  ],
  declarations: [Register9TransportistaPage]
})
export class Register9TransportistaPageModule {}
