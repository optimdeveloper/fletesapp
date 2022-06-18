import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartTransportistaPageRoutingModule } from './start-transportista-routing.module';

import { StartTransportistaPage } from './start-transportista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartTransportistaPageRoutingModule
  ],
  declarations: [StartTransportistaPage]
})
export class StartTransportistaPageModule {}
