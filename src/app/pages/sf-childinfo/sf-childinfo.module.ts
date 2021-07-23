import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfChildinfoPageRoutingModule } from './sf-childinfo-routing.module';

import { SfChildinfoPage } from './sf-childinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfChildinfoPageRoutingModule
  ],
  declarations: [SfChildinfoPage]
})
export class SfChildinfoPageModule {}
