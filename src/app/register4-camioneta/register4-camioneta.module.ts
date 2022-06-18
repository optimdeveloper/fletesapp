import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register4CamionetaPageRoutingModule } from './register4-camioneta-routing.module';

import { Register4CamionetaPage } from './register4-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register4CamionetaPageRoutingModule
  ],
  declarations: [Register4CamionetaPage]
})
export class Register4CamionetaPageModule {}
