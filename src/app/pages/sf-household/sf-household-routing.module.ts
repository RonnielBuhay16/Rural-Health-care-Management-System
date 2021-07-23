import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfHouseholdPage } from './sf-household.page';

const routes: Routes = [
  {
    path: '',
    component: SfHouseholdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfHouseholdPageRoutingModule {}
