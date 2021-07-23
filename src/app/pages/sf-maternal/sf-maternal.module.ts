import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SfMaternalPageRoutingModule } from './sf-maternal-routing.module';

import { SfMaternalPage } from './sf-maternal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SfMaternalPageRoutingModule
  ],
  declarations: [SfMaternalPage]
})
export class SfMaternalPageModule {}
