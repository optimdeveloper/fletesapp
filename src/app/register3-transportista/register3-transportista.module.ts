import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register3TransportistaPageRoutingModule } from './register3-transportista-routing.module';

import { Register3TransportistaPage } from './register3-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register3TransportistaPageRoutingModule
  ],
  declarations: [Register3TransportistaPage]
})
export class Register3TransportistaPageModule {}
