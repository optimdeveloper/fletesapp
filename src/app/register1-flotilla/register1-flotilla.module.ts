import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register1FlotillaPageRoutingModule } from './register1-flotilla-routing.module';

import { Register1FlotillaPage } from './register1-flotilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register1FlotillaPageRoutingModule
  ],
  declarations: [Register1FlotillaPage]
})
export class Register1FlotillaPageModule {}
