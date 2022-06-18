import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartCamionetaPageRoutingModule } from './start-camioneta-routing.module';

import { StartCamionetaPage } from './start-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartCamionetaPageRoutingModule
  ],
  declarations: [StartCamionetaPage]
})
export class StartCamionetaPageModule {}
