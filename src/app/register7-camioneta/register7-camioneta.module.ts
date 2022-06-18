import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register7CamionetaPageRoutingModule } from './register7-camioneta-routing.module';

import { Register7CamionetaPage } from './register7-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register7CamionetaPageRoutingModule
  ],
  declarations: [Register7CamionetaPage]
})
export class Register7CamionetaPageModule {}
