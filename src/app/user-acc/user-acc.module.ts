import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAccPageRoutingModule } from './user-acc-routing.module';

import { UserAccPage } from './user-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccPageRoutingModule
  ],
  declarations: [UserAccPage]
})
export class UserAccPageModule {}
