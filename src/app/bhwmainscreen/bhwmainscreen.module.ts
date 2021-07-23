import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhwmainscreenPageRoutingModule } from './bhwmainscreen-routing.module';

import { BhwmainscreenPage } from './bhwmainscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhwmainscreenPageRoutingModule
  ],
  declarations: [BhwmainscreenPage]
})
export class BhwmainscreenPageModule {}
