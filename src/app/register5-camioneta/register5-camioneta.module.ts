import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register5CamionetaPageRoutingModule } from './register5-camioneta-routing.module';

import { Register5CamionetaPage } from './register5-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register5CamionetaPageRoutingModule
  ],
  declarations: [Register5CamionetaPage]
})
export class Register5CamionetaPageModule {}
