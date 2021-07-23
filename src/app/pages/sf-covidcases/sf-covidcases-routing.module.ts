import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SfCovidcasesPage } from './sf-covidcases.page';

const routes: Routes = [
  {
    path: '',
    component: SfCovidcasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SfCovidcasesPageRoutingModule {}
