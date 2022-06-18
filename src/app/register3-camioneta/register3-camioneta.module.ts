import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register3CamionetaPageRoutingModule } from './register3-camioneta-routing.module';

import { Register3CamionetaPage } from './register3-camioneta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register3CamionetaPageRoutingModule
  ],
  declarations: [Register3CamionetaPage]
})
export class Register3CamionetaPageModule {}
