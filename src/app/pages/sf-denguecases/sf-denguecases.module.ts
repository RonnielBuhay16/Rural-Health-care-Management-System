import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfDenguecasesPageRoutingModule } from './sf-denguecases-routing.module';

import { SfDenguecasesPage } from './sf-denguecases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfDenguecasesPageRoutingModule
  ],
  declarations: [SfDenguecasesPage]
})
export class SfDenguecasesPageModule {}
