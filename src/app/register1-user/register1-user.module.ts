import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register1UserPageRoutingModule } from './register1-user-routing.module';

import { Register1UserPage } from './register1-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register1UserPageRoutingModule
  ],
  declarations: [Register1UserPage]
})
export class Register1UserPageModule {}
