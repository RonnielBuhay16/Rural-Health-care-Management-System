import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfAdultinformationPageRoutingModule } from './sf-adultinformation-routing.module';

import { SfAdultinformationPage } from './sf-adultinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfAdultinformationPageRoutingModule
  ],
  declarations: [SfAdultinformationPage]
})
export class SfAdultinformationPageModule {}
