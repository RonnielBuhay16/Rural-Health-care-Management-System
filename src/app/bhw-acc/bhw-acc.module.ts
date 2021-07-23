import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhwAccPageRoutingModule } from './bhw-acc-routing.module';

import { BhwAccPage } from './bhw-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhwAccPageRoutingModule
  ],
  declarations: [BhwAccPage]
})
export class BhwAccPageModule {}
