import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register2CamionetaPageRoutingModule } from './register2-camioneta-routing.module';

import { Register2CamionetaPage } from './register2-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register2CamionetaPageRoutingModule
  ],
  declarations: [Register2CamionetaPage]
})
export class Register2CamionetaPageModule {}
