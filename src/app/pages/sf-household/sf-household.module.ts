import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfHouseholdPageRoutingModule } from './sf-household-routing.module';

import { SfHouseholdPage } from './sf-household.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfHouseholdPageRoutingModule
  ],
  declarations: [SfHouseholdPage]
})
export class SfHouseholdPageModule {}
