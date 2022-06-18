import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register6CamionetaPageRoutingModule } from './register6-camioneta-routing.module';

import { Register6CamionetaPage } from './register6-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register6CamionetaPageRoutingModule
  ],
  declarations: [Register6CamionetaPage]
})
export class Register6CamionetaPageModule {}
