import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register1CamionetaPageRoutingModule } from './register1-camioneta-routing.module';

import { Register1CamionetaPage } from './register1-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register1CamionetaPageRoutingModule
  ],
  declarations: [Register1CamionetaPage]
})
export class Register1CamionetaPageModule {}
