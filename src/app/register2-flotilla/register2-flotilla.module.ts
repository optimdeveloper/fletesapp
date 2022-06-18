import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register2FlotillaPageRoutingModule } from './register2-flotilla-routing.module';

import { Register2FlotillaPage } from './register2-flotilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register2FlotillaPageRoutingModule
  ],
  declarations: [Register2FlotillaPage]
})
export class Register2FlotillaPageModule {}
