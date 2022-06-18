import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register6TransportistaPageRoutingModule } from './register6-transportista-routing.module';

import { Register6TransportistaPage } from './register6-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register6TransportistaPageRoutingModule
  ],
  declarations: [Register6TransportistaPage]
})
export class Register6TransportistaPageModule {}
