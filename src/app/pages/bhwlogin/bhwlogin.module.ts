import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhwloginPageRoutingModule } from './bhwlogin-routing.module';

import { BhwloginPage } from './bhwlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhwloginPageRoutingModule
  ],
  declarations: [BhwloginPage]
})
export class BhwloginPageModule {}
