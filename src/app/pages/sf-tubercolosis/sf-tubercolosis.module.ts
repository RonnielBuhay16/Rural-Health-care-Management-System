import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfTubercolosisPageRoutingModule } from './sf-tubercolosis-routing.module';

import { SfTubercolosisPage } from './sf-tubercolosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfTubercolosisPageRoutingModule
  ],
  declarations: [SfTubercolosisPage]
})
export class SfTubercolosisPageModule {}
