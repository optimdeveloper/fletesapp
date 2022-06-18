import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register1TransportistaPageRoutingModule } from './register1-transportista-routing.module';

import { Register1TransportistaPage } from './register1-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register1TransportistaPageRoutingModule
  ],
  declarations: [Register1TransportistaPage]
})
export class Register1TransportistaPageModule {}
