import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartFlotillaPageRoutingModule } from './start-flotilla-routing.module';

import { StartFlotillaPage } from './start-flotilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartFlotillaPageRoutingModule
  ],
  declarations: [StartFlotillaPage]
})
export class StartFlotillaPageModule {}
