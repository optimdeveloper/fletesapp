import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartUserPageRoutingModule } from './start-user-routing.module';

import { StartUserPage } from './start-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartUserPageRoutingModule
  ],
  declarations: [StartUserPage]
})
export class StartUserPageModule {}
