import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfCovidcasesPageRoutingModule } from './sf-covidcases-routing.module';

import { SfCovidcasesPage } from './sf-covidcases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfCovidcasesPageRoutingModule
  ],
  declarations: [SfCovidcasesPage]
})
export class SfCovidcasesPageModule {}
